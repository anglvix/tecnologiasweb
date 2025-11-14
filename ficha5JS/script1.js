let numeros = Array.from({ length: 90 }, (_, i) => i + 1);
let tirados = [];

function resetarJogo() {
    numeros = Array.from({ length: 90 }, (_, i) => i + 1);
    tirados = [];
    alert("Jogo reiniciado!");
    document.getElementById("resultado").innerText =
        `Último número: - | Total tirados: -`;
}

function tirarnum() {
    if (numeros.length === 0) {
        alert("Todos os números foram tirados! A recomeçar...");
        resetarJogo();
        return;
    }

    let pos = Math.floor(Math.random() * numeros.length);
    let num = numeros[pos];

    numeros.splice(pos, 1); 
    tirados.push(num);

    alert("Número tirado: " + num);

    document.getElementById("resultado").innerText =
        `Último número: ${num}  |  Total tirados: ${tirados.length}`;
}

function bingo() {
    if (tirados.length < 15) {
        alert("Impossível, continue.");
        return;
    }

    alert("BINGO! 🎉");
    resetarJogo();
}

document.body.innerHTML += `
    <button onclick="tirarnum()">Tirar Número</button>
    <button onclick="bingo()">Bingo</button>
    <p id="resultado"></p>
`;
