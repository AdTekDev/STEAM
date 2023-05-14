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


// Chọn lựa hình dạng

const Cau = {
  geometry: new THREE.SphereGeometry(1,32,16,0,6,0),
  material: new THREE.MeshBasicMaterial({ color: 0xffffff  })
};

const CauThan = {
  geometry: new THREE.SphereGeometry(2.5,32,16,0,6,0),
  material: new THREE.MeshBasicMaterial({ color: 0xffffdd  })
};


// Thêm các phần của Robot
const dau = new THREE.Mesh(Cau.geometry, Cau.material);
const than = new THREE.Mesh(CauThan.geometry, CauThan.material);

// Ráp, chọn vị trí của các phần Robot cho phù hợp
dau.position.set(1,3,0);
than.position.set(1,0,0);


// Tạo Robot là các phần kết hợp
const conRobot = new THREE.Group();
conRobot.add(dau);
conRobot.add(than);


// Đưa nhân vật Robot vào "Màn hình" trong "Game" / Trò chơi
scene.add(conRobot);

// Make the camera further from the cube so we can see it better
camera.position.set(2,3,5);

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
