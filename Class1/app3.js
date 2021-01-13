
//USO GENERAL DE UNA FUNCION

function primeraFuncion(){
	var t = 20;
	console.log("valort",t);
};

primeraFuncion();

//PARAMETROS CON UNA FUNCION

function imprimir(nombre){
	console.log(nombre);
};

imprimir("Alonso");

function suma(a,b){
	var sum = a + b;
	console.log(sum);
};

suma(5,6);

function resta(a,b){
	
	console.log(a-b);
};

resta(5,6);

function imprimo(persona){
	console.log(persona.nombre + " " + persona.apellido);
};

imprimo({
	nombre: "Arroyo",
	apellido: "Atilano"
});

//FUNCION ANONIMA:

function prueba(fn){
	fn();
};

var persona2 = {
	nombre: "Hector",
	apellido: "Andrade"
};

prueba(function(){
	console.log("Funcion anonima");
});

//RETORNO DE LAS FUNCIONES

function obtenerAleatorio(){
	return Math.random();
};

console.log(obtenerAleatorio()+10);

function obtenerNombre(){
	return "Atilano";
};

console.log(obtenerNombre() + " " + "Arroyo");

function crearPersona(nombre, apellido){
	return {
		nombre: nombre,
		apellido: apellido
	}
};

var persona4 = crearPersona("Victor Alonso","Arroyo Atilano");
console.log(persona4);
console.log(persona4.nombre);
console.log(persona4.apellido);

//METODOS CON EL OBJETO THIS

var perso = {
	nombre: "Maria",
	apellido: "Duon",
	imprimirNombre: function(){
		console.log("Nombre completo" + " " + this.nombre);
	},
	direccion: {
		pais: "Mexico",
		obtenerPais: function(){
			//console.log("La direccion es: " + this.pais);
			var self = this;

			var nuevaDireccion = function(){
				console.log(self);
				console.log("La direccion es: " + self.pais);
			}
			nuevaDireccion();
		}
	}
}

perso.imprimirNombre();
perso.direccion.obtenerPais();

//PALABRA RESERVADA NEW

function Hombre(){
	this.edad = 25;
	this.sexo = "men";

	console.log("Paso por aqui");
};

var juan = new Hombre();

console.log(juan);
console.log(juan.edad);

function Hombres(nombre,apellido){
	this.nombre = nombre,
	this.apellido = apellido,
	this.edad =  30,

	this.unaFuncion = function(){
		console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
	}
};

var vic = new Hombres("Hector","Andrade");
vic.unaFuncion();
