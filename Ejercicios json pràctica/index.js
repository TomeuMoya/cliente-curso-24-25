let todo = {

    "contenedores": {
        "grandes": ["grande", "mediano", "pequeño"],
        "medianos": ["medianos", "pequeños"],
        "verticales": ["altos"]
    },
    "envases": {
        "gAncho": ["alimentos"],
        "gAlto": ["alimentos"],
        "mAncho": ["alimentos"],
        "mAlto": ["corrosivos"],
        "pequeño": ["corrosivos"]
    },
    "liquidos": {
        "agua": ["alimento"],
        "leche": ["alimento"],
        "lejia": ["corrosivo"],
        "amoniaco": ["corrosivo"],
        "jabon": ["corrosivo"],
        "aguarras": ["corrosivo"],
        "gasolina": ["corrosivo"],
        "aceite": ["alimento"],
        "vinagre": ["alimento"],
        "alcohol": ["corrosivo"]
    }

}

console.log(JSON.stringify(todo));