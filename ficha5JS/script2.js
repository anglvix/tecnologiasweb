
let listaOriginal = Array.from({ length: 15 }, () => Math.floor(Math.random() * 101) - 50);

let positivos = listaOriginal.filter(num => num > 0);
let negativos = listaOriginal.filter(num => num < 0);

alert(`A lista continha os números ${listaOriginal.join(", ")}, com ${negativos.length} números negativos e ${positivos.length} positivos.`);
