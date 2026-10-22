import * as THREE from 'three';
export class arcor {

    constructor() {

        this.arcor=new THREE.Group();


// --- BASE DE CEMPASÚCHIL ---

const geometriaBase = new THREE.BoxGeometry(1.3, 8, 1.3);
const materialBase = new THREE.MeshStandardMaterial({ color: 0xff8000, roughness: 0.7 });

const mesh02 = new THREE.Mesh(geometriaBase, materialBase);
mesh02.castShadow = true;
mesh02.position.set(0, 0, 0);

const mesh021 = new THREE.Mesh(geometriaBase, materialBase);
mesh021.castShadow = true;
mesh021.position.set(0, 0, 0);
mesh021.rotation.set(0, 0, 0.400);

const meshp2 = new THREE.Mesh(geometriaBase, materialBase);
meshp2.castShadow = true;
meshp2.position.set(0, 0, 0);
meshp2.rotation.set(0, 0, 0.785);

const meshp22 = new THREE.Mesh(geometriaBase, materialBase);
meshp22.castShadow = true;
meshp22.position.set(0, 0, 0);
meshp22.rotation.set(0, 0, 6);

const meshp3 = new THREE.Mesh(geometriaBase, materialBase);
meshp3.castShadow = true;
meshp3.position.set(0, 0, 0);
meshp3.rotation.set(0, 0, 1.57);

const meshp33 = new THREE.Mesh(geometriaBase, materialBase);
meshp33.castShadow = true;
meshp33.position.set(0, 0, 0);
meshp33.rotation.set(0, 0, 5.1);

const meshp4 = new THREE.Mesh(geometriaBase, materialBase);
meshp4.castShadow = true;
meshp4.position.set(0, 0, 0);
meshp4.rotation.set(0, 0, 2.355);

const meshp44 = new THREE.Mesh(geometriaBase, materialBase);
meshp44.castShadow = true;
meshp44.position.set(0, 0, 0);
meshp44.rotation.set(0, 0, 1.2);

const flor2agrupada = new THREE.Group();
flor2agrupada.add(mesh02, mesh021, meshp2, meshp22, meshp3, meshp33, meshp4, meshp44);

const flor3agrupada = flor2agrupada.clone();
flor3agrupada.position.set(0, 0, 1);
flor3agrupada.rotation.set(0, 0, 5);
flor3agrupada.scale.set(0.5, 0.5, 0.5);

const flor4agrupada = flor2agrupada.clone();
flor4agrupada.position.set(0, 0, 0.5);
flor4agrupada.rotation.set(0, 0, 5);
flor4agrupada.scale.set(0.8, 0.8, 0.8);

const flor5agrupada = flor2agrupada.clone();
flor5agrupada.position.set(0, 0, 0.3);
flor5agrupada.rotation.set(0, 0, 9);
flor5agrupada.scale.set(0.6, 0.6, 0.6);

const completeFlower = new THREE.Group();
completeFlower.add(flor2agrupada, flor3agrupada, flor4agrupada, flor5agrupada);
completeFlower.scale.set(0.12, 0.12, 0.3);


// --- TABLAS / NIVELES Y ESTRUCTURA DE MADERA ---

const materialMadera = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.8 });

// Repisas de los Niveles
const nivelInferiorGeo = new THREE.BoxGeometry(11.8, 0.8, 3);
const nivelInferior = new THREE.Mesh(nivelInferiorGeo, materialMadera);
nivelInferior.position.set(0, 0.4, 0);
nivelInferior.receiveShadow = true;
nivelInferior.castShadow = true;
this.arcor.add(nivelInferior);

const nivelMedioGeo = new THREE.BoxGeometry(11.8, 0.4, 2.5);
const nivelMedio = new THREE.Mesh(nivelMedioGeo, materialMadera);
nivelMedio.position.set(0, 2.2, 0);
nivelMedio.receiveShadow = true;
nivelMedio.castShadow = true;
this.arcor.add(nivelMedio);

const nivelSuperiorGeo = new THREE.BoxGeometry(11.8, 0.4, 2);
const nivelSuperior = new THREE.Mesh(nivelSuperiorGeo, materialMadera);
nivelSuperior.position.set(0, 4.2, 0);
nivelSuperior.receiveShadow = true;
nivelSuperior.castShadow = true;
this.arcor.add(nivelSuperior);

// Base frontal de madera (soporte para flores del suelo)
const soporteBaseFrontalGeo = new THREE.BoxGeometry(11.8, 0.3, 0.4);
const soporteBaseFrontal = new THREE.Mesh(soporteBaseFrontalGeo, materialMadera);
soporteBaseFrontal.position.set(0, 0.15, 1.5);
soporteBaseFrontal.receiveShadow = true;
soporteBaseFrontal.castShadow = true;
this.arcor.add(soporteBaseFrontal);


