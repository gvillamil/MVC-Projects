'use strict'

// Localstorage


// Comprobmos la disponibilidad del LocalStorage
if(typeof(Storage) !== 'undefined'){
	console.log('LocalStorage disponible');
}else{
	console.log('LocalStorage no disponible');
}

// Guardar Datos
localStorage.setItem("titulo","Curso de Json");

// Obtener un dato guardado en el localStorage

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar obtetos en el localStorage

var usuario ={
	nombre: "memo",
	email: "mem@mdjhd.com",
	web: "memo.com.mx"
}

localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web+ " - "+ userjs.nombre);

// Remover  datos del local storage
//localStorage.removeItem("usuario");
localStorage.clear();