import * as THREE from 'three';

export function crearPanAntropomorfo() {

    const panGrupo = new THREE.Group();

    // MATERIALES
    const materialPan = new THREE.MeshStandardMaterial({
        color: 0xc4823e,
        roughness: 0.85
    });

    const materialDecoracion = new THREE.MeshStandardMaterial({
        color: 0xe8b875,
        roughness: 0.9
    });

    const esfera = new THREE.SphereGeometry(1, 32, 24);

    // PIEZAS DE MASA REDONDEADAS
    function agregar(posicion, escala, material = materialPan) {

        const pieza = new THREE.Mesh(esfera, material);

        pieza.position.set(...posicion);
        pieza.scale.set(...escala);

        pieza.castShadow = true;
        pieza.receiveShadow = true;

        panGrupo.add(pieza);

        return pieza;

    }

    // CUERPO OVALADO
    agregar(
        [0, 1.02, 0],
        [0.43, 0.65, 0.27]
    );

    // CUELLO
    agregar(
        [0, 1.61, 0],
        [0.18, 0.22, 0.18]
    );

    // CABEZA
    agregar(
        [0, 1.98, 0],
        [0.33, 0.39, 0.24]
    );

    // BRAZO IZQUIERDO
    const brazoIzquierdo = agregar(
        [-0.59, 1.36, 0],
        [0.18, 0.48, 0.18]
    );

    brazoIzquierdo.rotation.z = Math.PI / 3;

    // BRAZO DERECHO
    const brazoDerecho = agregar(
        [0.59, 1.36, 0],
        [0.18, 0.48, 0.18]
    );

    brazoDerecho.rotation.z = -Math.PI / 3;

    // MANO IZQUIERDA
    agregar(
        [-0.98, 1.59, 0],
        [0.18, 0.19, 0.16]
    );

    // MANO DERECHA
    agregar(
        [0.98, 1.59, 0],
        [0.18, 0.19, 0.16]
    );

    // PIERNA IZQUIERDA
    const piernaIzquierda = agregar(
        [-0.23, 0.42, 0],
        [0.22, 0.43, 0.23]
    );

    piernaIzquierda.rotation.z = -0.16;

    // PIERNA DERECHA
    const piernaDerecha = agregar(
        [0.23, 0.42, 0],
        [0.22, 0.43, 0.23]
    );

    piernaDerecha.rotation.z = 0.16;

    // PIE IZQUIERDO
    agregar(
        [-0.29, 0.12, 0.04],
        [0.25, 0.12, 0.29]
    );

    // PIE DERECHO
    agregar(
        [0.29, 0.12, 0.04],
        [0.25, 0.12, 0.29]
    );

    // FLOR DE MASA SOBRE EL PECHO
    for (let i = 0; i < 6; i++) {

        const angulo = (i / 6) * Math.PI * 2;

        const petalo = agregar(
            [
                Math.cos(angulo) * 0.13,
                1.18 + Math.sin(angulo) * 0.13,
                0.27
            ],
            [0.065, 0.11, 0.035],
            materialDecoracion
        );

        petalo.rotation.z = angulo - Math.PI / 2;

    }

    // CENTRO DE LA FLOR
    agregar(
        [0, 1.18, 0.31],
        [0.07, 0.07, 0.04],
        materialDecoracion
    );

    // BOTONES DE MASA
    for (const altura of [0.87, 0.69]) {

        agregar(
            [0, altura, 0.265],
            [0.055, 0.055, 0.025],
            materialDecoracion
        );

    }

    return panGrupo;

}