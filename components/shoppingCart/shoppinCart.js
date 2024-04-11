let allProducts = [];
const cartMenu = document.getElementById("cart-icon");
const contador = document.querySelector(".count-products");
const rowProduct = document.querySelector(".row-product");
const btnAddToCart = document.querySelector(".buttonAddToCard");
const cartDiv = document.querySelector(".container-cart-products");
cartMenu.addEventListener("click", () => {
  if (cartDiv.style.display === "block") {
    cartDiv.style.display = "none";
  } else {
    return (cartDiv.style.display = "block");
  }
});

btnAddToCart.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttonAddToCard")) {
    const product = e.target.parentElement.parentElement;
    const infoProduct = {
      quantity: 1,
      title: product.querySelector(".card-tittle").textContent,
      price: product.querySelector(".priceL").textContent,
      img: product.querySelector(".v1"),
    };
    const exists = allProducts.some(
      (product) => product.title === infoProduct.title
    );
    if (exists) {
      const products = allProducts.map((product) => {
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProduct];
    }

    showHtml();
  }
});
rowProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-close")) {
    const product = e.target.parentElement;
    const divTitle = product.querySelector(".info-cart-product");
    const title = divTitle.querySelector("p").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);
    showHtml();
  }
});

const showHtml = () => {
  rowProduct.innerHTML = "";
  let total = 0;
  let totaProducts = 0;
  allProducts.forEach((product) => {
    let price = product.price;
    let priceToString = price.replace("€", "").trim();
    const cartConainer = document.createElement("div");
    cartConainer.classList.add("cart-product");

    cartConainer.innerHTML = `
            <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <img class='carrito-img' src=${product.img.src} />
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
            </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
            
            `;
    rowProduct.append(cartConainer);
    total = total + parseInt(product.quantity * priceToString);
    totaProducts = totaProducts + product.quantity;
  });
  contador.innerText = totaProducts;
  console.log(total);
};

