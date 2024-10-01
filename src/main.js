import * as THREE from 'three';
import * as Level0 from './scenes/level-0.scene';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = 25;
camera.position.y = 50;
camera.position.z = 50;
camera.lookAt(0,0,-100);

const renderer = new THREE.WebGLRenderer();
renderer.antialias = true;
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize(320,240);
document.body.appendChild(renderer.domElement);

const scene = Level0.get();

function animate() {
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

