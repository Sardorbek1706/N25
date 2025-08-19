let input = prompt("N sonini kiriting:");
let N = parseInt(input);
let a = 0, b = 1;
let result = "";
do {
    result += a + " ";
    let temp = a + b;
    a = b;
    b = temp;
} while (a <= N);
alert(result.trim());
