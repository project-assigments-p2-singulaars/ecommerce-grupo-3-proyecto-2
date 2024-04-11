function guardarValorYRedireccionar() {
  // Capturar el valor del input
  let valor = document.getElementById("search-input").value;

  if (valor === "") {
  } else {
    // Guardar el valor en sessionStorage
    sessionStorage.setItem("miValor", valor);

    // Redireccionar a otra página HTML
    window.location.href = "../../pages/catalogPage/catalog.html";
  }
}

function guardarValor(enlace) {
  enlaceClicado = enlace.textContent;
  sessionStorage.setItem("enlaceClicado", enlaceClicado);

  window.location.href = "../../pages/catalogPage/catalog.html";
};
