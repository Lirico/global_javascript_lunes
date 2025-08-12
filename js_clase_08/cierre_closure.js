/* 
    Cierre

    Implica que una funcion queda atrapada dentro del retorno de otra funcion.
    Para poder acceder al retorno de la funcion atrapada necesitamos una referencia
    a la funcion que la atrapo y desde ahi acceder a la funcion atrapada.
*/

// function saludar(saludo){
//     return function(nombre){
//         return `${saludo} ${nombre}`
//     }
// }

// const hola = saludar('Hola')
// const adios = saludar('Adios')
// const che = saludar('Che,')

// console.log(hola("Vicky"))
// console.log(hola("Roberto"))
// console.log(hola("Javi"))
// console.log(adios("Vicky"))
// console.log(adios("Roberto"))
// console.log(adios("Javi"))
// console.log(che("Vicky"))
// console.log(che("Roberto"))
// console.log(che("Javi"))


// EL DILEMA DEL CONTADOR
// function incrementar(){
//     var contador = 0;

//     return function() {
//         return contador += 1
//     }
// }

// const add = incrementar()

// function imprimir(){
//     console.log(add())
// }

