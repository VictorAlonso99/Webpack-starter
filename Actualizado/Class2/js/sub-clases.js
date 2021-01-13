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

class Heroes extends Persona{

    clan = 'Sin clan';

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan = 'Avengers';
    };

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    };
};

const spiderman = new Heroes();
const spider = new Heroes('Victor','Ironman','Soy ironman');
const hulk = new Persona('Benny','Hulk','Soy Hulk Verde');

console.log(spider);
spider.quienSoy();

console.log(spiderman);
spiderman.quienSoy();

