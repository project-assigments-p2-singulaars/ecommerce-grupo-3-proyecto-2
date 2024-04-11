const header = document.createElement("header");

const sidebarDiv = document.createElement("div");
sidebarDiv.classList.add("sidebar");

const sidebarIcon = document.createElement("img");
sidebarIcon.setAttribute("src", "../../assets/icons/menu-icon.png");
sidebarIcon.setAttribute("alt", "menu-selector");
sidebarDiv.appendChild(sidebarIcon);

sidebarIcon.addEventListener("click", () => {
  sideNav.style.display = "block";
});

header.appendChild(sidebarDiv);

const titleLogoDiv = document.createElement("div");
titleLogoDiv.classList.add("title-logo");

const logoImg = document.createElement("img");
logoImg.setAttribute("src", "../../assets/icons/header-footer-duck-icon.png");
titleLogoDiv.appendChild(logoImg);

const title = document.createElement("img");
title.setAttribute("src", "../../assets/img/duck-u-logo.png");
title.setAttribute("id", "duck-u-logo");
titleLogoDiv.appendChild(title);

header.appendChild(titleLogoDiv);

const subMenuDiv = document.createElement("div");
subMenuDiv.setAttribute("id", "sub-menu");

const searchIcon = document.createElement("img");
searchIcon.classList.add("header-icon");
searchIcon.setAttribute("src", "../../assets/img/mag.svg");
searchIcon.setAttribute("alt", "magnifying-glass-icon");
subMenuDiv.appendChild(searchIcon);

const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");
searchContainer.style.display = "none";

searchIcon.addEventListener("click", (event) => {
  const isInputVisible = document.querySelector(".search-input");

  if (isInputVisible) {
    document.querySelector(".search-input").remove();
    document.querySelector(".search-button").remove();
    document.querySelector(".search-container").remove();
    searchIcon.style.display = "inline";
    return;
  }

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("id", "search-input");
  searchInput.classList.add("search-input");
  searchInput.setAttribute("placeholder", "Buscar...");
  searchInput.setAttribute("required", "");

  const searchButton = document.createElement("button");
  searchButton.setAttribute("type", "submit");
  searchButton.textContent = "Buscar";
  searchButton.classList.add("search-button");
  searchButton.addEventListener("click", guardarValorYRedireccionar);

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  header.appendChild(searchContainer);

  searchButton.addEventListener("click", () => {
    const searchText = searchInput.value;
  });
});

searchIcon.addEventListener("click", () => {
  if (searchContainer.style.display === "none") {
    searchContainer.style.display = "flex";
  } else return;
});

const favoritesIcon = document.createElement("img");
favoritesIcon.classList.add("header-icon");
favoritesIcon.setAttribute("src", "../../assets/img/fav.svg");
favoritesIcon.setAttribute("alt", "favorites-icon");
subMenuDiv.appendChild(favoritesIcon);

const carIcon = document.createElement("img");
carIcon.classList.add("header-icon");
carIcon.setAttribute("id", "cart-icon");
carIcon.setAttribute("src", "../../assets/img/car.svg");
carIcon.setAttribute("alt", "shopping-car-icon");
subMenuDiv.appendChild(carIcon);

const countProducts = document.createElement("span");
countProducts.classList.add("count-products");
countProducts.textContent = 0;
subMenuDiv.appendChild(countProducts);

const productsCard = document.createElement("div");
productsCard.classList.add("row-product");
header.appendChild(subMenuDiv);

const sideNav = document.createElement("nav");
sideNav.setAttribute("id", "menu-mobile");
header.appendChild(sideNav);

const ul = document.createElement("ul");
sideNav.appendChild(ul);

const closeIcon = document.createElement("img");
closeIcon.setAttribute("src", "../../assets/icons/exit-icon.png");
closeIcon.setAttribute("id", "close-menu");
ul.appendChild(closeIcon);

closeIcon.addEventListener("click", () => {
  sideNav.style.display = "none";
});

const categories = [
  "CULTURA POP",
  "ARTISTAS",
  "PELÍCULAS",
  "PROGRAMACIÓN",
  "VER TODOS",
  "CREAR PRODUCTOS",
  "EDITAR PRODUCTOS",
];
categories.forEach((category) => {
  const li = document.createElement("li");
  const duckListIcon = document.createElement("img");
  duckListIcon.classList.add("duck-list-icon");
  duckListIcon.setAttribute("src", "../../assets/icons/duck-icon.png");

  const a = document.createElement("a");
  a.classList.add("category");
  a.textContent = category;
  a.setAttribute("onclick", "guardarValor(this)");

  li.appendChild(duckListIcon);
  li.appendChild(a);
  ul.appendChild(li);
});

const carrito = document.createElement("div");
carrito.classList.add("container-cart-products");
carrito.appendChild(productsCard);
subMenuDiv.appendChild(carrito);

document.body.appendChild(header);

// Seleccionar la imagen por su ID
let imagen = document.getElementById('duck-u-logo');

// Agregar un evento de clic a la imagen
imagen.addEventListener('click', function() {
    // Redireccionar a la URL deseada
    window.location.href = '../../../index.html';
});
