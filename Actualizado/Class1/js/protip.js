/*
function crearPersona(nombre,apellido){
    return {nombre,apellido}
};
*/

/*
const crearPersona = (nombre,apellido) => {
    return {nombre,apellido}
};
*/

const crearPersona = (nombre,apellido) => ({nombre,apellido});

const persona = crearPersona("Victor","Arroyo");
console.log(persona);

function imprimir(){
    console.log(arguments);
};

imprimir(123,22,"Hola");

const imprimir2 = (...args) => {
    console.log(args);
};

imprimir2(123,22,"Hola");