// ESTRUCTURA DE MADERA PARA EL ARCO Y CRUCES

// Soporte Columna Izquierda
const marcoColIzqGeo = new THREE.BoxGeometry(0.8, 4.8, 0.3);
const marcoColIzq = new THREE.Mesh(marcoColIzqGeo, materialMadera);
marcoColIzq.position.set(-6.0, 2.4, -0.05);
marcoColIzq.receiveShadow = true;
marcoColIzq.castShadow = true;
this.arcor.add(marcoColIzq);

// Soporte Columna Derecha
const marcoColDerGeo = new THREE.BoxGeometry(0.8, 4.8, 0.3);
const marcoColDer = new THREE.Mesh(marcoColDerGeo, materialMadera);
marcoColDer.position.set(6.0, 2.4, -0.05);
marcoColDer.receiveShadow = true;
marcoColDer.castShadow = true;
this.arcor.add(marcoColDer);

// Soporte Diagonal Techo Izquierdo
const marcoDiagIzqGeo = new THREE.BoxGeometry(7.0, 0.5, 0.3);
const marcoDiagIzq = new THREE.Mesh(marcoDiagIzqGeo, materialMadera);
marcoDiagIzq.position.set(-3.0, 7.1, -0.05);
marcoDiagIzq.rotation.z = Math.atan2(4.2, 5.5);
marcoDiagIzq.receiveShadow = true;
marcoDiagIzq.castShadow = true;
this.arcor.add(marcoDiagIzq);

// Soporte Diagonal Techo Derecho
const marcoDiagDerGeo = new THREE.BoxGeometry(7.0, 0.5, 0.3);
const marcoDiagDer = new THREE.Mesh(marcoDiagDerGeo, materialMadera);
marcoDiagDer.position.set(3.0, 7.1, -0.05);
marcoDiagDer.rotation.z = -Math.atan2(4.2, 5.5);
marcoDiagDer.receiveShadow = true;
marcoDiagDer.castShadow = true;
this.arcor.add(marcoDiagDer);

// Soporte Cruz Central (Más alta proporcionalmente)
const marcoCruzCentroVGeo = new THREE.BoxGeometry(0.4, 3.2, 0.3);
const marcoCruzCentroV = new THREE.Mesh(marcoCruzCentroVGeo, materialMadera);
marcoCruzCentroV.position.set(0, 10.9, -0.05);
marcoCruzCentroV.receiveShadow = true;
marcoCruzCentroV.castShadow = true;
this.arcor.add(marcoCruzCentroV);

const marcoCruzCentroHGeo = new THREE.BoxGeometry(2.2, 0.4, 0.3);
const marcoCruzCentroH = new THREE.Mesh(marcoCruzCentroHGeo, materialMadera);
marcoCruzCentroH.position.set(0, 11.5, -0.05);
marcoCruzCentroH.receiveShadow = true;
marcoCruzCentroH.castShadow = true;
this.arcor.add(marcoCruzCentroH);

// Soporte Cruz Izquierda (Más alta proporcionalmente)
const marcoCruzIzqVGeo = new THREE.BoxGeometry(0.4, 3.2, 0.3);
const marcoCruzIzqV = new THREE.Mesh(marcoCruzIzqVGeo, materialMadera);
marcoCruzIzqV.position.set(-6, 6.6, -0.05);
marcoCruzIzqV.receiveShadow = true;
marcoCruzIzqV.castShadow = true;
this.arcor.add(marcoCruzIzqV);

const marcoCruzIzqHGeo = new THREE.BoxGeometry(2.2, 0.4, 0.3);
const marcoCruzIzqH = new THREE.Mesh(marcoCruzIzqHGeo, materialMadera);
marcoCruzIzqH.position.set(-6, 7.2, -0.05);
marcoCruzIzqH.receiveShadow = true;
marcoCruzIzqH.castShadow = true;
this.arcor.add(marcoCruzIzqH);

// Soporte Cruz Derecha (Más alta proporcionalmente)
const marcoCruzDerVGeo = new THREE.BoxGeometry(0.4, 3.2, 0.3);
const marcoCruzDerV = new THREE.Mesh(marcoCruzDerVGeo, materialMadera);
marcoCruzDerV.position.set(6, 6.6, -0.05);
marcoCruzDerV.receiveShadow = true;
marcoCruzDerV.castShadow = true;
this.arcor.add(marcoCruzDerV);

const marcoCruzDerHGeo = new THREE.BoxGeometry(2.2, 0.4, 0.3);
const marcoCruzDerH = new THREE.Mesh(marcoCruzDerHGeo, materialMadera);
marcoCruzDerH.position.set(6, 7.2, -0.05);
marcoCruzDerH.receiveShadow = true;
marcoCruzDerH.castShadow = true;
this.arcor.add(marcoCruzDerH);


