
class Persona{

    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    };

    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    };

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    };
};

const nombre1 = 'Juan',
      apellido1 = 'Arroyo',
      pais1 = 'Mexico';

const vic = {
    nombre: 'Victor',
    apellido: "Atilano",
    pais: 'Veracruz'
};
    
const persona1 = new Persona(nombre1,apellido1,pais1);
persona1.getInfo();

const persona2 = Persona.porObjeto(vic);
persona2.getInfo();
