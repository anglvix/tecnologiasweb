let nomes = [];

for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Digite o nome ${i}:`);
    nomes.push(nome);
}

nomes.sort();

let frase = `${nomes[0]}, ${nomes[1]} e ${nomes[2]}`;

alert(frase);
