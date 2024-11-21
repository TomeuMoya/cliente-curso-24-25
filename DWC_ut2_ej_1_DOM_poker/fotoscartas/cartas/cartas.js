function Carta(numero, palo) {

    this.numero = numero;
    this.palo = palo

    if (palo == "hearts" || palo == "diamonds") {

        this.color = 'Rojo';

    } else {

        this.color = 'Negro';

    }

}

function Player(nombre, mano) {

    this.nombre = nombre;
    this.mano = mano;

}

const palos = ["hearts", "diamonds", "spades", "clubs"];
const numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var baraja = [];

//Creamos la baraja
function crearBaraj() {

    baraja = [];

    for (let palo of palos) {

        for (let numero of numeros) {

            baraja.push(new Carta(numero, palo))

        }

    }

}

//La barajamos
function barajar(baraja) {

    return baraja.sort(

        function () {
            return Math.random() - 0.5;
        }

    );

}

//Repartimos las cartas
function repartir(baraja) {

    barajar(baraja);
    let mano = [];

    for (let carta of baraja) {

        mano.push(carta);
        let indice = baraja.indexOf(carta);
        baraja.splice(indice, 1);

        if (mano.length == 5) {

            break;

        }

    }

    return mano;

}

crearBaraj();
let mano = repartir(baraja);
console.log(baraja);
console.log(mano);

let player = null;

//Creamos el boton de jugar
let botjugar = document.createElement("button");
botjugar.innerHTML = "Jugar";
document.body.appendChild(botjugar);

//Creamos volver a jugar
let botvolver = document.createElement("button");
botvolver.innerHTML = "Volver a jugar";
botvolver.style.display = "none";
document.body.appendChild(botvolver);

//Mostrar cartas en pantalla
function mostrar(player) {
    const manoContainer = document.getElementById("manoContainer");
    manoContainer.innerHTML = ""; // Limpia la mano anterior

    // Mostrar cada carta del jugador
    player.mano.forEach((carta, index) => {
        const cartaDiv = document.createElement("div");
        const cartaImg = document.createElement("img");

        // Construimos la ruta de la imagen con el formato 'numero_of_palo.png'
        let nombreArchivo = `${carta.numero}_of_${carta.palo}.png`;

        // Actualizamos la ruta para que apunte a la carpeta correcta
        cartaImg.src = `../${nombreArchivo}`;
        cartaImg.alt = `${carta.numero} of ${carta.palo}`;
        cartaImg.style.width = "100px"; // Ajusta el tamaño si es necesario
        cartaImg.style.margin = "10px"; // Un poco de espacio entre las cartas

        // Añadimos la imagen al div
        cartaDiv.appendChild(cartaImg);
        manoContainer.appendChild(cartaDiv);
    });
}

//Creamos el evento para cuando se clique el boton jugar
botjugar.addEventListener("click", function () {

    //Creamos el jugador si aun no estaba creado y le damos las cartas
    if (!player) {

        let playername = prompt("Introduzca su nombre");
        let playermano = repartir(baraja);
        player = new Player(playername, playermano);

    }

    mostrar(player);
    let mensaje = comprobar(player.mano);
    let div = document.createElement("div");
    document.querySelector("body").appendChild(div);
    div.innerHTML = mensaje;
    div.id = "alerta";
    botjugar.style.display = "none";
    botvolver.style.display = "inline";

})

botvolver.addEventListener("click", function () {

    if (baraja.length < 52) {

       crearBaraj();
        
    }

    player.mano = repartir(baraja);
    mostrar(player);
    let mensaje = comprobar(player.mano);
    let div = document.getElementById("alerta");
    div.innerHTML = mensaje;

})

// Contenedor para mostrar la mano
let manoContainer = document.createElement("div");
manoContainer.id = "manoContainer";
document.body.appendChild(manoContainer);

function comprobar(mano) {

    for (let i = 0; i < mano.length; i++) {

        for (let j = i + 1; j < mano.length; j++) {
            
            if (mano[i].numero == mano[j].numero) {
                
                return "Enhorabona, has trobat una parella";
                
            }
            
        }

    }
    
    return "No s'han trobat parelles";

}