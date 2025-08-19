let input = prompt("N sonini kiriting (tub sonlar uchun):");
let N = parseInt(input);
let i = 2;
let primes = [];
while (i <= N) {
	let isPrime = true;
	let j = 2;
	while (j <= Math.sqrt(i)) {
		if (i % j === 0) {
			isPrime = false;
			break;
		}
		j++;
	}
	if (isPrime) {
		primes.push(i);
	}
	i++;
}
alert("1 dan " + N + " gacha tub sonlar: " + primes.join(", "));

