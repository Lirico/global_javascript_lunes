/* 
    ESTRUCTURAS DE CONTROL DE FLUJO
*/

// Estructura secuencial

// console.log("Inicio")
// console.log("Instruccion 1")
// console.log("Instruccion 2")
// console.log("Instruccion 3")
// console.log("Instruccion 4")
// console.log("Instruccion 5")
// console.log("Fin")


// var llueve = false;

// Estructura condicional
// console.log("Inicio")
// console.log("Instruccion 1")
// console.log("Instruccion 2")

// if(llueve(true)){ // Es false
//     console.log("Me quedo jugando lolcito")
// } else {
//     console.log("Me voy a buscar descuentos al super")
// }

// console.log("Instruccion 5")
// console.log("Fin")


// var numero = 10;

// if(numero > 10){
//     console.log("Es mayor que 10")
// } else if(numero < 10) {
//     console.log("Es menor que 10")
// } else {
//     console.log("Es igual a 10")
// }


/* 
    Switch Case 
    
    Es una estructura de control de flujo que nos permite valuar un valor por casos.
    Parecido a como funciona una maquina expendedora.
*/

// var producto = "aguita";

// switch(producto){
//     case "aguita":
//         console.log("Aguita")
//         break;
//     case 2:
//         console.log("Te")
//         break;
//     case 3:
//         console.log("Cafe")
//         break;
//     case 4:
//         console.log("Energizante")
//         break;
//     default:
//         console.log("CD de maluma")
// }


/* 
    Bucles o Ciclos (loops)

    Estructura de control repetitiva.

    while -> mientras

    do while -> hace mientras

    for -> para
*/

// var contador = 0;

// while(contador < 10){
//     console.log(contador + " while")
//     contador++
// }

// do {
//     console.log(contador + " do while")
//     contador++
// } while (contador < 10);



// for(var contador = 0; contador < 10; contador++){
//     console.log(contador)
// }



/* 
    Vicky Alarcon se encuentra en medio de un apocalipsis zombie. Esta buscando refugio y encuentra
    un hispital abandonado.
    Al ingresar descubre que no hay luz. Afortunadamente cuenta con una linterna (con pilas) y un
    revolver con N balas.
    Al ingresar al hospital encuentra la puerta de una de las habitaciones. Se dispone a ingresar.
    Vicky sabe que dentro pueden haber zombies. Prepara su arma. Cuando ingresa se topa con 10 
    zombies. No sabemos bien cuantas balas le quedan a Vicky, pero, si sabemos que tiene el cheat
    para darle en la cabeza a cada zombie de un disparo (head shot). Sin embargo no puede matar
    dos zombies con un mismo tiro.

    Programar una funcion que nos ayude a eliminar todos los zombies de hasta que no haya mas zombies
    en la habitacion.
    Si la cantidad de balas es igual o mayor que la canitdad de zombies al finalizar el tiroteo, sobrevivimos
    y sino perecimos.
*/

// var balas = 9;

// for(var zombies = 10; zombies > 0; zombies--){
//     balas--
// }

// console.log(balas)

// if(balas >= 0) {
//     console.log("You survived, mission complete!")
// } else {
//     console.log("You died, mission failed!")
// }
