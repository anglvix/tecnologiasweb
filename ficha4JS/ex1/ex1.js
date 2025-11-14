let numeros = Array.from({ length: 90 }, (_, i) => i + 1);
let somaAtual = '0';     

function clicarNumero(n) {
    console.log("Número clicado:", n);
    if (somaAtual === '0') {
        somaAtual = n.toString();
    } else {
        somaAtual += n.toString();
    }
    console.log("Número atual:", somaAtual);
}

function clicarMais() {
    if (somaAtual !== '') {
        numeros.push(parseInt(somaAtual));
        somaAtual = '0';
    }
}

function clicarIgual() {
    if (somaAtual !== '') {
        numeros.push(parseInt(somaAtual));
    }
    let resultado = numeros.reduce((a, b) => a + b, 0);
    alert("Resultado: " + resultado);

    // Reinicializa o array para 1..90 para manter sempre os números de 1 a 90
    numeros = Array.from({ length: 90 }, (_, i) => i + 1);
    somaAtual = '0';
}

document.querySelectorAll('.calculator input[type="button"]').forEach(btn => {
    if (!isNaN(btn.value)) {
        btn.addEventListener('click', () => clicarNumero(parseInt(btn.value)));
    } else if (btn.value === '+') {
        btn.addEventListener('click', clicarMais);
    } else if (btn.value === '=') {
        btn.addEventListener('click', clicarIgual);
    }
});
