const isPalindrome = (num) => num.toString() === num.toString().split('').reverse().join('');

let userNumber = parseInt(prompt("Sonni kiriting:"));
alert(isPalindrome(userNumber));
