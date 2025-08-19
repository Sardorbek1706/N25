function findMaxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

let num1 = parseInt(prompt("Birinchi sonni kiriting:"));
let num2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
let num3 = parseInt(prompt("Uchinchi sonni kiriting:"));

alert("Eng katta son: " + findMaxOfThree(num1, num2, num3));
