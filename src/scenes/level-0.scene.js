import * as THREE from "three";
import * as Terrain from "../actors/terrain.actor";
import * as Building from "../actors/building.actor";
import * as Axis from "../actors/axis.actor";

function get() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x9090dd );

    // axis
    const axis = Axis.get();
    scene.add(axis);

    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // main light
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(-50, 100, 50);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    scene.add(light);
    scene.add(light.target);

    // terrain
    const terrain = Terrain.get();
    // terrain.position.x = - Terrain.WIDTH / 2;
    terrain.position.x = 0;
    terrain.position.y = 0;
    terrain.position.z = - Terrain.LENGTH / 2;
    scene.add(terrain);

    // buildings
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * (Terrain.WIDTH - Building.WIDTH) - Terrain.WIDTH / 2 + (Building.WIDTH / 2);
        const z = -1 * (Math.random() * (Terrain.LENGTH - Building.DEPTH) + (Building.DEPTH / 2));
        const building = Building.get();
        building.position.x = x;
        building.position.z = z;
        building.position.y = building.geometry.parameters.height / 2;
        scene.add(building);
    }

    return scene;
}


export {
    get,
}
