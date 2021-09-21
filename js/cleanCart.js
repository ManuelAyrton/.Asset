// Boton de limpiar carrito
function clearStorage(){
    localStorage.clear()            // Limpia el localStorage completo.
    modalCart.innerHTML = ``     // Comillas vacías limpian el espacio donde se coloca.
    savedCart = []                  // Limpia en caso de tener un array armado.
}

let eraseCart = document.getElementById("eraseCart")

eraseCart.onclick = clearStorage

