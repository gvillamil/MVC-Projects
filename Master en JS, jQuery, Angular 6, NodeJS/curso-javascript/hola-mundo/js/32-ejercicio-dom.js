'use strict'


window.addEventListener('load',()=>{
	console.log("DOM cargado!!!");
	
	var formu = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	
	//Ocultamos el cuadro en un inicio
	box_dashed.style.display = 'none';
	
	formu.addEventListener('submit',()=>{
		console.log("Evento submit capturado");
		//Obtenemos los valores de los input
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);
		
		if(nombre.trim() == null || nombre.trim().length <=0){
			alert('El nombre no es valido');
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido </br>";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display = "none";
		}
		if(apellidos.trim() == null || apellidos.trim().length <=0){
			alert('Los apellidos no es valido');
			return false;
		}
		if(edad == null || edad <=0 || isNaN(edad)){
			alert('La edad no es valido');
			return false;
		}
	
		box_dashed.style.display = 'block';
		
		// Seleciona el elemento html y dentro de ese elemento se puede seleccionar de paso el span que se encuentra
		// dentro , en este caso <span>
		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");
		
		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;
		
		/*
		
		var datos_usuario =[nombre, apellidos,edad];		
		for(var indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		*/		
	})	
});
