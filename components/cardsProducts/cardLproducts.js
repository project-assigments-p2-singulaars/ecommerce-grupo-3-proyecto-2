const productData = JSON.parse(sessionStorage.getItem('productData'));

let cardL = document.createElement("section");
cardL.classList.add("cardL");

let productImgFavContainer = document.createElement("div");

let favLimg = document.createElement("img");
favLimg.setAttribute("src", "../../assets/icons/Favorite1.svg");
favLimg.classList.add("favL");

let cardLimg = document.createElement("img");
cardLimg.setAttribute("src", productData.image1);
cardLimg.classList.add("product-img-Fav-container");

productImgFavContainer.appendChild(favLimg);
productImgFavContainer.appendChild(cardLimg);

let productImgViewsContainer = document.createElement("div");

let v1 = document.createElement("img");
v1.setAttribute("src", productData.imagev1);
v1.classList.add("v1");

let v2 = document.createElement("img");
v2.setAttribute("src", productData.imagev2);
v2.classList.add("v2");

let v3 = document.createElement("img");
v3.setAttribute("src", productData.imagev3);
v3.classList.add("v3");

let cardLtitlle = document.createElement("p");
cardLtitlle.textContent = productData.title;
cardLtitlle.classList.add("card-tittle");
let priceL = document.createElement("p");
priceL.textContent = `${productData.price} €`;
priceL.classList.add("priceL");

let productTitleAmmountButtonContatiner = document.createElement("div");
productTitleAmmountButtonContatiner.classList.add(
  "productTitleAmmountButtonContatiner"
);

let cardDescription = document.createElement("p");
cardDescription.textContent = productData.description;
let buttonProductAmmount = document.createElement('div');
buttonProductAmmount.classList.add("buttonProductAmmount");
let spanMinus = document.createElement('span');
spanMinus.classList.add("minusButton");
let spanCounter = document.createElement('span');
spanCounter.classList.add("counterNumber");
let spanPlus = document.createElement('span');
spanPlus.classList.add("plusButton");
spanMinus.setAttribute("type", "button");
spanPlus.setAttribute("type", "button");
spanMinus.innerText = "-";
spanCounter.innerText = 0;
spanPlus.innerText = "+";

spanPlus.addEventListener("click", (e)=>{
      let currentCount = parseInt(spanCounter.innerText); 
      currentCount += 1;
      spanCounter.innerText = currentCount;
    }
)

spanMinus.addEventListener("click", (e)=>{
    let currentCount = parseInt(spanCounter.innerText); 
    if (currentCount ===0 ) {
        return
    }
    currentCount -= 1;
    spanCounter.innerText = currentCount;
  }
)

let buttonAddToCard = document.createElement("button");
buttonAddToCard.type = "button";
buttonAddToCard.innerText = "Añadir a la cesta";
buttonAddToCard.classList.add("buttonAddToCard");

let buttonBuyNow = document.createElement("button");
buttonBuyNow.type = "button";
buttonBuyNow.innerText = "Comprar ahora";
buttonBuyNow.classList.add("buttonBuyNow");

let buttonBuyNowImg = document.createElement("img");
buttonBuyNowImg.setAttribute("src", "../../assets/icons/+button.svg");

let buttonAddToCardImg = document.createElement("img");
buttonAddToCardImg.setAttribute(
  "src",
  "../../assets/icons/shopping-card-button.svg"
);

let productButtonsContantiner = document.createElement("div");
productButtonsContantiner.classList.add("productButtonsContantiner");

buttonAddToCard.appendChild(buttonAddToCardImg);
buttonBuyNow.appendChild(buttonBuyNowImg);

document.body.appendChild(cardL);
cardL.appendChild(productImgFavContainer);
cardL.appendChild(productImgViewsContainer);
cardL.appendChild(productTitleAmmountButtonContatiner);
buttonProductAmmount.appendChild(spanMinus);
buttonProductAmmount.appendChild(spanCounter);
buttonProductAmmount.appendChild(spanPlus);
productTitleAmmountButtonContatiner.appendChild(cardLtitlle);
productTitleAmmountButtonContatiner.appendChild(buttonProductAmmount);
cardL.appendChild(priceL);
cardL.appendChild(cardDescription);
cardL.appendChild(productButtonsContantiner);
productButtonsContantiner.appendChild(buttonAddToCard);
productButtonsContantiner.appendChild(buttonBuyNow);

productImgViewsContainer.appendChild(v1);
productImgViewsContainer.appendChild(v2);
productImgViewsContainer.appendChild(v3);
productImgViewsContainer.classList.add("porductImgViewsContainer");




