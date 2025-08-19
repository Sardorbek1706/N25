let input = prompt("N sonini kiriting:");
let N = parseInt(input);
let sum = 0;
while (N > 0) {
    sum += N % 10;
    N = Math.floor(N / 10);
}
if (sum % 2 === 0) {
    alert("Juft");
} else {
    alert("Toq");
}
