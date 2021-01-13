const vic = {
    nombre: "Victor",
    edad: 25,
    imprimit(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

const alo = {
    nombre: "Alonso",
    edad: 27,
    imprimit(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

//vic.imprimit();
//alo.imprimit();

function Persona(nombre,edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this,imprimit = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

const maria = new Persona('Maria',18);
const vict = new Persona(vic);
console.log(maria);
//maria.imprimit();
//vict.imprimit();

