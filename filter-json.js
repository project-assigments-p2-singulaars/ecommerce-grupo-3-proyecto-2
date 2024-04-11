function guardarValorYRedireccionar() {
  let valor = document.getElementById("search-input").value;

  if (valor === "") {
  } else {
    sessionStorage.setItem("miValor", valor);

    window.location.href = "../../pages/catalogPage/catalog.html";
  }
}

function guardarValor(enlace) {
  enlaceClicado = enlace.textContent;
  sessionStorage.setItem("enlaceClicado", enlaceClicado);

  window.location.href = "../../pages/catalogPage/catalog.html";
};
