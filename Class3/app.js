//MANEJO DE ERRORES

try{ 
	var a = 10;

	if(a === 100){
		//THROW FORZA A EJECUTAR EL CATCH
		throw "oh oh!";
	}else{
		throw "que mal!";
	}

	console.log("El valor es: ",a);
}

catch(e){
	if( e === "oh oh!"){
		console.log("Error Catch Tipo 1", e);
	}else{
		console.log("Error Catch Tipo 2", e);
	}
}

//FINALLY SIEMPRE SE EJECUTA
finally{
	console.log("Finalmente Termino de Ejecutar");
}


//CONDICION IF ELSE

var nota = 55;

if(nota > 60){
	console.log("Aprobo");
}else{
	console.log("Reprobo");
}

if(nota >= 90){
	console.log("A");
}else if(nota >= 80){
	console.log("B");
}else if(nota >= 70){
	console.log("C");
}else if(nota >= 60){
	console.log("D");
}else{

	if(nota > 50){
		console.log("+F");
	}else{
		console.log("-F");
	}
}

var a = 10;
var b = 20;

var c = (a > b) ? function(){
	console.log("A es mayor a B");
	return a;
}: function(){
	console.log("B es mayor a A");
	return b;
}();

console.log(c);

//CONDICIONAL SWITCH

var mes = 5;

switch(mes){
	case 1:
		console.log("Enero");
	break;

	case 2:
		console.log("Febrero");
	break;

	case 3:
		console.log("Marzo");
	break;

	default:
		console.log("Cualquier otro mes...");
}

// TRABAJAR CON JSON / CONVETIRLO A JSON

var objetoJS = {
	nombre: "Victor",
	edad: 30
};

console.log(objetoJS);

var jsonString = JSON.stringify(objetoJS);
console.log(jsonString);

var objectConvert = JSON.parse(jsonString);
console.log(objectConvert);

//CONDICIONES WHILE / DO WHILE

var i = 1;

while(i <= 10){
	console.log(i);
	i++;
};

do{
	console.log("Do while: ",i);
	i++;
}while(i <= 12);

//CONDICIONES FOR / FOR IN

for(var i = 0; i < 5 ; i++){

	if(i === 2){
		continue;
	}
	console.log(i);
};

var Persona =function(){
	this.nombre = "Juan";
	this.edad = 18;
};

var juan = new Persona();
Persona.prototype.direccion = "Tecamac";

for(prop in juan){
	console.log(prop,":",juan[prop]);
}

//ROTULANDO CICLOS

for_principal:
for(var ii = 1;ii<=8;ii++){
	console.log("Valor ii: ",ii);

	for_secundario:
	for(var j = 1;j<=5;j++){
		console.log("Valor j: ",j);
		//continue for_principal;

		for(var x = 7;x<=15;x++){
			console.log("Valor x: ",x);
			 //break for_principal;
			 break for_secundario;
		}
	}
};

//FUNCION DE TIEMPO

setTimeout(function(){
	console.log("Paso un segundo....");
},1000);


var segundos = 0;

var intervalo = setInterval(function(){
	segundos++;
	console.log("Segundos.. " ,segundos);

	if(segundos === 10){
		clearInterval(intervalo);
	}
},1000);