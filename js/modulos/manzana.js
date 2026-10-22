import * as THREE from 'three';

export class manzana {

    constructor() {

        // GRUPO PRINCIPAL
        this.manzana = new THREE.Group();

        // MATERIAL DE LA MANZANA
        const materialManzana = new THREE.MeshStandardMaterial({
            color: 0xc92028,
            roughness: 0.35,
            metalness: 0
        });

        // CUERPO CON FORMA DE MANZANA
        const cuerpoGeometry = new THREE.SphereGeometry(
            1,
            64,
            48
        );

        const posiciones = cuerpoGeometry.attributes.position;

        for (let i = 0; i < posiciones.count; i++) {

            const x = posiciones.getX(i);
            const y = posiciones.getY(i);
            const z = posiciones.getZ(i);

            const theta = Math.acos(
                THREE.MathUtils.clamp(y, -1, 1)
            );

            const angulo = Math.atan2(z, x);
            const seno = Math.sin(theta);
            const coseno = Math.cos(theta);

            // Más ancha arriba y más estrecha abajo
            let radio = 0.74 * seno * (1 + 0.16 * coseno);

            // Cinco lóbulos suaves alrededor del cuerpo
            radio *= (
                1 +
                0.035 * Math.cos(5 * angulo) * seno
            );

            // Altura del cuerpo
            let altura = 0.7 * coseno;

            // Hendidura superior para el tallo
            altura -= 0.18 * Math.exp(
                -Math.pow(theta / 0.32, 2)
            );

            // Hendidura inferior
            altura += 0.07 * Math.exp(
                -Math.pow((Math.PI - theta) / 0.30, 2)
            );

            // Relieve suave en los hombros
            altura += (
                0.025 *
                Math.cos(5 * angulo) *
                seno *
                Math.exp(-Math.pow(theta / 0.8, 2))
            );

            posiciones.setXYZ(
                i,
                Math.cos(angulo) * radio,
                altura + 0.63,
                Math.sin(angulo) * radio
            );

        }

        posiciones.needsUpdate = true;
        cuerpoGeometry.computeVertexNormals();

        const cuerpo = new THREE.Mesh(
            cuerpoGeometry,
            materialManzana
        );

        cuerpo.castShadow = true;
        cuerpo.receiveShadow = true;

        this.manzana.add(cuerpo);

        // MATERIAL DEL TALLO
        const materialTallo = new THREE.MeshStandardMaterial({
            color: 0x5c3a21,
            roughness: 0.95
        });

        // TALLO CURVO
        const curvaTallo = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 1.13, 0),
            new THREE.Vector3(0.01, 1.28, 0),
            new THREE.Vector3(0.05, 1.43, 0.01),
            new THREE.Vector3(0.11, 1.55, 0.02)
        ]);

        const tallo = new THREE.Mesh(
            new THREE.TubeGeometry(
                curvaTallo,
                24,
                0.035,
                10,
                false
            ),
            materialTallo
        );

        tallo.castShadow = true;

        this.manzana.add(tallo);

        // HOJA PUNTIAGUDA
        const formaHoja = new THREE.Shape();

        formaHoja.moveTo(0, 0);

        formaHoja.bezierCurveTo(
            0.12, 0.16,
            0.33, 0.16,
            0.48, 0
        );

        formaHoja.bezierCurveTo(
            0.32, -0.12,
            0.12, -0.12,
            0, 0
        );

        const hojaGeometry = new THREE.ShapeGeometry(
            formaHoja,
            24
        );

        const materialHoja = new THREE.MeshStandardMaterial({
            color: 0x287a2e,
            roughness: 0.8,
            side: THREE.DoubleSide
        });

        // Grupo para mover hoja y nervadura juntas
        const grupoHoja = new THREE.Group();

        grupoHoja.position.set(0.06, 1.43, 0.01);
        grupoHoja.rotation.set(-Math.PI / 2, 0, 0.25);

        const hoja = new THREE.Mesh(
            hojaGeometry,
            materialHoja
        );

        hoja.castShadow = true;
        hoja.receiveShadow = true;

        grupoHoja.add(hoja);

        // NERVADURA DE LA HOJA
        const curvaNervadura = new THREE.LineCurve3(
            new THREE.Vector3(0, 0, 0.004),
            new THREE.Vector3(0.46, 0, 0.004)
        );

        const nervadura = new THREE.Mesh(
            new THREE.TubeGeometry(
                curvaNervadura,
                1,
                0.006,
                6,
                false
            ),
            new THREE.MeshStandardMaterial({
                color: 0x80a547,
                roughness: 0.9
            })
        );

        grupoHoja.add(nervadura);

        this.manzana.add(grupoHoja);

    }

    getObject() {
        return this.manzana;
    }

}