'use strict'

// Plantillas de texto
var nombre = prompt("Mete un nombre");
var apellidos = prompt("Mete tus apeidos");

//var texto = "Mi nobre es: "+ nombre + " </br> mis apeidos son: " + apellidos;
var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);
