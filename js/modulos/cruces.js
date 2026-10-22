import * as THREE from 'three';

export class cruces {

    constructor() {

        // GRUPO PRINCIPAL
        this.cruces = new THREE.Group();


        // MATERIALES

        const materialGris = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa
        });

        const materialOscuro = new THREE.MeshLambertMaterial({
            color: 0x444444
        });

        const materialDorado = new THREE.MeshBasicMaterial({
            color: 0xd4af37
        });


        // =====================================
        // CRUZ IZQUIERDA
        // =====================================

        // PARTE VERTICAL

        const vertical1 = new THREE.Mesh(
            new THREE.BoxGeometry(0.7, 3.5, 0.5),
            materialGris
        );

        vertical1.position.set(-4, 2, 0);

        vertical1.castShadow = true;

        this.cruces.add(vertical1);


        // PARTE HORIZONTAL

        const horizontal1 = new THREE.Mesh(
            new THREE.BoxGeometry(2.4, 0.7, 0.5),
            materialGris
        );

        horizontal1.position.set(-4, 2.7, 0);

        horizontal1.castShadow = true;

        this.cruces.add(horizontal1);


        // BASE

        const base1 = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.5, 1),
            materialGris
        );

        base1.position.set(-4, 0.25, 0);

        base1.castShadow = true;

        this.cruces.add(base1);


        // ACCESORIO CENTRAL

        const accesorio1 = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 16, 16),
            materialOscuro
        );

        accesorio1.position.set(-4, 2.7, 0.3);

        this.cruces.add(accesorio1);


        // =====================================
        // CRUZ CENTRAL GRANDE
        // =====================================

        // PARTE VERTICAL

        const vertical2 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 5, 0.7),
            materialGris
        );

        vertical2.position.set(0, 2.8, 0);

        vertical2.castShadow = true;

        this.cruces.add(vertical2);


        // PARTE HORIZONTAL

        const horizontal2 = new THREE.Mesh(
            new THREE.BoxGeometry(3.5, 1, 0.7),
            materialGris
        );

        horizontal2.position.set(0, 3.8, 0);

        horizontal2.castShadow = true;

        this.cruces.add(horizontal2);


        // BASE INFERIOR

        const base2 = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 0.5, 1.5),
            materialGris
        );

        base2.position.set(0, 0.25, 0);

        base2.castShadow = true;

        this.cruces.add(base2);


        // SEGUNDA BASE

        const base3 = new THREE.Mesh(
            new THREE.BoxGeometry(1.7, 0.4, 1.2),
            materialGris
        );

        base3.position.set(0, 0.7, 0);

        base3.castShadow = true;

        this.cruces.add(base3);


        // LÍNEA DORADA VERTICAL

        const accesorioVertical = new THREE.Mesh(
            new THREE.BoxGeometry(0.12, 4, 0.1),
            materialDorado
        );

        accesorioVertical.position.set(
            0,
            3,
            0.4
        );

        this.cruces.add(accesorioVertical);


        // LÍNEA DORADA HORIZONTAL

        const accesorioHorizontal = new THREE.Mesh(
            new THREE.BoxGeometry(2.8, 0.12, 0.1),
            materialDorado
        );

        accesorioHorizontal.position.set(
            0,
            3.8,
            0.4
        );

        this.cruces.add(accesorioHorizontal);


        // ESFERA DORADA CENTRAL

        const accesorioCentro = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 20, 20),
            materialDorado
        );

        accesorioCentro.position.set(
            0,
            3.8,
            0.5
        );

        this.cruces.add(accesorioCentro);


        // =====================================
        // CRUZ DERECHA
        // =====================================

        // PARTE VERTICAL

        const vertical3 = new THREE.Mesh(
            new THREE.BoxGeometry(0.7, 3.5, 0.5),
            materialGris
        );

        vertical3.position.set(
            4,
            2,
            0
        );

        vertical3.castShadow = true;

        this.cruces.add(vertical3);


        // PARTE HORIZONTAL

        const horizontal3 = new THREE.Mesh(
            new THREE.BoxGeometry(2.4, 0.7, 0.5),
            materialGris
        );

        horizontal3.position.set(
            4,
            2.7,
            0
        );

        horizontal3.castShadow = true;

        this.cruces.add(horizontal3);


        // BASE

        const base4 = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.5, 1),
            materialGris
        );

        base4.position.set(
            4,
            0.25,
            0
        );

        base4.castShadow = true;

        this.cruces.add(base4);


        // ACCESORIO CENTRAL

        const accesorio3 = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 16, 16),
            materialOscuro
        );

        accesorio3.position.set(
            4,
            2.7,
            0.3
        );

        this.cruces.add(accesorio3);

    }


    getObject() {

        return this.cruces;

    }

}