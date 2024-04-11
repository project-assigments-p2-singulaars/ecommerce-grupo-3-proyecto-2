let idForm;

if (document.title === "Form") {
    console.log("entro");
    
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        image1: document.getElementById('image1').value,
        imagev1: "",
        imagev2: "",
        imagev3: "",
        category: document.getElementById('category').value,
        stock: document.getElementById('stock').value,
    };

    axios.post('http://localhost:3000/products', formData)
        .then(function(response) {
            console.log(response.data);
            alert('Producto creado exitosamente');
            // Puedes hacer otras acciones aquí, como redireccionar a otra página o recargar la lista de productos
        })
        .catch(function(error) {
            console.error(error);
            alert('Error al crear producto');
        });
});
}else{
    

document.getElementById('formularioUpdate').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        id: idForm,
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        image1: document.getElementById('image1').value,
        imagev1: "",
        imagev2: "",
        imagev3: "",
        category: document.getElementById('category').value,
        stock: document.getElementById('stock').value,
    };

    axios.put(`http://localhost:3000/products/${idForm}`, formData)
        .then(function(response) {
            console.log(response.data);
            alert('Producto creado exitosamente');
            // Puedes hacer otras acciones aquí, como redireccionar a otra página o recargar la lista de productos
        })
        .catch(function(error) {
            console.error(error);
            alert('Error al crear producto');
        });
});
window.onload = cargarProductos;
}


function cargarProductos() {
    axios.get('http://localhost:3000/products')
        .then(function(response) {
            const productos = response.data;

            const select = document.getElementById('productos');
            select.innerHTML = '';

            productos.forEach(function(producto) {
                const option = document.createElement('option');
                option.value = producto.id;
                option.textContent = producto.title;
                select.appendChild(option);
            });

            select.addEventListener('change', function() {
                const selectedProductId = this.value;
                const selectedProduct = productos.find(producto => producto.id == selectedProductId);
                console.log(selectedProduct)
                if (selectedProduct) {
                    idForm = selectedProduct.id
                    document.getElementById('title').value = selectedProduct.title;
                    document.getElementById('category').value = selectedProduct.category;
                    document.getElementById('price').value = selectedProduct.price;
                    document.getElementById('description').value = selectedProduct.description;
                    document.getElementById('stock').value = selectedProduct.stock;
                }
            });
        })
        .catch(function(error) {
            console.error('Error al cargar los productos:', error);
        });
}


document.getElementById('borrarProducto').addEventListener('click', function() {
    const productId = idForm; // Obtén el ID del producto que deseas borrar

    // Realiza una solicitud DELETE al servidor para borrar el producto
    axios.delete(`http://localhost:3000/products/${idForm}`)
        .then(function(response) {
            console.log(response.data);
            alert('Producto eliminado exitosamente');
            // Puedes hacer otras acciones aquí, como redireccionar a otra página o recargar la lista de productos
        })
        .catch(function(error) {
            console.error(error);
            alert('Error al eliminar producto');
        });
});

function updateImage() {
    const imageUrlInput = document.getElementById('imageUrlInput').value;
    const image = document.getElementById('image');
    
    // Actualizar la URL de la imagen
    image.src = imageUrlInput;
}