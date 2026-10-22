
import * as THREE from 'three';



export function crearPapelPicado() {

    
    const grupo = new THREE.Group();

    
    const geometria = new THREE.PlaneGeometry(4, 2.25);

    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    });

    const rectangulo = new THREE.Mesh(geometria, material);

    rectangulo.position.set(0, 0, 0);

    grupo.add(rectangulo);

    // CARGAR LA IMAGEN
    const cargador = new THREE.TextureLoader();

    cargador.load(
        './js/papel rosa.png',

        function(textura) {
            textura.colorSpace = THREE.SRGBColorSpace;
            material.map = textura;
            material.color.set(0xffffff);
            material.needsUpdate = true;
        },

        undefined,

        function(error) {
            console.error('No se pudo cargar la imagen:', error);
        }
    );

    return grupo;
}
