const footer = document.createElement("footer");
const divDuckFooter = document.createElement("div");
divDuckFooter.setAttribute("id", "duck-footer");

const divTextBox = document.createElement("div");
divTextBox.setAttribute("id", "duck-text-box");

const p = document.createElement("p");
p.textContent = "¿No has encontrado el patito que buscabas?Vuelve a mirar.";

divTextBox.appendChild(p);
divDuckFooter.appendChild(divTextBox);
footer.appendChild(divDuckFooter);

const duckImg = document.createElement("img");
duckImg.setAttribute("src", "../../assets/img/patito.png");
duckImg.setAttribute("id", "duck-img");
footer.appendChild(duckImg);

const footerDiv = document.createElement("div");
footerDiv.setAttribute("id", "footer-div");

footer.appendChild(footerDiv);

const divSocialMedia = document.createElement("div");
divSocialMedia.setAttribute("id", "social-media");
footerDiv.appendChild(divSocialMedia);

const mediaIcons = [
  {
    id: "facebook",
    src: "../../assets/img/facebook.png",
  },
  {
    id: "twitter",
    src: "../../assets/img/twitter.png",
  },
  {
    id: "instagram",
    src: "../../assets/img/insta.png",
  },
];
mediaIcons.forEach((obj) => {
  const anchor = document.createElement("a");
  const mediaImg = document.createElement("img");
  mediaImg.setAttribute("id", `${obj.id}`);
  mediaImg.setAttribute("src", `${obj.src}`);
  anchor.appendChild(mediaImg);
  divSocialMedia.appendChild(anchor);
});

const divPageInformation = document.createElement("div");
const pageInformationText = document.createElement("p");
divPageInformation.setAttribute("id", "page-information");
pageInformationText.textContent =
  "Todos los derechos reservados 2024 | Aviso legal | Términos y condiciones | Política de Cookies | Contacta con nosotros | Condiciones de compra";
divPageInformation.appendChild(pageInformationText);

footerDiv.appendChild(divPageInformation);

document.body.appendChild(footer);
