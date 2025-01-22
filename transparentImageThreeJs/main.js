const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, 1, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
	alpha : true,
});

renderer.setSize( 800, 800 );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: "#e0f000" } );

const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
	map: loader.load("logo.png"),
	transparent: true,
});

const plane = new THREE.Mesh( geometry, material );

scene.add( plane );


camera.position.z = 5;

function animate() {

	//plane.rotation.x += 0.01;
	//plane.rotation.y += 0.01;

	renderer.render( scene, camera );

}