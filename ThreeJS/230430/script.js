// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);


// A cube we are going to animate
const cube = {
  // The geometry: the shape & size of the object
  geometry: new THREE.PlaneGeometry( 1, 1 ),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x33ff55 , side: THREE.DoubleSide })
};


const cube2 = {
  // The geometry: the shape & size of the object
  geometry: new THREE.PlaneGeometry( 1, 1 ),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x330066 , side: THREE.DoubleSide })
};

cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

cube2.mesh = new THREE.Mesh(cube2.geometry, cube2.material);

// Add the cube into the scene
scene.add(cube.mesh);

scene.add(cube2.mesh);

// Make the camera further from the cube so we can see it better
camera.position.z = 3;

function render() {
  // Render the scene and the camera
  renderer.render(scene, camera);

  // Rotate the cube every frame
  cube.mesh.rotation.x += 0.05;
  cube.mesh.rotation.y -= 0.05;

  // Rotate the cube every frame
  cube2.mesh.rotation.x -= 0.05;
  cube2.mesh.rotation.y += 0.05;


  // Make it call the render() function about every 1/60 second
  requestAnimationFrame(render);
}

render();
