function drawTriangle() {
  let N = prompt("Iltimos, uchburchak uchun satr sonini kiriting:");
  N = parseInt(N);

  for (let i = 1; i <= N; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

drawTriangle();
