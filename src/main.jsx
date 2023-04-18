import * as THREE from "three";

//Create scene
const scene = new THREE.Scene();

//Create sphere

//geometry: shape
//material: how it looks like
const geometry = new THREE.SphereGeometry(3, 64, 64); //3: radius, 64/64: widthSegments/heightSegments
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});
//mesh: combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600); //45: field of view
camera.position.z = 10;
scene.add(camera);

//Rendered
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);
