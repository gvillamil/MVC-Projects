'use strict'
/*
Tabla de multiplicar de un numero capturado por pantalla
*/

var number = parseInt(prompt("De que numero quieres la tabla un numero: ",1));

document.write("<h1>Tabla del "+number+"</h1>")
for(var i =1; i<=10;i++){
	document.write(i +" x "+ number+" = "+(i*number)+"</br>");
}
//Todas las tablas de multiplicar
for(var j =1; j<=10;j++){
	document.write("<h1>Tabla del "+j+"</h1>")
	for(var i =1; i<=10;i++){
		document.write(i +" x "+ j+" = "+(i*j)+"</br>");
	}
}
