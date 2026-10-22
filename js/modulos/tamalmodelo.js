import * as THREE from 'three';



// FUNCIÓN PARA MATERIALES

function crearMaterial(color) {

    return new THREE.MeshStandardMaterial({color: color,roughness: 0.7,metalness: 0});
}


// GRUPO DEL TAMAL

export function crearTamal() {
const tamal = new THREE.Group();
// 1. MASA DEL TAMAL

const masaGeometria = new THREE.SphereGeometry(1, 24, 16);
masaGeometria.scale(1.1, 0.4, 0.4);
const masaMaterial = new THREE.MeshStandardMaterial({color: 0xEDE0A6,roughness: 1});
const masa = new THREE.Mesh( masaGeometria,masaMaterial);

masa.position.set(0, 0.07, 0);
masa.castShadow = true;
masa.receiveShadow = true;

tamal.add(masa);

// 2. plato

const platoGeometria = new THREE.SphereGeometry(3.5, 20, 10);
platoGeometria.scale(0.5, 0.03, 0.4);
const platoMaterial = new THREE.MeshStandardMaterial({color: 0x612E14,roughness: 1});
const plato = new THREE.Mesh( platoGeometria,platoMaterial);

plato.position.set(0,-.35, 0);
plato.castShadow = true;
plato.receiveShadow = true;

tamal.add(plato);

// 3. hoja

const hojaGeometria = new THREE.SphereGeometry(1, 12, 5);
hojaGeometria.scale(1.5, .4, 0.4);
const hojaMaterial = new THREE.MeshStandardMaterial({color: 0xDCF7A6,roughness: 1});
const hoja = new THREE.Mesh( hojaGeometria,hojaMaterial);

hoja.position.set(0, 0.05, 0);
hoja.castShadow = true;
hoja.receiveShadow = true;

tamal.add(hoja);

//hojados
const hojadosGeometria = new THREE.SphereGeometry(1, 12, 7);
hojadosGeometria.scale(1.5, .1, 0.4);
const hojadosMaterial = new THREE.MeshStandardMaterial({color: 0xDCF7A6,roughness: 1});
const hojados = new THREE.Mesh( hojadosGeometria,hojadosMaterial);

hojados.position.set(0, 0.49, 0);
hojados.rotation.z=0.28;
hojados.rotation.y= 9.4;


hojados.castShadow = true;
hojados.receiveShadow = true;

tamal.add(hojados);


//muñones

const muñonesGeometria = new THREE.SphereGeometry(1, 4, 4);
muñonesGeometria.scale(0.2, 0.2, 0.2);
const muñonesMaterial = new THREE.MeshStandardMaterial({color: 0xDCF7A6,roughness: 1});
const muñones = new THREE.Mesh( muñonesGeometria,muñonesMaterial);

muñones.position.set(-1.27,0.01, 0);
muñones.castShadow = true;
muñones.receiveShadow = true;

tamal.add(muñones);


    return tamal;}