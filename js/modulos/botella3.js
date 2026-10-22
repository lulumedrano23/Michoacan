import * as THREE from 'three';

export class botella3{

    constructor() {

        this.botella3=new THREE.Group();

// BOTELLA DE CERVEZA
const cervezaGroup = new THREE.Group();

const amberGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x4A2B03, // Vidrio Ámbar Oscuro
    roughness: 0.15,
    thickness: 1.0
});

const capMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Corcholata dorada/metálica
    metalness: 0.9,
    roughness: 0.2
});

const labelMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });

// Base/Cuerpo Cilíndrico
const cuerpo = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.5, 32), amberGlassMaterial);
cuerpo.position.y = 1.25;
cuerpo.castShadow = true;
cuerpo.receiveShadow = true;
cervezaGroup.add(cuerpo);

// Hombro Cónico
const hombro = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.85, 1.2, 32), amberGlassMaterial);
hombro.position.y = 3.1;
cervezaGroup.add(hombro);

// Cuello Delgado
const cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.0, 32), amberGlassMaterial);
cuello.position.y = 4.2;
cervezaGroup.add(cuello);

// Corcholata (Tapón Metálico dentado)
const corcholata = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.12, 16), capMaterial);
corcholata.position.y = 4.75;
cervezaGroup.add(corcholata);

// Etiqueta Cilíndrica envolvente
const etiqueta = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.86, 1.4, 32, 1, true, 0, Math.PI * 1.2), labelMaterial);
etiqueta.position.y = 1.3;
etiqueta.rotation.y = -Math.PI / 1.7;
cervezaGroup.add(etiqueta);

this.botella3.add(cervezaGroup);


 }

    getObject() {
        return this.botella3;
    }
}