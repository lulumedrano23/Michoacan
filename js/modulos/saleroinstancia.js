import * as THREE from 'three';

export function crearSalero() {

    // Salero Group
    const saleroGroup = new THREE.Group();

    // Base del salero
    const baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xa5a695 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.castShadow = true;
    base.receiveShadow = true;
    saleroGroup.add(base);

    // Copa del salero
    const copaGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.25, 16);
    const copaMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xeff7f7, 
        metalness: 0.5, 
        roughness: 0.2 
    });
    const copa = new THREE.Mesh(copaGeometry, copaMaterial);
    copa.position.y = 0.85;
    copa.castShadow = true;
    copa.receiveShadow = true;
    saleroGroup.add(copa);

    // Puntos del salero
    const puntosGroup = new THREE.Group();
    const puntosGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const puntosMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const puntos = new THREE.Mesh(puntosGeometry, puntosMaterial); 
    puntos.position.y = 0.95;
    puntos.castShadow = true;
    puntosGroup.add(puntos);
    saleroGroup.add(puntosGroup);

    const puntosGroup2 = puntosGroup.clone();
    puntosGroup2.position.x = 0.2;
    saleroGroup.add(puntosGroup2);

    const puntosGroup3 = puntosGroup.clone();
    puntosGroup3.position.x = -0.2;
    saleroGroup.add(puntosGroup3);

    const puntosGroup4 = puntosGroup.clone();
    puntosGroup4.position.x = 0.2;
    puntosGroup4.position.z = 0.2;
    saleroGroup.add(puntosGroup4);

    const puntosGroup5 = puntosGroup.clone();
    puntosGroup5.position.x = -0.2;
    puntosGroup5.position.z = 0.2;
    saleroGroup.add(puntosGroup5);

    const puntosGroup6 = puntosGroup.clone();
    puntosGroup6.position.x = 0;
    puntosGroup6.position.z = 0.2;
    saleroGroup.add(puntosGroup6);

    const puntosGroup7 = puntosGroup.clone();
    puntosGroup7.position.x = 0.2;
    puntosGroup7.position.z = -0.2;
    saleroGroup.add(puntosGroup7);

    const puntosGroup8 = puntosGroup.clone();
    puntosGroup8.position.x = -0.2;
    puntosGroup8.position.z = -0.2;
    saleroGroup.add(puntosGroup8);

    const puntosGroup9 = puntosGroup.clone();
    puntosGroup9.position.x = 0;
    puntosGroup9.position.z = -0.2;
    saleroGroup.add(puntosGroup9);

    // Regresar el salero completo
    return saleroGroup;
}