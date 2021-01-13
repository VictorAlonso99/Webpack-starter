
const arr = new Array(10);
console.log(arr);

let videoJuegos = ['Mario','Luigy','Cart2'];
console.log(videoJuegos);
console.log(videoJuegos[0]);
console.log(videoJuegos[1]);
console.log(videoJuegos[2]);

let juegos = ['Mario','Metro','Panda'];
console.log(juegos.length);
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log(ultimo);

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr});
});

let nueva = juegos.push('Koda');
console.log(nueva);

let prim = juegos.unshift('Carte');
console.log(prim);

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr});
});

let indice = juegos.indexOf('Metro');
console.log('Estoy en la posicion:',indice);

let borr = juegos.pop();
console.log(borr);

let pos = 1;
let borr2 = juegos.splice(pos,2);
console.log(borr2);

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr});
});
