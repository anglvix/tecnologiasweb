let numeros = [];
let estrelas = [];

function gerarNumeroUnico(array, min, max) {
    let num;
    do {
        num = Math.ceil(Math.random() * (max - min + 1)) + (min - 1);
    } while (array.includes(num));
    return num;
}

while (numeros.length < 5) {
    numeros.push(gerarNumeroUnico(numeros, 1, 50));
}

while (estrelas.length < 2) {
    estrelas.push(gerarNumeroUnico(estrelas, 1, 12));
}

console.log("Números:", numeros.sort((a,b) => a-b));
console.log("Estrelas:", estrelas.sort((a,b) => a-b));
