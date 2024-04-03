// URL del servidor JSON
const url = 'db.json';

// Función para buscar productos por título
function buscarProducto() {
  const inputTitulo = document.getElementById('inputTitulo').value.toLowerCase();
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const productos = data.productos.filter(producto => producto.title.toLowerCase().includes(inputTitulo));
      if (productos.length === 0) {
        console.log('No se encontraron productos con ese título.');
      } else {
        console.log('Resultados de la búsqueda:');
        productos.forEach(producto => {
          console.log(producto);
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



getProductosPorCategoria('Cultural');
getProductosPorTitulo('DONUT');
