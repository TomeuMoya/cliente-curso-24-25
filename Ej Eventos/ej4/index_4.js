let contador = 0;

function incrementar() {
    contador++;
    document.getElementById('contador').innerText = contador;
}

const reiniciar = document.createElement("button");
reiniciar.textContent = "Reiniciar";
document.body.appendChild(reiniciar);

reiniciar.addEventListener("click", function () {

    contador = 0;
    document.getElementById('contador').innerText = contador;
    
});