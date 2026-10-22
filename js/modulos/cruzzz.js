import * as THREE from 'three';

export class cruzzz {

    constructor() {

        this.cruzzz = new THREE.Group();

        // MATERIALES
        const materialGris = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa
        });

        const materialOscuro = new THREE.MeshLambertMaterial({
            color: 0x444444
        });

        // PARTE VERTICAL
        const vertical = new THREE.Mesh(
            new THREE.BoxGeometry(0.7, 3.5, 0.5),
            materialGris
        );

        vertical.position.set(0, 2, 0);
        vertical.castShadow = true;
        this.cruzzz.add(vertical);

        // PARTE HORIZONTAL
        const horizontal = new THREE.Mesh(
            new THREE.BoxGeometry(2.4, 0.7, 0.5),
            materialGris
        );

        horizontal.position.set(0, 2.7, 0);
        horizontal.castShadow = true;
        this.cruzzz.add(horizontal);

        // BASE
        const base = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.5, 1),
            materialGris
        );

        base.position.set(0, 0.25, 0);
        base.castShadow = true;
        this.cruzzz.add(base);

        // ACCESORIO CENTRAL
        const accesorio = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 16, 16),
            materialOscuro
        );

        accesorio.position.set(0, 2.7, 0.3);
        this.cruzzz.add(accesorio);

    }

    getObject() {
        return this.cruzzz;
    }

}