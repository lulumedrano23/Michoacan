import * as THREE from 'three';
import {OrbitControls} from 'OrbitControls';
import { pino } from 'pino';
import { casa } from 'casa';
import { cruces } from 'cruces';
import { veladora } from 'veladora';
import { arcor } from 'arcor';
import { botella1 } from 'botella1';
import { veladoras } from 'veladoras';
import { botella4 } from 'botella4';
import { botella2 } from 'botella2';
import { botella3 } from 'botella3';
import { veladora2 } from 'veladora2';
import { cruz } from 'cruz';
import { cruzz } from 'cruzz';
import { cruzzz } from 'cruzzz';
import { pan1 } from 'pan1';
import { naranja } from 'naranja';
import { manzana } from 'manzana';
import { texto } from 'texto';
import { crearVaso } from 'vasomodelo';
import { crearTamal } from 'tamalmodelo';
import { crearpape } from 'papemodelo';
import { crearPapelPicado } from 'pacuamodelo';
import { crearCalavera } from 'calaverainstancia';
import { crearVeladora} from 'veladoramodelo';
import { crearCalavera1 } from 'calaverainstancia1';
import { crearPan3 } from 'pan3instancia';
import { crearPanAntropomorfo } from 'pan4instancia';
import { cana } from './cana.js';
import { anima } from './anima.js';
import { ataud } from './ataud.js';
import { crearSalero } from 'saleroinstancia';
import { petalos } from './petalos.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//agregamos controles orbit
const controls=new OrbitControls(camera,renderer.domElement);

//Agregamos Grid para apoyo visual
const size=20;
const divisions=20;
const gridHelper=new THREE.GridHelper(size,divisions);
scene.add(gridHelper);

//Agregamos ejes a toda la escena
const axesHelper=new THREE.AxesHelper(5);
scene.add(axesHelper);

//Seccion para iniciar nuestro plano y sus configuraciones
const planeGeometry = new THREE.PlaneGeometry(25,25);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xEAA221});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y=0
plane.receiveShadow=true;
scene.add(plane);   //siempre se agrega a la escena, de lo contrario no aparece

//props
const petalosPiso = new petalos();
petalosPiso.petalos.position.set(0, 0, 0);
scene.add(petalosPiso.petalos);

// Salero 
const objSalero = crearSalero();
objSalero.position.set(1.5, 0, 1.5);
objSalero.scale.setScalar(0.5);
scene.add(objSalero);

//ataud
const ataud1 = new ataud();
ataud1.ataud.position.set(0, 0, 10);
ataud1.ataud.scale.setScalar(1);
scene.add(ataud1.ataud);

//pananima
const panAnima = new anima();
panAnima.anima.position.set(0, 0, 7);
panAnima.anima.scale.setScalar(1);
scene.add(panAnima.anima);

const panAnima1 = new anima();
panAnima1.anima.position.set(0, 0, 3);
panAnima1.anima.scale.setScalar(1);
scene.add(panAnima1.anima);

//caña
const cana1 = new cana();
cana1.cana.position.set(4, 0, -3);
cana1.cana.scale.setScalar(1);
scene.add(cana1.cana);

const cana2 = new cana();
cana2.cana.position.set(4, 0, -1);
cana2.cana.scale.setScalar(1);
scene.add(cana2.cana);

const cana3 = new cana();
cana3.cana.position.set(4, 0, 1);
cana3.cana.scale.setScalar(1);
scene.add(cana3.cana);

const cana4 = new cana();
cana4.cana.position.set(4, 0, 3);
cana4.cana.scale.setScalar(1);
scene.add(cana4.cana);

const cana5 = new cana();
cana5.cana.position.set(4, 0, 5);
cana5.cana.scale.setScalar(1);
scene.add(cana5.cana);

const cana6 = new cana();
cana6.cana.position.set(-4, 0, 3);
cana6.cana.scale.setScalar(1);
scene.add(cana6.cana);

const cana7 = new cana();
cana7.cana.position.set(-4, 0, 1);
cana7.cana.scale.setScalar(1);
scene.add(cana7.cana);

const cana8 = new cana();
cana8.cana.position.set(-4, 0, -3);
cana8.cana.scale.setScalar(1);
scene.add(cana8.cana);

const cana9 = new cana();
cana9.cana.position.set(-4, 0, -1);
cana9.cana.scale.setScalar(1);
scene.add(cana9.cana);

const cana10 = new cana();
cana10.cana.position.set(-4, 0, 5);
cana10.cana.scale.setScalar(1);
scene.add(cana10.cana);

