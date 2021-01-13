var c ={
	nombre: "Victor"
};

var d = c;

console.log(c);
console.log(d);

c.nombre = "Alonso";

console.log(c);
console.log(d);

d.nombre = "Hector";

console.log(c);
console.log(d);

var persona = {
	nombre: "Alonso",
	edad: 25,
	direccion: {
		pais: "Mexico",
		estado: "Tecamac",
		edificio: {
			nombre: "Principal",
			telefono: "5532488175"
		}
	}
};

console.log(persona);
console.log(persona.direccion);
console.log(persona.direccion.pais);

persona.direccion.zipcode=1828282;
console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio);
console.log(persona.direccion.edificio.telefono);
console.log(persona.direccion.edificio.nombre);

var short = persona.direccion.edificio;
short.jefe = "Victor Arroyo";
short.nopiso = 8;
console.log(short.jefe);
console.log(short.nopiso);

console.log(persona["nombre"]);
console.log(persona["direccion"]["edificio"]["nopiso"]);
