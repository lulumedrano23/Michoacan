import * as THREE from 'three';

export class ataud {

    constructor() {

        // GRUPO PRINCIPAL
        this.ataud = new THREE.Group();

        // MATERIALES
        const materialMadera = new THREE.MeshStandardMaterial({
            color: 0x492b20,
            roughness: 0.85
        });

        const materialTapa = new THREE.MeshStandardMaterial({
            color: 0x70452e,
            roughness: 0.8
        });

        const materialDorado = new THREE.MeshStandardMaterial({
            color: 0xd4af37,
            metalness: 0.5,
            roughness: 0.35
        });

        // SILUETA DEL ATAÚD
        // Cabecera hacia -Z y pies hacia +Z
        const forma = new THREE.Shape();

        forma.moveTo(-0.23, 0.85);
        forma.lineTo(0.23, 0.85);
        forma.lineTo(0.43, 0.42);
        forma.lineTo(0.28, -0.85);
        forma.lineTo(-0.28, -0.85);
        forma.lineTo(-0.43, 0.42);

        forma.closePath();

        // CUERPO DEL ATAÚD
        const cuerpoGeometria = new THREE.ExtrudeGeometry(
            forma,
            {
                depth: 0.28,
                bevelEnabled: true,
                bevelThickness: 0.015,
                bevelSize: 0.015,
                bevelSegments: 2
            }
        );

        const cuerpo = new THREE.Mesh(
            cuerpoGeometria,
            materialMadera
        );

        cuerpo.rotation.x = -Math.PI / 2;
        cuerpo.position.y = 0.015;

        cuerpo.castShadow = true;
        cuerpo.receiveShadow = true;

        this.ataud.add(cuerpo);

        // TAPA LIGERAMENTE MÁS ANCHA
        const tapaGeometria = new THREE.ExtrudeGeometry(
            forma,
            {
                depth: 0.055,
                bevelEnabled: true,
                bevelThickness: 0.012,
                bevelSize: 0.012,
                bevelSegments: 2
            }
        );

        const tapa = new THREE.Mesh(
            tapaGeometria,
            materialTapa
        );

        tapa.rotation.x = -Math.PI / 2;
        tapa.scale.set(1.04, 1.02, 1);
        tapa.position.y = 0.31;

        tapa.castShadow = true;
        tapa.receiveShadow = true;

        this.ataud.add(tapa);

        // CRUZ SOBRE LA TAPA
        const cruzLarga = new THREE.Mesh(
            new THREE.BoxGeometry(0.055, 0.025, 0.62),
            materialDorado
        );

        cruzLarga.position.set(0, 0.39, -0.15);

        cruzLarga.castShadow = true;

        this.ataud.add(cruzLarga);

        const cruzCorta = new THREE.Mesh(
            new THREE.BoxGeometry(0.30, 0.025, 0.055),
            materialDorado
        );

        cruzCorta.position.set(0, 0.39, -0.29);

        cruzCorta.castShadow = true;

        this.ataud.add(cruzCorta);

        // CLAVOS DECORATIVOS EN LA TAPA
        const clavoGeometria = new THREE.SphereGeometry(
            0.018,
            12,
            8
        );

        const posicionesClavos = [
            [-0.18, -0.77],
            [0.18, -0.77],
            [-0.35, -0.40],
            [0.35, -0.40],
            [-0.23, 0.76],
            [0.23, 0.76]
        ];

        for (const [x, z] of posicionesClavos) {

            const clavo = new THREE.Mesh(
                clavoGeometria,
                materialDorado
            );

            clavo.scale.set(1, 0.4, 1);
            clavo.position.set(x, 0.38, z);

            this.ataud.add(clavo);

        }

    }

    getObject() {
        return this.ataud;
    }

}