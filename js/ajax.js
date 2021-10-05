const urlPost = "https://jsonplaceholder.typicode.com/posts"


$("#submitForm").click( (e) => {

    e.preventDefault()

    const infoPost = {
        nombre: $("#nombre").val(),
        apellido: $("#apellido").val(),
        eMail: $("#eMail").val(),
        comoNosConociste: $("#comoNosConociste").val(),
        sexo: $("input[name=genero]:checked").val(),
        consulta: $("#consulta").val(),
        newsletter: $("#newsletter").val()
    }

    console.log(infoPost)
    $.post(urlPost, infoPost, (respuesta, estado) => {

        if(estado === "success"){
            $("#mainBody").append(`<div class="floatingAlertForm">Formulario enviado con éxito.</div>`)

            $(".floatingAlertForm").fadeIn("slow").delay(2000).fadeOut("slow",
        function() {
            console.log("Fin de la animación floatingAlert")
        })
        } else {
            $("#mainBody").append(`<div class="floatingAlertForm">Hubo un error al enviar el formulario.</div>`)

            $(".floatingAlertForm").fadeIn("slow").delay(2000).fadeOut("slow",
        function() {
            console.log("Fin de la animación floatingAlert")
        })

        }

        console.log(estado)
    })

})

