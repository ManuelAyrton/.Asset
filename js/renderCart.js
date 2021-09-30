// Visualizando producto en carrito. (render)


let savedCart = JSON.parse(localStorage.getItem("cart")) || [] // Obtiene elementos del localStorage o asigna un array vacío.

function cartRender() {

    $("#modalCart").empty()     // ".empty()" vacía lo que se encuentra dentro del elemento identificado.

    for (const product of savedCart){

        $("#modalCart").append(`
            <div class="cartContainer">
                <div class="cartProduct">
                    <img src="${product.img}" class="cartImg"></img>
                    <div class="cartTitle">${product.article}</div>
                    <div class="cartPrice">$ ${product.price}</div>
                    <div id="close${product.id}" class="cartClose">X</div>
                </div>
            </div>`

        )           // Agrega elemento entre tildes invertidas al HTML.
    }
}

cartRender()        // Aunque en la función cartRender, modalCart.innerHTML este limpiando los objetos de localStorage ubicados en el carrito, productoEnCarrito, estaria tomando esos objetos del localStorage y reubicandolos de nuevo.


// let modalCart = document.getElementById("modalCart")

// let savedCart = JSON.parse(localStorage.getItem("cart")) || [] // Obtiene elementos del localStorage o asigna un array vacío.

// function cartRender() {

//     modalCart.innerHTML = ``     // Comillas vacías limpian el espacio donde se coloca.

//     for (const product of savedCart){
//         let productoEnCarrito = document.createElement("div")

//         productoEnCarrito.setAttribute("class","cartContainer" )

//         productoEnCarrito.innerHTML = `<div class="cartProduct">
//         <img src="${product.img}" class="cartImg"></img>
//         <div class="cartTitle">${product.article}</div>
//         <div class="cartPrice">$ ${product.price}</div>
//         <div id="close${product.id}" class="cartClose">X</div>
//         </div>`

//         modalCart.appendChild(productoEnCarrito)     // Agrega elemento creado al HTML.
//     }
// }
// cartRender()        // Aunque en la función cartRender, modalCart.innerHTML este limpiando los objetos de localStorage ubicados en el carrito, productoEnCarrito, estaria tomando esos objetos del localStorage y reubicandolos de nuevo.