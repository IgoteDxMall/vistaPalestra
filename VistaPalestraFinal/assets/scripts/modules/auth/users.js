const users = [];

class user {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

function getUsers() {
  return window.users;
}

function addUser(nome, email, senha) {
  const checkEmail = users.some((user) => user.email === email);
  if (checkEmail) {
    return false;
  }
  const newUser = new user(nome, email, senha);
  users.push(newUser);
  window.localStorage.setItem('users',JSON.stringify(users))
  return newUser;
}

export { users, addUser, getUsers };
