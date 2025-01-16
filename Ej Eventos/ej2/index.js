const boton = document.getElementById("miBoton");
boton.addEventListener("click", function () {

    alert("El texto del boton cambiara");
    this.innerText = "Texto cambiado";

});