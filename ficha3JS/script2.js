function avaliar() {
    let nota = parseInt(prompt("Digite a nota do estudante (0 a 20):"));

    if (isNaN(nota) || nota < 0 || nota > 20) {
        alert("Nota inválida! Digite um número entre 0 e 20.");
        return;
    }

    let situacao = "";

    if (nota <= 9) {
        situacao = "Negativa";
    } else if (nota <= 13) {
        situacao = "Tem de ir a Prova Oral";
    } else if (nota <= 17) {
        situacao = "Positiva";
    } else {
        situacao = "Excelente";
    }

    document.getElementById("resultado").innerText =
        `O estudante teve ${nota} valores, resultando em ${situacao}.`;
}

document.body.innerHTML += `
    <button onclick="avaliar()">Avaliar Estudante</button>
    <p id="resultado"></p>
`;
