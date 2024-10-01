var cara = 1;
var cruz = 2;

function boton(){
    
    var flip = Math.floor(Math.random() * (cruz - cara + 1) + cara)

    if (flip == cara) {

        alert("Cara")
    
    } else {
    
        alert("Cruz")
        
    }

}