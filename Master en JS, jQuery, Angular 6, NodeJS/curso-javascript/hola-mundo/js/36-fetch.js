'use strict'

// FETCH (ajax) y peticiones a servicios/ apis rest
// Fetch - es un metodo sustituto que hace peticiones (asyncronas a un servidor) ajax

var div_usr = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

	getUsuarios()
		.then(data => data.json())
		.then(users =>{		
			listadoUsuarios(users.data);
			
			return getJanet();
		})
		.then(function(data){
			return data.json();
		})
		.then(user =>{
			mostrarJanet(user);
		});
	
function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios(usuarios){
	usuarios.map((user,i)=>{
			let nombre = document.createElement('h3');
			nombre.innerHTML = i +". " + user.first_name + " " + user.last_name;
			div_usr.appendChild(nombre);
			
			document.querySelector(".loading").style.display = "none";
		});
}

function mostrarJanet(user){
	console.log(user);
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');
	
	nombre.innerHTML = user.data.first_name + " " + user.data.last_name;
	avatar.src = user.data.avatar;
	avatar.width = "100";
		
	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);
			
	document.querySelector("#janet .loading").style.display = "none";
	
}



