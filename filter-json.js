function guardarValorYRedireccionar() {
  let valor = document.getElementById("search-input").value;

  if (valor === "") {
  } else {
    sessionStorage.setItem("miValor", valor);

    window.location.href = "../../pages/catalogPage/catalog.html";
  }
}

function guardarValor(enlace) {

  console.log(enlace.textContent );
  if (enlace.textContent == "CREAR PRODUCTOS") {
    window.location.href = "../../../pages/form/formNewProduct.html";
  } else if(enlace.textContent == "EDITAR PRODUCTOS"){
    window.location.href = "../../../pages/form/formUpdateProduct.html";
  }else {

  
  enlaceClicado = enlace.textContent;
  sessionStorage.setItem("enlaceClicado", enlaceClicado);

  window.location.href = "../../pages/catalogPage/catalog.html"; 
}
};
