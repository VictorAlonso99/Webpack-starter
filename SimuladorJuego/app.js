

function Jugador(nombre){
	this.nombre = nombre;
	this.pv = 100;
	this.sp = 100;

	this.curar = function(jugadorObjetivo){

		if(jugadorObjetivo.pv = 100){
			if(this.sp >= 10){
				this.sp -= 20;
			}
			jugadorObjetivo.pv = 100;	
		}else if(jugadorObjetivo.pv = 90){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 80){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 70){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 60){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 50){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 40){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 30){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(jugadorObjetivo.pv = 20){
			if(this.sp >= 10){
				this.sp -= 10;
			}
			jugadorObjetivo.pv += 10;
		}else if(this.sp <= 10){
			console.info(this.nombre + " " + "no tiene sp suficiente.");
		}

		this.estado(jugadorObjetivo);
	}

	this.tirarFlecha =  function(jugadorObjetivo){

		if(jugadorObjetivo.pv > 40){
			jugadorObjetivo.pv -= 40
		}else{
			jugadorObjetivo.pv = 0;
			console.error(jugadorObjetivo.nombre + " murio");
		}
		this.estado(jugadorObjetivo);
	}

	this.disparoCuerpo = function(jugadorObjetivo){

		if(jugadorObjetivo.pv > 20){
			jugadorObjetivo.pv -= 20;
		}else{
			jugadorObjetivo.pv = 0;
			console.error(jugadorObjetivo.nombre + " murio");
		}
		this.estado(jugadorObjetivo);
	}

	this.estado = function(jugadorObjetivo){
		console.log(this);
		console.log(jugadorObjetivo);
	}
};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
var victor = new Jugador("Victor");
var alonso = new Jugador("Alonso");

console.log(gandalf);
console.log(legolas);
console.log(victor);
console.log(alonso);


//gandalf.curar(legolas);

//console.log(gandalf);
//console.log(legolas);