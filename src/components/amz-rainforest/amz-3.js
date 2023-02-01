

export default function loadThree() {  
//Three JS code goes here to show off the models
    const loader = new THREE.GLTFLoader()  // This comes from GLTFLoader.js.
    const raycaster = new THREE.Raycaster()
    const tapPosition = new THREE.Vector2()

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    const deforest = require('./assets/amazon-quicklook/glb/_deforestation.glb')
    const lumber = require('./assets/amazon-quicklook/glb/_lumberyard.glb')
    const slaughter = require('./assets/amazon-quicklook/glb/_slaughterhouse.glb')
    const soyfarm = require('./assets/amazon-quicklook/glb/_soyfarm.glb')
    const tribe = require('./assets/amazon-quicklook/glb/_tribe.glb')

    //load models
    loader.load(
        // resource URL
        deforest,
        // loaded handler
        (gltf) => {
  
          model = gltf.scene
          scene.add(model)
        }
      )
      //#2
      loader.load(
        // resource URL
        lumber,
        // loaded handler
        (gltf) => {
  
          model = gltf.scene
          scene.add(model)
        }
      )
      loader.load(
        // resource URL
        slaughter,
        // loaded handler
        (gltf) => {
  
          model = gltf.scene
          scene.add(model)
        }
      )
      loader.load(
        // resource URL
        soyfarm,
        // loaded handler
        (gltf) => {
  
          model = gltf.scene
          scene.add(model)
        }
      )
      loader.load(
        // resource URL
        tribe,
        // loaded handler
        (gltf) => {
  
          model = gltf.scene
          scene.add(model)
        }
      )
  
      // Add soft white light to the scene.
      // This light cannot be used to cast shadows as it does not have a direction.
      scene.add(new THREE.AmbientLight(0x404040, 5))
  
      // Set the initial camera position relative to the scene we just laid out. This must be at a
      // height greater than y=0.
      camera.position.set(0, 3, 0)
  
    }

