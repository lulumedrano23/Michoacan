import * as THREE from 'three';

export function crearCalavera() {

    const calaveraGrupo = new THREE.Group();

    // MATERIALES
    const materialHueso = new THREE.MeshStandardMaterial({
        color: 0xfff1dc,
        roughness: 0.65
    });

    const materialDientes = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.45
    });

    const materialOscuro = new THREE.MeshStandardMaterial({
        color: 0x160f19,
        roughness: 1
    });

    const colores = [
        0xff4081,
        0xffa000,
        0x8e44ad,
        0x00b8c4,
        0x76bd43
    ];

    const materialesColores = colores.map(
        color => new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.55
        })
    );

    // AYUDA PARA AGREGAR PIEZAS
    function agregar(geometria, material, posicion, escala) {

        const pieza = new THREE.Mesh(geometria, material);

        pieza.position.set(...posicion);

        if (escala) {
            pieza.scale.set(...escala);
        }

        pieza.castShadow = true;
        pieza.receiveShadow = true;

        calaveraGrupo.add(pieza);

        return pieza;

    }

    const esfera = new THREE.SphereGeometry(1, 40, 32);

    // CRÁNEO: MÁS ANCHO ARRIBA Y ESTRECHO ABAJO
    const craneoGeometria = new THREE.SphereGeometry(
        1,
        48,
        40
    );

    const posiciones = craneoGeometria.attributes.position;

    for (let i = 0; i < posiciones.count; i++) {

        const x = posiciones.getX(i);
        const y = posiciones.getY(i);
        const z = posiciones.getZ(i);

        // Afinar la parte inferior del rostro
        const ancho = y < 0
            ? 0.88 * (1 + y * 0.22)
            : 0.88;

        posiciones.setXYZ(
            i,
            x * ancho,
            y * 0.95,
            z * 0.65
        );

    }

    posiciones.needsUpdate = true;
    craneoGeometria.computeVertexNormals();

    agregar(
        craneoGeometria,
        materialHueso,
        [0, 0.25, 0]
    );

    // PÓMULOS
    agregar(
        esfera,
        materialHueso,
        [-0.57, -0.18, 0.38],
        [0.25, 0.23, 0.23]
    );

    agregar(
        esfera,
        materialHueso,
        [0.57, -0.18, 0.38],
        [0.25, 0.23, 0.23]
    );

    // MANDÍBULA REDONDEADA
    agregar(
        esfera,
        materialHueso,
        [0, -0.57, 0.22],
        [0.65, 0.34, 0.48]
    );

    // FONDO OSCURO DE LA BOCA
    agregar(
        new THREE.BoxGeometry(0.94, 0.31, 0.06),
        materialOscuro,
        [0, -0.56, 0.72]
    );

    // DIENTES BLANCOS, DOS FILAS
    const dienteGeometria = new THREE.BoxGeometry(
        0.115,
        0.12,
        0.09
    );

    for (let i = 0; i < 7; i++) {

        const x = (i - 3) * 0.13;

        agregar(
            dienteGeometria,
            materialDientes,
            [x, -0.48, 0.77]
        );

        agregar(
            dienteGeometria,
            materialDientes,
            [x, -0.64, 0.77]
        );

    }

    // OJOS Y PÉTALOS DECORATIVOS
    const centrosOjos = [-0.35, 0.35];

    const petaloGeometria = new THREE.SphereGeometry(
        1,
        20,
        16
    );

    for (let lado = 0; lado < centrosOjos.length; lado++) {

        const centroX = centrosOjos[lado];

        // CUENCA OSCURA
        agregar(
            esfera,
            materialOscuro,
            [centroX, 0.32, 0.65],
            [0.235, 0.275, 0.07]
        );

        // PÉTALOS ALREDEDOR DE LA CUENCA
        for (let i = 0; i < 12; i++) {

            const angulo = (i / 12) * Math.PI * 2;

            const petalo = agregar(
                petaloGeometria,
                materialesColores[lado === 0 ? 0 : 3],
                [
                    centroX + Math.cos(angulo) * 0.285,
                    0.32 + Math.sin(angulo) * 0.32,
                    0.66
                ],
                [0.065, 0.095, 0.035]
            );

            petalo.rotation.z = angulo - Math.PI / 2;

        }

        // PEQUEÑOS PUNTOS DE COLOR DENTRO DE LOS OJOS
        for (let i = 0; i < 8; i++) {

            const angulo = (i / 8) * Math.PI * 2;

            agregar(
                petaloGeometria,
                materialesColores[1],
                [
                    centroX + Math.cos(angulo) * 0.15,
                    0.32 + Math.sin(angulo) * 0.18,
                    0.72
                ],
                [0.024, 0.024, 0.018]
            );

        }

    }

    // NARIZ TRIANGULAR CON PUNTA HACIA ARRIBA
    const formaNariz = new THREE.Shape();

    formaNariz.moveTo(0, 0.12);
    formaNariz.lineTo(-0.12, -0.12);
    formaNariz.quadraticCurveTo(0, -0.17, 0.12, -0.12);
    formaNariz.closePath();

    agregar(
        new THREE.ExtrudeGeometry(formaNariz, {
            depth: 0.025,
            bevelEnabled: false
        }),
        materialOscuro,
        [0, -0.14, 0.67]
    );

    // FLOR CENTRAL EN LA FRENTE
    for (let i = 0; i < 8; i++) {

        const angulo = (i / 8) * Math.PI * 2;

        const petalo = agregar(
            petaloGeometria,
            materialesColores[2],
            [
                Math.cos(angulo) * 0.12,
                0.87 + Math.sin(angulo) * 0.12,
                0.52
            ],
            [0.06, 0.09, 0.035]
        );

        petalo.rotation.z = angulo - Math.PI / 2;

    }

    agregar(
        esfera,
        materialesColores[1],
        [0, 0.87, 0.56],
        [0.07, 0.07, 0.035]
    );

    // PUNTOS DE COLORES SOBRE LOS PÓMULOS
    for (const lado of [-1, 1]) {

        for (let i = 0; i < 3; i++) {

            agregar(
                petaloGeometria,
                materialesColores[i],
                [
                    lado * (0.45 + i * 0.075),
                    -0.18 - i * 0.025,
                    0.64 - i * 0.025
                ],
                [0.028, 0.028, 0.02]
            );

        }

    }

    // APOYAR LA CALAVERA SOBRE Y = 0
    // Las piezas se construyeron alrededor del centro.
    const modelo = new THREE.Group();

    while (calaveraGrupo.children.length > 0) {
        modelo.add(calaveraGrupo.children[0]);
    }

    modelo.position.y = 0.91;

    calaveraGrupo.add(modelo);

    return calaveraGrupo;

}