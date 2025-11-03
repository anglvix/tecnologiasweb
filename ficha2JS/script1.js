let num = prompt("insira um número:");
num = Number(num);
let res = "";

for (let i = 1; i <= 10; i++) {
  res += `${num} x ${i} = ${num * i}\n`;
}

alert(res);