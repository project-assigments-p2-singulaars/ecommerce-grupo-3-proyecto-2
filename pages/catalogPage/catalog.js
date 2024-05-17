const url = "http://localhost:3000/products";
const miVariable = sessionStorage.getItem("miValor");
const enlaceClickado = sessionStorage.getItem("enlaceClicado");

if (enlaceClickado == "VER TODOS") {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      printCard(products); 
    })
    .then(sessionStorage.removeItem("enlaceClicado"))
    .catch((error) => console.error("Error al cargar los datos:", error));
}


buscarProducto(miVariable);
buscarCategoria(enlaceClickado);

// Función para buscar productos por título
function buscarProducto(parametro) {
  const inputTitulo = parametro;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const productos = data.filter((producto) =>
        producto.title.toLowerCase().includes(inputTitulo)
      );
      printCard(productos);
    })
    .then(sessionStorage.removeItem("miValor"))
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
}

function buscarCategoria(parametro) {
  const inputCategoria = parametro;

  if (inputCategoria == null) {
    return;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const productos = data.filter((producto) =>
        producto.category.toLowerCase().includes(inputCategoria.toLowerCase())
      );

      printCard(productos);
    })
    .then(sessionStorage.removeItem("enlaceClicado"))
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
}

function guardarValor(enlace) {
  enlaceClicado = enlace.textContent;
  sessionStorage.setItem("enlaceClicado", enlaceClicado);

  window.location.href = "catalog.html";
}

function guardarValorYRedireccionar() {
  let valor = document.getElementById("inputTitulo").value;

  if (valor === "") {
  } else {
    sessionStorage.setItem("miValor", valor);

    window.location.href = "catalog.html";
  }
}

function printCard(productos) {
  const catalogGrid = document.querySelector(".catalog-grid");
  if (productos.length == null) {
  } else {
    productos.forEach((product) => {
      console.log(product);
      let cardS = document.createElement("div");
      cardS.classList.add("cardS");

      let favImg = document.createElement("img");
      favImg.setAttribute("src", "../../assets/icons/Favorite1.svg");

      let cardImg = document.createElement("img");
      cardImg.setAttribute("src", product.image1);
      cardImg.classList.add("cardS-image");

      let cardTitle = document.createElement("p");
      cardTitle.textContent = product.title;
      cardTitle.classList.add("card-title");

      let cardPrice = document.createElement("p");
      cardPrice.textContent = `${parseFloat(product.price).toFixed(2)} €`;
      cardPrice.classList.add("cardPrice");

      cardS.appendChild(favImg);
      cardS.appendChild(cardImg);
      cardS.appendChild(cardTitle);
      cardS.appendChild(cardPrice);
      catalogGrid.appendChild(cardS);
    });
  }
}
