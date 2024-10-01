import * as THREE from "three";
import * as Terrain from "../actors/terrain.actor";
import * as Building from "../actors/building.actor";

function get() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x9090dd );

    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // main light
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(-50, 100, -50);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    scene.add(light);
    scene.add(light.target);

    // terrain
    const terrain = Terrain.get();
    terrain.position.x = - Terrain.LENGTH / 2;
    scene.add(terrain);

    // buildings
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * (Terrain.WIDTH - Building.WIDTH) + (Building.WIDTH / 2);
        const z = Math.random() * (Terrain.LENGTH - Building.DEPTH) + (Building.DEPTH / 2);
        const building = Building.get();
        building.position.x = x;
        // TODO probabilmente se devo impostare Y come metà dell'altezza, visto che l'handle dovrebbe essere al centro
        building.position.z = z;
        scene.add(building);
    }

    return scene;
}


export {
    get,
}
