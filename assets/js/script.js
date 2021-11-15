$(document).ready(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      
    }});

    $('[data-toggle="tooltip"]').tooltip()
    
    $(".boton").click(function(){ 
            
        alert( "El correo fue enviado correctamente...");

    });

   $(".rojo").dblclick(function(){ 
       $(this).css("color", "red"); 
       })

    $("#cards").click(function(){ 
        $("#description ,#imagen").toggle();
        $("#description ,#imagen").toggle();
        $("#description ,#imagen").toggle();
    }) 
})
 
  


  




