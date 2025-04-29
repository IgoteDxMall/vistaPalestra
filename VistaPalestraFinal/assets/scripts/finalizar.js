let total = 0.0;
let frete = 0.0;
window.addEventListener("DOMContentLoaded", () => {
  const enderecoInput = document.querySelector("#endereço");
  const cepInput = document.querySelector("#cep");

  if(enderecoInput.value && cepInput.value && frete > 0){
    document.querySelector("#finishOrder").disabled = 0;
  }
  else{
    document.querySelector("#finishOrder").disabled = 1;
  }
  
  const orders = window.getOrders();
  const username = document.querySelector("#text-username");
  username.innerText = username.innerText.replace(
    "[username]",
    JSON.parse(Cookies.get("loggedUser")).name
  );

  const numpedido = document.querySelector("#text-pedido");
  numpedido.innerText = numpedido.innerText.replace(
    "[numpedido]",
    String(orders.length + 1)
  );

  const freteText = document.querySelector("#text-frete");
  freteText.innerText = freteText.innerText.replace("[frete]", "--");

  const cartBody = document.querySelector(".shopping-cart-body");
  const cartData = JSON.parse(Cookies.get("cart"));
  cartData.forEach((item) => {
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
          </div>
        </li> 
      `
    );
  });

  cartData.forEach((item) => {
    const getPrice = parseFloat(
      window.catalog[item.id].price.split(" ")[1].replace(",", ".")
    );
    total += item.quantity * getPrice;
  });
  const totalText = document.querySelector("#text-total");
  totalText.innerText = totalText.innerText.replace(
    "[total]",
    total.toFixed(2)
  );
});

window.addEventListener('input',()=>{
  const enderecoInput = document.querySelector("#endereço");
  const cepInput = document.querySelector("#cep");

  if(enderecoInput.value && cepInput.value && frete > 0){
    document.querySelector("#finishOrder").disabled = 0;
  }
  else{
    document.querySelector("#finishOrder").disabled = 1;
  }
})

async function calcFrete() {

  const inputCep = document.querySelector("#cep");
  if (!inputCep.value) {
    window.modal("Erro", "Insira um CEP e tente novamente");
    return;
  }

  const loader = document.querySelector(".loader");
  loader.classList.remove("fade-out");
  loader.classList.remove("d-none");
  loader.classList.add("fade-in");

  try {
    const response = await fetch(
      "http://n8n.meusuporti.com.br:5678/webhook/calcCepPedro",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          cep: inputCep.value,
        }),
        redirect: "follow",
      }
    );
    const data = await response.json();

    loader.classList.remove("fade-in")
    loader.classList.add("d-none");
    const checkErrors = Object.keys(data).forEach(key=>{
      if(key === "error"){
        window.modal("Erro", data[key]);
        return true;
      }
    })
    if(checkErrors) return;

    const freteText = document.querySelector("#text-frete");
    const tipoTransporte = document.querySelector("#tipo-transporte");
    frete =
      tipoTransporte.value === "default"
        ? parseFloat(data.price)
        : parseFloat(data.price) + 12;
    freteText.innerText = `Frete: R$${frete}`;
    const totalText = document.querySelector("#text-total");
    totalText.innerText = `Total: R$${(frete + total).toFixed(2)}`;

    const enderecoInput = document.querySelector("#endereço");
    const cepInput = document.querySelector("#cep");
  
    if(enderecoInput.value && cepInput.value && frete > 0){
      document.querySelector("#finishOrder").disabled = 0;
    }
    else{
      document.querySelector("#finishOrder").disabled = 1;
    }

  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}

function finalizarPedido(e){
  e.preventDefault();
  window.modal("Sucesso!", "Seu pedido foi finalizado com sucesso. \n Acompanhe em meus pedidos.")
}