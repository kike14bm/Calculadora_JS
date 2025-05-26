document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
  const cientifica = document.getElementById("cientifica");
  let expresion = "";

  window.agregar = function(valor) {
    expresion += valor;
    pantalla.textContent = expresion;
  }

  window.borrar = function() {
    expresion = "";
    pantalla.textContent = "0";
  }

  window.calcular = function() {
    try {
      // Cerrar paréntesis abiertos automáticamente
      const abiertos = (expresion.match(/\(/g) || []).length;
      const cerrados = (expresion.match(/\)/g) || []).length;
      if (abiertos > cerrados) {
        expresion += ")".repeat(abiertos - cerrados);
      }

      let resultado = eval(expresion);
      pantalla.textContent = resultado;
      expresion = resultado.toString();
    } catch (e) {
      pantalla.textContent = "Error";
      expresion = "";
    }
  }

  window.toggleCientifica = function() {
    if (cientifica.style.display === "none" || cientifica.style.display === "") {
      cientifica.style.display = "grid";
    } else {
      cientifica.style.display = "none";
    }
  }
});
