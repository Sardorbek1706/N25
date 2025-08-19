let N = parseInt(prompt("N sonini kiriting:"));
for (let i = 1; i <= N; i++) {
	let sum = 0;
	let temp = i;
	let digits = i.toString().length;
	while (temp > 0) {
		let digit = temp % 10;
		sum += Math.pow(digit, 3); 
		temp = Math.floor(temp / 10);
	}
	if (sum === i && digits === 3) { 
		console.log(i);
	}
}
