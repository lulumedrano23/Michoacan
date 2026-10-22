import * as THREE from 'three';

export class anima {

    constructor() {

        // GRUPO PRINCIPAL
        this.anima = new THREE.Group();

        // MATERIALES
        const materialPan = new THREE.MeshStandardMaterial({
            color: 0xbd7838,
            roughness: 0.85
        });

        const materialMasa = new THREE.MeshStandardMaterial({
            color: 0xe2b174,
            roughness: 0.9
        });

        const esfera = new THREE.SphereGeometry(1, 40, 32);

        // PIEZAS REDONDEADAS
        const agregar = (posicion, escala, material) => {

            const pieza = new THREE.Mesh(esfera, material);

            pieza.position.set(...posicion);
            pieza.scale.set(...escala);

            pieza.castShadow = true;
            pieza.receiveShadow = true;

            this.anima.add(pieza);

            return pieza;

        };

        // PAN ACOSTADO:
        // cabeza hacia -Z y rostro hacia arriba (+Y)

        // CUERPO OVALADO
        agregar(
            [0, 0.22, 0.18],
            [0.48, 0.22, 0.85],
            materialPan
        );

        // CUELLO, UNIDO AL CUERPO Y A LA CABEZA
        agregar(
            [0, 0.18, -0.63],
            [0.18, 0.16, 0.24],
            materialPan
        );

        // CABEZA PEQUEÑA
        agregar(
            [0, 0.20, -0.91],
            [0.29, 0.20, 0.33],
            materialPan
        );

        // SUPERFICIE SUPERIOR DEL CUERPO
        const superficie = (x, z) => {

            const valor =
                1 -
                Math.pow(x / 0.48, 2) -
                Math.pow((z - 0.18) / 0.85, 2);

            return 0.22 + 0.22 * Math.sqrt(
                Math.max(0, valor)
            );

        };

        // CREAR RELIEVES CURVOS DE MASA
        const crearTira = (coordenadas, radio, elevacion) => {

            const puntos = coordenadas.map(([x, z]) => {

                return new THREE.Vector3(
                    x,
                    superficie(x, z) + elevacion,
                    z
                );

            });

            const curva = new THREE.CatmullRomCurve3(puntos);

            const tira = new THREE.Mesh(
                new THREE.TubeGeometry(
                    curva,
                    40,
                    radio,
                    12,
                    false
                ),
                materialMasa
            );

            tira.castShadow = true;
            tira.receiveShadow = true;

            this.anima.add(tira);

        };

        // BRAZO IZQUIERDO CRUZADO
        crearTira(
            [
                [-0.27, -0.36],
                [-0.32, -0.17],
                [-0.13, -0.02],
                [0.17, 0.12]
            ],
            0.065,
            0.025
        );

        // BRAZO DERECHO CRUZADO
        // Ligeramente elevado para pasar sobre el otro
        crearTira(
            [
                [0.27, -0.36],
                [0.32, -0.17],
                [0.13, -0.02],
                [-0.17, 0.12]
            ],
            0.065,
            0.09
        );

        // MANOS UNIDAS A LOS EXTREMOS DE LOS BRAZOS
        agregar(
            [
                0.17,
                superficie(0.17, 0.12) + 0.025,
                0.12
            ],
            [0.09, 0.055, 0.10],
            materialMasa
        );

        agregar(
            [
                -0.17,
                superficie(-0.17, 0.12) + 0.09,
                0.12
            ],
            [0.09, 0.055, 0.10],
            materialMasa
        );

        // RELIEVES QUE REPRESENTAN LA ENVOLTURA
        for (const centroZ of [0.40, 0.64]) {

            crearTira(
                [
                    [-0.25, centroZ - 0.04],
                    [-0.13, centroZ],
                    [0, centroZ + 0.025],
                    [0.13, centroZ],
                    [0.25, centroZ - 0.04]
                ],
                0.027,
                0.012
            );

        }

        // ADORNO CENTRAL DE MASA
        agregar(
            [0, superficie(0, 0.26) + 0.02, 0.26],
            [0.065, 0.035, 0.065],
            materialMasa
        );

    }

    getObject() {
        return this.anima;
    }

}