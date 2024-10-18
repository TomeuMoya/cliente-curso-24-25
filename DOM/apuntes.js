var v1 = document.getElementById("hombre");
console.log(v1);

var v2 = document.getElementsByTagName("input");
console.log(v2);

var v3 = document.getElementsByTagName("body");
console.log(v3); //Mal, no funcionaria ya que nos devuelve la array del body y no el contenido
console.log(v3[0]); //Correcto, nos devolveria el contenido del body
console.log(v3[0].childNodes); //Imprime listado de nodos de elemento, aunque también cuenta los textos
console.log(v3[0].children);
console.log(v3[0].parentElement);
console.log(v3[0].children[0].nextElementSibling);

var v4 = document.getElementsByClassName("sexo");
console.log(v4);

var v5 = document.getElementById("sexo");
console.log(v5);

var v6 = document.getRootNode();
console.log(v6);

var v7 = document.querySelector("#mujer>div");
var v8 = document.querySelectorAll(".sexo");

//Crear elementos
var v8 = document.createElement("h2");
v8.innerHTML = "Hola <span style='color: red'>tu</span>";

v3[0].appendChild(v8);