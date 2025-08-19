let N = parseInt(prompt("N sonini kiriting:"));
let yigindi = 0;
for (let i = 1; i <= N; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		yigindi += i;
	}
}
console.log(yigindi);