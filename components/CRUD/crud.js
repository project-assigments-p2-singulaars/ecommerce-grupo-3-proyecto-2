document
  .getElementById("add-product-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      price: document.getElementById("price").value,
      description: document.getElementById("description").value,
      stock: document.getElementById("stock").value,
    };
    console.log(formData);

    axios
      .post("http://localhost:3000/products", formData)
      .then(function (response) {
        console.log(response.data);
        alert("Producto creado exitosamente");
      })
      .catch(function (error) {
        console.error(error);
        alert("Error al crear producto");
      });
  });
