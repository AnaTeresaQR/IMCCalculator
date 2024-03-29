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
    var imc = calcularIMC(peso, talla);

    // Restringe a solo dos decimales
    imc = imc.toFixed(2);
    // Mostramos la respuesta
    respuesta.text("Tu IMC es de: " + imc + " un estado: " + clasificar(imc));
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

/**
 * Clasifica el resultado
 * @param imc se clasifica segun los rangos
 */
function clasificar(imc) {

  if (imc <= 18.5) {
    return "Bajo Peso";
  }

  if (imc > 18.5 && imc <= 24.9) {
    return "Normal";
  }

  if (imc > 24.9 && imc <= 29.9) {
    return "Sobrepeso";
  }

  if (imc > 29.9 && imc <= 34.9) {
    return "Obesidad I";
  }

  if (imc > 34.9 && imc <= 39.9) {
    return "Obesidad II";
  }

  if (imc > 39.9 && imc <= 49.9) {
    return "Obesidad Mórbida";
  }

  if (imc > 49.9) {
    return "Súper Obesidad";
  }
}
