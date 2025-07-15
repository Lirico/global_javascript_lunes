/* 
    FUNCIONES

    Bloques de codigo ejecutables y reutilizables.

    Cada bloque no se ejecuta por si mismo a menos que se
    lo invoque.

    Estos bloques pueden ser invocados todas las veces que
    se nos ocurra.

    A su vez, estos bloques tienen la posibilidad de recibir
    diferentes valores en cada invocacion.

    Pueden devolver un valor o no devolver ningun valor.

    Si devuelven un valor simplemente se llaman Funciones.
    Si no devuelven nada se llaman Procedimientos. 
        -> Por defecto devuelven undefined
*/




function sumar(a, b){

    return a + b
}
// El return es la puerta de salida de para valores de la funcion
// Solo se puede retonar 1 valor a la vez.

// sumar() -> 9
// sumar() -> 5
// sumar() -> 11
console.log(sumar(4, 5))