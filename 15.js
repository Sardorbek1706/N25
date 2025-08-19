function evaluateNumber(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (sum < 10) {
    return "kichik";
  } else if (sum >= 10 && sum <= 20) {
    return "o‘rtacha";
  } else {
    return "katta";
  }
}

let userNumber = parseInt(prompt("Sonni kiriting:"));

alert(evaluateNumber(userNumber));
