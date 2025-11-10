let nome=prompt("Insira o seu primeiro nome:");
nome=String(nome);

let apelido=prompt("Insira o seu apelido:");
apelido=String(apelido);

let num=prompt("Insira um número de 0 a 100:");
num=Number(num);

if (num < 0 || num > 100) {
    alert("Número inválido. Por favor, insira um número entre 0 e 100.");
}

function tresLetrasCapitalizadas(nome) {
    nome = String(nome).trim();
    if (nome.length === 0) return "";
    let parte = nome.slice(0, 3).toLowerCase();
    return parte.charAt(0).toUpperCase() + parte.slice(1);
}

const p1 = tresLetrasCapitalizadas(nome);
const p2 = tresLetrasCapitalizadas(apelido);

const username = p1 + p2 + String(num);

alert(`O teu username é ${username}`);