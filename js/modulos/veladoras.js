import * as THREE from 'three';

export class veladoras {

    constructor() {

        this.veladoras=new THREE.Group();
// INICIA DISEÑO DEL CIRIO

const cirioGroup = new THREE.Group();

// Materiales
const waxMaterial = new THREE.MeshBasicMaterial({ color: 0xfffdd0 });
const metalMaterial = new THREE.MeshStandardMaterial({ color: 0x442e1d, roughness: 0.8, metalness: 0.8 });
const goldMaterial = new THREE.MeshStandardMaterial({ color: 0xc1a566, roughness: 0.5, metalness: 0.9 });

// 1. PEDESTAL DE METAL (Base + Tallo + Copa)
const baseMetal = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.8, 0.4, 32), metalMaterial);
baseMetal.position.y = 0.2;
baseMetal.castShadow = true;
cirioGroup.add(baseMetal);

const talloMetal = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 1.2, 32), metalMaterial);
talloMetal.position.y = 1;
talloMetal.castShadow = true;
cirioGroup.add(talloMetal);

const copaMetal = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.5, 0.4, 32), metalMaterial);
copaMetal.position.y = 1.8;
copaMetal.castShadow = true;
cirioGroup.add(copaMetal);

// 2. CUERPO DEL CIRIO
const cirioRadius = 0.8;
const cirioHeight = 5;
const cuerpoGeometry = new THREE.CylinderGeometry(cirioRadius, cirioRadius, cirioHeight, 32);
const cuerpo = new THREE.Mesh(cuerpoGeometry, waxMaterial);
cuerpo.position.y = 4.5;
cuerpo.castShadow = true;
cuerpo.receiveShadow = true;
cirioGroup.add(cuerpo);

// 3. CRUZ EN RELIEVE
const cruzGroup = new THREE.Group();
const cruzV = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2, 16), goldMaterial);
cruzV.position.set(0, 4.8, cirioRadius + 0.05);

const cruzH = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 16), goldMaterial);
cruzH.rotation.z = Math.PI / 2;
cruzH.position.set(0, 5.2, cirioRadius + 0.05);

cruzGroup.add(cruzV, cruzH);
cirioGroup.add(cruzGroup);

// 4. MECHA
const mecha = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.4, 16),
    new THREE.MeshBasicMaterial({ color: 0x111111 })
);
mecha.position.y = 7.2;
cirioGroup.add(mecha);

// 5. LLAMA
const llama = new THREE.Mesh(
    new THREE.ConeGeometry(0.25, 0.9, 16),
    new THREE.MeshBasicMaterial({ color: 0xff8c00 })
);
llama.geometry.translate(0, 0.45, 0); // Pivote en la base
llama.position.y = 7.3;
cirioGroup.add(llama);

// 6. LUZ DE LA LLAMA
const luzLlama = new THREE.PointLight(0xffaa33, 2.5, 8);
luzLlama.position.set(0, 7.6, 0);
luzLlama.castShadow = true;
cirioGroup.add(luzLlama);

// Añadimos el cirio directamente al centro de la escena
this.veladoras.add(cirioGroup);


 }

    getObject() {
        return this.veladoras;
    }
}