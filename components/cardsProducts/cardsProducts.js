const ducksProduct = [
    {
        id: 1,
        title: "London",
        price:  "8 €",
        description: "Desde Londres este pato de goma viene cumpliendo todas las normativas de seguridad Europeas y puedes lamerlo sin riesgo y bañarte con él.",
        frontimage: "./img/imgDucksProducts/front_london.jpg",
        imgV1: "./img/imgDucksProducts/v1_london.jpg",
        imgV2: "./img/imgDucksProducts/v2_london.jpg",
        imgV3: "",
        category: "CULTURA POP",
        stock: 10, 
    },
        {
            id: 1,
            title: "PIPI",
            price: 8.00,
            description: "Patito inspirado en la popular personaje de Pipi Calzas Largas. Ideal para nostálgicos de los 80 con childhood issues.",
            frontimage: "./img/ducks/pipi.png",
            imageV1: "./img/ducks/pipi-v1.png",
            imageV2: "./img/ducks/pipi-v2.png",
            imageV3: "./img/ducks/pipi-v3.png",
            category: "",
            stock: 10
          },
]

let cardS = document.createElement("div");
cardS.classList.add("cardS");

let favImg = document.createElement('img');
favImg.setAttribute("src", "./imgDucksProducts/Favorite1.svg")

let cardImg = document.createElement('img');
cardImg.setAttribute("src","imgDucksProducts/front_london.jpg");
cardImg.classList.add('cardS-image')

let cardTittle = document.createElement('p');
cardTittle.textContent="London";
cardTittle.classList.add("card-title")

let cardPrice = document.createElement('p');
cardPrice.textContent="8 €";

cardS.appendChild(favImg);
cardS.appendChild(cardImg);
cardS.appendChild(cardTittle);
cardS.appendChild(cardPrice);
     
document.body.appendChild(cardS);