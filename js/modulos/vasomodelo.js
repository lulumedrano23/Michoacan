
import * as THREE from 'three';

// FUNCIÓN PARA CREAR EL VASO CON AGUA

export function crearVaso() {

    // GRUPO PRINCIPAL
    const vasoGrupo = new THREE.Group();

    // CRISTAL
    const cristalGeo = new THREE.CylinderGeometry(
        1, 0.8, 3, 32, 1, true
    );

    const cristalMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
        transmission: 1,
        roughness: 0.05,
        metalness: 0,
        side: THREE.DoubleSide
    });

    const cristal = new THREE.Mesh(cristalGeo, cristalMat);
    cristal.position.y = 1.5;
    cristal.castShadow = true;
    vasoGrupo.add(cristal);

    // AGUA
    const aguaGeo = new THREE.CylinderGeometry(
        0.88, 0.7, 2.2, 32
    );

    const aguaMat = new THREE.MeshPhysicalMaterial({
        color: 0x55aaff,
        transparent: true,
        opacity: 0.65,
        transmission: 0.2,
        roughness: 0.05
    });

    const agua = new THREE.Mesh(aguaGeo, aguaMat);
    agua.position.y = 1.15;
    vasoGrupo.add(agua);

    // BASE DEL VASO
    const baseGeo = new THREE.CylinderGeometry(
        0.85, 0.85, 0.12, 32
    );

    const base = new THREE.Mesh(baseGeo, cristalMat);
    base.position.y = 0.08;
    vasoGrupo.add(base);

    // DEVOLVER EL MODELO COMPLETO
    return vasoGrupo;
}
