document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        title : document.getElementById('title').value,
        desc



    }
    

    axios.post('http://localhost:3000/productos',)
        .then(function (response) {
            console.log(response.data);
            alert('Producto creado exitosamente');
        })
        .catch(function (error) {
            console.error(error);
            alert('Error al crear producto');
        });
});