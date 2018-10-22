'use strict'
/*
Que nos diga si es numero impar o par.
1. Ventana prompt
2.- Si no es valido que lo pida de nuevo
*/

var number = parseInt(prompt("Introduce un numero: ",0));

while(isNaN(number)){
	number = parseInt(prompt("Introduce un numero: ",0));
}

if(number%2==0){
	console.log("Es un Par");
} else
{
	console.log("Es impar");
}