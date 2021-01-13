var a = 1;
var b = "Victor";

//alert(a);
console.log(a);
console.warn(b);
console.error(a);
console.info(b);

function imprimir(){

	for(var i=0;i<1000;i++){
		console.log("Imprimir Prueba");
	}
}

function presionoClick(){
	console.log("Presionar Boton");
}

//imprimir();

var obj = {
	numero: 10,
	texto: "Arroyo",
	objHio: {
		nombre: "Victor",
		edad: 25
	}
};

console.log(obj);