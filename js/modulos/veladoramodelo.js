import * as THREE from 'three';

// FUNCIÓN PARA MATERIALES

function crearMaterial(color) {

    return new THREE.MeshStandardMaterial({color: color,roughness: 0.7,metalness: 0});
}

// 1. VELADORA

export function crearVeladora() 

 {const veladora = new THREE.Group();

    // VASO DE LA VELADORA

    const vasoGeo = new THREE.CylinderGeometry(1,1,2,32);
    const vasoMat =new THREE.MeshPhysicalMaterial({

            color: 0xffffff,

            transparent: true,

            opacity: 0.35,

            roughness: 0.1,

            transmission: 0.3,

            thickness: 0.1

        });

    const vaso = new THREE.Mesh( vasoGeo, vasoMat);
    vaso.position.y = 1;
    vaso.castShadow = true;
    vaso.receiveShadow = true;
    veladora.add(vaso);

    // CERA
    const ceraGeo = new THREE.CylinderGeometry(0.85,0.85,1.6,32);
    const ceraMat = crearMaterial(0xfff3c4);
    const cera = new THREE.Mesh(ceraGeo,ceraMat);
    cera.position.y = 1.05;
    cera.castShadow = true;
    veladora.add(cera);

    // MECHA
    const mechaGeo = new THREE.CylinderGeometry(0.07,0.07,0.5,12);
    const mechaMat = crearMaterial(0x222222);
    const mecha = new THREE.Mesh(mechaGeo,mechaMat);
    mecha.position.y = 2.1;
    veladora.add(mecha);

    // LLAMA
    const llamaGeo = new THREE.SphereGeometry(0.35,16,16);
    const llamaMat = new THREE.MeshBasicMaterial({color: 0xffaa00});
    const llama = new THREE.Mesh(llamaGeo,llamaMat);
    llama.scale.set(0.7,1.5,0.7);
    llama.position.y = 2.65;
    veladora.add(llama);

    // LUZ DE LA LLAMA POR SI ACASO
    const fireLight = new THREE.PointLight(0xffaa33,8,5);
    fireLight.position.set(0,4.5,0);
    veladora.add(fireLight);

    return veladora;
}

