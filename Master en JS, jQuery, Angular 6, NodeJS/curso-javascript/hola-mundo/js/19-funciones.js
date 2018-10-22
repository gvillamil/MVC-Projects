'use strict'
/*
Funciones

Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
*/

//Fefinir la funcion
/*
function calculadora(){
	//Conjunto de instrucciones a ejecutar
	console.log("Hola soy la calculadora");
	console.log("Hola si soy yo");
	
	// podemos regresar un valor si queremos
	return "Hola soy la calculadora!!";
}

var result = calculadora();
console.log(result);
*/

//Parametros en funciones
/*
function calculadora(num1,num2){
	//Conjunto de instrucciones a ejecutar
	console.log("La suma es:" +(num1 + num2));
	console.log("La resta es:" +(num1 - num2));
	console.log("La multiplicacion es:"+ (num1 * num2));
	console.log("La division es:" +(num1 / num2));
	console.log("******************************");
}
for(let i=1; i <=10; i++){
	console.log(i);
	calculadora(i,8);
}
*/

// Parametros opcionales
/*
function calculadora(num1,num2,mostrar = false){
	
	if(!mostrar){
		//Conjunto de instrucciones a ejecutar
		console.log("La suma es:" +(num1 + num2));
		console.log("La resta es:" +(num1 - num2));
		console.log("La multiplicacion es:"+ (num1 * num2));
		console.log("La division es:" +(num1 / num2));		
		console.log("******************************");
	} else{
		//Conjunto de instrucciones a ejecutar
		document.write("La suma es:" +(num1 + num2)+"</br>");
		document.write("La resta es:" +(num1 - num2)+"</br>");
		document.write("La multiplicacion es:"+ (num1 * num2)+"</br>");
		document.write("La division es:" +(num1 / num2)+"</br>");		
		document.write("******************************");
	}

	
}
calculadora(1,5,true);
*/

// Funciones dentro de otras funciones

function porConsola(num1,num2){
	//Conjunto de instrucciones a ejecutar
	console.log("La suma es:" +(num1 + num2));
	console.log("La resta es:" +(num1 - num2));
	console.log("La multiplicacion es:"+ (num1 * num2));
	console.log("La division es:" +(num1 / num2));		
	console.log("******************************");
}

function porPantalla(num1,num2){
	//Conjunto de instrucciones a ejecutar
	document.write("La suma es:" +(num1 + num2)+"</br>");
	document.write("La resta es:" +(num1 - num2)+"</br>");
	document.write("La multiplicacion es:"+ (num1 * num2)+"</br>");
	document.write("La division es:" +(num1 / num2)+"</br>");		
	document.write("******************************");
}

function calculadora(num1,num2,mostrar = false){
	
	if(!mostrar){
		porConsola(num1,num2);
	} else{
		porPantalla(num1,num2);
	}
return true;	
}
calculadora(1,5,false);








