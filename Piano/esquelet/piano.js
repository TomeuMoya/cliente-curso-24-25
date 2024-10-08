function Nota(nom, sostinguda) {

    this.nom = nom;
    this.sostinguda = sostinguda;

}

let cerca = [];

let partitures = [

    {nom: "La Balanguera", notes: [new Nota('Do', false), new Nota('Re', false), new Nota('Mi', false), new Nota('Fa', false), 
    new Nota('Fa', false), new Nota('Sol', false), new Nota('Sol', false), new Nota('La', true), new Nota('La', true)]},

    {nom: "Happy Birthday", notes: [new Nota('Do', false), new Nota('Do', false), new Nota('Re', false), new Nota('Do', false), new Nota('Fa', false),
    new Nota('Mi', false), new Nota('Do', false), new Nota('Do', false), new Nota('Re', false), new Nota('Do', false), new Nota('Sol', false), new Nota('Fa', false)]}

];

function addCerca(nom, sostinguda) {

    cerca.push(new Nota(nom, sostinguda));

}

function cercador(partitures, cerca) {

    let resultado = [];

    for(let i = 0; i < partitures.length, i++;) {

        for(let j = 0; i < cerca.length; i++) {

            if (partitures.notes == cerca) {

                resultado.push(partitures.nom)
                break;

            }

        }

    }

    return resultado;

}

addCerca('DO', false);
addCerca('Re', false)
console.log(cercador(partitures,cerca));