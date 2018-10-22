'use strict'

function holaMundo(texto){
	console.log(texto);
	// Para convertir cualquier objecto a string, JS tenemos el metodo "toString()"
	console.log(numero.toString());
	
	var hola_mundo = "texto dentro de funcion";
	// Si utilizamos la variable dentro de la funcion que fue declarada se ejecuta sin problema
	console.log(hola_mundo);
}
// Si ejecutamos una variable que esta en dentro de una funcion da error
// hola_mundo is not defined
//console.log(hola_mundo);

var texto = "Hola mundo soy una variable global";
var numero = 12;
holaMundo(texto);






