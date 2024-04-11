// Datos de las categorías
const categoryData = [
  {
    name: "CULTURA POP",
    imageUrl: "./assets/img/ducks/pink-panther.jpg",
  },
  {
    name: "ARTISTAS",
    imageUrl: "./assets/img/ducks/singer-duck.png",
  },
  {
    name: "PELÍCULAS",
    imageUrl: "./assets/img/ducks/chewaka.jpg",
  },
  {
    name: "PROGRAMACIÓN",
    imageUrl: "./assets/img/ducks/css-duck.png",
  },
];

// const divCategoryContainer = document.getElementsByClassName("category-container");

const categoryContainer = document.querySelector(".category-grid-container");

// Crear cada elemento de categoría
categoryData.forEach((category) => {
  const categoryGridItem = document.createElement("div");
  categoryGridItem.classList.add("category-grid-item");

  const categoryName = document.createElement("p");
  categoryName.classList.add("category-grid-name");
  categoryName.textContent = category.name;
  categoryGridItem.appendChild(categoryName);

  const categoryImage = document.createElement("img");
  categoryImage.src = category.imageUrl;
  categoryGridItem.appendChild(categoryImage);

  categoryContainer.appendChild(categoryGridItem);
});
