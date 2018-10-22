'use strict'

// Transformacion de textos
var numero = 44;
var texto1 = "Bienvenido al curso de Victor al Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();
console.log(dato);
// convertir a mayusculas
dato = texto1.toUpperCase();
console.log(dato);
// converitr a minusculas
dato = dato.toLowerCase();
console.log(dato);


// Calcular la longitud de un texto
var nombre = "Guillermo Villamil";
console.log(nombre.length);

// en un array length cuenta el numero de items de un arreglo
nombre = ["hola","mundo"];
console.log(nombre.length);


// COncatenar textos
var textoTotal = texto1 +" "+ texto2;
console.log(textoTotal);

textoTotal = texto1.concat(" - " + texto2);
console.log(textoTotal);

// Busqueda 'indexOf' (devuelve la primer coincidencia que encuentre dentro del string)
var busqueda = texto1.indexOf("de");
console.log("Busca 'de' con indexOf: "+busqueda);

// Busqueda 'lastIndexOf' (devuelve la ultimo coincidencia que encuentre dentro del string)
busqueda = texto1.lastIndexOf("al");
console.log("Busca 'de' con lastIndexOf: "+busqueda);

// Busqueda 'search' similar a indexOf
busqueda = texto1.search("de");
console.log("Busca 'de' con search: "+busqueda);

// Busqueda con 'match' (devuelve un arreglo con las coincidencias encontradas)
busqueda = texto1.match(/al/g);
console.log(busqueda);

// Subastraer de un string 'substr' - substrae un pedazo de texto indicandole a paertir de q caracter y de alli cuantos caracteres
busqueda = texto1.substr(14,5);
console.log("Substraer 5 caracteres a partir del caracter 14: "+busqueda);

// chartA - busca un caracter dada una posiciondentro del string
// startWith - busca la coincidencia al inicio de la cadena.
// endWith - busca al final de la cadena
// include - busca en toda la cadena (es Case sensitive)

// Remplazar texto "replace", busca un texto en la cadena y los sustituye por el segundo parametro (reemplaza la primer coincidencia)
busqueda = texto1.replace("al","AL");
console.log("Reemplaza 'al' por 'AL'con replace: "+busqueda);

// cortar por un caracter con "split"
busqueda = texto1.split(" ");
console.log(busqueda);


// slice - recorta un string similar a "substr"
// trim - recorta los espacios que estan adelante y atras de la cadena







