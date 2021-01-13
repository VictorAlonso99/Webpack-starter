(() => {
'use strict'

let deck =[];
const tipos = ["C","H","D","S"];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosComputadora = 0;
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const btnDetener = document.querySelector('#btnDetener');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnNuevo = document.querySelector('#btnNuevo');

//ESTA FUNCION CREA UNA NUEVA BARAJA
const crearDeck = () => {
    for(let i = 2;i<=10;i++){
        for(let tipo of tipos){
            deck.push(i+tipo);
        };
    };

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp+tipo);
        };
    };
    //console.log(deck);
    deck = _.shuffle(deck);
    //console.log(deck);

    return deck;
};

//EMPEZAR JUEGO
crearDeck();

//ESTA FUNCION PERMITE PEDIR UNA CARTA
const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    //console.log(carta);
    //console.log(deck);
    return carta;
};

//pedirCarta();

//VALOR DE CADA CARTA
const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    let puntos;
    //console.log({valor});

    /*if(isNaN(valor)){
        puntos = (valor === 'A')? 11 : 10;
    }else{
        puntos = valor * 1;
    };*/

    return (isNaN(valor)) ? (valor === 'A')? 11 : 10 
                            : puntos = valor * 1;
    //console.log(puntos);
};

const valor = valorCarta(pedirCarta());
//console.log({valor})

const turnoComputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src=`cartas/${carta}.png`
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        };
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana!');
        }else if(puntosMinimos > 21){
            alert('Computadora Gana!');
        }else if(puntosComputadora > 21){
            alert('Jugador Gana!');
        }else{
            alert('Computadora Gana');
        };
    },100);

};

//EVENTOS BOTONES
btnPedir.addEventListener('click',function(){
    const carta = pedirCarta();
    //console.log(carta);
    puntosJugador = puntosJugador + valorCarta(carta);
    //console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;
    //<img class="carta" src="cartas/10C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src=`cartas/${carta}.png`
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento mucho perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn('21, Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click',() => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click',() => {
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    console.clear();
});

})();