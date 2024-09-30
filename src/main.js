import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbfe3dd );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setSize(320,240);
document.body.appendChild(renderer.domElement);

// a light
// const light = new THREE.HemisphereLight(0xffffff, 0x303030, 2);
// light.position.set(-50, 50, 50);
// light.castShadow = true;
// scene.add(light);

// add a directional light that casts shadows
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-10, 10, 5);
light.target.position.set(5, 0, -10);
light.castShadow = true;
scene.add(light);
scene.add(light.target);

// White directional light at half intensity shining from the top.
// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
// scene.add( directionalLight );

// rotating cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
const cube = new THREE.Mesh( geometry, material );
cube.position.x = 0;
cube.position.y = 7;
cube.position.z = -5;
scene.add( cube );

// floor
const floorGeometry = new THREE.PlaneGeometry( 100, 1000, 1 );
const floorMaterial = new THREE.MeshBasicMaterial( { color: 0x007700, side: THREE.DoubleSide } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.rotateX(- Math.PI * 0.5);
floor.receiveShadow = true;
floor.position.z = -500;
scene.add(floor);

// buildings
// const buildingMaterial = new THREE.MeshBasicMaterial( {color: 0x77aaff} );
const buildingMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,    // red (can also use a CSS color string here)
    flatShading: true,
    side: THREE.DoubleSide,
});
for (let i = 0; i < 100; i++) {
    const geometry = new THREE.BoxGeometry( 5, 5 + Math.random() * 10, 5 );
    const building = new THREE.Mesh( geometry, buildingMaterial );
    building.receiveShadow = true;
    building.castShadow = true;
    building.position.x = Math.random() * 100 - 50;
    building.position.y = 0;
    building.position.z = -1 * Math.random() * 1000 + 50;
    scene.add(building);
}

camera.position.y = 10;
camera.position.z = 0;

function animate() {
    cube.rotation.y += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

