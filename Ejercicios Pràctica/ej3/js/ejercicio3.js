// Correcto
const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
let ulElem = document.createElement("ul");
document.body.appendChild(ulElem);

for(let i = 0; i < nombres.length; i++) {

    let liElem = document.createElement("li");
    liElem.innerHTML = nombres[i];
    ulElem.appendChild(liElem)

}