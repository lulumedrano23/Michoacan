import * as THREE from 'three';

export class cana {

    constructor() {

        // GRUPO PRINCIPAL
        this.cana = new THREE.Group();

        const materialCascara = new THREE.MeshStandardMaterial({
            color: 0xa8a052,
            roughness: 0.85
        });

        const materialInterior = new THREE.MeshStandardMaterial({
            color: 0xffedba,
            roughness: 0.95
        });

        const materialNudo = new THREE.MeshStandardMaterial({
            color: 0x747139,
            roughness: 0.9
        });

        // PEDAZO DE CAÑA
        const radio = 0.12;
        const largo = 1.4;

        // Materiales: costado, corte superior y corte inferior
        const cuerpo = new THREE.Mesh(
            new THREE.CylinderGeometry(
                radio,
                radio,
                largo,
                32
            ),
            [
                materialCascara,
                materialInterior,
                materialInterior
            ]
        );

        // Acostada sobre el eje X
        cuerpo.rotation.z = Math.PI / 2;
        cuerpo.position.y = radio + 0.012;

        cuerpo.castShadow = true;
        cuerpo.receiveShadow = true;

        this.cana.add(cuerpo);

        // NUDOS DEL TALLO
        for (const posicionX of [-0.35, 0.35]) {

            const nudo = new THREE.Mesh(
                new THREE.TorusGeometry(
                    radio,
                    0.012,
                    8,
                    32
                ),
                materialNudo
            );

            nudo.rotation.y = Math.PI / 2;

            nudo.position.set(
                posicionX,
                radio + 0.012,
                0
            );

            nudo.castShadow = true;
            nudo.receiveShadow = true;

            this.cana.add(nudo);

        }

    }

    getObject() {
        return this.cana;
    }

}