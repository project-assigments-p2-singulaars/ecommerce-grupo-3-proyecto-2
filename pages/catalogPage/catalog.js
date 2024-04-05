const url = '../../db.json';
const miVariable = sessionStorage.getItem('miValor');
const enlaceClickado = sessionStorage.getItem('enlaceClicado');

console.log(enlaceClickado);

buscarProducto(miVariable);
buscarCategoria(enlaceClickado);    


// Función para buscar productos por título
function buscarProducto(parametro) {
    const inputTitulo = parametro;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const productos = data.products.filter(producto => producto.title.toLowerCase().includes(inputTitulo));
        console.log(productos.length);
        if (productos.length == null) {
            
        } else {

          productos.forEach(producto => {
            
            let cardS = document.createElement("div");
            cardS.classList.add("cardS");
            
            let favImg = document.createElement('img');
            favImg.setAttribute("src", "    components/cardsProducts/imgDucksProducts/Favorite1.svg")
            favImg.setAttribute("id", "favS")
            
            let cardImg = document.createElement('img');
            cardImg.setAttribute("src", producto['front-image']);
            cardImg.classList.add('cardS-image')
            
            let cardTittle = document.createElement('p');
            cardTittle.textContent=producto.title;
            cardTittle.classList.add("card-title")
            
            let cardPrice = document.createElement('p');
            cardPrice.textContent=producto.price;
            cardPrice.classList.add("priceL")
            
            cardS.appendChild(favImg);
            cardS.appendChild(cardImg);
            cardS.appendChild(cardTittle);
            cardS.appendChild(cardPrice);
                 
            document.body.appendChild(cardS);
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

        console.log(productos.length);
        console.log("si");
        if (productos.length == null) {
            
        } else {
          
          productos.forEach(producto => {
            
            let cardS = document.createElement("div");
            cardS.classList.add("cardS");
            
            let favImg = document.createElement('img');
            favImg.setAttribute("src", "    components/cardsProducts/imgDucksProducts/Favorite1.svg")
            favImg.setAttribute("id", "favS")
            
            let cardImg = document.createElement('img');
            cardImg.setAttribute("src", producto['front-image']);
            cardImg.classList.add('cardS-image')
            
            let cardTittle = document.createElement('p');
            cardTittle.textContent=producto.title;
            cardTittle.classList.add("card-title")
            
            let cardPrice = document.createElement('p');
            cardPrice.textContent=producto.price;
            cardPrice.classList.add("priceL")
            
            cardS.appendChild(favImg);
            cardS.appendChild(cardImg);
            cardS.appendChild(cardTittle);
            cardS.appendChild(cardPrice);
                 
            document.body.appendChild(cardS);
          });
        }
      })
      .then(sessionStorage.removeItem('enlaceClicado'))
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }
  