const texto1 = new texto();
texto1.texto.position.set(0, 17, -10);
scene.add(texto1.texto);
//manzana
const manzana1 = new manzana();
manzana1.manzana.scale.set(0.5,0.5,0.5);
manzana1.manzana.position.set(4, 4.4, -10);
scene.add(manzana1.manzana);

const manzana2 = new manzana();
manzana2.manzana.scale.set(0.5,0.5,0.5);
manzana2.manzana.position.set(3, 0.9, -10);
scene.add(manzana2.manzana);
//naranja
const naranja1 = new naranja();
naranja1.naranja.scale.set(0.5,0.5,0.5);
naranja1.naranja.position.set(-4, 4.4, -10);
scene.add(naranja1.naranja);

const naranja2 = new naranja();
naranja2.naranja.scale.set(0.5,0.5,0.5);
naranja2.naranja.position.set(-3, 0.9, -10);
scene.add(naranja2.naranja);
//veladorasgio
const veladora1 = new veladora();
veladora1.veladora.position.set(-4, 0, -7.5);
scene.add(veladora1.veladora);

const veladora6 = new veladora();
veladora6.veladora.position.set(-2, 0, -7.5);
scene.add(veladora6.veladora);

const veladora3 = new veladora();
veladora3.veladora.position.set(0, 0, -7.5);
scene.add(veladora3.veladora);

const veladora4 = new veladora();
veladora4.veladora.position.set(2, 0, -7.5);
scene.add(veladora4.veladora);

const veladora5 = new veladora();
veladora5.veladora.position.set(4, 0, -7.5);
scene.add(veladora5.veladora);

//Base de la ofrenda
const arcor1 = new arcor();
arcor1.arcor.position.set(0, 0, -10);
scene.add(arcor1.arcor);

//Botellas Lu
//INSTANCIAS de tequila
const tequila = new botella1();
tequila.botella1.scale.set(0.2,0.2,0.2);
tequila.botella1.position.set(-1.5, 0.8, -10);
scene.add(tequila.botella1);


const tequila2 = new botella1();
tequila2.botella1.scale.set(0.2,0.2,0.2);
tequila2.botella1.position.set(1.5, 0.8, -10);
scene.add(tequila2.botella1);

//botella 2 lu
//instancias de mezcal
const mezcal = new botella2();
mezcal.botella2.scale.set(0.3,0.3,0.3);
mezcal.botella2.position.set(-1.5, 4.4, -10);
scene.add(mezcal.botella2);

const mezcal2 = new botella2();
mezcal2.botella2.scale.set(0.3,0.3,0.3);
mezcal2.botella2.position.set(1.5, 4.4, -10);
scene.add(mezcal2.botella2);

//botella 3 lu
//instancias de botella3
const cerveza = new botella3();
cerveza.botella3.scale.set(0.3,0.3,0.3);
cerveza.botella3.position.set(-2, 2.3, -10);
scene.add(cerveza.botella3);

const cerveza2 = new botella3();
cerveza2.botella3.scale.set(0.3,0.3,0.3);
cerveza2.botella3.position.set(2, 2.3, -10);
scene.add(cerveza2.botella3);

//botella 4
const pulque = new botella4();
pulque.botella4.scale.set(0.3,0.3,0.3);
pulque.botella4.position.set(-4, 2.3, -10);
scene.add(pulque.botella4);

const pulque2 = new botella4();
pulque2.botella4.scale.set(0.3,0.3,0.3);
pulque2.botella4.position.set(4, 2.3, -10);
scene.add(pulque2.botella4);

//instancias de cirio
const cirio = new veladoras();
cirio.veladoras.scale.set(0.2,0.2,0.2);
cirio.veladoras.position.set(-3, 4.5, -10);
scene.add(cirio.veladoras);

const cirio2 = new veladoras();
cirio2.veladoras.scale.set(0.2,0.2,0.2);
cirio2.veladoras.position.set(3, 4.5, -10);
scene.add(cirio2.veladoras);


//instancias de veladora2
const veladorados1 = new veladora2();
veladorados1.veladora2.scale.set(0.2,0.2,0.2);
veladorados1.veladora2.position.set(6, 0, -7.5);
scene.add(veladorados1.veladora2);

const veladorados2 = new veladora2();
veladorados2.veladora2.scale.set(0.2,0.2,0.2);
veladorados2.veladora2.position.set(6, 0, -5.5);
scene.add(veladorados2.veladora2);

const veladorados3 = new veladora2();
veladorados3.veladora2.scale.set(0.2,0.2,0.2);
veladorados3.veladora2.position.set(6, 0, -3.5);
scene.add(veladorados3.veladora2);

const veladorados4 = new veladora2();
veladorados4.veladora2.scale.set(0.2,0.2,0.2);
veladorados4.veladora2.position.set(6, 0, -1.5);
scene.add(veladorados4.veladora2);

