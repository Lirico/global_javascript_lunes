/* 
    RECURSION 

    Es el arte de crear una funcion que se llama a si misma
    una y otra vez modificando el parametro en cada llamado
    hasta que una condicion deja de cumplirse y esa secuencia
    se corta.

    Tiene como objetivo una secuencia repetitiva elegante
    y muy comunicativa.

    Pero tiene como desventaja que es 3 veces mas lenta
    que un bucle.
    Y es mas y mas lenta, mientras mas llamados se suman
    a la secuencia.
*/

// Cuenta regresiva -> 3 a 0

// function cuentaRegresiva(numero){

//     console.log(numero)

//     if(numero > 0){
//         cuentaRegresiva(numero - 1)
//     }
// }

// cuentaRegresiva(3)



// Secuencia de Fibbonacci

// F(n) = F(n-1) + F(n-2) donde n > 2




// function F(n){
//     if(n < 2) return n

//     return F(n-1) + F(n-2)
// }

// const F = n => {
//     if(n < 2) return n

//     return F(n-1) + F(n-2)
// }

// console.log(F(0)) // 0
// console.log(F(1)) // 1
// console.log(F(2)) // F(2-1) + F(2-2) // 1 + 0 = 1
// console.log(F(3)) // F(3-1) + F(3-2) // F(2-1) + F(2-2) + 1 // 1 + 0 + 1 = 2
// console.log(F(4)) // F(4-1) + F(4-2) -> (F(3-1) + F(3-2)) + (F(2-1) + F(2-2)) -> F(2-1) + F(2-2) + 1 + 1 + 0 -> 1 + 0 + 1 + 1 + 0 = 3