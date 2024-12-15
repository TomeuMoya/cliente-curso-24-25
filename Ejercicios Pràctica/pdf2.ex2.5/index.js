const titulos = [
    "Título 1",
    "Título 2",
    "Título 3",
    "Título 4",
    "Título 5"
];

const parrafos = [
    "Este es el primer párrafo.",
    "Este es el segundo párrafo.",
    "Este es el tercer párrafo.",
    "Este es el cuarto párrafo.",
    "Este es el quinto párrafo."
];

function generarAleatrorios(titulos, parrafos){

    let seccion, titulo, parrafo;
    for (let i = 0; i < 5; i++){
        const indiceTitulo = Math.floor(Math.random() * titulos.length);
        const indiceParrafo = Math.floor(Math.random() * parrafos.length);

        seccion = document.createElement('section');
        document.body.appendChild(seccion);
        titulo = document.createElement('h2');
        titulo.textContent = titulos[indiceTitulo];
        seccion.appendChild(titulo);
        parrafo = document.createElement('p');
        parrafo.textContent = parrafos[indiceParrafo];
        seccion.appendChild(parrafo);
    }
}

generarAleatrorios(titulos, parrafos);