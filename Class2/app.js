
function Persona(){
	this.nombre =  "Victor";
	this.apellido = "Arroyo";
	this.edad =  30;
	this.pais = "Mexico";

	/*this.imprimirInfo = function(){
		console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
	}*/
};


Persona.prototype.imprimirInfo = function(){
	console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
}
//Persona.prototype.pais = "Mexico";

var vic = new Persona();

//vic.imprimirInfo();
console.log(vic);
//console.log(vic.pais);
console.log(vic.imprimirInfo);

//var a = "Victor";

//FUNCION ANONIMA

(function(){
	var a = 10;

	console.log(a);

	function cambiarA(){
		a=30;
	}

	cambiarA();

	console.log(a);
})();


function ejecutarFuncion(fn){
	if(fn() === 1){
		return true;
	}else{
		return false;
	}
};

console.log(

	ejecutarFuncion(function(){
		console.log("Funcion anonima ejecutada");
		return 1;
	})
);

//FUNCIONES TYPEOF O INSTANCEOF

function identifica(param){
	console.log(typeof param);
};

function Persona(){

};

var vic = new Persona();

identifica(1);
identifica("1");
identifica({});
identifica(vic);
identifica(function(){});




function identifica2(param){

	console.log(param instanceof Persona2 );
	//console.log(typeof param);
	if(typeof param == "function"){
		param();
	}else{
		console.log(param);
	}
};

function Persona2(){
	this.nombre = "Alonso";
	this.edad =  25;
};

var vic2 = new Persona2();


identifica2(function(){
	console.log("Soy anonima");
});
identifica2(10);
identifica2(vic2);
