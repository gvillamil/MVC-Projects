'use strict'
//	Condicional IF
//	Si A es igual a B entonces has algo

var edad = 33;
var nombre = "david";
 
 debugger;
 if( edad >= 18){
	// es mayor de edad
	console.log(nombre + " tiene "+edad+" años es mayor de edad");
	
	if(edad <= 33){
		console.log("todavia eres millenial");
	}else{
		console.log("ya no eres milenial"); 
	}
 }
 else{
	console.log(nombre + " tiene "+edad+" años es menor de edad");
 }
