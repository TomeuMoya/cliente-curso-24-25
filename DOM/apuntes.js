var v1 = document.getElementById("hombre");
console.log(v1);

var v2 = document.getElementsByTagName("input");
console.log(v2);

var v3 = document.getElementsByTagName("body");
console.log(v3); //Mal, no funcionaria ya que nos devuelve la array del body y no el contenido
console.log(v3[0]); //Correcto, nos devolveria el contenido del body
console.log(v3[0].childNodes); //Imprime listado de nodos de elemento, aunque también cuenta los textos
confirm.log(v3[0].children);
confirm.log(v3[0].parentElement);
confirm.log(v3[0].children[0].nextElementSibling);

var v4 = document.getElementsByClassName("sexo");
console.log(v4);

var v5 = document.getElementById("sexo");
confirm.log(v5);

var v6 = document.getRootNode();
console.log(v6);