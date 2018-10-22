'use strict'

/*
1.- Pida 6 numeros por pantalla
2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuantos elementos tiene el array.
6.- busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.

*/


function mostrarArray(elementos,textoCustom=""){	
	
	document.write("<h1>Contenido del Array " + textoCustom + "</h1>");
	document.write("<ul>");
	elementos.forEach((elemento,index)=>{
	document.write("<li>"+elemento+"</li>");	
	});
	document.write("</ul>");
}

var numeros = [];

//Pedir 6 numeros
for(var i=0;i <=5;i++){
	numeros.push(parseInt(prompt("Introduce un numero",0)));
}

//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar el array por consola
console.log(numeros);

//Order y mostrar
numeros.sort();
mostrarArray(numeros,"Ordenados");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"Revertir");

//Contar elementos
document.write("<h1>El array tiene "+numeros.length+" elementos");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero",0))

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion !=-1){
	document.write("<h1>ENCONTRADO</h1>");
	document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
	document.write("<h1>No Encontrado!</h1>");
}



