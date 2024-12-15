document.addEventListener("DOMContentLoaded", function() {
    // Obtener información del navegador
    const browserName = navigator.userAgentData ? navigator.userAgentData.brands[0].brand : navigator.userAgent;
    const browserVersion = navigator.userAgentData ? navigator.userAgentData.brands[0].version : navigator.appVersion;
    const cookiesEnabled = navigator.cookieEnabled ? "Sí" : "No";

    // Crear elementos de la lista
    const ul = document.createElement("ul");
    const liName = document.createElement("li");
    const liVersion = document.createElement("li");
    const liCookies = document.createElement("li");

    // Asignar texto a los elementos de la lista
    liName.textContent = `Nombre del navegador: ${browserName}`;
    liVersion.textContent = `Versión del navegador: ${browserVersion}`;
    liCookies.textContent = `Cookies habilitadas: ${cookiesEnabled}`;

    // Añadir elementos de la lista al <ul>
    ul.appendChild(liName);
    ul.appendChild(liVersion);
    ul.appendChild(liCookies);

    // Añadir la lista al cuerpo del documento
    document.body.appendChild(ul);
});
