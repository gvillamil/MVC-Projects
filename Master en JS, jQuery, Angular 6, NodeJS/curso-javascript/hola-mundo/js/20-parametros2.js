'use strict'

// Parametros REST y SPREAD


//   REST
/*
Agregar tres puntos(...) antes del ultimo parametro y lo que hace JS es interpretarlo como un arreglo.
Este arreglo tendra el numero de parametros que le ingrese el usuario.
*/
function listadoFrutas(fruta1,fruta2,...todas_las_demas){
	console.log("Fruta 1: "+fruta1);
	console.log("Fruta 2: "+fruta2);	
	console.log(todas_las_demas);
}

//listadoFrutas("naranja","pera","manzana","guayaba","fresa");

// SPREAD
/*
	Caso parecido a los REST, solo que el arreglo es interpretado como si fuesen los parametros independientes.
*/
var frutas = ["naranja","pera"];

listadoFrutas(...frutas,"naranja","pera","manzana","guayaba","fresa");











