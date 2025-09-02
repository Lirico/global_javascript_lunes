/*
    EVENTO

    Es una propiedad en JavaScript capaz de desencadenar una
    funcion (invocar)
*/

// const $btn = document.querySelector('#btn');

// const alerta = (saludo) => alert(`${saludo} desde js`)

// const alertaConArgumento = () => alerta("Hola")

/* 
    onclick -> click izquierdo del mouse
    onclose -> cerramos una ventana / modal
    onmouseover -> colocamos el mouse arriba de algo
    onmouseout -> quitamos el mouse de arriba de algo
    onscroll -> hacemos scroll con la ruedita el mouse
    onresize -> achicamos el ancho de la pantalla
    onkeydown -> presionamos una tecla del teclado
    onkeypress -> mantenemos presionada la tecla
    onkeyup -> soltamos la tecla
    onsubmit -> enviamos un formulario
    onchange -> hacemos cambios en un input de formulario
    contextmenu -> click derecho del mouse
    DOMContentLoaded -> cuando se recarga el navegador
*/

/* 
    $btn -> Un elemento HTML (button)
    document -> DOM
    console -> consola
    window -> navegador
*/

// $btn.addEventListener("click", alertaConArgumento)

// VAMOS A CREAR NUESTRO PROPIO COUNTER-STRIKE en la consolita

// W -> mueve adelante
// A -> mueve izquierda
// S -> mueve atras
// D -> Derecha
// click izquiero -> dispara
// click derecho -> expande la mira del arma
// click derecho sostenido -> plantar la bomba
// barra espaciadora -> saltar

// document.addEventListener("click", () => {
//     // click izquiero -> dispara
//     console.log("Disparar")
// })
// document.addEventListener("contextmenu", () => {
//     // click derecho -> expande la mira del arma
//     console.log("Ampliar mira")
// })
// window.addEventListener("keydown", (event) => { // event.key
//     // W -> mueve adelante
//     // A -> mueve izquierda
//     // S -> mueve atras
//     // D -> Derecha
//     // barra espaciadora -> saltar
//     switch (event.key) {
//         case "ArrowUp":
//             console.log("Mover adelante")
//             break;
//         case "ArrowRight":
//             console.log("Mover Derecha")
//             break;
//         case "ArrowDown":
//             console.log("Mover atras")
//             break;
//         case "ArrowLeft":
//             console.log("Mover izquierda")
//             break;
//         case " ":
//             console.log("Saltar")
//             break;
//         case "q":
//             console.log("Cambiar arma")
//             break;
//         default:
//             console.log("Comando incorrecto")
//     }
// })

// window.addEventListener('mousedown', (event) => {
//     if(event.button === 2){
//         console.log("Plantando Bomba...")
//         setTimeout(() => console.log("Bomb has been planted!"), 3000)
//     }
// })

/// FORMULARIO

// const $form = document.querySelector("form");
// const $username = document.getElementById("username");
// const $email = document.getElementById("email");
// const $usernameError = document.querySelector('.username');
// const $emailError = document.querySelector('.email');
// const $inputsError = document.querySelector('.inputs_error');

// const handleSubmit = (event) => {
//   event.preventDefault();

//   if (!$username.value && !$email.value) {
//     $inputsError.style.display = "inline-block";
//     return;
//   } else {
//     $inputsError.style.display = "none";
//     $emailError.style.display = "none";
//   }

//   if (!$username.value) {
//     $usernameError.style.display = "inline-block";
//     return;
//   } else {
//     $usernameError.style.display = "none";
//   }

//   if (!$email.value) {
//     $emailError.style.display = "inline-block";
//     return;
//   } else {
//     $emailError.style.display = "none";
//   }

//   console.log({
//     username: $username.value,
//     email: $email.value,
//   });
// };

// $form.addEventListener("submit", handleSubmit);



document.addEventListener("click", (event) => {
    console.log("Hiciste click en", event.target)

    if(event.target.matches("article > a")){
        event.preventDefault();
        console.log("A donde vas wachin?")
    }
})

