import * as THREE from 'three';

export function crearPan3() {

    const panGrupo = new THREE.Group();

    // MATERIALES
    const materialPan = new THREE.MeshStandardMaterial({
        color: 0x69351f,
        roughness: 0.85
    });

    const materialHuesitos = new THREE.MeshStandardMaterial({
        color: 0xa56b3e,
        roughness: 0.9
    });

    const materialAzucar = new THREE.MeshStandardMaterial({
        color: 0xfff5dc,
        roughness: 1
    });

    // CUERPO OVALADO
    // Conserva el centro del cuerpo en Y = 0.
    const radioX = 1.10;
    const radioY = 0.55;
    const radioZ = 0.85;

    const cuerpo = new THREE.Mesh(
        new THREE.SphereGeometry(1, 48, 32),
        materialPan
    );

    cuerpo.scale.set(radioX, radioY, radioZ);

    cuerpo.castShadow = true;
    cuerpo.receiveShadow = true;

    panGrupo.add(cuerpo);

    // SEIS HUESITOS RADIALES
    for (let brazo = 0; brazo < 6; brazo++) {

        const angulo = (brazo / 6) * Math.PI * 2;
        const puntos = [];

        for (let i = 0; i <= 24; i++) {

            const distancia = 0.12 + (i / 24) * 0.76;

            const x = Math.cos(angulo) * radioX * distancia;
            const z = Math.sin(angulo) * radioZ * distancia;

            const y =
                radioY * Math.sqrt(1 - distancia * distancia);

            puntos.push(
                new THREE.Vector3(x, y + 0.025, z)
            );

        }

        const curva = new THREE.CatmullRomCurve3(puntos);

        const huesito = new THREE.Mesh(
            new THREE.TubeGeometry(
                curva,
                32,
                0.065,
                10,
                false
            ),
            materialHuesitos
        );

        huesito.castShadow = true;
        huesito.receiveShadow = true;

        panGrupo.add(huesito);

        // DOS ABULTAMIENTOS POR HUESITO
        for (const distancia of [0.52, 0.86]) {

            const abultamiento = new THREE.Mesh(
                new THREE.SphereGeometry(0.11, 20, 16),
                materialHuesitos
            );

            abultamiento.position.set(
                Math.cos(angulo) * radioX * distancia,

                radioY * Math.sqrt(
                    1 - distancia * distancia
                ) + 0.025,

                Math.sin(angulo) * radioZ * distancia
            );

            abultamiento.scale.set(1, 0.75, 1);
            abultamiento.castShadow = true;
            abultamiento.receiveShadow = true;

            panGrupo.add(abultamiento);

        }

    }

    // BOLITA CENTRAL MÁS PEQUEÑA
    const bolita = new THREE.Mesh(
        new THREE.SphereGeometry(0.19, 24, 20),
        materialHuesitos
    );

    bolita.scale.set(1, 0.8, 1);
    bolita.position.set(0, 0.65, 0);

    bolita.castShadow = true;
    bolita.receiveShadow = true;

    panGrupo.add(bolita);

    // AZÚCAR SOBRE LA SUPERFICIE
    const cantidad = 320;

    const azucar = new THREE.InstancedMesh(
        new THREE.BoxGeometry(0.012, 0.008, 0.016),
        materialAzucar,
        cantidad
    );

    const auxiliar = new THREE.Object3D();

    // Distribución reproducible
    let semilla = 25;

    function aleatorio() {

        semilla = (semilla * 16807) % 2147483647;

        return (semilla - 1) / 2147483646;

    }

    for (let i = 0; i < cantidad; i++) {

        const angulo = aleatorio() * Math.PI * 2;
        const distancia = Math.sqrt(aleatorio()) * 0.94;

        const x = Math.cos(angulo) * radioX * distancia;
        const z = Math.sin(angulo) * radioZ * distancia;

        const y = radioY * Math.sqrt(
            1 - distancia * distancia
        );

        auxiliar.position.set(x, y + 0.009, z);

        // Orientar los granitos según la superficie
        const normal = new THREE.Vector3(
            x / (radioX * radioX),
            y / (radioY * radioY),
            z / (radioZ * radioZ)
        ).normalize();

        auxiliar.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            normal
        );

        auxiliar.rotateY(aleatorio() * Math.PI * 2);

        const escala = 0.7 + aleatorio() * 0.8;

        auxiliar.scale.setScalar(escala);
        auxiliar.updateMatrix();

        azucar.setMatrixAt(i, auxiliar.matrix);

    }

    azucar.instanceMatrix.needsUpdate = true;
    azucar.frustumCulled = false;
    azucar.receiveShadow = true;

    panGrupo.add(azucar);

    return panGrupo;

}