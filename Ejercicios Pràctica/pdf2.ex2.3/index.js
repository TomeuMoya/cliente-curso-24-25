const tareas = [
    { nombre: 'Lavar los platos', categoria: 'Hogar' },
    { nombre: 'Hacer la compra', categoria: 'Hogar' },
    { nombre: 'Estudiar JavaScript', categoria: 'Estudio' },
    { nombre: 'Programar', categoria: 'Trabajo' }
];


//Agrupar tareas por categorias
function agruparTareas(tareas) {

    let categorias = {};

    for (let tarea of tareas) {

        if (!categorias[tarea.categoria]) {

            categorias[tarea.categoria] = [];

        }

        categorias[tarea.categoria].push(tarea.nombre);

    }
    
    return categorias;

}

function mostrarTareas(categorias) {

    let ul;
    let li;
    let h2;

    for (let categoria in categorias) {

        ul = document.createElement("ul");
        document.body.appendChild(ul);
        h2 = document.createElement("h2");
        h2.innerHTML = categoria;
        ul.appendChild(h2);

        for (let tarea of categorias[categoria]) {

            li = document.createElement("li");
            li.innerHTML = tarea;
            ul.appendChild(li);

        }

    }

}

let categorias = agruparTareas(tareas);
mostrarTareas(categorias);