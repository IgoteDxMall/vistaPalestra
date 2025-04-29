window.addEventListener("DOMContentLoaded", () => {
  if (!Cookies.get("cart")) {
    Cookies.set("cart", JSON.stringify([]));
  }
  const contentContainer = document.querySelector(".items");
  window.catalog.forEach((item, index) => {
    contentContainer.insertAdjacentHTML(
      "beforeend",
      `
        <li class="item" style="background-image:url(${item.img})">
          <div class="item-info" id="item-${index}">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
            <button class="btn-add button-outlined" onclick="addToCart(event.target.parentNode.id)">
              <i class="fa-solid fa-add"></i>Adicionar ao carrinho
            </button>
          </div>
        </li>
      `
    );
  });
});



function openUserDropdown() {
  if(!document.querySelector(".shopping-cart").classList.contains('d-none')){
    document.querySelector(".shopping-cart").classList.add('d-none');
  }
  if (!Cookies.get("loggedUser")) {
    window.location.href = "/assets/pages/login.html";
  }

  const dropdown = document.querySelector(".user-dropdown");
  if (!dropdown.classList.contains("d-none")) {
    dropdown.classList.add("d-none");
  } else {
    dropdown.classList.remove("d-none");
  }

}

function search(e) {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (!e.target.value) {
      item.style.display = "block";
    }
    const itemName = item.querySelector("h2").innerText;
    if (!itemName.toLocaleLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

function loadCart() {
  const finishButton = document.querySelector("#shopping-cart-button");
  const cartData = JSON.parse(Cookies.get("cart"));
  if (cartData.length > 0) {
    finishButton.disabled = 0;
  } else {
    finishButton.disabled = 1;
  }

  const cartBody = document.querySelector(".shopping-cart-body");
  const items = document.querySelectorAll(".shopping-cart-item");
  const quantityText = document.querySelector("#shopping-cart-quantity");
  let quantity = 0;
  let total = 0.0;
  cartData.forEach((item) => {
    const getPrice = parseFloat(
      window.catalog[item.id].price.split(" ")[1].replace(",", ".")
    );
    quantity += item.quantity;
    total += item.quantity * getPrice;
  });
  const totalText = document.querySelector("#shopping-cart-total");
  totalText.innerText = `Total: ${total.toFixed(2).replace(".", ",")}`;
  quantityText.innerText = `( ${quantity} itens)`;
  items.forEach((item) => item.remove());
  console.log(items);
  cartData.forEach((item, index) => {
    console.log(cartData);
    cartBody.insertAdjacentHTML(
      "beforeend",
      `
       <li class="shopping-cart-item">
          <div class="shopping-cart-item-left" style="background-image:url(${
            window.catalog[item.id].img
          })"></div>
          <div class="shopping-cart-item-right">
            <h3>${window.catalog[item.id].name}</h3>
            <p>${window.catalog[item.id].price}</p>
            <p>${item.quantity}</p>
            <a href="#" onclick="removeItemFromCart(${item.id})">Remover</a>
          </div>
        </li> 
      `
    );
  });
}

function openCart() {
  if(!document.querySelector(".user-dropdown").classList.contains('d-none')){
    document.querySelector(".user-dropdown").classList.add('d-none');
  }
  loadCart();
  const cart = document.querySelector(".shopping-cart");
  const cartData = JSON.parse(Cookies.get("cart"));
  if (!cart.classList.contains("d-none")) {
    cart.classList.add("d-none");
  } else {
    cart.classList.remove("d-none");
  }
}

function addToCart(id) {
  const getId = id.substring(5, id.length);
  const cart = JSON.parse(Cookies.get("cart"));
  const item = cart.find((item) => item.id === getId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: getId, quantity: 1 });
  }
  Cookies.set("cart", JSON.stringify(cart));
  console.log("id " + id);
  loadCart();
}

function removeItemFromCart(id) {
  const cart = JSON.parse(Cookies.get("cart"));
  cart.forEach((item) => {
    if (item.id === String(id)) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        console.log("uga");
      } else {
        cart.splice(cart.indexOf(item), 1);
        console.log("buga");
      }
    }
  });
  Cookies.set("cart", JSON.stringify(cart));
  loadCart();
}

