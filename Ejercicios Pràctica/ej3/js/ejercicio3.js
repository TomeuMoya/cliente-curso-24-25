// Correcto
const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
let ulElem = document.createElement("ul");
document.body.appendChild(ulElem);

for(let i = 0; i < nombres.length; i++) {

    let liElem = document.createElement("li");
    liElem.innerText = nombres[i]; //InnerText i textContent no tienen diferencia, hacen lo mismo. El innerhtml encambió también hace lo mismo pero te permite también añadir etiquetas desde js
    ulElem.appendChild(liElem)

}