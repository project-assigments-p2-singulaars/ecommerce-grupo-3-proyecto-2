const headerData = {
  imageUrl: "./assets/img/header-image.jpg",
  headerText1: "SEMANA SANTA",
  headerText2: "50% OFF",
  buttonText: "EXPLORAR",
};

const section = document.createElement("section");
section.classList.add("header-section");

const divContainer = document.createElement("div");
divContainer.classList.add("header-container");
section.appendChild(divContainer);

const image = document.createElement("img");
image.classList.add("header-image");
image.src = headerData.imageUrl;
divContainer.appendChild(image);

const divOverlayElements = document.createElement("div");
divOverlayElements.classList.add("header-overlay-elements");
divContainer.appendChild(divOverlayElements);

const divHeaderText = document.createElement("div");
divHeaderText.classList.add("header-text");
divOverlayElements.appendChild(divHeaderText);

const text1 = document.createElement("p");
text1.classList.add("header-text1");
text1.textContent = headerData.headerText1;
divHeaderText.appendChild(text1);

const text2 = document.createElement("p");
text2.classList.add("header-text2");
text2.textContent = headerData.headerText2;
divHeaderText.appendChild(text2);

const button = document.createElement("button");
button.classList.add("header-button");
button.textContent = headerData.buttonText;
divOverlayElements.appendChild(button);

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(section);
