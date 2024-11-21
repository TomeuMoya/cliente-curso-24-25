/* Visualización de la URL */
function mostrarURLActual() {

    alert(window.location.href);
    return

} 

/* Navegación en el historial - Atras */
function irAtras() {

    window.history.back();
    return

}

/* Navegación en el historial - Adelante */
function irAdelante() {

    window.history.forward();
    return

}

/* Recopilación de información del navegador */
function mostrarInfoNavegador() {

    var nombre = window.navigator.userAgent;
    var idioma = window.navigator.language;
    var online = window.navigator.onLine;

    alert("Nombre: " + nombre + 
            "\n\nIdioma: " + idioma +
            "\n\nOnline: " + online
    );

    return

}


/* Redirección de página */
function redirigirURL() {

    var urlInput = document.getElementById('urlInput').value;

    // if (!urlInput) {
        
    //     alert("El sitio web no existe");
    //     return

    // } /* Esto no funciona, pero la idea es mostrar la alerta en caso de que no exista la url */

    window.location.assign(urlInput);

}

/* Abrir y cerar ventanas emergentes */
function abrirPopup() {

    const url = "https://www.google.com/"
    window.open(url);
    return

}

function cerrarPopup() {

    window.close(url);
    return

}