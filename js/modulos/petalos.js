import * as THREE from 'three';

export class petalos {

    constructor() {

        // GRUPO PRINCIPAL
        this.petalos = new THREE.Group();

        // CONFIGURACIÓN
        const cantidad = 1800;

        // Área que cubrirán
        const ancho = 13;
        const largo = 25;

        // FORMA DEL PÉTALO
        const forma = new THREE.Shape();

        forma.moveTo(0, -0.045);

        forma.bezierCurveTo(
            -0.035, -0.015,
            -0.045, 0.035,
            -0.015, 0.055
        );

        forma.quadraticCurveTo(
            0, 0.04,
            0.015, 0.055
        );

        forma.bezierCurveTo(
            0.045, 0.035,
            0.035, -0.015,
            0, -0.045
        );

        const geometria = new THREE.ShapeGeometry(forma, 8);

        // Acostar la geometría sobre el piso
        geometria.rotateX(-Math.PI / 2);

        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 1,
            side: THREE.DoubleSide
        });

        // MUCHOS PÉTALOS EN UNA SOLA MALLA
        const malla = new THREE.InstancedMesh(
            geometria,
            material,
            cantidad
        );

        const auxiliar = new THREE.Object3D();

        const colores = [
            new THREE.Color(0xffa000),
            new THREE.Color(0xffb52e),
            new THREE.Color(0xf58216),
            new THREE.Color(0xe76b0a)
        ];

        // Distribución reproducible
        let semilla = 12345;

        function aleatorio() {

            semilla = (semilla * 16807) % 2147483647;

            return (semilla - 1) / 2147483646;

        }

        for (let i = 0; i < cantidad; i++) {

            // Distribución dentro del área
            const x = (aleatorio() - 0.5) * ancho;
            const z = (aleatorio() - 0.5) * largo;

            auxiliar.position.set(
                x,
                0.015 + aleatorio() * 0.008,
                z
            );

            // Girar cada pétalo sobre el piso
            auxiliar.rotation.set(
                0,
                aleatorio() * Math.PI * 2,
                0
            );

            const tamano = 0.6 + aleatorio() * 0.9;

            auxiliar.scale.set(
                tamano,
                1,
                tamano * (0.8 + aleatorio() * 0.4)
            );

            auxiliar.updateMatrix();

            malla.setMatrixAt(i, auxiliar.matrix);

            malla.setColorAt(
                i,
                colores[Math.floor(aleatorio() * colores.length)]
            );

        }

        malla.instanceMatrix.needsUpdate = true;

        if (malla.instanceColor) {
            malla.instanceColor.needsUpdate = true;
        }

        malla.receiveShadow = true;
        malla.frustumCulled = false;

        this.petalos.add(malla);

    }

    getObject() {
        return this.petalos;
    }

}