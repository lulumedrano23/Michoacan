import * as THREE from 'three';

export class veladora {

    constructor() {

        // GRUPO PRINCIPAL
        this.veladora = new THREE.Group();

        // CUERPO DE LA VELADORA
        const cuerpoGeometry = new THREE.CylinderGeometry(
            0.2, 0.2, 1, 32
        );

        const cuerpoMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff
        });

        const cuerpo = new THREE.Mesh(
            cuerpoGeometry,
            cuerpoMaterial
        );

        cuerpo.position.y = 0.5;

        cuerpo.castShadow = true;
        cuerpo.receiveShadow = true;

        this.veladora.add(cuerpo);

        // MECHA
        const mechaGeometry = new THREE.CylinderGeometry(
            0.02, 0.02, 0.3, 16
        );

        const mechaMaterial = new THREE.MeshLambertMaterial({
            color: 0x222222
        });

        const mecha = new THREE.Mesh(
            mechaGeometry,
            mechaMaterial
        );

        mecha.position.y = 1.15;

        this.veladora.add(mecha);

        // LLAMA
        const llamaGeometry = new THREE.SphereGeometry(
            0.10, 13, 16
        );

        const llamaMaterial = new THREE.MeshBasicMaterial({
            color: 0xffa500
        });

        const llama = new THREE.Mesh(
            llamaGeometry,
            llamaMaterial
        );

        llama.scale.set(1, 2, 1);
        llama.position.y = 1.40;

        this.veladora.add(llama);

        // LUZ CÁLIDA DE LA LLAMA
        this.luz = new THREE.PointLight(
            0xffaa44, // Color
            0.3,        // Intensidad
            1,        // Distancia máxima
            1         // Atenuación
        );

        this.luz.position.set(0, 1.40, 0);

        this.veladora.add(this.luz);

    }

    getObject() {
        return this.veladora;
    }

}