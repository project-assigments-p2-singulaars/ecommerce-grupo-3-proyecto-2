// URL del servidor JSON
const url = 'db.json';

// Función para buscar productos por título
function buscarProducto() {
  const inputTitulo = document.getElementById('inputTitulo').value.toLowerCase();
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const productos = data.products.filter(producto => producto.title.toLowerCase().includes(inputTitulo));
      if (productos.length === 0) {
        console.log('No se encontraron productos con ese título.');
      } else {
        
        productos.forEach(producto => {
          
          let cardS = document.createElement("div");
          cardS.classList.add("cardS");
          
          let favImg = document.createElement('img');
          favImg.setAttribute("src", "components/cardsProducts/imgDucksProducts/Favorite1.svg")
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
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });
}


function getProductosPorCategoria(categoria) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const productosFiltrados = data.productos.filter(producto => producto.category === categoria);
      console.log(productosFiltrados);
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });
}



