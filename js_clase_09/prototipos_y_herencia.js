/* 
    Prototipos y herencia.

    En JavaScript hay 7 tipos de datos.
    Seis de ellos son primitivos, y solo uno es compuesto.

    Tipos de datos primitivos -> Se puede acceder al valor de manera directa.
    string
    number -> 32 3.17 -4 infinity -infinity NaN
    boolean
    null
    undefined
    symbol -> ES6 (2015) -> no tengo ni idea pa que sirve.


    Tipos de datos compuestos -> Se accede al valor por medio de referencia.
    object
*/

// Operador unario -> Revisar el tipo de un valor 
// typeof valor
// console.log(typeof "hola")
// console.log(typeof 32)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof function(){})


// let cadena = new String("hola")
// let numero = new Number(32)
// let booleano = new Boolean(true)

// console.log(cadena)
// console.log(numero)
// console.log(booleano)

// String -> "123" -> Tipo de dato inmutable
//            012
// Array -> [1,2,3] -> Tipo de dato mutable
//           0 1 2

// let cadena = new String("123")

// const arreglo = [1,2,3]

// console.log(arreglo.reverse())
// console.log(cadena.split("").reverse().join(""))

// String.prototype.reverse = function() {
//     return this.split("").reverse().join("")
// }

// let cadena = "hola"
// let nombre = "Pepe"

// console.log(cadena.reverse())
// console.log(nombre.reverse())

/* 
    THIS

    Es una palabra reservada del lenguaje que nos ayuda a
    ubicar una variable dentro del ambito de un objeto.

    Los lenguajes donde se utiliza esta palabra reservada
    son Java, C++, C# y PHP.

    Sin embargo en otros lenguajes como Python se la llama
    "self".
*/

// let nombre = "Bienvenidos al ambito global";

// const objeto = {
//     nombre: "Contexto del objeto",
//     imprimir: function() {
//         console.log(this.nombre)
//     }
// }

// const objeto2 = {
//     nombre: "Contexto del objeto 2",
//     imprimir: objeto.imprimir
// }

// objeto2.imprimir()







