
import * as THREE from 'three';

export function crearpape() {
    const grupo = new THREE.Group();
    const shape = new THREE.Shape();



    //empiesa
    shape.moveTo(-1.5, 0.6);
    shape.lineTo(1.5, 0.6);
    shape.lineTo(1.5, 0.3);

    // LADO DERECHO
    shape.quadraticCurveTo(1.5, 0.05, 1.2, -0.05);
    shape.quadraticCurveTo(1.15, -0.45, 0.85, -0.55);
    shape.quadraticCurveTo(0.75, -0.95, 0.45, -1.0);

    // PUNTA INFERIOR
    shape.quadraticCurveTo(0, -1.35, -0.45, -1.0);

    // LADO IZQUIERDO
    shape.quadraticCurveTo(-0.75, -0.95, -0.85, -0.55);
    shape.quadraticCurveTo(-1.15, -0.45, -1.2, -0.05);
    shape.quadraticCurveTo(-1.5, 0.05, -1.5, 0.35);
    shape.lineTo(-1.5, 0.6);

    // GEOMETRÍA
    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.01,
        bevelEnabled: false
    });

    geometry.center();

    // MATERIAL
    const materialPapel = new THREE.MeshStandardMaterial({
        color: 0xB0288A,
        side: THREE.DoubleSide,
        roughness: 0.8,
        metalness: 0
    });

    // MALLA
    const papel = new THREE.Mesh(geometry, materialPapel);

    papel.castShadow = true;
    papel.receiveShadow = true;

    grupo.add(papel);

    // ESCALA NORMAL
    grupo.scale.set(2, 1, 1);

    return grupo;
}