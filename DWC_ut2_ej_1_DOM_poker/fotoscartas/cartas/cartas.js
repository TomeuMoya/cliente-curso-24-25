function Carta(numero, palo) {

    this.numero = numero;
    this.palo = palo

    if (palo == "Corazones" || palo == "Diamantes") {
        
        this.color = 'Rojo';

    } else {

        this.color = 'Negro';
        
    }

}

const palos = ["Corazones", "Diamantes", "Picas", "Trebol"];
const numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const baraja = [];

//Creamos la baraja
for (let palo of palos) {

    for (let numero of numeros) {

        baraja.push(new Carta(numero, palo))
    
    }
    
}

//La barajamos
function barajar(baraja) {

    return baraja.sort(

        function() {
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

let mano = repartir(baraja);
console.log(baraja);
console.log(mano);

let app = document.querySelector("#app");
app.innerHTML = "";

// //Generador de cartas
// function crearBaraja() {
//     for (let palo of palos) {

//         for (let valor of numero) {

//             const carta = {

//                 numero: valor,
//                 palo: palo.nombre,
//                 color: palo.color

//             };

//             baraja.push(carta);

//         }
//     }

//     console.log(baraja);

// }

// function mezclar(baraja) {

//     return baraja.sort(() => Math.random() - 0.5);

// }

// // // Repartir mano
// function repartir(baraja) {

//     let mano = [];
//     contador = 0;

//     for (let carta of baraja) {

//         if (contador === 5) {

//             break;

//         } else {

//         mano.push(carta);
//         // baraja.splice(carta);
//         contador++;

//         }

//     }

//     return mano;

// }

// crearBaraja();
// mezclar(baraja);
// let mano = repartir(baraja);
// console.log(mano);
// console.log(baraja);