
let cardS = document.createElement("div");
cardS.classList.add("cardS");

let favImg = document.createElement('img');
favImg.setAttribute("src", "./imgDucksProducts/Favorite1.svg")

let cardImg = document.createElement('img');
cardImg.setAttribute("src","imgDucksProducts/front_london.jpg");
cardImg.classList.add('cardS-image')

let cardTitle = document.createElement('p');
cardTitle.textContent="London";
cardTitle.classList.add("card-title")

let cardPrice = document.createElement('p');
cardPrice.textContent="8 €";

cardS.appendChild(favImg);
cardS.appendChild(cardImg);
cardS.appendChild(cardTitle);
cardS.appendChild(cardPrice);
     
document.body.appendChild(cardS);


let cardL = document.createElement('section');
cardL.classList.add("cardL");

let productImgFavContainer = document.createElement('div');


let favLimg = document.createElement('img');
favLimg.setAttribute("src","./imgDucksProducts/Favorite1.svg");
favLimg.classList.add("favL");

let cardLimg = document.createElement('img');
cardLimg.setAttribute('src','imgDucksProducts/front_london.jpg');
cardLimg.classList.add("cardLimg")

productImgFavContainer.appendChild(favLimg);
productImgFavContainer.appendChild(cardLimg);

let productImgViewsContainer = document.createElement('div');


let v1 = document.createElement('img');
v1.setAttribute("src","./imgDucksProducts/v1_london.jpg");
v1.classList.add("v1");


let v2 = document.createElement('img')
v2.setAttribute("src","./imgDucksProducts/v2_london.jpg");
v2.classList.add("v2")

let v3 = document.createElement('img');
v3.setAttribute("src","./imgDucksProducts/v3_london.jpg");
v3.classList.add("v3");

let cardLtitlle = document.createElement('p');
cardLtitlle.textContent="London";
cardLtitlle.classList.add("card-tittle");

let priceL = document.createElement('p');
priceL.textContent="8 €";
priceL.classList.add("priceL");

let productTitleAmmountButtonContatiner = document.createElement('div');
productTitleAmmountButtonContatiner.classList.add("productTitleAmmountButtonContatiner");


let cardDescription = document.createElement('p');
cardDescription.textContent="Desde Londres este pato de goma viene cumpliendo todas las normativas de seguridad Europeas y puedes lamerlo sin riesgo y bañarte con él.";


let buttonProductAmmount =document.createElement('button');
buttonProductAmmount.type = 'button';
buttonProductAmmount.innerText = "+ 1 -";
buttonProductAmmount.classList.add("buttonProductAmmount");

let buttonAddToCard =document.createElement('button');
buttonAddToCard.type = 'button';
buttonAddToCard.innerText = "Añadir a la cesta";
buttonAddToCard.classList.add("buttonAddToCard");

let buttonBuyNow =document.createElement('button');
buttonBuyNow.type = 'button';
buttonBuyNow.innerText = "Comprar ahora";
buttonBuyNow.classList.add("buttonBuyNow");

let productButtonsContantiner = document.createElement('div');
productButtonsContantiner.classList.add("productButtonsContantiner")

let buttonBuyNowImg = document.createElement('img');
buttonBuyNowImg.setAttribute("src","../../assets/icons/+button.svg");

let buttonAddToCardImg = document.createElement('img');
buttonAddToCardImg.setAttribute("src","../../assets/icons/shopping-card-button.svg");

buttonAddToCard.appendChild(buttonAddToCardImg);
buttonBuyNow.appendChild(buttonBuyNowImg);


document.body.appendChild(cardL);
cardL.appendChild(productImgFavContainer);
cardL.appendChild(productImgViewsContainer);
cardL.appendChild(productTitleAmmountButtonContatiner);
productTitleAmmountButtonContatiner.appendChild(cardLtitlle);
productTitleAmmountButtonContatiner.appendChild(buttonProductAmmount);
cardL.appendChild(priceL);
cardL.appendChild(cardDescription);
cardL.appendChild(productButtonsContantiner)
productButtonsContantiner.appendChild(buttonAddToCard);
productButtonsContantiner.appendChild(buttonBuyNow);

productImgViewsContainer.appendChild(v1);
productImgViewsContainer.appendChild(v2);
productImgViewsContainer.appendChild(v3);
productImgViewsContainer.classList.add("porductImgViewsContainer");



/* {
    cardL.innerhtml +=`
    <section class="section-cardL"><div class="cardL">
    
    <div class="product-img-Fav-container">
        <img id="favL" src="./imgDucksProducts/Favorite1.svg">
        <img class= "front" src= "./imgDucksProducts/front_london.jpg">
    </div>
    <div class="porductImgViewsContainer">
        <img class= "v1" src="./imgDucksProducts/v1_london.jpg">
        <img class= "v2" src="./imgDucksProducts/v2_london.jpg">
        <img class= "v3" src="imgDucksProducts/v3_london.jpg">
    </div>
    <div class="product-title-ammount-button-contatiner">
        <p class="card-tittle">London</p>
        <button class="buttonProductAmmount">- 1 +</button>
    </div>

    <p class="priceL">8 €</p>
    <p class= "product-description">Desde Londres este pato de goma viene cumpliendo todas las normativas de seguridad Europeas y puedes lamerlo sin riesgo y bañarte con él.</p>
    <div class="productButtonsContantiner">
        <button class="button-add-to-card"> Añadir a la cesta <img src="./imgDucksProducts/+ button.svg" alt=""></button>
        <button class="button-buy-now"> Comprar Ahorra <img src="./imgDucksProducts/shopping card button.svg" alt=""></button>
    </div>
</div></section>`
})
*/