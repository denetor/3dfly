import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(320,240);
document.body.appendChild(renderer.domElement);

// a light
// const light = new THREE.HemisphereLight(0xffffff, 0x000000, 10);
// light.position.set(-50, 50, -50);
// scene.add(light);

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

// rotating cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.x = 0;
cube.position.y = 10;
cube.position.z = -5;
scene.add( cube );

// floor
const floorGeometry = new THREE.PlaneGeometry( 100, 1000, 1 );
const floorMaterial = new THREE.MeshBasicMaterial( { color: 0xaaaaaa, side: THREE.DoubleSide } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.rotateX(- Math.PI * 0.49);
floor.position.z = -500;
scene.add(floor);

camera.position.y = 10;
camera.position.z = 0;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // floor.rotation.x += 0.01;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

