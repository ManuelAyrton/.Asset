// Visualizando producto en carrito. (render)


let savedCart = JSON.parse(localStorage.getItem("cart")) || [] // Obtiene elementos del localStorage o asigna un array vacío.

let total = 0

let totalCartPrice = $("#totalCart")

function totalPriceOp() {

    total = 0

    for (let i = 0; i < savedCart.length; i++) {

        const element = savedCart[i].price;

        total = total + element

        $(totalCartPrice).empty()

        totalCartPrice.append("$ " + total)
    }
}



function cartRender() {

    $("#modalCart").empty()     // ".empty()" vacía lo que se encuentra dentro del elemento identificado.

    for (const product of savedCart){

        $("#modalCart").append(`
            <div class="cartContainer">
                <div class="cartProduct">
                    <img src="${product.img}" class="cartImg"></img>
                    <div class="cartTitle">${product.article}</div>
                    <div class="cartPrice">$ ${product.price}</div>
                    <svg class="cartClose" style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path id="close${product.id}" fill="darkred" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </div>
            </div>`

        )           // Agrega elemento entre tildes invertidas al HTML.
    }

    const delCartItem = document.querySelectorAll('.cartClose')

        delCartItem.forEach( button => {
        button.addEventListener('click', delButton)
    })

    totalPriceOp()
}

cartRender()        // Aunque en la función cartRender, modalCart.innerHTML este limpiando los objetos de localStorage ubicados en el carrito, productoEnCarrito, estaria tomando esos objetos del localStorage y reubicandolos de nuevo.

console.log(total)





// $('#cartContainer').on('click', '#close${product.id}', function(){
//     $(this).closest('.cartContainer').remove()
// })





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