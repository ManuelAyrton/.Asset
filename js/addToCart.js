// Obtencion de producto y alerta de producto agregado.
let Items = $(".buttonAddCart")


for (const Item of Items) {
    Item.addEventListener('click', (e)=>{

        const foundProduct = products.find(product => product.id == e.target.id) // En este caso ".find" estaria comparando dentro del array de "products", el id de los productos, con el id de las propiedades de las etiquetas del HTML para devolver un "foundProduct".

        savedCart.push(foundProduct)

        localStorage.setItem("cart", JSON.stringify(savedCart)) //Stringify de array de productos.

        console.log(foundProduct)

        $("#mainBody").append(`<div class="floatingAlert">¡Producto agregado al carrito!</div>`)


        $(".floatingAlert").fadeIn("slow").delay(1500).fadeOut("slow",
        function() {
            console.log("Fin de la animación floatingAlert")
        })

        cartRender()
    })
}









