// FUNCION NORMAL - SIEMPRE RETORNA UNDEFINED SI NO SE DEFINE EL RETURN
function saludar(){
    console.log("Hola");
    return 1;
};

const retornoSalu = saludar();
console.log(retornoSalu);

// FUNCION ANONIMA
const saludar2 = function(){
    console.log("Hola");
};

saludar2();

//FUNCION CON ARGUMENTOS
function salu(nombre){
    console.log("Hola " + nombre);
};

salu("victor");

// FUNCIONES DE FLECHA
const saluFlecha = (nombre) => {
    console.log("Hola Flecha " + nombre);
    return 10;
};

const saluRet = saluFlecha("Alonso");
console.log(saluRet);

//USO DEL RETURN
function sumar(a,b){
    return "La syma es: " + (a + b);
};

console.log(sumar(1,2));

const sumar2 = (a,b) => {
    return "La multiplicacion es: " + (a * b);
};

console.log(sumar2(5,2));

function aleatorio(){
    return Math.random();
};

console.log(aleatorio());

const aleatorio2 = () => Math.random();

console.log(aleatorio2());

