import * as THREE from "three";


const WIDTH = 150;
const LENGTH = 2000;

function get() {
    const geometry = new THREE.PlaneGeometry(WIDTH, LENGTH, 1);
    const material = new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.DoubleSide } );
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotateX(Math.PI * 0.5);

    return mesh;
}



export {
    WIDTH, LENGTH,
    get
}
