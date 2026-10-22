import * as THREE from 'three';

export class botella1 {

    constructor() {

        this.botella1=new THREE.Group();

// BOTELLA DE TEQUILA 
const tequilaGroup = new THREE.Group();

const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xe6a100, // Tono ámbar/dorado de reposado
    roughness: 0.1,
    transmission: 0.85,
    thickness: 1.2,
    ior: 1.5
});

const corkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8 });
const labelMaterial = new THREE.MeshStandardMaterial({ color: 0xfff8dc, roughness: 0.4 });
const goldMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8, roughness: 0.2 });

// Cuerpo rectangular ancho
const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.6, 1.4), glassMaterial);
cuerpo.position.y = 1.9;
cuerpo.castShadow = true;
cuerpo.receiveShadow = true;
this.botella1.add(cuerpo);
// Cuello
const cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 1.2, 32), glassMaterial);
cuello.position.y = 4.3;
cuello.castShadow = true;
this.botella1.add(cuello);

// Tapón de Corcho con Remate Dorado
const corcho = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.4, 0.5, 32), corkMaterial);
corcho.position.y = 5.0;
this.botella1.add(corcho);

const topeDorado = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.15, 32), goldMaterial);
topeDorado.position.y = 5.3;
this.botella1.add(topeDorado);

// Etiqueta
const etiqueta = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.2), labelMaterial);
etiqueta.position.set(0, 1.9, 0.71);
this.botella1.add(etiqueta);


 }

    getObject() {
        return this.botella1;
    }
}