let input = prompt("N sonini kiriting:");
let N = parseInt(input);
let count = 0;
do {
    count++;
    N = Math.floor(N / 10);
} while (N > 0);
alert(count);
