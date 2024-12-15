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

    // Evento click para borrar
    borrar.addEventListener("click", function () {
        let numeroFila = i + 1; // i empieza en 0, sumamos 1 para mostrar al usuario
        let confirmacion = confirm(`Estàs segur que vols esborrar la partitura ${numeroFila}?`);
        if (confirmacion) {
            alert(`Partitura ${numeroFila} esborrada`);
        } else {
            alert("S'ha cancel·lat l'acció");
        }
    });

    td.appendChild(editar);
    td.appendChild(borrar);
    tr.appendChild(td);

    // Agregamos la fila a la tabla
    tabla.appendChild(tr);

}

// Seleccionar el botón Login
document.querySelector(".header-buttons button:nth-child(2)").addEventListener("click", function () {
    // Configuración del tamaño de la ventana
    const width = 400;
    const height = 300;

    // Calcular la posición centrada
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    // Abrir una ventana auxiliar centrada
    const ventanaLogin = window.open(
        "",
        "LoginWindow",
        `width=${width},height=${height},top=${top},left=${left}`
    );

    // Contenido del formulario en la ventana
    ventanaLogin.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                    background-color: #f4f4f4;
                }
                h1 {
                    font-family: Arial, sans-serif;
                    color: #d32f2f;
                    font-weight: bold;
                    font-size: 1.8em;
                    margin-bottom: 20px;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                input {
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 1em;
                }
                button {
                    background-color: #d32f2f;
                    color: white;
                    border: none;
                    padding: 8px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1em;
                }
                button:hover {
                    background-color: #b71c1c;
                }
            </style>
        </head>
        <body>
            <h1>Score Finder</h1>
            <form>
                <label for="email">Correu electrònic</label>
                <input type="email" id="email" placeholder="Correu electrònic" required>

                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" required>

                <button type="submit">Entrar</button>
            </form>
        </body>
        </html>
    `);

    ventanaLogin.document.close(); // Finalizar la escritura
});
