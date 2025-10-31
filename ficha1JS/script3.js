let peso = parseFloat(prompt("Introduza o seu peso (em kgs):"));
let altura = parseFloat(prompt("Introduza a sua altura (em metros):"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert(`O seu IMC é ${imc.toFixed(2)}. Está abaixo do peso.`);

} else if (imc >= 18.5 && imc < 24.9) {
    alert(`O seu IMC é ${imc.toFixed(2)}. Está com peso normal.`);

} else if (imc >= 25 && imc < 29.9) {
    alert(`O seu IMC é ${imc.toFixed(2)}. Está com sobrepeso.`);

} else if (imc >= 30 && imc < 34.9) {
    alert(`O seu IMC é ${imc.toFixed(2)}. Está com obesidade classe I.`);

} else if (imc >= 35 && imc < 39.9) {
    alert(`O seu IMC é ${imc.toFixed(2)}. Está com obesidade classe II.`);
    
} else {
    alert(`O seu IMC é ${imc.toFixed(2)}. Está com obesidade classe III.`);
}
