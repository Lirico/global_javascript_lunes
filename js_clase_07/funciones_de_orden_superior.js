/* 
    FUNCIONES DE ORDEN SUPERIOR

    Una funcion de orden superior es una funcion que puede
    recibir funciones como parametros o que pueden retornar funciones.
*/

// function saludar(usuario){
//     return `Hola ${usuario}`
// }

// function despedir(usuario){
//     return `Adios ${usuario}`
// }

// function crearSaludo(usuario, saludo){
//     return saludo(usuario)
// }

// console.log(crearSaludo("Manolo", despedir))



// Queremos crear una funcion que filtre elementos de un array basado en X condicion

const frutas = ["Pera", "Mora", "Manzana", "Banana"]


// function filtrar(array, condicion){ // condicion -> f() -> return booleano
//     const nuevoArray = []

//     for (const elemento of array) {
//         if(condicion(elemento)){
//             nuevoArray.push(elemento)
//         }
//     }

//     return nuevoArray
// }

// console.log(filtrar(frutas, elemento => elemento.length === 4))
// console.log(filtrar(frutas, elemento => elemento.length > 4))
// console.log(filtrar(frutas, elemento => elemento === "Manzana"))


/*********** Funciones de orden superior nativas de JS *************/

// filter -> retorna un arreglo con los elementos filtrados
// console.log(frutas.filter(fruta => fruta.length === 4))
// console.log(frutas.filter(fruta => fruta.length > 4))
// console.log(frutas.filter(fruta => fruta === "Manzana"))

// find -> retorna el primer elemento que coincida con la condicion
// console.log(frutas.find(fruta => fruta.length === 4))

// // Ejemplo de find por id
// const producto = {
//     nombre: "Termo Stanley",
//     precio: 100000,
//     categoria: "Termo",
//     stock: 10,
//     id: 2813798123
// }

// forEach -> Recorrer un arreglo y ejecutar por elemento.
// NOTA: El forEach no retorna nada -> Es una funcion tipo PROCEDIMIENTO
// Si revisan el retorno del forEach -> undefined
// const frutasPodridas = frutas.forEach(fruta => fruta)
// const frutasNuevas = frutas.forEach(fruta => fruta)

// console.log(frutasNuevas)


// map -> Recorrer un arreglo y devulve un nuevo arreglo
// Si revisan el retorno del map -> [] (nuevo)
// const frutasNuevas = frutas.map(fruta => fruta)

// console.log(frutasNuevas)

// reduce -> Acumula todos los elementos de un arreglo y devuelve un unico valor 
// const numeros = [1,2,3,4,5,6,7]

// const total = numeros.reduce((acumulador, elemento) => {
//     return acumulador + elemento
// }, 0)

// const total = frutas.reduce((acumulador, elemento) => {
//     return acumulador + " " + elemento
// }, "")

// console.log(total)