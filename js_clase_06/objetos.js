/******** OBJETOS ********/

/* 
    Los objetos son un tipo de dato compuesto que nos permite representar
    entidades de la realidad o de la ficcion coleccionando esquemas de
    clave: valor.

    El simbolo que define a los objetos es el juego de llaves {}
*/

const auto = {
    // Caracteristicas -> string, number, boolean (si es pregunta)
    color: "Rojo",
    motor: "2.0",
    marca: "Renault",
    esUsado: true,
    velocidades: {
        lento: 20,
        medio: 40,
        rapido: 60
    },

    // Metodos
    encender: function() {
        return "Rrrrummmmmmmmmmmmmmmmmmm"
    },
    acelerar: function() {
        return "Fiummmmmmmmm"
    },
    frenar: function() {
        return "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
    },
    chocar: function() {
        return "Pujjjjjjjjjj"
    }
}


// function agregarPropiedad(objeto, propiedad, valor){

//     if(objeto.hasOwnProperty(propiedad)){
//         return "La propiedad ya existe en el objeto"
//     }

//     objeto[propiedad] = valor

//     return objeto
// }

// console.log(agregarPropiedad(auto, "marca", "Algo"))



// function eliminarPropiedad(objeto, propiedad){

//     delete objeto[propiedad]

//     return objeto
// }

// console.log(eliminarPropiedad(auto, "marca"))

