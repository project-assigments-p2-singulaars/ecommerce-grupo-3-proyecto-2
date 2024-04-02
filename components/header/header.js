// Crear el elemento header
const header = document.createElement("header");

// Crear el div con la clase "sidebar"
const sidebarDiv = document.createElement("div");
sidebarDiv.classList.add("sidebar");

// Crear la imagen del icono del menú
const sidebarIcon = document.createElement("img");
sidebarIcon.setAttribute("src", "./assets/icons/menu-icon.png");
sidebarIcon.setAttribute("alt", "menu-selector");
sidebarDiv.appendChild(sidebarIcon);

// Funcion abrir menu
sidebarIcon.addEventListener("click", () => {
  sideNav.style.display = "block";
});

// Añadir el div de la sidebar al header
header.appendChild(sidebarDiv);

// Crear el div con la clase "title-logo"
const titleLogoDiv = document.createElement("div");
titleLogoDiv.classList.add("title-logo");

// Crear la imagen del logo
const logoImg = document.createElement("img");
logoImg.setAttribute("src", "./assets/icons/header-footer-duck-icon.png");
titleLogoDiv.appendChild(logoImg);

// Crear el título "Duck U"
const title = document.createElement("img");
title.setAttribute("src", "./assets/img/duck-u-logo.png");
title.setAttribute("id", "duck-u-logo");
titleLogoDiv.appendChild(title);

// Añadir el div de title-logo al header
header.appendChild(titleLogoDiv);

// Crear el div con el id "sub-menu"
const subMenuDiv = document.createElement("div");
subMenuDiv.setAttribute("id", "sub-menu");

// Crear las imágenes de los íconos del sub-menú
const searchIcon = document.createElement("img");
searchIcon.classList.add("header-icon");
searchIcon.setAttribute("src", "./assets/icons/magnifying-glass-icon.png");
searchIcon.setAttribute("alt", "magnifying-glass-icon");
subMenuDiv.appendChild(searchIcon);

const favoritesIcon = document.createElement("img");
favoritesIcon.classList.add("header-icon");
favoritesIcon.setAttribute("src", "./assets/icons/favorites-icon.png");
favoritesIcon.setAttribute("alt", "favorites-icon");
subMenuDiv.appendChild(favoritesIcon);

const carIcon = document.createElement("img");
carIcon.classList.add("header-icon");
carIcon.setAttribute("src", "./assets/icons/car-icon.png");
carIcon.setAttribute("alt", "shopping-car-icon");
subMenuDiv.appendChild(carIcon);

// Añadir el div del sub-menú al header
header.appendChild(subMenuDiv);

// Crear el menu-mobile
const sideNav = document.createElement("nav");
sideNav.setAttribute("id", "menu-mobile");
header.appendChild(sideNav);

// crear lista menu mobile
const ul = document.createElement("ul");
sideNav.appendChild(ul);

// boton cerrar menu
const closeIcon = document.createElement("img");
closeIcon.setAttribute("src", "./assets/icons/exit-icon.png");
closeIcon.setAttribute("id", "close-menu");
ul.appendChild(closeIcon);

// funcion cerrar sidebar
closeIcon.addEventListener("click", () => {
  sideNav.style.display = "none";
});

// categories
const categories = [
  "CULTURA POP",
  "ARTISTAS",
  "PELÍCULAS",
  "PROGRAMACIÓN",
  "VER TODOS",
];
categories.forEach((category) => {
  const li = document.createElement("li");
  const duckListIcon = document.createElement("img");
  duckListIcon.classList.add("duck-list-icon");
  duckListIcon.setAttribute("src", "./assets/icons/duck-icon.png");

  const a = document.createElement("a");
  a.classList.add("category");
  a.textContent = category;

  li.appendChild(duckListIcon);
  li.appendChild(a);
  ul.appendChild(li);
});

// Agregar el header al cuerpo del documento
document.body.appendChild(header);
