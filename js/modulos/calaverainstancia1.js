import * as THREE from 'three';

export function crearCalavera1() {
    const calaveraGrupo = new THREE.Group();

    // Material base de la calavera (color dulce tradicional)
    const cabezaMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffeedd, 
        roughness: 0.3 
    });

    // 1. Parte superior de la cabeza (Cráneo)
    const cabezaGeometria = new THREE.SphereGeometry(1, 32, 32);
    const cabeza = new THREE.Mesh(cabezaGeometria, cabezaMaterial);
    cabeza.castShadow = true;
    cabeza.receiveShadow = true;
    calaveraGrupo.add(cabeza);

    // 2. Mandíbula inferior (más estilizada)
    const mandibulaGeometria = new THREE.BoxGeometry(1.0, 0.5, 0.9);
    const mandibula = new THREE.Mesh(mandibulaGeometria, cabezaMaterial);
    mandibula.position.set(0, -0.65, 0.45);
    mandibula.castShadow = true;
    mandibula.receiveShadow = true;
    calaveraGrupo.add(mandibula);

    // Material oscuro para ojos, nariz y boca
    const detalleMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });

    // 3. Ojos (Cuencas redondas)
    const ojoGeometria = new THREE.SphereGeometry(0.22, 32, 32);
    
    const ojoIzquierdo = new THREE.Mesh(ojoGeometria, detalleMaterial);
    ojoIzquierdo.scale.set(1, 1.2, 0.5);
    ojoIzquierdo.position.set(-0.35, 0.2, 0.85);
    calaveraGrupo.add(ojoIzquierdo);

    const ojoDerecho = new THREE.Mesh(ojoGeometria, detalleMaterial);
    ojoDerecho.scale.set(1, 1.2, 0.5);
    ojoDerecho.position.set(0.35, 0.2, 0.85);
    calaveraGrupo.add(ojoDerecho);

    // 4. Nariz (Pequeño cono invertido clásico)
    const narizGeometria = new THREE.ConeGeometry(0.12, 0.25, 4);
    const nariz = new THREE.Mesh(narizGeometria, detalleMaterial);
    nariz.rotation.x = Math.PI;
    nariz.position.set(0, -0.15, 0.95);
    calaveraGrupo.add(nariz);

    // 5. Dientes alineados
    const dientesGrupo = new THREE.Group();
    const dienteGeometria = new THREE.BoxGeometry(0.1, 0.18, 0.1);

    const numDientes = 5;
    for (let i = 0; i < numDientes; i++) {
        const diente = new THREE.Mesh(dienteGeometria, detalleMaterial);
        diente.position.set(-0.2 + i * 0.1, -0.65, 0.92);
        dientesGrupo.add(diente);
    }
    calaveraGrupo.add(dientesGrupo);

    // 6. Corona de caramelos (distribución en 3D sobre la cabeza)
    const numCaramelos = 12;
    const radioCorona = 0.95; 
    const coloresCaramelos = [0xff4444, 0x44ff44, 0x4444ff, 0xffff44, 0xff44ff, 0xff8800];

    for (let i = 0; i < numCaramelos; i++) {
        const angulo = (i / numCaramelos) * Math.PI * 2; 
        
        const colorAleatorio = coloresCaramelos[Math.floor(Math.random() * coloresCaramelos.length)];
        const carameloMaterial = new THREE.MeshStandardMaterial({ 
            color: colorAleatorio, 
            roughness: 0.2,
            metalness: 0.1 
        });
        
        const carameloGeometria = new THREE.SphereGeometry(0.12, 16, 16); 
        const caramelo = new THREE.Mesh(carameloGeometria, carameloMaterial);
        
        // Distribución en el plano horizontal (X, Z) con una altura fija (Y)
        const x = Math.cos(angulo) * radioCorona;
        const z = Math.sin(angulo) * radioCorona;
        const y = 0.65; 
        
        caramelo.position.set(x, y, z); 
        caramelo.castShadow = true;
        
        calaveraGrupo.add(caramelo);
    }

    // Retornamos el grupo completo listo para la escena principal
    return calaveraGrupo;
}