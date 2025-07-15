/* 
    COERCION

    Es el proceso por el cual JavaScript fuerza a un tipo de dato a transformarse
    a otro para poder realizar una determinada operacion.
*/

// Cuando hay una cadena involucrada en una suma, deja de ser una suma para pasar
// ser una CONCATENACION
var sumaConCadenas = 3 + "hola"

var multiConCadenasNumerica = 3 * "3"

var multiConCadenaNoNumerica = 3 * "hola"

// Cuando un booleano es coercionado a number
// este toma su valor numerico implicito.
// true -> 1, false -> 0
var restarConBooleano = 3 - true

/* 
    TIPOS DE DATOS PRIMITIVOS VACIOS 
    -> null (representacion de inexsitencia que
    el desarrollador coloca a drede.)
    -> undefined (representacion de inexsitencia
    de valor por defecto del lenguaje.)
*/

// 6 / "3" =
// "2" * "3" =
// 4 + 5 + "px" =
// "$" + 4 + 5 =
// "4" - 2 =
// "4px" - 2 =
// 7 / 0 =
// 3>2>1 =
// 12 + ""  =  
// "15" * 2  = 
// "15" - "11" =
// undefined + 6 = 
// "Hello" + null = 
// null + 25 =    
// true + true =
// false + 10 =
// 5 && 2 =
// 2 && 5 =
// 5 || 0 =
// 0 || 5 =
// true && false =
// false || !false =
// !2 =
// "texto" || 0 =
// 2 || "prueba“ =