const veladorados5 = new veladora2();
veladorados5.veladora2.scale.set(0.2,0.2,0.2);
veladorados5.veladora2.position.set(6, 0, 1.5);
scene.add(veladorados5.veladora2);

const veladorados6 = new veladora2();
veladorados6.veladora2.scale.set(0.2,0.2,0.2);
veladorados6.veladora2.position.set(6, 0, 3.5);
scene.add(veladorados6.veladora2);

const veladorados7 = new veladora2();
veladorados7.veladora2.scale.set(0.2,0.2,0.2);
veladorados7.veladora2.position.set(6, 0, 5.5);
scene.add(veladorados7.veladora2);
//izq
const veladorados8 = new veladora2();
veladorados8.veladora2.scale.set(0.2,0.2,0.2);
veladorados8.veladora2.position.set(-6, 0, -7.5);
scene.add(veladorados8.veladora2);

const veladorados9 = new veladora2();
veladorados9.veladora2.scale.set(0.2,0.2,0.2);
veladorados9.veladora2.position.set(-6, 0, -5.5);
scene.add(veladorados9.veladora2);

const veladorados10 = new veladora2();
veladorados10.veladora2.scale.set(0.2,0.2,0.2);
veladorados10.veladora2.position.set(-6, 0, -3.5);
scene.add(veladorados10.veladora2);

const veladorados11 = new veladora2();
veladorados11.veladora2.scale.set(0.2,0.2,0.2);
veladorados11.veladora2.position.set(-6, 0, -1.5);
scene.add(veladorados11.veladora2);

const veladorados12 = new veladora2();
veladorados12.veladora2.scale.set(0.2,0.2,0.2);
veladorados12.veladora2.position.set(-6, 0, 1.5);
scene.add(veladorados12.veladora2);

const veladorados13 = new veladora2();
veladorados13.veladora2.scale.set(0.2,0.2,0.2);
veladorados13.veladora2.position.set(-6, 0, 3.5);
scene.add(veladorados13.veladora2);

const veladorados14 = new veladora2();
veladorados14.veladora2.scale.set(0.2,0.2,0.2);
veladorados14.veladora2.position.set(-6, 0, 5.5);
scene.add(veladorados14.veladora2);


//Cruz izquierda
const cruzIzquierda = new cruz();
cruzIzquierda.cruz.position.set(-6, 4.5, -10);
scene.add(cruzIzquierda.cruz);

//Cruz central
const cruzCentral = new cruzz();
cruzCentral.cruzz.scale.set(0.69,0.69,0.69);
cruzCentral.cruzz.position.set(0, 9, -10);
scene.add(cruzCentral.cruzz);

//Cruz derecha
const cruzDerecha = new cruzzz();
cruzDerecha.cruzzz.position.set(6, 4.5, -10);
scene.add(cruzDerecha.cruzzz);
//Eliu
// 1. Calaverita al fondo centro
const objCalavera = crearCalavera();
objCalavera.position.set(0, 13, -10);
objCalavera.scale.setScalar(2);
scene.add(objCalavera);

//calaveraoriginal
const objCalavera1 = crearCalavera1();
objCalavera1.position.set(-4.9, 1.1, -10);
objCalavera1.scale.setScalar(0.3);
scene.add(objCalavera1);

const objCalavera2 = crearCalavera1();
objCalavera2.position.set(4.9, 1.1, -10);
objCalavera2.scale.setScalar(0.3);
scene.add(objCalavera2);

const objCalavera3 = crearCalavera1();
objCalavera3.position.set(0, 0.3, -7);
objCalavera3.scale.setScalar(0.3);
scene.add(objCalavera3);

const objCalavera4 = crearCalavera1();
objCalavera4.position.set(0, 0.3, -3);
objCalavera4.scale.setScalar(0.3);
scene.add(objCalavera4);

const objCalavera5 = crearCalavera1();
objCalavera5.position.set(0, 0.3, 1);
objCalavera5.scale.setScalar(0.3);
scene.add(objCalavera5);

const objCalavera6 = crearCalavera1();
objCalavera6.position.set(0, 0.3, 5);
objCalavera6.scale.setScalar(0.3);
scene.add(objCalavera6);

//pan1
const pan = new pan1();
pan.pan1.position.set(0, 2, -10);
scene.add(pan.pan1);

const pan0 = new pan1();
pan0.pan1.position.set(0, 4, -10);
scene.add(pan0.pan1);

const pan01 = new pan1();
pan01.pan1.position.set(0, 0.4, -10);
scene.add(pan01.pan1);

// 4. Pan 3 enfrente a la izquierda
const objPan3 = crearPan3();
objPan3.position.set(0, 0, -5.5);
scene.add(objPan3);

