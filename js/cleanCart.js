// Boton de limpiar carrito
function clearStorage(){
    localStorage.clear()            // Limpia el localStorage completo.
    $("#modalCart").empty()         // ".empty()" vacía lo que se encuentra dentro del elemento identificado.
    savedCart = []                  // Limpia en caso de tener un array armado.
}

// let eraseCart = document.getElementById("eraseCart")

// eraseCart.onclick = clearStorage


$("#eraseCart").on("click", () => {

    clearStorage()

    }
)