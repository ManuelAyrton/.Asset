// Creación de productos en HTML de articulos de nueva temporada
let parentSectionNT = document.getElementById("parentSectionNT")

for (const product of products){
    let newProduct = document.createElement("section")
    newProduct.setAttribute("class", "contenedorProductos miCol-12 mx-1 miCol-md")
    newProduct.innerHTML = `<div class="producto-contenedor mb-3">
    <img class="producto-contenedor__imagen" src="${product.img}" alt="${product.article}">
    <div class="producto-contenedor__descripcion">
        <h3 class="producto-contenedor__descripcion--titulo">${product.article}</h3>
        <p class="producto-contenedor__descripcion--info">${product.info}</p>
        <span class="producto-contenedor__precio">$ ${product.price}</span>
        <button type="button" id="${product.id}" class="buttonAddCart">Agregar al carrito</button>
    </div>
    </div>`

    parentSectionNT.appendChild(newProduct)
}










