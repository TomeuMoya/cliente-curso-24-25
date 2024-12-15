let tabla = document.createElement("table"); // <table></table>
let thead, th, tr, td;
const titulos = ['Títol', 'Idioma Original', 'Accions']; //Noms dels títols
tabla.border = "1";

//Insertamos la tabla en el body y creamos el encabezado
document.body.appendChild(tabla);
thead = document.createElement("thead");
tabla.appendChild(thead);

//Rellenamos el thead
for (let titulo of titulos) {

    th = document.createElement("th");
    th.innerHTML = titulo;
    thead.appendChild(th);

}

//Canciones que vamos a introducir
let canciones = [

    {titulo: "La Balanguera", idioma: "ca"},
    {titulo: "Merry Christmas", idioma: "en"},
    {titulo: "Frère Jacques", idioma: "fr"},
    {titulo: "Sant Antoni i el Dimoni", idioma: "ca"}

];

//Generamos la tabla
for (let i = 0; i < 100; i++) {

    let cancion;

    // Usar canciones originales y repetir la última canción si se terminan
    if (i < canciones.length) {
        cancion = canciones[i]; // Canciones originales
    } else {
        cancion = canciones[canciones.length - 1]; // Repetir la última canción
    }

    tr = document.createElement("tr");

    // Columna: Título
    td = document.createElement("td");
    td.innerHTML = cancion.titulo;
    tr.appendChild(td);

    // Columna: Idioma Original
    td = document.createElement("td");
    td.innerHTML = cancion.idioma;
    tr.appendChild(td);

    // Columna: Acciones
    td = document.createElement("td");
    td.classList.add("actions");

    // Botón Editar con ícono
    let editar = document.createElement("span");
    editar.innerHTML = '<i class="fas fa-edit"></i> Editar';
    editar.style.cursor = "pointer";
    editar.style.marginRight = "10px";

    // Botón Esborrar con ícono
    let borrar = document.createElement("span");
    borrar.innerHTML = '<i class="fas fa-trash"></i> Esborrar';
    borrar.style.cursor = "pointer";

    td.appendChild(editar);
    td.appendChild(borrar);
    tr.appendChild(td);

    // Agregamos la fila a la tabla
    tabla.appendChild(tr);

}

