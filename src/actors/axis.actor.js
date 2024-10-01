import * as THREE from "three";

function get() {
    const material = new THREE.LineBasicMaterial( { color: 0xffffff } );

    const xAxisPoints = [];
    xAxisPoints.push(new THREE.Vector3(-1000, 0, 0));
    xAxisPoints.push(new THREE.Vector3(1000, 0, 0));
    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints(xAxisGeometry);
    const xAxisLine = new THREE.Line(xAxisGeometry, material);

    const yAxisPoints = [];
    yAxisPoints.push(new THREE.Vector3(0, -1000,0));
    yAxisPoints.push(new THREE.Vector3(0, 1000,0));
    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints(yAxisGeometry);
    const yAxisLine = new THREE.Line(yAxisGeometry, material);

    const zAxisPoints = [];
    zAxisPoints.push(new THREE.Vector3(0, 0, -1000));
    zAxisPoints.push(new THREE.Vector3(0, 0, 1000));
    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints(zAxisGeometry);
    const zAxisLine = new THREE.Line(zAxisGeometry, material);

    const group = new THREE.Group();
    group.add(xAxisLine);
    group.add(yAxisLine);
    group.add(zAxisLine);

    return group;
}

export {
    get,
}
