const players = [

    {nombre: "Helena", puntuacion: "6"},
    {nombre: "Tomeu", puntuacion: "2"}, 
    {nombre: "Marc", puntuacion: "7"},
    {nombre: "Yuk", puntuacion: "5"}

]

function ordenar(players) {

    let ordenarFuncion = players.sort((a,b) => {
        return b.puntuacion - a.puntuacion;
    });

    return ordenarFuncion;
}

function crearTabla(ordena) {

    let tabla, thead, th, td, tr;
    let nombreth = ["Posición", "Nombre", "Puntuación"]
    
    tabla = document.createElement("table")
    document.body.appendChild(tabla);
    thead = document.createElement("thead");
    tabla.appendChild(thead);

    for (let name of nombreth) {

        th = document.createElement("th");
        th.innerHTML = name;
        thead.appendChild(th);

    }

    for (let i = 0; i < ordena.length; i++) {

        tr = document.createElement("tr");
        tabla.appendChild(tr);

        td = document.createElement("td");
        td.innerHTML = i + 1;
        tr.appendChild(td);

        td = document.createElement("td")
        td.innerHTML = ordena[i].nombre;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = ordena[i].puntuacion;
        tr.appendChild(td);

    }

}

let ordena = ordenar(players);
crearTabla(ordena);