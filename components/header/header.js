// Crear el elemento header
const header = document.createElement("header");

// Crear el div con la clase "sidebar"
const sidebarDiv = document.createElement("div");
sidebarDiv.classList.add("sidebar");

// Crear la imagen del icono del menú
const sidebarIcon = document.createElement("img");
sidebarIcon.setAttribute("src", "../../assets/icons/menu-icon.png");
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
logoImg.setAttribute("src", "../../assets/icons/header-footer-duck-icon.png");
titleLogoDiv.appendChild(logoImg);

// Crear el título "Duck U"
const title = document.createElement("img");
title.setAttribute("src", "../../assets/img/duck-u-logo.png");
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
searchIcon.setAttribute("src", "../../assets/img/mag.svg");
searchIcon.setAttribute("alt", "magnifying-glass-icon");
subMenuDiv.appendChild(searchIcon);

searchIcon.addEventListener("click", (event) => {
  // Verifica si el input ya está visible
  const isInputVisible = document.querySelector(".search-input");

  // Si el input ya está visible, lo oculta y sale de la función
  if (isInputVisible) {
    document.querySelector(".search-input").remove();
    document.querySelector(".search-button").remove();
    searchIcon.style.display = "inline"; // Muestra nuevamente el icono de búsqueda
    return;
  }

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  // Crear el input de búsqueda
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Buscar...");
  searchInput.classList.add("search-input");

  // Crear el botón de búsqueda
  const searchButton = document.createElement("button");
  searchButton.textContent = "Buscar";
  searchButton.classList.add("search-button");

  // Agregar el input y el botón al contenedor
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  // Agregar el input y el botón al header
  header.appendChild(searchInput);
  header.appendChild(searchButton);

  // Ocultar el ícono de búsqueda
  searchIcon.style.display = "none";

  // Agregar el evento de clic al botón de búsqueda
  searchButton.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento de búsqueda
    // Por ejemplo, obtener el valor del input y realizar una acción
    const searchText = searchInput.value;
    console.log("Búsqueda:", searchText);
  });
});

// Función para ocultar el input y el botón cuando se haga clic en cualquier parte de la página
document.addEventListener("click", (event) => {
  // Si el clic no se hizo en el icono de búsqueda, el input o el botón de búsqueda, los oculta
  if (
    event.target !== searchIcon &&
    event.target !== document.querySelector(".search-input") &&
    event.target !== document.querySelector(".search-button")
  ) {
    document.querySelector(".search-input")?.remove();
    document.querySelector(".search-button")?.remove();
    searchIcon.style.display = "inline"; // Muestra nuevamente el icono de búsqueda
  }
});

const favoritesIcon = document.createElement("img");
favoritesIcon.classList.add("header-icon");
favoritesIcon.setAttribute("src", "../../assets/img/fav.svg");
favoritesIcon.setAttribute("alt", "favorites-icon");
subMenuDiv.appendChild(favoritesIcon);

const carIcon = document.createElement("img");
carIcon.classList.add("header-icon");
carIcon.setAttribute("src", "../../assets/img/car.svg");
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
closeIcon.setAttribute("src", "../../assets/icons/exit-icon.png");
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
  duckListIcon.setAttribute("src", "../../assets/icons/duck-icon.png");

  const a = document.createElement("a");
  a.classList.add("category");
  a.textContent = category;

  li.appendChild(duckListIcon);
  li.appendChild(a);
  ul.appendChild(li);
});

// Agregar el header al cuerpo del documento
document.body.appendChild(header);
