import * as THREE from 'three';

export class veladora2 {

    constructor() {

        // GRUPO PRINCIPAL
        this.veladora2 = new THREE.Group();

        const cirioGroup = new THREE.Group();

        // MATERIALES
        const waxMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xfffae6,
            roughness: 0.25,
            thickness: 0.8
        });

        const goldMaterial = new THREE.MeshStandardMaterial({
            color: 0xffd700,
            metalness: 0.9,
            roughness: 0.2
        });

        const baseMaterial = new THREE.MeshStandardMaterial({
            color: 0x2b2b2b,
            metalness: 0.8,
            roughness: 0.4
        });

        // BASE ORNAMENTADA
        const basePlato = new THREE.Mesh(
            new THREE.CylinderGeometry(2.2, 2.5, 0.2, 32),
            baseMaterial
        );

        basePlato.position.y = 0.1;
        basePlato.castShadow = true;

        cirioGroup.add(basePlato);

        // CUERPO DE LA CERA
        const cirioRadius = 1.1;
        const cirioHeight = 4.5;

        const cuerpo = new THREE.Mesh(
            new THREE.CylinderGeometry(
                cirioRadius * 0.95,
                cirioRadius,
                cirioHeight,
                32
            ),
            waxMaterial
        );

        cuerpo.position.y = 2.45;
        cuerpo.castShadow = true;
        cuerpo.receiveShadow = true;

        cirioGroup.add(cuerpo);

        // ANILLO SUPERIOR
        const anilloSup = new THREE.Mesh(
            new THREE.TorusGeometry(
                cirioRadius + 0.02,
                0.05,
                16,
                32
            ),
            goldMaterial
        );

        anilloSup.rotation.x = Math.PI / 2;
        anilloSup.position.y = 4.2;

        cirioGroup.add(anilloSup);

        // ANILLO INFERIOR
        const anilloInf = new THREE.Mesh(
            new THREE.TorusGeometry(
                cirioRadius + 0.02,
                0.05,
                16,
                32
            ),
            goldMaterial
        );

        anilloInf.rotation.x = Math.PI / 2;
        anilloInf.position.y = 1.2;

        cirioGroup.add(anilloInf);

        // SOL CENTRAL
        const solCentro = new THREE.Mesh(
            new THREE.CylinderGeometry(0.35, 0.35, 0.08, 16),
            goldMaterial
        );

        solCentro.rotation.x = Math.PI / 2;
        solCentro.position.set(0, 2.7, cirioRadius + 0.03);

        cirioGroup.add(solCentro);

        // RAYOS DEL SOL
        for (let i = 0; i < 8; i++) {

            const rayo = new THREE.Mesh(
                new THREE.BoxGeometry(0.06, 0.5, 0.04),
                goldMaterial
            );

            const angulo = (i / 8) * Math.PI * 2;

            rayo.position.set(
                Math.cos(angulo) * 0.5,
                2.7 + Math.sin(angulo) * 0.5,
                cirioRadius + 0.03
            );

            rayo.rotation.z = angulo - Math.PI / 2;

            cirioGroup.add(rayo);

        }

        // MECHA
        const mecha = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16),
            new THREE.MeshBasicMaterial({
                color: 0xff8c00
            })
        );

        mecha.position.y = 4.8;

        cirioGroup.add(mecha);

        // GRUPO DE LA LLAMA
        const llamaGroup = new THREE.Group();

        llamaGroup.position.y = 5.0;

        // LLAMA EXTERIOR
        const llamaExt = new THREE.Mesh(
            new THREE.ConeGeometry(0.25, 0.9, 16),
            new THREE.MeshBasicMaterial({
                color: 0xff5500
            })
        );

        llamaExt.geometry.translate(0, 0.45, 0);

        llamaGroup.add(llamaExt);

        // LLAMA INTERIOR
        const llamaInt = new THREE.Mesh(
            new THREE.ConeGeometry(0.12, 0.5, 16),
            new THREE.MeshBasicMaterial({
                color: 0xffffff
            })
        );

        llamaInt.geometry.translate(0, 0.25, 0);
        llamaInt.position.y = 0.1;

        llamaGroup.add(llamaInt);

        cirioGroup.add(llamaGroup);

        // LUZ SUAVE DE LA LLAMA
        this.luzLlama = new THREE.PointLight(
            0xffaa44, // Color cálido
            15,      // Intensidad reducida
            5,        // Alcance reducido
            2         // Atenuación
        );

        this.luzLlama.position.set(0, 5.2, 0);
        this.luzLlama.castShadow = true;

        cirioGroup.add(this.luzLlama);

        this.veladora2.add(cirioGroup);

    }

    getObject() {
        return this.veladora2;
    }

}