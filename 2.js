let input1 = prompt("N sonini kiriting (ikkilikka otkazish uchun):");
let N1 = parseInt(input1);
let binary = "";
let temp = N1;
if (temp === 0) {
    binary = "0";
} else {
    while (temp > 0) {
        binary = (temp % 2) + binary;
        temp = Math.floor(temp / 2);
    }
}
alert("Ikkilikda: " + binary);

