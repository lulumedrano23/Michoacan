import * as THREE from 'three';

export class pan1 {

    constructor() {

        // GRUPO PRINCIPAL
        this.pan1 = new THREE.Group();

        // MATERIAL DEL PAN
        const panMaterial = new THREE.MeshStandardMaterial({
            color: 0xc67d32,
            roughness: 0.9
        });

        // MATERIAL DE LOS HUESITOS
        const huesoMaterial = new THREE.MeshStandardMaterial({
            color: 0xe0a15c,
            roughness: 0.95
        });

        // CUERPO DEL PAN
        const radio = 0.85;
        const altura = 0.45;

        const basePan = new THREE.Mesh(
            new THREE.SphereGeometry(radio, 48, 32),
            panMaterial
        );

        basePan.scale.set(1, altura / radio, 1);
        basePan.position.set(0, altura, 0);

        basePan.castShadow = true;
        basePan.receiveShadow = true;

        this.pan1.add(basePan);

        // CALCULAR LA SUPERFICIE SUPERIOR DEL PAN
        const superficie = (distancia) => {

            return altura + altura * Math.sqrt(
                Math.max(
                    0,
                    1 - (distancia * distancia) / (radio * radio)
                )
            );

        };

        // HUESITOS CRUZADOS SOBRE EL PAN
        for (let eje = 0; eje < 2; eje++) {

            const puntos = [];

            for (let i = 0; i <= 32; i++) {

                const distancia = -0.72 + (i / 32) * 1.44;
                const y = superficie(distancia) + 0.025;

                puntos.push(
                    new THREE.Vector3(
                        eje === 0 ? distancia : 0,
                        y,
                        eje === 0 ? 0 : distancia
                    )
                );

            }

            const curva = new THREE.CatmullRomCurve3(puntos);

            const huesito = new THREE.Mesh(
                new THREE.TubeGeometry(
                    curva,
                    48,
                    0.075,
                    12,
                    false
                ),
                huesoMaterial
            );

            huesito.castShadow = true;
            huesito.receiveShadow = true;

            this.pan1.add(huesito);

            // ABULTAMIENTOS DE LOS HUESITOS
            const distancias = [-0.70, -0.42, 0.42, 0.70];

            for (const distancia of distancias) {

                const abultamiento = new THREE.Mesh(
                    new THREE.SphereGeometry(0.115, 20, 16),
                    huesoMaterial
                );

                abultamiento.scale.set(
                    eje === 0 ? 0.85 : 1.15,
                    0.8,
                    eje === 0 ? 1.15 : 0.85
                );

                abultamiento.position.set(
                    eje === 0 ? distancia : 0,
                    superficie(distancia) + 0.025,
                    eje === 0 ? 0 : distancia
                );

                abultamiento.castShadow = true;
                abultamiento.receiveShadow = true;

                this.pan1.add(abultamiento);

            }

        }

        // BOLITA CENTRAL DE MASA
        const bolitaCentro = new THREE.Mesh(
            new THREE.SphereGeometry(0.22, 32, 24),
            huesoMaterial
        );

        bolitaCentro.scale.set(1, 0.85, 1);
        bolitaCentro.position.set(0, 1, 0);

        bolitaCentro.castShadow = true;
        bolitaCentro.receiveShadow = true;

        this.pan1.add(bolitaCentro);

    }

    getObject() {
        return this.pan1;
    }

}