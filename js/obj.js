// Lista de productos y precios //
class Product {
    constructor(id, article, category, info, collection, price, img){
        this.id = id
        this.article = article.toUpperCase()
        this.category = category
        this.info = info
        this.collection = collection
        this.price = parseFloat(price)
        this.img = img
    }
    sumaIva(){
        this.price = this.price * 1.21
    }
}

const products = []
products.push(new Product(1, "campera", "prendas exteriores", "Campera acolchada para invierno.", "nueva temporada", "9000", "media/campera.jpg"))
products.push(new Product(2, "remera", "remeras", "Remera amplia estilo oversized.", "nueva temporada", "2500", "media/remera.jpg"))
products.push(new Product(3, "cargo", "pantalones", "Cargo amplio de cintura elástica.", "nueva temporada", "6100", "media/cargo.jpg"))


// Suma de IVA
for (const product of products){
    product.sumaIva()
    console.log("El precio con IVA de un/a " + product.article + " es de $" + product.price)
}