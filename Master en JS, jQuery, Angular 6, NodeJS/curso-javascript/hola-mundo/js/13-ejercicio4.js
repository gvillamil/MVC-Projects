'use strict'
/*
Hacer un programa que muestre todos los numeros impares entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Introduce el primer numero: ",0));
var num2 = parseInt(prompt("Introduce el segundo numero: ",0));

document.write("<h1>De "+ num1 +"a "+num2 +"estan estos numeros impares:</h1>")
while(num1<num2){
 num1++;
 if(num1%2 == 1){
 console.log("El numero:" + num1 + " es impar");
 }
}