const objPan4 = crearPan3();
objPan4.position.set(0, 0, -1.5);
scene.add(objPan4);


// 5. Pan antropomorfo (Pan 4) al centro frente
const objPanHumano = crearPanAntropomorfo();
objPanHumano.position.set(-5, 0, 7);
scene.add(objPanHumano);

const objPanHumano1 = crearPanAntropomorfo();
objPanHumano1.position.set(5, 0, 7);
scene.add(objPanHumano1);

//salva VASO
const vaso1 = crearVaso();
vaso1.position.set(2.3, 4.4, -10);
vaso1.scale.setScalar(0.3);
scene.add(vaso1);

const vaso2 = crearVaso();
vaso2.position.set(-2.3, 4.4, -10);
vaso2.scale.setScalar(0.3);
scene.add(vaso2);

//tamal
const tamal2 = crearTamal();
tamal2.position.set(-4, 0.9, -10);
tamal2.scale.setScalar(0.3);
scene.add(tamal2);

const tamal3 = crearTamal();
tamal3.position.set(4, 0.9, -10);
tamal3.scale.setScalar(0.3);
scene.add(tamal3);

const tamal4 = crearTamal();
tamal4.position.set(-3, 2.5, -10);
tamal4.scale.setScalar(0.3);
scene.add(tamal4);

const tamal5 = crearTamal();
tamal5.position.set(3, 2.5, -10);
tamal5.scale.setScalar(0.3);
scene.add(tamal5);
//papemodelo
const papelito2 = crearpape();
papelito2.position.set(0,0, -6.5);
papelito2.rotation.x = Math.PI / 2;
papelito2.rotation.z = Math.PI / 1;
papelito2.scale.set(2, 2, 2);
scene.add(papelito2);

const papelito3 = crearpape();
papelito3.position.set(0,0,-2.5);
papelito3.rotation.x = Math.PI / 2;
papelito3.rotation.z = Math.PI / 1;
papelito3.scale.set(2, 2, 2);
scene.add(papelito3);

const papelito4 = crearpape();
papelito4.position.set(0,0,1.5);
papelito4.rotation.x = Math.PI / 2;
papelito4.rotation.z = Math.PI / 1;
papelito4.scale.set(2, 2, 2);
scene.add(papelito4);

const papelito5 = crearpape();
papelito5.position.set(0,0,5.5);
papelito5.rotation.x = Math.PI / 2;
papelito5.rotation.z = Math.PI / 1;
papelito5.scale.set(2, 2, 2);
scene.add(papelito5);

const papelito6 = crearpape();
papelito6.position.set(0,0,9.5);
papelito6.rotation.x = Math.PI / 2;
papelito6.rotation.z = Math.PI / 1;
papelito6.scale.set(2, 2, 2);
scene.add(papelito6);

//papel que cuelga
const papel1 = crearPapelPicado();
papel1.position.set(-4.9, 3.84, -8.99);
papel1.scale.setScalar(0.5);
scene.add(papel1);

const papel2 = crearPapelPicado();
papel2.position.set(4.9, 3.84, -8.99);
papel2.scale.setScalar(0.5);
scene.add(papel2);

const papel3 = crearPapelPicado();
papel3.position.set(0, 3.84, -8.99);
papel3.scale.setScalar(0.5);
scene.add(papel3);

//veladora
const vela3 = crearVeladora();
vela3.position.set(5, 0, 8);
vela3.scale.setScalar(0.2);
scene.add(vela3);

const vela4 = crearVeladora();
vela4.position.set(-5, 0, 8);
vela4.scale.setScalar(0.2);
scene.add(vela4);

const vela5 = crearVeladora();
vela5.position.set(-5, 2.3, -10);
vela5.scale.setScalar(0.2);
scene.add(vela5);

const vela6 = crearVeladora();
vela6.position.set(5, 2.3, -10);
vela6.scale.setScalar(0.2);
scene.add(vela6);

const vela7 = crearVeladora();
vela7.position.set(-2.2, 0.8, -10);
vela7.scale.setScalar(0.2);
scene.add(vela7);

const vela8 = crearVeladora();
vela8.position.set(2.2, 0.8, -10);
vela8.scale.setScalar(0.2);
scene.add(vela8);

const vela9 = crearVeladora();
vela9.position.set(4.8, 4.4, -10);
vela9.scale.setScalar(0.2);
scene.add(vela9);

const vela10 = crearVeladora();
vela10.position.set(-4.8, 4.4, -10);
vela10.scale.setScalar(0.2);
scene.add(vela10);
const directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
directionalLight.position.set(5,8,5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight);

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);

}

animate();