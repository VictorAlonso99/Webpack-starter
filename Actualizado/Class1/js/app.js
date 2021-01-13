//console.log(console.log("Hola Mundo"));

//VAR ERA LA FORMA ANTIGUA DE CREAR VARIABLES NUEVAS O INICIALIZARLAS
var a = 10;
a = 20;
console.log(a);
console.warn(a);
console.info(a);
console.error(a);


//LET ES LA NUEVA FORMA PARA CREAR VARIABLES O INICIALIZARLAS
let b = 10;
b = 15;
console.log(b);

//EL VALOR DE LAS CONSTANTES NO PUEDE CAMBIAR
const c = 10;
//c = 15;
console.log(c);

console.log('%c Mis variables','color:blue');

console.table(a,b,c);
console.table({a,b,c});

var outerWidth = 1000000;
var outerHeight = 600;

//LET Y CONST NO SOBREESCRIBEN LAS VARIABLES GLOBALES QUE SE ENCUENTRAN EN WINDOW
let outerWidth = 1000000;
const outerHeight = 600;