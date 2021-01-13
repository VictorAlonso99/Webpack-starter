(function(){

// MODO STRICT

"use strict";

// EVENTOS QUE HACEN QUE SE DISPARE UNA FUNCION

function evento(arg){
	console.log("Me dispare por evento BOTON");
	console.log(arg);
};

var objeto = document.getElementById("objDemo");
console.log(objeto);
objeto.addEventListener("keypress",evento());

document.onmousedown =  function(arg){
	alert("Click bloqueado...");
	console.log(arg);
};

document.onmouseup = function(){
	var texto = window.getSelection().toString();
	console.log(texto);
};

//CAJAS DE DIALOGO

var acepto = confirm("Esta seguro que desea borrarlo?");
console.log(acepto);

var nombre = prompt("Ingrese su nombresss?","nombre");
console.log(nombre);



})();