import * as THREE from 'three';

export class texto {

    constructor() {

        // GRUPO PRINCIPAL
        this.texto = new THREE.Group();

        // FRASE
        const mensaje = 'M I C H O A C A N';

        // LIENZO
        const canvas = document.createElement('canvas');

        canvas.width = 1600;
        canvas.height = 650;

        const contexto = canvas.getContext('2d', {
            willReadFrequently: true
        });

        contexto.font = 'bold 80px "Times New Roman", serif';
        contexto.fillStyle = '#ffffff';
        contexto.textAlign = 'center';
        contexto.textBaseline = 'alphabetic';

        // MEDIR LETRAS
        const letras = Array.from(mensaje);

        const anchos = letras.map(
            letra => contexto.measureText(letra).width
        );

        const separacion = 3;

        const anchoTotal =
            anchos.reduce(
                (total, ancho) => total + ancho,
                0
            ) +
            separacion * (letras.length - 1);

        // FORMA DEL ARCO
        const apertura = Math.PI * 0.6;
        const radio = anchoTotal / apertura;

        let recorrido = 0;

        // DIBUJAR LAS LETRAS EN ARCO
        for (let i = 0; i < letras.length; i++) {

            const centro = recorrido + anchos[i] / 2;

            const angulo =
                (centro - anchoTotal / 2) / radio;

            const x =
                canvas.width / 2 +
                radio * Math.sin(angulo);

            const y =
                140 +
                radio * (1 - Math.cos(angulo));

            contexto.save();

            contexto.translate(x, y);
            contexto.rotate(angulo);

            contexto.fillText(letras[i], 0, 0);

            contexto.restore();

            recorrido += anchos[i] + separacion;

        }

        // OBTENER LA FORMA DEL TEXTO
        const imagen = contexto.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );

        const puntos = [];

        const paso = 2;
        const escala = 0.008;
        const grosor = 0.16;

        let minimoX = Infinity;
        let maximoX = -Infinity;
        let minimoY = Infinity;
        let maximoY = -Infinity;

        // CONVERTIR LOS PÍXELES EN POSICIONES 3D
        for (let y = 0; y < canvas.height; y += paso) {

            for (let x = 0; x < canvas.width; x += paso) {

                const indice =
                    (y * canvas.width + x) * 4;

                if (imagen.data[indice + 3] > 128) {

                    const posicionX =
                        (x - canvas.width / 2) * escala;

                    const posicionY =
                        (canvas.height / 2 - y) * escala;

                    puntos.push({
                        x: posicionX,
                        y: posicionY
                    });

                    minimoX = Math.min(minimoX, posicionX);
                    maximoX = Math.max(maximoX, posicionX);

                    minimoY = Math.min(minimoY, posicionY);
                    maximoY = Math.max(maximoY, posicionY);

                }

            }

        }

        if (puntos.length === 0) {
            return;
        }

        // CENTRO DEL TEXTO
        const centroX = (minimoX + maximoX) / 2;
        const centroY = (minimoY + maximoY) / 2;

        // BLOQUES QUE FORMAN LAS LETRAS CON VOLUMEN
        const geometria = new THREE.BoxGeometry(
            paso * escala,
            paso * escala,
            grosor
        );

        // MATERIAL DORADO
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.35,
            roughness: 0.4
        });

        const letras3D = new THREE.InstancedMesh(
            geometria,
            material,
            puntos.length
        );

        const matriz = new THREE.Matrix4();

        // COLOCAR LOS BLOQUES CON EL TEXTO YA CENTRADO
        for (let i = 0; i < puntos.length; i++) {

            matriz.makeTranslation(
                puntos[i].x - centroX,
                puntos[i].y - centroY,
                0
            );

            letras3D.setMatrixAt(i, matriz);

        }

        letras3D.instanceMatrix.needsUpdate = true;

        // EVITAR PROBLEMAS DE VISIBILIDAD
        letras3D.frustumCulled = false;

        letras3D.castShadow = true;
        letras3D.receiveShadow = true;

        this.texto.add(letras3D);

    }

    getObject() {
        return this.texto;
    }

}