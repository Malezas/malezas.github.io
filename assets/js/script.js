$(function(){

    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#enviar').click(function(){
        alert("El correo fue enviado con éxito")
    
    });

    //cambia de color receta y preparación
    $('.sub').dblclick(function(){
        $(this).css("color","orange")
    })

    //desaparecen las "cards"
    $('.card').click(function(){
        $(this).toggle("slow")
    })

})