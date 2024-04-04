fetch('../../db.json')
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        const catalogGrid = document.querySelector(".catalog-grid")

        products.forEach(product => {
            let cardS = document.createElement("div");
            cardS.classList.add("cardS");

            let favImg = document.createElement('img');
            favImg.setAttribute("src", "../../assets/icons/Favorite1.svg");
                    

            let cardImg = document.createElement('img');
            cardImg.setAttribute("src", product.image1); 
            cardImg.classList.add("cardS-image");

            let cardTitle = document.createElement('p');
            cardTitle.textContent = product.title;
            cardTitle.classList.add("card-title");
            

            let cardPrice = document.createElement('p');
            cardPrice.textContent = `${product.price.toFixed(2)} €`;
            cardPrice.classList.add("cardPrice");

            cardS.appendChild(favImg);
            cardS.appendChild(cardImg);
            cardS.appendChild(cardTitle);
            cardS.appendChild(cardPrice);

            catalogGrid.appendChild(cardS);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));