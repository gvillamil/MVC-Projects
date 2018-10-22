'use strict'

// arrays multidimensionales

var categorias = ["Terror","Accion","Comedia"];
var peliculas = ["La veredad duele","La vida es bella","Gran torino"];

var cine = [categorias,peliculas];

console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][1]);

// Añadir un elemento al array "push"
peliculas.push("Batman");
console.log(peliculas);
peliculas.pop() // Quitamos el ultimo elemento agregado al array
console.log(peliculas);
// convertir un array a un string
var peli = peliculas.join();
console.log(peli);
// Con split convierto un string en un arreglo

// con 'sort' ordena de mayor a menor un arreglo

// con 'reverse' ordena de menor a mayor

// Busquedas en array
var lenguajes = ["java","php","c#","vb"];

// forma larga
/*
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "php7";
});
*/
//forma corta . devuelve el texto del elemento buscado "findIndex" devuelve el indice del elemento buscado
//var busqueda = lenguajes.find(lenguaje => lenguaje == "c#");

//Busqueda con una condicion
var numeros = [10,30,60,80];
var busqueda = numeros.some(num => num >80);

console.log(busqueda);
