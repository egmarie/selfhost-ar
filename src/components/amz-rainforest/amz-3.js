// import deforest_ from'../../assets/amazon-quicklook/glb/sm_deforestation.glb'
// import lumber_ from '../../assets/amazon-quicklook/glb/sm_lumberyard.glb'
// import slaughter_ from '../../assets/amazon-quicklook/glb/sm_slaughterhouse.glb'
// import soyfarm_ from '../../assets/amazon-quicklook/glb/sm_soyfarm.glb';
// import tribe_ from '../../assets/amazon-quicklook/glb/sm_tribe.glb';
// import * as THREE from 'three'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import * as dat from 'dat.gui'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// // Debug

// const DEFAULT_DRACO_DECODER_LOCATION = 'https://www.gstatic.com/draco/versioned/decoders/1.3.6/'
// export function loadThree() {  
// //Three JS code goes here to show off the models
//     const loader = new GLTFLoader()  // This comes from GLTFLoader.js.
//     const dracoLoader = new DRACOLoader()
//     dracoLoader.setDecoderPath(DEFAULT_DRACO_DECODER_LOCATION)
//     // Optional: Pre-fetch Draco WASM/JS module.
//     dracoLoader.preload()
//     loader.setDRACOLoader(dracoLoader)
//     const raycaster = new THREE.Raycaster()
//     const tapPosition = new THREE.Vector2()
//     const canvas = document.querySelector('canvas.webgl')
//     let canva = document.getElementById('three1_container')
//     console.log(canva)
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//     const gui = new dat.GUI()
//     let model
//     // console.log(JSON.stringify(canva))
//     const deforest = deforest_
//     const lumber = lumber_
//     const slaughter = slaughter_
//     const soyfarm = soyfarm_
//     const tribe = tribe_

   




//     const geometry = new THREE.SpheredddGeometry( 15, 32, 16 );
//     const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
//     const sphere = new THREE.Mesh( geometry, material );
//     sphere.position.set(0, 1, 1)
//     console.log(sphere.position)


//     const cubeFolder = gui.addFolder('Sphere')
//     cubeFolder.add(sphere.position, 'x', -10, 10, 2)
//     cubeFolder.add(sphere.position, 'y', -10, 10, 2)
//     cubeFolder.add(sphere.position, 'z', -10, 10, 2)
//     cubeFolder.open()
//     const cubeScaleFolder = cubeFolder.addFolder('Scale')
//     cubeScaleFolder.add(sphere.scale, 'x', -5, 5)
//     cubeScaleFolder.add(sphere.scale, 'y', -5, 5)
//     cubeScaleFolder.add(sphere.scale, 'z', -5, 5)
//     cubeScaleFolder.open()
//     const cameraFolder = gui.addFolder('Camera')
//     cameraFolder.add(camera.position, 'z', -10, 10, 2)
//     cameraFolder.open()

//     scene.add(sphere)
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 8)
//     directionalLight.position.set(5, 10, 5)
//     directionalLight.castShadow = true
//     scene.add(directionalLight)

//     //load models
//     loader.load(
//         // resource URL
//         deforest,
//         // loaded handler
//         (gltf) => {
//           model = gltf.scene
//           scene.add(model)

//         }
//       )
      
//       console.log(deforest)
    //   const glbFolder = gui.addFolder('glb position')
    //   glbFolder.add(model.position, 'x', -10, 10, 2)
    //   glbFolder.add(model.position, 'y', -10, 10, 2)
    //   glbFolder.add(model.position, 'z', -10, 10, 2)
    //   glbFolder.open()
    //   const glbScaleFolder = glbFolder.addFolder('glb cale')
    //   glbScaleFolder.add(model.scale, 'x', -5, 5)
    //   glbScaleFolder.add(model.scale, 'y', -5, 5)
    //   glbScaleFolder.add(model.scale, 'z', -5, 5)
    //   glbScaleFolder.open()
      //#2
    //   loader.load(
    //     // resource URL
    //     lumber,
    //     // loaded handler
    //     (gltf) => {
    //       model = gltf.scene
    //       scene.add(model)
    //     }
    //   )
    //   loader.load(
    //     // resource URL
    //     slaughter,
    //     // loaded handler
    //     (gltf) => {
  
    //       model = gltf.scene
    //       scene.add(model)
    //     }
    //   )
    //   loader.load(
    //     // resource URL
    //     soyfarm,
    //     // loaded handler
    //     (gltf) => {
  
    //       model = gltf.scene
    //       scene.add(model)
    //     }
    //   )
    //   loader.load(
    //     // resource URL
    //     tribe,
    //     // loaded handler
    //     (gltf) => {
  
    //       model = gltf.scene
    //       scene.add(model)
    //     }
    //   ) 

  
      // Add soft white light to the scene.
      // This light cannot be used to cast shadows as it does not have a direction.
//       scene.add(new THREE.AmbientLight(0x404040, 5))
//       scene.add(camera)
//         console.log(scene)
//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvas
//         })
//         const controls = new OrbitControls( camera, renderer.domElement );
//       // Set the initial camera position relative to the scene we just laid out. This must be at a
//       // height greater than y=0.
//       window.addEventListener('resize', onWindowResize, false)
//     function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }
//       camera.position.set(0, 3, 3)
//     //   return console.log(scene)

//     renderer.setSize( window.innerWidth, window.innerHeight );
//      document.body.appendChild( renderer.domElement );
// function render() {
//     renderer.render(scene, camera)
// }
// render()
    

  
//     }

