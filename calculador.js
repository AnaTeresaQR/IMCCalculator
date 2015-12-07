// Cuando el documento haya cargado y este listo
$(document).ready(function(){

  // Seleccionar el formulario y el campo de respuesta
  var form = $("#calc");
  var respuesta = $("#respuesta");

  // Cuando el usuario haga submit en el formulario
  form.submit(function(e){
    e.preventDefault();
    // Obtenemos los valores
    var peso = $("#peso").val();
    var talla = $("#talla").val();
    // Los ponemos en int y float
    peso = parseInt(peso);
    talla = parseFloat(talla);

    // Calcula el IMC
    var mostrar = calcularIMC(peso, talla);

    // Restringe a solo dos decimales
    mostrar = mostrar.toFixed(2);
    // Mostramos la respuesta
    respuesta.text("Tu IMC es de: " + mostrar);
  });

});

/**
 * Calcula el IMC
 * @param peso el peso de la persona en kilogramos
 * @param talla es la tallar o medida de la persona en metros
 */
function calcularIMC(peso, talla) {
  var resultado = peso / (talla * talla);
  return resultado;
}
