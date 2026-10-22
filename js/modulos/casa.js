import * as THREE from 'three';

export class casa {

    constructor() {

        // GRUPO PRINCIPAL DE LA CASA
        this.casa = new THREE.Group();


        // CUERPO DE LA CASA

        const houseBodyGeometry = new THREE.BoxGeometry(4.5, 3, 4.5);

        const houseBodyMaterial = new THREE.MeshStandardMaterial({
            color: 0xfff0c7
        });

        const houseBody = new THREE.Mesh(
            houseBodyGeometry,
            houseBodyMaterial
        );

        houseBody.position.y = 1.5;

        houseBody.castShadow = true;
        houseBody.receiveShadow = true;

        this.casa.add(houseBody);


        // PUERTA

        const doorGeometry = new THREE.BoxGeometry(1,1.8,0.1);

        const doorMaterial = new THREE.MeshStandardMaterial({color: 0x915e19});

        const door = new THREE.Mesh(doorGeometry,doorMaterial);

        door.position.set(0, 0.9, 2.31);

        door.castShadow = true;

        this.casa.add(door);


        // PERILLA

        const knobGeometry = new THREE.SphereGeometry(0.06,16,16);

        const knobMaterial = new THREE.MeshStandardMaterial({color: 0xD4AF37});

        const knob = new THREE.Mesh(knobGeometry,knobMaterial);

        knob.position.set(0.3,0.9,2.38);

        this.casa.add(knob);


        // VENTANA IZQUIERDA

        const windowGeometry = new THREE.BoxGeometry(
            0.9,
            0.9,
            0.1
        );

        const windowMaterial = new THREE.MeshStandardMaterial({
            color: 0x56ddff
        });

        const windowLeft = new THREE.Mesh(
            windowGeometry,
            windowMaterial
        );

        windowLeft.position.set(
            -1.3,
            1.7,
            2.31
        );

        this.casa.add(windowLeft);


        // VENTANA DERECHA

        const windowRight = new THREE.Mesh(
            windowGeometry,
            windowMaterial
        );

        windowRight.position.set(
            1.3,
            1.7,
            2.31
        );

        this.casa.add(windowRight);


        // MARCOS DE LAS VENTANAS

        const frameMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff
        });


        // MARCO IZQUIERDO

        const frameLeft = new THREE.LineSegments(

            new THREE.EdgesGeometry(
                new THREE.BoxGeometry(
                    0.92,
                    0.92,
                    0.11
                )
            ),

            frameMaterial

        );

        frameLeft.position.copy(
            windowLeft.position
        );

        this.casa.add(frameLeft);


        // MARCO DERECHO

        const frameRight = new THREE.LineSegments(

            new THREE.EdgesGeometry(
                new THREE.BoxGeometry(
                    0.92,
                    0.92,
                    0.11
                )
            ),

            frameMaterial

        );

        frameRight.position.copy(
            windowRight.position
        );

        this.casa.add(frameRight);


        // CHIMENEA

        const chimneyGeometry = new THREE.BoxGeometry(
            0.7,
            4,
            0.7
        );

        const chimneyMaterial = new THREE.MeshStandardMaterial({
            color: 0xde5e1e
        });

        const chimney = new THREE.Mesh(
            chimneyGeometry,
            chimneyMaterial
        );

        chimney.position.set(
            1.5,
            3,
            -1.6
        );

        chimney.castShadow = true;
        chimney.receiveShadow = true;

        this.casa.add(chimney);


        // TECHO

        const roofGeometry = new THREE.ConeGeometry(
            4,
            1.5,
            4
        );

        const roofMaterial = new THREE.MeshStandardMaterial({
            color: 0xff5656
        });

        const roof = new THREE.Mesh(
            roofGeometry,
            roofMaterial
        );

        roof.position.y = 3.75;

        roof.rotation.y = Math.PI / 4;

        roof.castShadow = true;

        this.casa.add(roof);

    }


    getObject() {

        return this.casa;

    }

}