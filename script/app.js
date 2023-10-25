/*
    app.js
*/

let productCardsContainer;
let productArray = [];

function createProductCard(product) {
  let productCard = document.createElement("article");
  productCard.classList.add("product-card");

  let price = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(product.price);

  let html = `
    <div class="sku">${product.productSku}</div>
    <div class="price">${price}</div>
    <div class="product-name action" data-id="${product.productId}" title="${product.description}">${product.name}</div>
    <div class="product-image"><img src="${product.imageName}"></div>
    <div class="cart" data-id="${product.productId}"><i class="fa-solid fa-cart-plus icon action" title="Add item to cart"></i></div>
    `;
  productCard.innerHTML = html;
  let cartButton = productCard.querySelector(".cart");
  cartButton.addEventListener("click", (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    displayMessage(`Item ${id} has been added to the cart.`);
  });

  let clickName = productCard.querySelector(".product-name");
  clickName.addEventListener("click", (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    displayMessage(productService.getProductByID(id).description);
  });

  return productCard;
}

function displayMessage(message) {
  let messageBox = document.getElementById("message");
  messageBox.innerText = message;
  setTimeout(() => (messageBox.innerText = ""), 5000);
}

function displayProducts() {
  productCardsContainer.innerHTML = "";
  productArray.forEach((product) => {
    let productCard = createProductCard(product);
    productCardsContainer.appendChild(productCard);
  });
}

function onKeyPressed(event) {
  const productSearchInput = event.target;
  const searchTerm = productSearchInput.value;
  productArray = productService.searchProducts(searchTerm);
  displayProducts();
}

document.addEventListener("DOMContentLoaded", () => {
  productCardsContainer = document.getElementById("product-cards");
  let productSearchInput = document.getElementById("search-tb");
  productSearchInput.addEventListener("keyup", onKeyPressed);
  productArray = productService.getProducts();
  displayProducts();
});
