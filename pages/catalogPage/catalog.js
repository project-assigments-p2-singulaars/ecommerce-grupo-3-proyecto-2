const url = '../../db.json';
const miVariable = sessionStorage.getItem('miValor');
const enlaceClickado = sessionStorage.getItem('enlaceClicado');



if (enlaceClickado == "VER TODOS"){
fetch(url)
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
    }).then(sessionStorage.removeItem('enlaceClicado'))
    .catch(error => console.error('Error al cargar los datos:', error));

}

console.log(enlaceClickado);

buscarProducto(miVariable);
buscarCategoria(enlaceClickado);    


// Función para buscar productos por título
function buscarProducto(parametro) {
    const inputTitulo = parametro;
    const catalogGrid = document.querySelector(".catalog-grid")
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const productos = data.products.filter(producto => producto.title.toLowerCase().includes(inputTitulo));
        console.log(productos.length);
        if (productos.length == null) {
            
        } else {

          productos.forEach(product => {
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
        }
      })
      .then(sessionStorage.removeItem('miValor'))
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }
  

  function buscarCategoria(parametro) {
    const inputCategoria = parametro;

    if (inputCategoria == null){
        return
    }
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        const productos = data.products.filter(producto => producto.category.toLowerCase().includes(inputCategoria.toLowerCase()));
        const catalogGrid = document.querySelector(".catalog-grid")

        console.log(productos.length);
        console.log("si");
        if (productos.length == null) {
            
        } else {
          
          productos.forEach(product => {
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
        }
      })
      .then(sessionStorage.removeItem('enlaceClicado'))
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }
  

  function guardarValor(enlace) {
    enlaceClicado = enlace.textContent;
    sessionStorage.setItem("enlaceClicado", enlaceClicado);
    
    window.location.href = "catalog.html";
  
  }