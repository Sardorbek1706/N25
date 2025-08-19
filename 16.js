const checkPassword = (password) => password.length >= 8 ? "Yaroqli parol" : "Yaroqsiz parol";

let userPassword = prompt("Parolni kiriting:");
alert(checkPassword(userPassword));
