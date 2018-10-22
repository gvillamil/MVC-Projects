'use strict'

// 
window.addEventListener('load',()=>{
	// Timers - permite ejecutar una funcion callback cada determinado tiempo.
	
	function intervalo(){
		var tiempo = setInterval(()=>{
			console.log("Set interval ejecutado");
			var encabezado = document.querySelector("h1");
			
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px";
			}else{
				encabezado.style.fontSize = "50px";
			}		
			
		},3000)
		return tiempo;
	}
	
	var tiempo = intervalo();
	
	var stop = document.querySelector("#stop");
	stop.addEventListener('click',()=>{
		alert('Has parato el timer en bucle');
		clearInterval(tiempo);
	})
	
	var start = document.querySelector("#start");	
	start.addEventListener('click',()=>{
		alert('Has iniciado el timer en bucle');
		intervalo();
	})
	
	
	// set Timeout - se ejecuta solo una vez, y se indica en que momento se ejecutara
	/*
	var tiempo = setTimeout(()=>{
		console.log("Set Timeout ejecutado");
		var encabezado = document.querySelector("h1");
		
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "30px";
		}else{
			encabezado.style.fontSize = "50px";
		}		
		
	},3000)	
	*/
});
