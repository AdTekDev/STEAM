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
const box = {
  geometry: new THREE.BoxGeometry(1,1,1),
  material: new THREE.MeshBasicMaterial({ color: 0x33ff55  })
};

const Cau = {
  geometry: new THREE.SphereGeometry(1,32,16,0,6,0),
  material: new THREE.MeshBasicMaterial({ color: 0xffff00  })
};


const dau = new THREE.Mesh(Cau.geometry, Cau.material);
const taytrai = new THREE.Mesh(box.geometry, box.material);
const tayphai = new THREE.Mesh(box.geometry, box.material);
const chantrai = new THREE.Mesh(box.geometry, box.material);
const chanphai = new THREE.Mesh(box.geometry, box.material);
const thantren = new THREE.Mesh(box.geometry, box.material);
const thanduoi = new THREE.Mesh(box.geometry, box.material);

dau.position.set(1,3,0);
taytrai.position.set(0,2,0);
tayphai.position.set(2,2,0);
chantrai.position.set(0,0,0);
chanphai.position.set(2,0,0);
thantren.position.set(1,2,0);
thanduoi.position.set(1,1,0);

const conRobot = new THREE.Group();
conRobot.add(dau);
conRobot.add(taytrai);
conRobot.add(tayphai);
conRobot.add(chantrai);
conRobot.add(chanphai);
conRobot.add(thantren);
conRobot.add(thanduoi);

// Add the cube into the scene
scene.add(conRobot);

// Make the camera further from the cube so we can see it better
camera.position.set(2,0,5);

renderer.render(scene, camera);

function dichuyen(phim) {
  if (phim.key == "a") {
    conRobot.position.x -= 0.5;
  }
  if (phim.key == "d") {
    conRobot.position.x += 0.5;
  }

  if (phim.key == "s") {
    conRobot.position.y -= 0.5;
  }
  if (phim.key == "w") {
    conRobot.position.y += 0.5;
  }

  if (phim.key == "x") {
    conRobot.position.z -= 0.5;
  }
  if (phim.key == "z") {
    conRobot.position.z += 0.5;
  }

  // cube.mesh.rotation.x += 0.05;
  // cube.mesh.rotation.y -= 0.05;

  switch(phim.key ) {
    case "u" : {
      conRobot.rotation.x += 0.05;
      conRobot.rotation.y -= 0.05;
      break;
    }
    case "i" : {
      conRobot.rotation.x -= 0.05;
      conRobot.rotation.y += 0.05;
      break;
    }
    case "h" : {
      conRobot.rotation.x -= 0.05;
      conRobot.rotation.z += 0.05;
      break;
    }
    case "k" : {
      conRobot.rotation.x += 0.05;
      conRobot.rotation.z -= 0.05;
      break;
    }
    case "n" : {
      conRobot.rotation.y += 0.05;
      conRobot.rotation.z -= 0.05;
      break;
    }
    case "m" : {
      conRobot.rotation.y -= 0.05;
      conRobot.rotation.z += 0.05;
      break;
    }
  }

  
  renderer.render(scene, camera);
}
