window.addEventListener("DOMContentLoaded", () => {
  // Mock
  window.users = JSON.parse(localStorage.getItem("users"));
  window.catalog = JSON.parse(localStorage.getItem("catalog"));
  window.orders = JSON.parse(localStorage.getItem("orders"));

  // Loader
  const loader = document.querySelector(".loader");
  loader.classList.add("fade-out");
  loader.addEventListener("animationend", () => {
    loader.classList.add('d-none');
  });

  //

  if (
    window.location.pathname === "/assets/pages/login.html" ||
    window.location.pathname === "/assets/pages/cadastro.html"
  ) {
    if (Cookies.get("loggedUser")) {
      window.location.href = "/assets/pages/catalogo.html";
    }
  }
});

function modal(title, msg, func) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("d-none");
  modal.classList.remove("fade-out");
  modal.classList.add("fade-in");
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.innerText = title;
  const modalMsg = document.querySelector(".modal-msg");
  modalMsg.innerText = msg;
  const modalBtn = document.querySelector(".modal-btn");
  modalBtn.addEventListener("click", () => {
    if (typeof func !== "undefined") {
      func();
    }
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.classList.add("d-none");
    }, 500);
  });
}
function exit() {
  Cookies.remove("loggedUser");
  window.location.href= "/";
}
