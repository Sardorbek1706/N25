let input = prompt("N sonini kiriting:");
let N = parseInt(input);
let maxDigit = 0;

while (N > 0) {
	let digit = N % 10;
	if (digit > maxDigit) {
		maxDigit = digit;
	}
	N = Math.floor(N / 10);
}

alert("Eng katta raqam: " + maxDigit);
