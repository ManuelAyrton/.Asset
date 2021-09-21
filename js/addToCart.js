// Obtencion de producto y alerta de producto agregado.
let mainBody = document.getElementById("mainBody")

let Items = document.getElementsByClassName("buttonAddCart")

for (const Item of Items) {
    Item.addEventListener('click', (e)=>{

        const foundProduct = products.find(product => product.id == e.target.id)

        let floatingAlert = document.createElement("div")
        floatingAlert.setAttribute("class","floatingAlert")
        floatingAlert.innerHTML = `<div>Producto agregado al carrito!</div>`

        savedCart.push(foundProduct)

        localStorage.setItem("cart", JSON.stringify(savedCart)) //Stringify de array de productos

        console.log(foundProduct)

        mainBody.appendChild(floatingAlert)
        cartRender()
    })
}

