import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x9090dd );
scene.fog = new THREE.Fog(0xcccccc, -200, 250);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 10;
camera.position.z = 0;

const renderer = new THREE.WebGLRenderer();
renderer.antialias = true;
renderer.shadowMap.enabled = true;
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(320,240);
document.body.appendChild(renderer.domElement);

// add some ambient light to avoid too dark zones
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// add a directional light that casts shadows
const color = 0xFFFFFF;
const intensity = 2;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-10, 10, 5);
light.target.position.set(5, 0, -10);
light.castShadow = true;
scene.add(light);
scene.add(light.target);

// floor
const floorGeometry = new THREE.PlaneGeometry( 100, 1000, 1 );
const floorMaterial = new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.DoubleSide } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.rotateX(+ Math.PI * 0.5);
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
    const geometry = new THREE.BoxGeometry( 5, 10 + Math.random() * 50, 5 );
    const building = new THREE.Mesh( geometry, buildingMaterial );
    building.receiveShadow = true;
    building.castShadow = true;
    building.position.x = Math.random() * 100 - 50;
    building.position.y = 0;
    building.position.z = -1 * Math.random() * 1000 + 50;
    const buildingEdges = new THREE.WireframeGeometry(geometry);
    building.add(buildingEdges);
    scene.add(building);
}



function animate() {
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

