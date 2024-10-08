function Nota(nom, sostinguda) {

    this.nom = nom;
    this.sostinguda = sostinguda;

}

let cerca = [];

let partitures = [

    {nom: "La Balanguera", 
    notes: [new Nota('Do', false), 
            new Nota('Re', false), 
            new Nota('Mi', false), 
            new Nota('Fa', false), 
            new Nota('Fa', false), 
            new Nota('Sol', false), 
            new Nota('Sol', false), 
            new Nota('La', true), 
            new Nota('La', true)]},

    {nom: "Happy Birthday", 
    notes: [new Nota('Do', false), 
            new Nota('Do', false), 
            new Nota('Re', false), 
            new Nota('Do', false), 
            new Nota('Fa', false),
            new Nota('Mi', false), 
            new Nota('Do', false), 
            new Nota('Do', false), 
            new Nota('Re', false), 
            new Nota('Do', false), 
            new Nota('Sol', false), 
            new Nota('Fa', false)]}

];

function addCerca(nom, sostinguda) {

    cerca.push(new Nota(nom, sostinguda));

}

function compararNotas(partitures, cerca) {

    for(let i = 0; i <= partitures.length - cerca.length; i++) {

        let trobat = true;

        for(let j = 0; j < cerca.length; j++) {

            if (partitures[i + j].nom !== cerca[j].nom || partitures[i + j].sostinguda !== cerca[j].sostinguda) {

                trobat = false;
                break;
                
            } 

        }

        if (trobat) {

            return true;

        }

    }

    return false;

}

function cercador(partitures, cerca) {
    
    let resultat = [];

    for (let partitura of partitures) {

        if (compararNotas(partitura.notes, cerca)) {
            resultat.push(partitura.nom);
        }
        
    }

    return resultat;
}

addCerca('Mi', false);
addCerca('Sol', false);
let resultat = cercador(partitures, cerca);
console.log(resultat);