// --- BASE DE CEMPASÚCHIL EN EL FRENTE ---

const b1 = completeFlower.clone(); b1.position.set(-5.5, 0.3, 1.5); 
this.arcor.add(b1);
const b2 = completeFlower.clone(); b2.position.set(-4.5, 0.3, 1.5); 
this.arcor.add(b2);
const b3 = completeFlower.clone(); b3.position.set(-3.5, 0.3, 1.5); 
this.arcor.add(b3);
const b4 = completeFlower.clone(); b4.position.set(-2.5, 0.3, 1.5); 
this.arcor.add(b4);
const b5 = completeFlower.clone(); b5.position.set(-1.5, 0.3, 1.5); 
this.arcor.add(b5);
const b6 = completeFlower.clone(); b6.position.set(-0.5, 0.3, 1.5); 
this.arcor.add(b6);
const b7 = completeFlower.clone(); b7.position.set(0.5, 0.3, 1.5); 
this.arcor.add(b7);
const b8 = completeFlower.clone(); b8.position.set(1.5, 0.3, 1.5); 
this.arcor.add(b8);
const b9 = completeFlower.clone(); b9.position.set(2.5, 0.3, 1.5); 
this.arcor.add(b9);
const b10 = completeFlower.clone(); b10.position.set(3.5, 0.3, 1.5); 
this.arcor.add(b10);
const b11 = completeFlower.clone(); b11.position.set(4.5, 0.3, 1.5); 
this.arcor.add(b11);
const b12 = completeFlower.clone(); b12.position.set(5.5, 0.3, 1.5); 
this.arcor.add(b12);


// --- COLUMNAS LATERALES Y ARCO ---

// Columna Izquierda
const colIzq1 = completeFlower.clone(); colIzq1.position.set(-6.2, 0.5, 0); 
this.arcor.add(colIzq1);
const colIzq2 = completeFlower.clone(); colIzq2.position.set(-5.8, 0.5, 0); 
this.arcor.add(colIzq2);
const colIzq3 = completeFlower.clone(); colIzq3.position.set(-6.2, 1.1, 0); 
this.arcor.add(colIzq3);
const colIzq4 = completeFlower.clone(); colIzq4.position.set(-5.8, 1.1, 0); 
this.arcor.add(colIzq4);
const colIzq5 = completeFlower.clone(); colIzq5.position.set(-6.2, 1.7, 0); 
this.arcor.add(colIzq5);
const colIzq6 = completeFlower.clone(); colIzq6.position.set(-5.8, 1.7, 0); 
this.arcor.add(colIzq6);
const colIzq7 = completeFlower.clone(); colIzq7.position.set(-6.2, 2.3, 0); 
this.arcor.add(colIzq7);
const colIzq8 = completeFlower.clone(); colIzq8.position.set(-5.8, 2.3, 0); 
this.arcor.add(colIzq8);
const colIzq9 = completeFlower.clone(); colIzq9.position.set(-6.2, 2.9, 0); 
this.arcor.add(colIzq9);
const colIzq10 = completeFlower.clone(); colIzq10.position.set(-5.8, 2.9, 0); 
this.arcor.add(colIzq10);
const colIzq11 = completeFlower.clone(); colIzq11.position.set(-6.2, 3.5, 0); 
this.arcor.add(colIzq11);
const colIzq12 = completeFlower.clone(); colIzq12.position.set(-5.8, 3.5, 0); 
this.arcor.add(colIzq12);
const colIzq13 = completeFlower.clone(); colIzq13.position.set(-6.2, 4.1, 0); 
this.arcor.add(colIzq13);
const colIzq14 = completeFlower.clone(); colIzq14.position.set(-5.8, 4.1, 0); 
this.arcor.add(colIzq14);
const colIzq15 = completeFlower.clone(); colIzq15.position.set(-6.2, 4.7, 0); 
this.arcor.add(colIzq15);
const colIzq16 = completeFlower.clone(); colIzq16.position.set(-5.8, 4.7, 0); 
this.arcor.add(colIzq16);

