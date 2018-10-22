'use strict'

// Localstorage

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener("submit",function(){
	
	var titulo = document.querySelector("#addpelicula").value;
	
	if(titulo.length >= 1){	
		localStorage.setItem(titulo,titulo);
	}
});

var ul = document.querySelector("#peliculas-list");

for(var i in localStorage){
	console.log(localStorage[i]);
	var li = document.createElement("li");
	if(typeof localStorage[i] == 'string'){
		li.append(localStorage[i])
		ul.append(li);
	}
}

var formularioB = document.querySelector("#formBorrarPeliculas");

formularioB.addEventListener("submit",function(){
	
	var titulo = document.querySelector("#deletepelicula").value;
	
	if(titulo.length >= 1){	
		localStorage.removeItem(titulo);
	}
});

