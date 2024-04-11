    document.addEventListener('click', async (e) => {
        if (e.target.parentElement.classList.contains('cardS')) {
            const product = e.target.parentElement;
            const infoCard = product.querySelector('.card-title').textContent;
            
            try {
                const response = await fetch('http://localhost:3000/products');
                const json = await response.json();
                const data = await json;

                
                const matchingProduct = data.find(item => item.title === infoCard);
                if (matchingProduct) {
                    sessionStorage.setItem('productData', JSON.stringify(matchingProduct));
                    
                     window.location.href = '../../components/product-view/product-view.html';
                } else {
                    console.log('El producto no se encontró en la base de datos.');
                }
            } catch (error) {
                console.log('Error al cargar la base de datos:', error);
            }
        }
    });