let numeroUtil = prompt("Insira um número de 1 a 10:");
numeroUtil = Number(numeroUtil);

let numeroRand = Math.ceil(Math.random() * 10);

if (numeroUtil === numeroRand) {
    alert("Acertaste de primeira!");
}else{
    let tentativas = 1;
    console.log(`Tentativa ${tentativas}: ${numeroRand}`);

    while (numeroRand !== numeroUtil) {
        numeroRand = Math.ceil(Math.random() * 10);
        tentativas++;
        console.log(`Tentativa ${tentativas}: ${numeroRand}`);
    }

    alert(`O número não coincidiu à primeira. \n Foram necessárias ${tentativas} tentativas. \n Consulte a consola para ver cada tentativa.`);
}
