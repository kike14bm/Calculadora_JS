document.addEventListener("DOMContentLoaded", () => {
  // Cuando el documento se haya cargado completamente, ejecutamos esta función

  const pantalla = document.getElementById("pantalla"); // Referencia al div donde se muestra la expresión/resultado
  const cientifica = document.getElementById("cientifica"); // Referencia al div con los botones científicos
  let expresion = ""; // Variable donde vamos acumulando la expresión matemática que el usuario va escribiendo

  // Función para agregar caracteres (números, operadores) a la expresión
  window.agregar = function(valor) {
    expresion += valor;           // Añade el valor pasado a la cadena expresion
    pantalla.textContent = expresion;  // Actualiza el contenido visible con la expresión completa
  }

  // Función para borrar todo el contenido (resetear calculadora)
  window.borrar = function() {
    expresion = "";          // Limpia la variable expresión
    pantalla.textContent = "0";  // Muestra 0 en la pantalla como valor inicial
  }

  // Función que calcula el resultado de la expresión
  window.calcular = function() {
    try {
      // Contamos cuántos paréntesis de apertura hay
      const abiertos = (expresion.match(/\(/g) || []).length;
      // Contamos cuántos paréntesis de cierre hay
      const cerrados = (expresion.match(/\)/g) || []).length;
      // Si hay más paréntesis abiertos que cerrados, los cerramos automáticamente
      if (abiertos > cerrados) {
        expresion += ")".repeat(abiertos - cerrados);
      }

      // Ejecutamos la expresión con eval() para obtener resultado
      let resultado = eval(expresion);
      pantalla.textContent = resultado;    // Mostramos el resultado en pantalla
      expresion = resultado.toString();    // Guardamos el resultado para seguir operando con él
    } catch (e) {
      // Si hay algún error (sintaxis inválida, etc)
      pantalla.textContent = "Error";  // Mostramos "Error"
      expresion = "";                  // Limpiamos expresión para nuevo intento
    }
  }

  // Función para mostrar u ocultar los botones científicos
  window.toggleCientifica = function() {
    if (cientifica.style.display === "none" || cientifica.style.display === "") {
      cientifica.style.display = "grid"; // Si está oculto, lo mostramos con display grid
    } else {
      cientifica.style.display = "none"; // Si está visible, lo ocultamos
    }
  }
});
