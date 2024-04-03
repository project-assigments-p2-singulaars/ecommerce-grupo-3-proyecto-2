const mostSoldData = [
  {
    imageUrl: "./assets/img/ducks/pipi.png",
    productName: "PIPI",
    productPrice: "8,00€",
  },
  {
    imageUrl: "./assets/img/ducks/londres.jpg",
    productName: "LONDRES",
    productPrice: "8,00€",
  },
  {
    imageUrl: "./assets/img/ducks/donut.png",
    productName: "DONUT",
    productPrice: "8,00€",
  },
  {
    imageUrl: "./assets/img/ducks/chewaka-duck.png",
    productName: "CHEWAKA",
    productPrice: "8,00€",
  },
  {
    imageUrl: "./assets/img/ducks/ducktrix.png",
    productName: "MATRIX",
    productPrice: "8,00€",
  },
];

// Crear la sección
const mostSoldSection = document.createElement("section");
mostSoldSection.classList.add("most-sold-section");

// Crear el título
const mostSoldTitle = document.createElement("div");
mostSoldTitle.classList.add("most-sold-title");
mostSoldSection.appendChild(mostSoldTitle);

const title1 = document.createElement("span");
title1.classList.add("most-sold-title1");
title1.textContent = "LOS PATITOS";
mostSoldTitle.appendChild(title1);

const title2 = document.createElement("span");
title2.classList.add("most-sold-title2");
title2.textContent = "MÁS VENDIDOS";
mostSoldTitle.appendChild(title2);

// Crear el contenedor del carrusel de productos
const mostSoldCarousel = document.createElement("div");
mostSoldCarousel.classList.add("most-sold-carousel");
mostSoldSection.appendChild(mostSoldCarousel);

// Crear cada elemento de producto
mostSoldData.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.classList.add("most-sold-item");

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("product-image");
  productImage.alt = product.productName;
  productItem.appendChild(productImage);

  const productName = document.createElement("h2");
  productName.classList.add("product-name");
  productName.textContent = product.productName;
  productItem.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = product.productPrice;
  productItem.appendChild(productPrice);

  mostSoldCarousel.appendChild(productItem);
});

// Agregar la sección al documento
const container = document.querySelector(".most-sold-container");
container.appendChild(mostSoldSection);
