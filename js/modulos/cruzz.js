import * as THREE from 'three';

export class cruzz {

    constructor() {

        this.cruzz = new THREE.Group();

        // MATERIALES
        const materialGris = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa
        });

        const materialDorado = new THREE.MeshBasicMaterial({
            color: 0xd4af37
        });

        // PARTE VERTICAL
        const vertical = new THREE.Mesh(
            new THREE.BoxGeometry(1, 5, 0.7),
            materialGris
        );

        vertical.position.set(0, 2.8, 0);
        vertical.castShadow = true;
        this.cruzz.add(vertical);

        // PARTE HORIZONTAL
        const horizontal = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 1, 0.7),
            materialGris
        );

        horizontal.position.set(0, 3.8, 0);
        horizontal.castShadow = true;
        this.cruzz.add(horizontal);

        // BASE INFERIOR
        const baseInferior = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 0.5, 1.5),
            materialGris
        );

        baseInferior.position.set(0, 0.25, 0);
        baseInferior.castShadow = true;
        this.cruzz.add(baseInferior);

        // SEGUNDA BASE
        const baseSuperior = new THREE.Mesh(
            new THREE.BoxGeometry(1.7, 0.4, 1.2),
            materialGris
        );

        baseSuperior.position.set(0, 0.7, 0);
        baseSuperior.castShadow = true;
        this.cruzz.add(baseSuperior);

        // LÍNEA DORADA VERTICAL
        const accesorioVertical = new THREE.Mesh(
            new THREE.BoxGeometry(0.12, 4, 0.1),
            materialDorado
        );

        accesorioVertical.position.set(0, 3, 0.4);
        this.cruzz.add(accesorioVertical);

        // LÍNEA DORADA HORIZONTAL
        const accesorioHorizontal = new THREE.Mesh(
            new THREE.BoxGeometry(2.8, 0.12, 0.1),
            materialDorado
        );

        accesorioHorizontal.position.set(0, 3.8, 0.4);
        this.cruzz.add(accesorioHorizontal);

        // ESFERA DORADA CENTRAL
        const accesorioCentro = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 20, 20),
            materialDorado
        );

        accesorioCentro.position.set(0, 3.8, 0.5);
        this.cruzz.add(accesorioCentro);

    }

    getObject() {
        return this.cruzz;
    }

}