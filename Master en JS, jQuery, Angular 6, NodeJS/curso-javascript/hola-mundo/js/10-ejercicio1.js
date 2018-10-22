'use strict'
/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
*/


var numero1 = parseInt(prompt("Ingresa Numero 1",0));
var numero2 = parseInt(prompt("Ingresa Numero 2",0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
	numero1 = parseInt(prompt("Ingresa Numero 1",0));
	numero2 = parseInt(prompt("Ingresa Numero 2",0));

}

if(numero1 == numero2){
	alert("Son iguales");
} else if(numero1 > numero2){
	alert("El numero mayor es: " +numero1);
	alert("El numero menor es: " +numero2);
}
else if(numero2 > numero1){
	alert("El numero mayor es: " +numero2);
	alert("El numero menor es: " +numero1);
}
else{
	alert("Introduce los numeros correctamente");
}