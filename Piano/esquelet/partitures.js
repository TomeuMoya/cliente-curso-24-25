let tabla = document.createElement("table"); // <table></table>
tabla.border = "1";
let thead = document.createElement("thead"); // <thead></thead>
let tr = document.createElement("tr"); // <tr></tr>

const titulos = ['Títol', 'Idioma Original', 'Accions']; //Noms dels títols

for(let i = 0; i < titulos.length; i++) {

    let th = document.createElement("th");
    th.textContent = titulos[i];
    thead.appendChild(th);

}

thead.appendChild(tr);
tabla.appendChild(thead)
document.body.appendChild(tabla)

let canciones = [

    {titulo: "La Balanguera", idioma: "ca"},
    {titulo: "Happy Birthday", idioma: "en"},
    {titulo: "Frère Jacques", idioma: "fr"},
    {titulo: "Sant Antoni i el Dimoni"}

];

function generarTabla(canciones) {

    

}