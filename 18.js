const average = (numbers) => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

let userNumbers = prompt("Sonlarni vergul bilan kiriting (masalan: 10,20,30)").split(',').map(Number);
alert(average(userNumbers));
