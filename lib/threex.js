var THREEx	= THREEx || {}
THREEx.WindowResize	= function(renderer, camera, dimension){
	dimension = dimension || function(){ return {
		width: window.innerWidth, 
		height: window.innerHeight
	}}

	var callback = function(){
		var rendererSize = dimension();
		renderer.setSize( rendererSize.width, rendererSize.height )
		camera.aspect	= rendererSize.width / rendererSize.height
		camera.updateProjectionMatrix()
	}

	window.addEventListener('resize', callback, false)
	return {
		trigger : function(){
			callback()
		},
		destroy : function(){
			window.removeEventListener('resize', callback)
		}
	}
}