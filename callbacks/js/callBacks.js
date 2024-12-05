// function tareaPrincipal(callback) {

//     setTimeout(() =>{
//         console.log("Realizando una tarea...")
//     }, 1000);
//     callback();

// }

// function tareaSecundaria(callback) {

//     setTimeout(() =>{
//         console.log("Realizando una tarea...")
//     }, 1000);
//     callback();
// }

// function tareaTerciaria(callback) {

//     setTimeout(() =>{
//         console.log("Realizando una tarea...")
//     }, 1000);
//     callback();

// }

// tareaPrincipal (() => {

//     tareaSecundaria (() => {

//         tareaTerciaria (() => {

//             setTimeout(() =>{
//                 console.log("Hemos terminado las tareas!")
//             }, 1000);
//         });

//     });

// });

//PROMESAS
function tareaPrincipal() {
    
    return new Promise((resolucion) => {

        setTimeout(() => {

            console.log("Tarea principal controlada");
            resolucion();

        }, 1000)

    })

}

function tareaSecundaria() {
    
    return new Promise((resolucion) => {

        setTimeout(() => {

            console.log("Tarea secundaria controlada");
            resolucion();

        }, 1000)

    })

}

function tareaTerciaria() {
    
    return new Promise((resolucion) => {

        setTimeout(() => {

            console.log("Tarea terciaria controlada");
            resolucion();

        }, 1000)

    })

}

tareaPrincipal()
    .then(tareaSecundaria)
    .then(tareaTerciaria)
    .then(() => console.log("Hemos acabado las tareas!"));