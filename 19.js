const productOfDigits = (num) => num.toString().split('').reduce((product, digit) => product * digit, 1);

let userNumberForProduct = parseInt(prompt("Sonni kiriting:"));
alert(productOfDigits(userNumberForProduct));
