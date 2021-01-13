class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' Instancias';
    };

    static mensaje(){
        console.log('Hola a todos soy un metodo estatico');
    };

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //CONSTRUCTOR
    constructor(nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'Sin frase'){
        //if(!nombre) throw Error('Necesitamos el nombre!');
        //console.log('Hola');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    //SETS Y GETS
    set setComidaFvorita(comida){
        this.comida = comida.toUpperCase();
    };

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    };

    //METODOS
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    };

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    };
};

const spiderman = new Persona();
const spider = new Persona('Victor','Ironman','Soy ironman');
const hulk = new Persona('Benny','Hulk','Soy Hulk Verde');
console.log(spiderman);
console.log(spider);
console.log(hulk);

//EJECUTAR METODOS
spiderman.quienSoy();
spider.quienSoy();
hulk.quienSoy();

console.log('=============================');

hulk.miFrase();
spider.miFrase();

console.log('=============================');

spiderman.setComidaFvorita = 'Chilaquiles con salsa verde';
console.log(spiderman);

hulk.setComidaFvorita = 'Papas a la francesa';
console.log(hulk);
console.log(hulk.getComidaFavorita);

console.log('=============================');

console.log(Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
