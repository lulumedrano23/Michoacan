import * as THREE from 'three';

export class pino {

    constructor() {

        this.pino=new THREE.Group();

       const logGeometry = new THREE.CylinderGeometry(0.4,0.5,2,8);
       const logMaterial = new THREE.MeshStandardMaterial({color: 0x8b4513});
       const log = new THREE.Mesh(logGeometry,logMaterial);
       log.position.y = 1;
       this.pino.add(log);
       
       const branchGeometry = new THREE.ConeGeometry(2,2,8);
       const branchGeometryMaterial = new THREE.MeshStandardMaterial({color: 0x145a32});
       const branch1 = new THREE.Mesh(branchGeometry,branchGeometryMaterial);
       branch1.position.y = 2.2;
       branch1.receiveShadow=true;
       branch1.castShadow=true;
        this.pino.add(branch1);
       
       const branch2Geometry=new THREE.ConeGeometry(1.6,1.8,8);
       const branchGeometryMaterial2 = new THREE.MeshStandardMaterial({color: 0x1d864b});
       const branch2 = new THREE.Mesh(branch2Geometry,branchGeometryMaterial2);
       branch2.position.y = 3.3;
       branch2.receiveShadow=true;
       branch2.castShadow=true;
        this.pino.add(branch2);
       
       const branch3Geomrty=new THREE.ConeGeometry(1.2,1.6,8);
       const branchGeometryMaterial3 = new THREE.MeshStandardMaterial({color: 0x26ab60});
       const branch3 = new THREE.Mesh(branch3Geomrty,branchGeometryMaterial3);
       branch3.position.y = 4.3;
       branch3.receiveShadow=true;
       branch3.castShadow=true;
       this.pino.add(branch3);
       
       const topBranchGeometry=new THREE.ConeGeometry(0.8,1.5,8);
       const topGeometryMaterial = new THREE.MeshStandardMaterial({color: 0x2ed175});
       const top = new THREE.Mesh(topBranchGeometry,topGeometryMaterial);
       top.position.y = 5.4;
       top.receiveShadow=true;
       top.castShadow=true;
        this.pino.add(top);
       
    }


    getObject() {
        return this.pino;
    }
}