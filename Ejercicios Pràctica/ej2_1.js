function tablaMultiplicar() {



}

let divElem = document.getElementById("tablaMulti");
console.log(divElem);

let tabla = document.createElement("table");
let theadElem = document.createElement("thead");
let trElem = document.createElement("tr");
let thElem;

for(let i = 0; i <= 10; i++) {

    thElem = document.createElement("th");
    thElem.innerHTML = i;
    trElem.appendChild(thElem);

}

theadElem.appendChild(trElem);
tabla.appendChild(theadElem);
divElem.appendChild(tabla);

for(let i = 1; i <= 10; i++) {

    trElem = document.createElement("tr");
    th

    for(let j = 1; j <= 10; i++) {

        thElem = document.createElement("td");
        thElem.innerHTML = i * j;
        trElem.appendChild(thElem);

    }

    tabla.appendChild(trElem);

}