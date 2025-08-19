const longestWord = (str) => str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");

let userStringForLongestWord = prompt("Satrni kiriting:");
alert(longestWord(userStringForLongestWord));
