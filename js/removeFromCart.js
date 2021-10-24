
function delButton(e) {

    const idArray = parseInt(e.target.id.replace("close", ""))

    const newArray = savedCart.filter(product => product.id !== idArray)

    localStorage.setItem("cart", JSON.stringify(newArray))

    savedCart = newArray

    this.closest('.cartContainer').remove()
    console.log(newArray)
    console.log(e.target.id)
    console.log(e.target)
}
