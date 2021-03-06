class Terrain {

	constructor (scene) {
		var texture = new THREE.TextureLoader().load( "textures/grass.jpg" );

		var geometry = new THREE.PlaneGeometry( 3000, 3000, 200, 200 );
		geometry.rotateX( - Math.PI / 2 ) ;

		var n = new Noise();

		geometry.vertices.forEach(function (v) {
			v.y = parseInt(n.perlin(v.x/100, v.y/100, v.z/100) * 100 - 100);
		});

		var material = new THREE.MeshBasicMaterial( { map:texture } );
		var floor = new THREE.Mesh( geometry, material );
		scene.add(floor)
	}

}


