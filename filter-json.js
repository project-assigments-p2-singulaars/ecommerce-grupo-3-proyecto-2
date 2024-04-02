const url = 'db.json';

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
function getProductosPorTitulo(titulo) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const productosFiltrados = data.productos.filter(producto => producto.title === titulo);
      console.log(productosFiltrados);
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });
}



getProductosPorCategoria('Cultural');
getProductosPorTitulo('DONUT');
