import { addUser } from "./users.js";

export function register(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email1").value;
  let confirmEmail = document.getElementById("email2").value;
  let senha = document.getElementById("pswrd1").value;
  let confirmSenha = document.getElementById("pswrd2").value;

  if (!nome || !email || !confirmEmail || !senha || !confirmSenha) {
    window.modal("Erro", "Todos campos são obrigatórios");
    return false;
  }
  if (confirmEmail != email) {
    window.modal("Erro", "Emails não conhecidem. \n Tente novamente!");
    return false;
  }
  if (confirmSenha != senha) {
    window.modal("Erro", "Senhas não conhecidem. \n Tente novamente!");
    return false;
  }
  const user = addUser(nome, email, senha);
  window.modal("Sucesso!", "Usuário criado com sucesso!",()=>{
    window.location.href = "/assets/pages/login.html";
  });

}

window.register = register;
