

// Asincronia

// Hay determinadas situaciones donde alguna instruccion en nuestros algoritmos puede
// demorar mas de lo usual o puede simplemente fallar.
// Si esto sucede podria trabarnos toda la aplicacion.
// Para evitar esto JavaScript tiene un mecanismo especial y vamos a verlo por partes!




// console.log("INSTRUCCION 1")

// setTimeout(() => {
//     console.log("INSTRUCCION 2")
// }, 0);

// setTimeout(() => {
//     console.log("INSTRUCCION 3")
// }, 1000);

// console.log("INSTRUCCION 4")
// console.log("INSTRUCCION 5")


// PETICION

// GET -> obtencion
// POST -> creacion/insercion
// PUT -> actualizamos/editamos
// DELETE -> eliminamos o suprimimos



// c  -> GET -> localhost:3000 (ruta raiz) -> s -> Info de bienvenida
//           -> localhost:3000/productos -> s -> Un [] de productos
//           -> localhost:3000/usuarios -> s -> Un [] de usuarios

// ENDPOINT

// Enviamos un objeto de PETICION (Request) al server
// El server nos devuelve un objeto de respuesta (Response) a nostros

// Dependiendo de el resultado de nuestra peticion -> Nos devuelve un CODIGO DE ESTADO DE RESPUESTA.

// 100
// 200
// 300
// 400
// 500


// Objeto XMLHTTPRequest -> metodos y propiedades para realizar peticiones en XML

// const xhr = new XMLHttpRequest();

// fetch() -> Nacio en 2015 -> Es mas practica y menos verbosa


const $card = document.querySelector(".card");

// Paso 1 -> Pedimos info a un endpoint
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    // Paso 2 -> Entonces... agarramos esa info y la imprimimos en la consola
    .then(function(response) {
        return response.json() // Transforma JSON a JS
    })
    // Paso 3 -> Entonces...agarro la info en JS y la imprimo
    .then((dataEnJS) => {
        console.log(dataEnJS)

        $card.innerHTML = `
            <blockquote>${dataEnJS[0].quote}</blockquote>
            <h3>${dataEnJS[0].author}</h3>
        `
    })


