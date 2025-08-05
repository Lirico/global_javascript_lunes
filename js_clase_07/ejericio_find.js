

/* 
    Intentaremos simular que agregamos productos a un carrito de compras.

    Para ello usaremos una base de datos como arreglo de objetos de productos.
    Nuestro carrito sera la consola.

    Debemos programar una funcion que al clickear boton de tarjetas imprima en la consola
    el producto de la base de datos que coincida con la tarjeta en cuestion.
*/

console.log("-- CARRITO --")

const products = [
    {id: 1, name: "Producto A", price: 10},
    {id: 2, name: "Producto B", price: 20},
    {id: 3, name: "Producto C", price: 30},
    {id: 4, name: "Producto D", price: 40}
]

function addToCart(id){
    const newItem = products.find(product => product.id == id)

    // newItem -> {} -> Encuentra el producto (si hay coincidencia)
    // newItem -> undefined -> No encuentra el producto (si no hay coincidencia)

    console.log(newItem)
}