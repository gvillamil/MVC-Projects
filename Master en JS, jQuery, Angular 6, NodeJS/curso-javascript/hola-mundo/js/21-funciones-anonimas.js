'use strict'

// funciones anonimas
// Funciones que no tienen un nombre

function sumame(numero1,numero2,sumaYmuestra,sumaXdos){
	var sumar = numero1 + numero2;
	
	sumaYmuestra(sumar);
	sumaXdos(sumar);
	
	return sumar;
}

// Funciones callback con la palabra "function"
/*
sumame(5,7,function(dato){
	console.log("La suma es: " + dato);
},
function(dato){
		console.log("La suma por 2 es: " + (dato*2))
});
*/
// Misma funcion pero de manera simplificada con " => ", 
// En caso de que solo se pase un parametro no es necesario los parentesis, de lo contraio, se los agregamos y los parametros van separados por comas ","
sumame(5,7,dato => {
	console.log("La suma es: " + dato);
},
dato => {
		console.log("La suma por 2 es: " + (dato*2))
});






