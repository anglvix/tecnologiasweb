function contarVogais(frase) {
    let a = 0, e = 0, i = 0, o = 0, u = 0;

    frase = frase.toLowerCase();

    for (let letra of frase) {
        if (letra === "a") a++;
        else if (letra === "e") e++;
        else if (letra === "i") i++;
        else if (letra === "o") o++;
        else if (letra === "u") u++;
    }

    alert(`A: ${a}, E: ${e}, I: ${i}, O: ${o}, U: ${u}`);
}

let frase = prompt("Escreva uma frase:");
contarVogais(frase);
