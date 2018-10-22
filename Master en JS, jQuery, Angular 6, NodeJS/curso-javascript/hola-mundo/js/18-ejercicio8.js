'use strict'
/*
Una calculadora:
- Pida dos numeros por pantalla
- Si metemos mal los numeros que nos lo vuelva a pedir
- Que muestre en el cuerpo de la pagina, en una alerta y por la consola, el resultado de sumar, restar, multiplicar y dividar.
*/

var number1 = parseInt(prompt("Ingresa el primer numero: ",0));
var number2 = parseInt(prompt("Ingresa el segundo numero: ",0));

while(isNaN(number1) || isNaN(number2) || number1 < 0 || number2 < 0){
	number1 = parseInt(prompt("Ingresa el primer numero: ",0));
	number2 = parseInt(prompt("Ingresa el segundo numero: ",0));
}

var result = "La suma es "+ (number1 + number2)+"</br>"+
			 "La resta es "+ (number1 -number2)+"</br>"+
			 "La multiplicacion es "+(number1 * number2)+ "</br>"+
			 "La division es "+ (number1 / number2)+ "</br>";

var result2 = "La suma es "+ (number1 + number2)+"\n"+
			 "La resta es "+ (number1 -number2)+"\n"+
			 "La multiplicacion es "+(number1 * number2)+ "\n"+
			 "La division es "+ (number1 / number2)+ "\n";

document.write(result);
alert(result2);
console.log(result2);