// Columna Derecha
const colDer1 = completeFlower.clone(); colDer1.position.set(5.8, 0.5, 0); 
this.arcor.add(colDer1);
const colDer2 = completeFlower.clone(); colDer2.position.set(6.2, 0.5, 0); 
this.arcor.add(colDer2);
const colDer3 = completeFlower.clone(); colDer3.position.set(5.8, 1.1, 0); 
this.arcor.add(colDer3);
const colDer4 = completeFlower.clone(); colDer4.position.set(6.2, 1.1, 0); 
this.arcor.add(colDer4);
const colDer5 = completeFlower.clone(); colDer5.position.set(5.8, 1.7, 0); 
this.arcor.add(colDer5);
const colDer6 = completeFlower.clone(); colDer6.position.set(6.2, 1.7, 0); 
this.arcor.add(colDer6);
const colDer7 = completeFlower.clone(); colDer7.position.set(5.8, 2.3, 0); 
this.arcor.add(colDer7);
const colDer8 = completeFlower.clone(); colDer8.position.set(6.2, 2.3, 0); 
this.arcor.add(colDer8);
const colDer9 = completeFlower.clone(); colDer9.position.set(5.8, 2.9, 0); 
this.arcor.add(colDer9);
const colDer10 = completeFlower.clone(); colDer10.position.set(6.2, 2.9, 0); 
this.arcor.add(colDer10);
const colDer11 = completeFlower.clone(); colDer11.position.set(5.8, 3.5, 0); 
this.arcor.add(colDer11);
const colDer12 = completeFlower.clone(); colDer12.position.set(6.2, 3.5, 0); 
this.arcor.add(colDer12);
const colDer13 = completeFlower.clone(); colDer13.position.set(5.8, 4.1, 0); 
this.arcor.add(colDer13);
const colDer14 = completeFlower.clone(); colDer14.position.set(6.2, 4.1, 0); 
this.arcor.add(colDer14);
const colDer15 = completeFlower.clone(); colDer15.position.set(5.8, 4.7, 0); 
this.arcor.add(colDer15);
const colDer16 = completeFlower.clone(); colDer16.position.set(6.2, 4.7, 0); 
this.arcor.add(colDer16);

// Diagonal Izquierda
const diagIzq1 = completeFlower.clone(); diagIzq1.position.set(-5.5, 5.1, 0); 
this.arcor.add(diagIzq1);
const diagIzq2 = completeFlower.clone(); diagIzq2.position.set(-5.0, 5.5, 0); 
this.arcor.add(diagIzq2);
const diagIzq3 = completeFlower.clone(); diagIzq3.position.set(-4.5, 5.9, 0); 
this.arcor.add(diagIzq3);
const diagIzq4 = completeFlower.clone(); diagIzq4.position.set(-4.0, 6.3, 0); 
this.arcor.add(diagIzq4);
const diagIzq5 = completeFlower.clone(); diagIzq5.position.set(-3.5, 6.7, 0); 
this.arcor.add(diagIzq5);
const diagIzq6 = completeFlower.clone(); diagIzq6.position.set(-3.0, 7.1, 0); 
this.arcor.add(diagIzq6);
const diagIzq7 = completeFlower.clone(); diagIzq7.position.set(-2.5, 7.5, 0); 
this.arcor.add(diagIzq7);
const diagIzq8 = completeFlower.clone(); diagIzq8.position.set(-2.0, 7.9, 0); 
this.arcor.add(diagIzq8);
const diagIzq9 = completeFlower.clone(); diagIzq9.position.set(-1.5, 8.3, 0); 
this.arcor.add(diagIzq9);
const diagIzq10 = completeFlower.clone(); diagIzq10.position.set(-1.0, 8.7, 0); 
this.arcor.add(diagIzq10);
const diagIzq11 = completeFlower.clone(); diagIzq11.position.set(-0.5, 9.1, 0); 
this.arcor.add(diagIzq11);

// Diagonal Derecha
const diagDer1 = completeFlower.clone(); diagDer1.position.set(5.5, 5.1, 0); 
this.arcor.add(diagDer1);
const diagDer2 = completeFlower.clone(); diagDer2.position.set(5.0, 5.5, 0); 
this.arcor.add(diagDer2);
const diagDer3 = completeFlower.clone(); diagDer3.position.set(4.5, 5.9, 0); 
this.arcor.add(diagDer3);
const diagDer4 = completeFlower.clone(); diagDer4.position.set(4.0, 6.3, 0); 
this.arcor.add(diagDer4);
const diagDer5 = completeFlower.clone(); diagDer5.position.set(3.5, 6.7, 0); 
this.arcor.add(diagDer5);
const diagDer6 = completeFlower.clone(); diagDer6.position.set(3.0, 7.1, 0); 
this.arcor.add(diagDer6);
const diagDer7 = completeFlower.clone(); diagDer7.position.set(2.5, 7.5, 0); 
this.arcor.add(diagDer7);
const diagDer8 = completeFlower.clone(); diagDer8.position.set(2.0, 7.9, 0); 
this.arcor.add(diagDer8);
const diagDer9 = completeFlower.clone(); diagDer9.position.set(1.5, 8.3, 0); 
this.arcor.add(diagDer9);
const diagDer10 = completeFlower.clone(); diagDer10.position.set(1.0, 8.7, 0); 
this.arcor.add(diagDer10);
const diagDer11 = completeFlower.clone(); diagDer11.position.set(0.5, 9.1, 0); 
this.arcor.add(diagDer11);

}

    getObject() {
        return this.arcor;
    }
}