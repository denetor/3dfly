import * as THREE from "three";

const WIDTH = 30;
const DEPTH = 30;
const MINHEIGHT = 20;
const MAXHEIGHT = 100;

function get() {
    const geometry = new THREE.BoxGeometry(
        this.WIDTH,
        this.MINHEIGHT + Math.random() * (this.MAXHEIGHT - this.MINHEIGHT),
        this.DEPTH);
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true,
        side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

export {
    WIDTH, DEPTH, MINHEIGHT, MAXHEIGHT,
    get
}
