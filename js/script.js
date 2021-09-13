{}






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


