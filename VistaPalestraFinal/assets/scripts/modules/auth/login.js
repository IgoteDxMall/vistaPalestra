import { getUsers } from "./users.js";

export function validateLogin(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("senha").value;
  if (email === "" || pwd === "") {
    window.modal("Erro", "Usuário ou senha incorreto!");
    return false;
  }
  const users = getUsers();
  console.log(users);
  const user = users.find(
    (user) => user.email === email && user.password === pwd
  );
  if(user){
    Cookies.set('loggedUser', JSON.stringify(user), { expires: 1 })
    window.location.href = "/assets/pages/catalogo.html";
  }else {

    window.modal('Erro', 'Email ou senhas incorretos!\n Tente novamente.');
  }

}

window.validateLogin = validateLogin;
