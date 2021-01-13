
let a = 5;

if(a > 10){
    console.log("A es mayor que 10");
};

if(a < 10){
    console.log("A es menor que 10");
};

if(a > 10){
    console.log("A es mayor que 10 correcto");
}else{
    console.log("A es menor que 10 falso");
};

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if(dia === 0 ){
    console.log("Domingo");
}else if(dia === 1){
    console.log("Lunes");
}

//= EL SIGNO IGUAL ES PARA SIGNAR VALOR
//== DOBLE SIGNO IGUAL SIGNIFICA QUE VALIDA SU VALOR
//=== TRIPLE SIGNO IGUAL VALIDA SU VALOR Y SU TIPO SEAN IGUALES

//CONDICION TERNARIO

dia = 7;

let diaSemana = (dia === 0) ? "Domingo" : (dia === 1) ? "Lunes" : (dia === 2) ? "Martes" : "Otro dia";
console.log(diaSemana);

const dias = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado"
};

console.log(dias[dia] || "Dia no definido");

//LOGICA BOOLEANA
const regresaTrue = () => {
    console.log("Regresa true");
    return true;
};

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
};

console.warn("NOT O NEGACION");
console.log(!true);
console.log(!false);
console.log(!regresaFalse());
console.log(!regresaTrue());

const numdia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

if([0,6].includes(numdia)){
    console.log("Fin de Semana");
    horaApertura = 9;
}else{
    console.log("Dia de la semana");
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = "Esta abierto";
}else{
    mensaje = `Esta cerrado, hor abrimos a las ${horaApertura}`;
}

console.log({horaApertura,mensaje});

horaApertura = ([0,6].includes(numdia)) ?  9 : 11;
mensaje = (horaActual >= horaApertura) ? "Esta abierto" : `Esta cerrado, hor abrimos a las ${horaApertura}`;
console.log({horaApertura,mensaje});

//CONDICION SWITCH

const ndia = 3;
switch(ndia){
    case 0:
        console.log("Domingo");
        break;
    
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    default:
        console.log("Otro dia");
}

//CONDICION WHILE O DOWHILE

const carros = ["Ford","Mazda","BMW"];
let i = 0;

while(i < carros.length){
    console.log("El carro es: ",carros[i]);
    i++;
};

i = 0;
do{
    console.log("El carro2 es: ",carros[i]);
    i++;
}while(i > carros.length);

//CONDICION FOR - FOR IN - FOR OF

const juegos = ["Batman","Superman","Pacman","Hombre Arana","Aquaman"];

for(let i = 0;i < juegos.length;i++){
    console.log("El super heroes es: ",juegos[i]);
};

for(let p in juegos){
    console.log(juegos[p]);
};

for(let u of juegos){
    console.log("Nuevo juego: ",u);
};