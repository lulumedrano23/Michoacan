import * as THREE from 'three';

export class botella4 {

    constructor() {

        this.botella4=new THREE.Group();
// BOTELLA DE PULQUE
const damajuanaGroup = new THREE.Group();

const greenGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x3B5323, // Vidrio Verde Artesanal
    roughness: 0.2,
     transmission: 0.85, //hacerlo tansparente
    thickness: 1.2
});

const corkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.9 });

// Cuerpo Esférico / Abombado
const cuerpo = new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 32), greenGlassMaterial);
cuerpo.position.y = 1.9;
cuerpo.scale.set(1, 0.95, 1);
cuerpo.castShadow = true;
cuerpo.receiveShadow = true;
damajuanaGroup.add(cuerpo);

// Cuello Corto
const cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.9, 32), greenGlassMaterial);
cuello.position.y = 3.8;
damajuanaGroup.add(cuello);

// Tapón de Corcho Ancho
const corcho = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.35, 0.5, 32), corkMaterial);
corcho.position.y = 4.3;
damajuanaGroup.add(corcho);

// Asa de Vidrio Lateral
const asa = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 16, 32, Math.PI), greenGlassMaterial);
asa.position.set(0.8, 3.3, 0);
asa.rotation.z = -Math.PI / 4;
damajuanaGroup.add(asa);

this.botella4.add(damajuanaGroup);


 }

    getObject() {
        return this.botella4;
    }
}