import cart from "./cart.js";
import products from "./product.js";
let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

// load template file

const loadCart = () => {
  fetch("cart.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementById("contentTab");
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      cart();
      initApp();
    });
};

loadCart();
const initApp = () => {
  // Load list product
  let listProduct = document.querySelector(".listProduct");
  listProduct.innerHTML = null;
  products.forEach((product) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.innerHTML = `
        <a href="/detail.html?id=${product.id}">
         <img src= "${product.image}"/>
         </a>
         <h2>${product.name}</h2>
         <div class="price">$${product.price}</div>
         <button class="addCart"
         data-id="${product.id}">
         Add to Cart
         </button>
        `;
    listProduct.appendChild(newProduct);
  });
};
