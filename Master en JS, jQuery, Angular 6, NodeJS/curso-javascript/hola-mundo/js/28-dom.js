'use strict'

/*
DOM	Document Object Model
*/

//Conseguir elementos con un id concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML =" Texto en la caja desde JS";
caja.style.background ="red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//console.log(caja);

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
//var contenidoEnTexto = todosLosDivs[2];
//contenidoEnTexto.innerHTML = "Otro valor para el segundo elemento";
//contenidoEnTexto.style.background ="red";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


var valor;
//todosLosDivs.forEach((valor,index)=>{
	for(valor in todosLosDivs){				
		if(typeof todosLosDivs[valor].textContent == 'string'){
			var parrafo = document.createElement("p")
			var texto = document.createTextNode(todosLosDivs[valor].textContent);
			// meter texto dentro de parrafo
			parrafo.append(texto);
			// seleccionamos <section>
			document.querySelector("#miseccion").appendChild(parrafo);
		}	
	}
//});
seccion.append(hr);

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

//console.log(divsAmarillos);
divsAmarillos[0].style.background = "yellow";
for(let div in divsRojos){
		console.log(divsRojos[div]);
		if(divsRojos[div].className == "rojo"){
				divsRojos[div].style.background = "red";
		}
}
//console.log(divsRojos);


// Query selector
var id = document.querySelector("#encabezado");

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);





