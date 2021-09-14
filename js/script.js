
//
// Lista de productos y precios //
//

class Product {
    constructor(id, article, info, price, img){
        this.id = id;
        this.article = article.toUpperCase();
        this.info = info
        this.price = parseFloat(price);
        this.img =img;
    }
    sumaIva(){
        this.price = this.price * 1.21;
    }
}

const products = [];
products.push(new Product(1, "campera", "Campera acolchada para invierno.", "9000", "../media/campera.jpg"))
products.push(new Product(2, "remera", "Remera amplia estilo oversized.", "2500", "media/remera.jpg"))
products.push(new Product(3, "cargo", "Cargo amplio de cintura elástica.", "6100", "media/cargo.jpg"))

for (const product of products){
    product.sumaIva();
    console.log("El precio con IVA de un/a " + product.article + " es de $" + product.price)
}

//
// Creación de productos en HTML
//

let padre = document.getElementById("seccionPadre")

for (const product of products){
    let newProduct = document.createElement("section");
    newProduct.setAttribute("class", "contenedorProductos miCol-12 mx-1 miCol-md")
    newProduct.innerHTML = `

    <div class="producto-contenedor mb-3">
    <img class="producto-contenedor__imagen" src="${product.img}" alt="Campera">
    <div class="producto-contenedor__descripcion">
        <h3 class="producto-contenedor__descripcion--titulo">${product.article}</h3>
        <p class="producto-contenedor__descripcion--info">${product.info}</p>
        <span class="producto-contenedor__precio">$ ${product.price}</span>
    </div>
    </div>

    `
    padre.appendChild(newProduct)
}









/*class product {
    constructor(id, article, price){
        this.id = id;
        this.article = article.toUpperCase();
        this.price = parseFloat(price);
    }
    sumaIva(){
        this.price = this.price * 1.21;
    }
}

const products = [];
products.push(new product(1, "campera", "6000"))
products.push(new product(2, "buzo", "4600"))
products.push(new product(3, "pantalon", "5600"))
products.push(new product(4, "remera", "1900"))
products.push(new product(6, "chaleco", "4000"))
products.push(new product(7, "sueter", "3000"))
products.push(new product(7, "boxer", "1500"))


products.sort(function(a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
})

for (const product of products){
    product.sumaIva();
    console.log("El precio con IVA de un/a " + product.article + " es de $" + product.price)
}

console.log(products)

let productoBuscado = prompt("Ingrese el producto deseado:").toUpperCase();
let size = prompt("Ingrese el talle deseado (S, M, L):").toUpperCase();


const productoEncontrado = products.find(
    function(producto){
        return productoBuscado == producto.article
    }
)

if (productoEncontrado && (size == "S" || size == "M" || size == "L")) {
    alert("El precio es de $" + productoEncontrado.price)
} else {const inventario = products.map(producto => producto.article)
    alert("No ingresaste un talle válido o no poseemos el articulo deseado.\nLos articulos de los cuales disponemos son los siguientes:\n- " + inventario.join("\n- "))
}*/


