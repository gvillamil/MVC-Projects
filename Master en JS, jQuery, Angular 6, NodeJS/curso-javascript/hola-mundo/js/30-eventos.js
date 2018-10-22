'use strict'

// eventos de raton

window.addEventListener('load',function(){
	function cambiarColor(){
	console.log("Me has dado click");
	
	var bg = boton.style.background;	
		
	if(bg=="green"){
		boton.style.background = "red";
	}
	else{
		boton.style.background = "green";
	}
	
	boton.style.padding = "20px";
	boton.style.border ="1px solid #ccc";
	
	return true;
	}

	var boton = document.querySelector("#boton");
	// click
	boton.addEventListener("click",function(){
		cambiarColor();
		console.log(this);
		this.style.border = "10px solid black";
	})
	// Mouse over
	boton.addEventListener("mouseover",function(){
		cambiarColor();
	})

	// Mouse out
	boton.addEventListener("mouseout",function(){
		cambiarColor();
	})
	
	// Focus
	var input = document.querySelector("#campo_nombre");

	input.addEventListener("focus",function(){
		console.log("[focus] Estas dentro del input");
	})

	// Blur
	input.addEventListener("blur",function(){
		console.log("[blur] Estas fuera del input");
	})

	// Keydown
	input.addEventListener("keydown",function(event){
		console.log("[keydown] Estas pulsando la tecla ",String.fromCharCode(event.keyCode));
	})

	// Keypress
	input.addEventListener("keypress",function(event){
		console.log("[keypress] Tecla presionada ",String.fromCharCode(event.keyCode));
	})

	// Keyup
	input.addEventListener("keyup",function(event){
		console.log("[keyup] Tecla soltada ",String.fromCharCode(event.keyCode));
	})
}); // end Load

