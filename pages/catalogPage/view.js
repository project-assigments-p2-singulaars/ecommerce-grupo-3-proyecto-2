window.onload = () => {
    document.addEventListener('click', async (e) => {
        if (e.target.parentElement.classList.contains('cardS')) {
            const product = e.target.parentElement;
            const infoCard = product.querySelector('.card-title').textContent;
            
            try {
                const response = await fetch('../../db.json'); // Realizar una solicitud HTTP a tu archivo JSON
                const json = await response.json(); // Convertir la respuesta a un objeto JSON
                const data = json.products; // Obtener el array de productos
                
                console.log(data);
                
                // Buscar el producto en la base de datos que coincida con el título
                const matchingProduct = data.find(item => item.title === infoCard);
                console.log(matchingProduct)
                if (matchingProduct) {
                    // Almacenar los datos del producto en sessionStorage
                    sessionStorage.setItem('productData', JSON.stringify(matchingProduct));
                    
                    // Redireccionar a la página de vista del producto
                     window.location.href = '../../components/product-view/product-view.html';
                } else {
                    console.log('El producto no se encontró en la base de datos.');
                }
            } catch (error) {
                console.log('Error al cargar la base de datos:', error);
            }
        }
    });
};