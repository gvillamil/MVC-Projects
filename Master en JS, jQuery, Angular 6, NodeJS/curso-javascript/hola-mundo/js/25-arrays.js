'use strict'

// arrays, arreglos, matrices

var nombre = "Guillermo Villamil";
var nombres = ["memo","hugo","paco","luis",78,true];

var lenguajes = new Array("c#","java","c++");

console.log(nombres);
console.log(lenguajes);
// sacar el tamaño del arreglo por pantalla
console.log("Tamaño del arreglo 'nombres': " + nombres.length);

// sacar un elemento dado por el usuario "prompt" en un alert, validar q el indice ingresado sea correcto
/*
var indice = parseInt(prompt("Ingresa elemento a mostrar:",0));

if(indice >= nombres.length){
	alert("Ingresa un indice valido");
}
else
{
	alert(nombres[indice]);
}
*/
// mostrar todos los elementos del arreglo en una lista html

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]);
}

*/
// recorres un array con forEach
lenguajes.forEach((item,indice,array)=>{
	console.log(array);
	document.write("<li>"+ indice+"-"+item);
}
);

document.write("</ul>");