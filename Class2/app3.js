//SOBRECARGA DE OPERADORES

function crearProducto(nombre,precio){
	nombre = nombre || "Sin nombre";
	precio = precio || 0;

	console.log("Producto " + nombre + " Precio " + precio);
};


function crearProducto100(nombre){
	crearProducto(nombre,100);
};

crearProducto();
crearProducto100("Lapiz");

//POLIMOSFISMO

function determinaDato(a){
	if(a === undefined){
		console.log("A es undefined checarlo");
	}

	if(typeof a === "number"){
		console.log("Es uun numero");
	}
};

determinaDato();

//OBJETO NUMBER

var a = 10;
var b = new Number(10);

console.log(a);
console.log(b);
console.log(a===b);
console.log(a==b);

var t = a.toFixed(2);
console.log(t);

var d = a.toString();
console.log(d);

var g = a.toPrecision(7);
console.log(g);

var h = a.valueOf();
console.log(h);

//OBJETO BOOLEANO

var o = true;
var u = new Boolean(false);

console.log(o);
console.log(u);

//OBJETO STRING

var j = new String("Victor");

console.log(j);
console.log(j[0]);

var y = "Arroyo Alonso";
console.log(y);

var f = y.toUpperCase();
console.log(f);

var f = y.toLowerCase();
console.log(f);

var f = y.indexOf("y");
console.log(f);

var f = y.lastIndexOf("o");
console.log(f);

var f = y.substr(4,4);
console.log(f);

var f = y.substr(0,y.indexOf(" "));
console.log(f);

document.write(y.italics());
document.write(y.blink());

//OBJETO FECHA

var hoy = new Date();
console.log(hoy);

//YEAR-MONTH-DAY-HOUR-MINUTE-SECOND-MILISECOND
var fechaFija = new Date(2019,1,4,23,20);
console.log(fechaFija);

//OBTENER ANIO
var fechaP = hoy.getFullYear();
console.log(fechaP); 

//OBTENER MES - LO DA EN TIPO ARREGLO
var fechaP = hoy.getMonth();
console.log(fechaP); 

//OBTENER DIA
var fechaP = hoy.getDate();
console.log(fechaP); 

//OBTENER DIA DE LA SEMANA - LO DA EN TIPO ARREGLO
var fechaP = hoy.getDay();
console.log(fechaP); 

var fechaP = hoy.toDateString();
console.log(fechaP); 

var fechaP = hoy.toISOString();
console.log(fechaP); 

var fechaP = hoy.toLocaleString();
console.log(fechaP); 

var fechaP = hoy.toLocaleDateString();
console.log(fechaP); 

var fechaP = hoy.toJSON();
console.log(fechaP); 

//OBJETO MATH

var num = 10.2313122;

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.random(num));
console.log(Math.sqrt(num));


//EXPRESIONES REGULARES
// ^ indica que busque en la primera posicion 
// $ indica que busque en la ultima posicion
// . indica cuallquier caracter
// [] rango a buscar numeros o caracteres
// \s busca cualquiert tipo de separacion
// \w busca caracteres como [a-zA-Z0-9] y _
// \d busca numeros como [0-9]
// i indica que sea insensible a mayusculas y minusculas
// g muestra todas las ocurrencias existentes
// m busca multilinea
// | caracter logico or
// + Busca ocurrencias del mismo caracter precedente
// ? Coincidencia de ninguna o una de caracter e numero especificado
// * Coincidencia de ninguna o mas de caracter e numero especificado
// {} indica el numero de apariciones juntas de caracter o numero

var ex = RegExp("a");
var exp = /A/;

var texto = "Hola Mundo";

var arr = texto.match(ex);
console.log(arr);

var arr = texto.match(exp);
console.log(arr);

