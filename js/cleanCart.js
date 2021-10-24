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

    $("#modalCart").append('<div class="cleanAlert">¡El carrito esta vacío!</div>').css({
        'border-radius': '25px',
        'width': '100%',
        'text-align': '-webkit-center'
    }
    )

$(".cleanAlert").css({
    'display': 'none',
    'font-weight': '300',
    'text-align': 'center',
    'border-radius' : '25px',
    'background-color': '#290146',
    'color': '#e5e5e5',
    'padding': '0.5rem 1rem',
    'border': 'none',
    'border-radius': '25px',
    'width': 'max-content',
}).fadeIn("slow").delay(1500).fadeOut("slow",
    function() {
        console.log("Fin de la animación cleanAlert")
})

total = 0

$(totalCartPrice).empty()

totalCartPrice.append("$ " + total)

})