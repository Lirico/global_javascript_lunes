

/* 
    ARREGLOS (arrays)

    Es un tipo de estructura de dato que permite coleccionar valores en posiciones iadas.

    Estanteria de biblioteca -> [ Libro1, Libro2, Libro3, Libro4, Libro5 ] -> Estanteria[2] -> Libro3
    Posiciones -> Indice     ->     0        1       2       3      4

    Los arreglos siempre inicial desde la posicion 0. SIEMPRE
    A menos que esten vacios. Ahi no hay posiciones.
    ¿Como es un arreglo vacio? []
*/


const estudiante1 = "Juan"
const estudiante2 = "Pedro"
const estudiante3 = "Marcelo"
const estudiante4 = "Amilcar"
const estudiante5 = "Maca"
const estudiante6 = "Vicky"

// Esta estructura no me permite recorrer a los estudiantes.

// let estudiantes = ["Juan", "Pedro", "Marcelo", "Amilcar", "Maca", "Vicky"]
                //      0       1         2          3        4         5

// Tengo que incluir a Patricia al final del arreglo.
// Con lo que sabemos hasta ahora, ¿Como incluimos a patricia al final del arreglo? (no manualmente)

// Crear una funcion que permita ingresar un estudiante a un lista de estudiantes.
// function agregarEstudiante(lista = estudiantes, estudiante = "Patricia"){
//     lista[lista.length] = estudiante
// }

// agregarEstudiante(estudiantes, "Patricia") // length -> 6
// agregarEstudiante(estudiantes, "Roberto") // length -> 7
// agregarEstudiante(estudiantes, "Manolito") // length -> 8


// console.log(estudiantes)


// Tenemos metodos para insertar o eliminar elementos de un arrelgo.
// Para agregar elemento al final del arreglo -> .push()
// estudiantes.push("Patricia")
// // Para eliminar un elemento del final del arreglo -> .pop()
// estudiantes.pop()
// // Agregar elemento al comienzo de arreglo
// estudiantes.unshift('Roberto')
// // Eliminar elemento del comienzo del arreglo
// estudiantes.shift()

// for (let estudiante = 0; estudiante < estudiantes.length; estudiante++) {
//     console.log(estudiantes[estudiante])
// }

// En el año 2015 nos regalar un for mas chiche para arreglos
// Se llama forOf

// for(const estudiante of estudiantes){
//     console.log(estudiante)
// }

// let estudiantes = ["Juan", "Pedro", "Marcelo", "Amilcar", "Maca", "Vicky"]

// function eliminarEstudiante(lista, estudiante){
//     const nuevaLista = []

//     for(const elemento of lista){
//         if(elemento != estudiante){
//             nuevaLista.push(elemento)
//         }
//     }

//     return nuevaLista
// }

// estudiantes = eliminarEstudiante(estudiantes, "Amilcar") // ["Juan", "Pedro", "Marcelo", "Maca", "Vicky"]
// estudiantes = eliminarEstudiante(estudiantes, "Maca") // ["Juan", "Pedro", "Marcelo", "Vicky"]


// console.log(estudiantes)


// Crear una funcion que imprima todas las tablas de multiplicar.
// const tablas = [1,2,3,4,5,6,7,8,9,10],
//     tablaDelUno = [],
//     tablaDelDos = [],
//     tablaDelTres = [],
//     tablaDelCuatro = [],
//     tablaDelCinco = [],
//     tablaDelSeis = [],
//     tablaDelSiete = [],
//     tablaDelOcho = [],
//     tablaDelNueve = [],
//     tablaDelDiez = []

// function tablasDeMultiplicar(){
//     for (let pos = 0; pos < tablas.length; pos++) {
//         tablaDelUno[pos] = tablas[pos] * 1
//         tablaDelDos[pos] = tablas[pos] * 2
//         tablaDelTres[pos] = tablas[pos] * 3
//         tablaDelCuatro[pos] = tablas[pos] * 4
//         tablaDelCinco[pos] = tablas[pos] * 5
//         tablaDelSeis[pos] = tablas[pos] * 6
//         tablaDelSiete[pos] = tablas[pos] * 7
//         tablaDelOcho[pos] = tablas[pos] * 8
//         tablaDelNueve[pos] = tablas[pos] * 9
//         tablaDelDiez[pos] = tablas[pos] * 10
//     }

//     console.log([
//         tablaDelUno,
//         tablaDelDos,
//         tablaDelTres,
//         tablaDelCuatro,
//         tablaDelCinco,
//         tablaDelSeis,
//         tablaDelSiete,
//         tablaDelOcho,
//         tablaDelNueve,
//         tablaDelDiez
//     ])
// }

// tablasDeMultiplicar()



// Matrices
// Una matriz es un arreglo bidimensional. En pocas palabras, una arreglo de arreglos.

const tateti = [ // Robert X, Yo O
    ["A","B","C"],
    ["D","E","F"],
    ["G","H","I"]
]

for (let i = 0; i < tateti.length; i++) {
    for (let j = 0; j < tateti[i].length; j++) {
        console.log(tateti[i][j])
    }
}

// i = 0, j = 0 -> A
// i = 0, j = 1 -> B
// i = 0, j = 2 -> C
// i = 1, j = 0 -> D
// i = 1, j = 1 -> E
// i = 1, j = 2 -> F
// i = 2, j = 0 -> G
// i = 2, j = 1 -> H
// i = 2, j = 2 -> I