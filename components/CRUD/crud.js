document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        title : document.getElementById('title').value,
        price : document.getElementById('price').value,
        desc : document.getElementById('description').value,
        image1 : document.getElementById('image1').value,
        imagev1 : "",
        imagev2 : "",
        imagev3 : "",
        category : document.getElementById('category').value,
        stock : document.getElementById('stock').value,

    }
    

    axios.post('http://localhost:3000/products', formData)
        .then(function (response) {
            console.log(response.data);
            alert('Producto creado exitosamente');
        })
        .catch(function (error) {
            console.error(error);
            alert('Error al crear producto');
        });
});