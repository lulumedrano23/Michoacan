import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

export class naranja {

    constructor() {

        // ESCENA
        this.scene = new THREE.Scene();

        this.scene.background = new THREE.Color(0x000000);

        // CÁMARA
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.camera.position.set(0, 2, 8);

        // RENDERIZADOR
        this.renderer = new THREE.WebGLRenderer();

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        document.body.appendChild(this.renderer.domElement);

        // CONTROLES
        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );

        // LUZ AMBIENTAL
        const ambientLight = new THREE.AmbientLight(
            0xffffff,
            0.4
        );

        this.scene.add(ambientLight);

        // LUZ DIRECCIONAL
        const luz = new THREE.DirectionalLight(
            0xffffff,
            1
        );

        luz.position.set(5, 10, 5);
        luz.castShadow = true;

        luz.shadow.mapSize.width = 1024;
        luz.shadow.mapSize.height = 1024;

        this.scene.add(luz);

        // CUADRÍCULA
        const gridHelper = new THREE.GridHelper(20, 20);

        this.scene.add(gridHelper);

        // EJES
        const axesHelper = new THREE.AxesHelper(5);

        this.scene.add(axesHelper);

        // PLANO
        const planeGeometry = new THREE.PlaneGeometry(20, 20);

        const planeMaterial = new THREE.MeshLambertMaterial({
            color: 0x7fb069
        });

        const plane = new THREE.Mesh(
            planeGeometry,
            planeMaterial
        );

        plane.rotation.x = -Math.PI / 2;
        plane.position.y = 0;
        plane.receiveShadow = true;

        this.scene.add(plane);

        // GRUPO PRINCIPAL DE LA NARANJA
        this.naranja = new THREE.Group();

        // CUERPO DE LA NARANJA
        const naranjaGeometry = new THREE.SphereGeometry(
            0.7,
            32,
            32
        );

        const naranjaMaterial = new THREE.MeshLambertMaterial({
            color: 0xff8c00
        });

        const naranjaCuerpo = new THREE.Mesh(
            naranjaGeometry,
            naranjaMaterial
        );

        naranjaCuerpo.position.set(0, 0.7, 0);
        naranjaCuerpo.castShadow = true;

        this.naranja.add(naranjaCuerpo);

        // TALLO
        const talloNaranjaGeometry = new THREE.CylinderGeometry(
            0.04,
            0.05,
            0.2,
            12
        );

        const talloNaranjaMaterial = new THREE.MeshLambertMaterial({
            color: 0x5c3a21
        });

        const talloNaranja = new THREE.Mesh(
            talloNaranjaGeometry,
            talloNaranjaMaterial
        );

        talloNaranja.position.set(0, 1.42, 0);

        this.naranja.add(talloNaranja);

        // HOJA
        const hojaNaranjaGeometry = new THREE.SphereGeometry(
            0.18,
            16,
            16
        );

        const hojaNaranjaMaterial = new THREE.MeshLambertMaterial({
            color: 0x228b22
        });

        const hojaNaranja = new THREE.Mesh(
            hojaNaranjaGeometry,
            hojaNaranjaMaterial
        );

        hojaNaranja.scale.set(1.5, 0.3, 0.6);
        hojaNaranja.position.set(0.2, 1.45, 0);
        hojaNaranja.rotation.z = -0.4;

        this.naranja.add(hojaNaranja);

        // AGREGAR NARANJA COMPLETA A LA ESCENA
        this.scene.add(this.naranja);

        // ANIMACIÓN
        const animate = () => {

            requestAnimationFrame(animate);

            this.controls.update();

            this.renderer.render(
                this.scene,
                this.camera
            );

        };

        animate();

    }

    getObject() {
        return this.naranja;
    }

}