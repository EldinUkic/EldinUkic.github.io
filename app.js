// 1. Szene erstellen
const scene = new THREE.Scene();

// 2. Kamera anlegen (Perspektivkamera)
const camera = new THREE.PerspectiveCamera(
  75,                                     // Blickwinkel in Grad
  window.innerWidth / window.innerHeight, // Seitenverhältnis
  0.1,                                    // nahe clipping-Ebene
  1000                                    // ferne clipping-Ebene
);
camera.position.z = 5; // Kamera 5 Einheiten zurückziehen

// 3. Renderer einrichten und ans DOM hängen
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 4. Ein einfacher Würfel (BoxGeometry + Standard-Material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x3498db });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Licht hinzufügen (damit Material sichtbar wird)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// 6. Animation-Loop
function animate() {
  requestAnimationFrame(animate);

  // Würfel drehen
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// 7. Auf Fenster-Resize reagieren
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

