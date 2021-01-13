let personaje = {
    name: 'Victor',
    edad: 25,
    vivo: true,
    cord: {
        lat: 23221,
        long: -1232.90
    },
    trajes: ['Suit','Mark','Blick'],
    direccion: {
        zip: 'Tecamac 1211'
    }
};

console.log(personaje);
console.log(personaje.edad);
console.log(personaje.trajes[1]);
console.log(personaje.direccion.zip);

delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);
