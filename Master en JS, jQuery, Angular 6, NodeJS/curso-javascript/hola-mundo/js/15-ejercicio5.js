'use strict'
/*
Muestre todos los numeros divisores de un numero introduce en prompt
*/

var num1 = parseInt(prompt("Mete un numero: ",0));

for(var i = 1;i<=num1;i++){
	if(num1%i == 0){
		console.log("Divisor:" + i);
	}
}
