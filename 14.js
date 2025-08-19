function checkStringLength(str) {
  if (str.length % 2 === 0) {
    return "Juft uzunlik";
  } else {
    return "Toq uzunlik";
  }
}

let userString = prompt("Satrni kiriting:");

alert(checkStringLength(userString));
