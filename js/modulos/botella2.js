import * as THREE from 'three';

export class botella2 {

    constructor() {

        this.botella2 = new THREE.Group();
        
        const mezcalGroup = new THREE.Group();

        // 1. MATERIALES MEJORADOS (Vidrio transparente + Líquido)
        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.35,
            roughness: 0.05,
            metalness: 0.05,
            transmission: 0.95, // Alta transparencia para ver el interior
            ior: 1.5,
            thickness: 0.8,
            side: THREE.DoubleSide
        });

        const liquidMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xf4e2c7, // Tono mezcal/perla tenue
            roughness: 0.1,
            transmission: 0.70,
            thickness: 1.0,
            ior: 1.33
        });

        const ropeMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.9 });
        const waxSealMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 });
        const labelMaterial = new THREE.MeshStandardMaterial({ color: 0xf0e6d2, roughness: 0.6 });

        // 2. CUERPO Y CUELLO DE VIDRIO (Hueco por dentro con side: DoubleSide)
        const cuerpo = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 4.2, 32, 1, true), glassMaterial);
        cuerpo.position.y = 2.1;
        cuerpo.castShadow = true;
        cuerpo.receiveShadow = true;
        mezcalGroup.add(cuerpo);

        const baseVidrio = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.15, 32), glassMaterial);
        baseVidrio.position.y = 0.075;
        mezcalGroup.add(baseVidrio);

        const cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 1.4, 32, 1, true), glassMaterial);
        cuello.position.y = 4.9;
        cuello.castShadow = true;
        mezcalGroup.add(cuello);

        // 3. LÍQUIDO INTERIOR (Cilindro contenido dentro de la botella)
        const liquidoCuerpo = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 3.2, 32), liquidMaterial);
        liquidoCuerpo.position.y = 1.75;
        mezcalGroup.add(liquidoCuerpo);

        const menisco = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 0.02, 32), liquidMaterial);
        menisco.position.y = 3.35;
        mezcalGroup.add(menisco);

        // 4. ACCESORIOS (Sello de cera, cuerda y etiqueta)
        const selloCera = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.4, 32), waxSealMaterial);
        selloCera.position.y = 5.7;
        mezcalGroup.add(selloCera);

        for (let i = 0; i < 4; i++) {
            const mecatillo = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.04, 16, 32), ropeMaterial);
            mecatillo.rotation.x = Math.PI / 2;
            mecatillo.position.y = 4.4 + (i * 0.09);
            mezcalGroup.add(mecatillo);
        }

        const etiqueta = new THREE.Mesh(new THREE.CylinderGeometry(1.11, 1.11, 1.8, 32, 1, true, 0, Math.PI * 0.9), labelMaterial);
        etiqueta.position.y = 2.0;
        etiqueta.rotation.y = -Math.PI / 2.2;
        mezcalGroup.add(etiqueta);

        this.botella2.add(mezcalGroup);
    }

    getObject() {
        return this.botella2;
    }
}