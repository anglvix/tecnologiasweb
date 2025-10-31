let num1 = parseFloat(prompt("Introduza o primeiro número:"));
let num2 = parseFloat(prompt("Introduza o segundo número:"));

let operacao = prompt("Introduza a operação desejada (+, -, *, /):");
let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
    alert(`O resultado de ${num1} + ${num2} é ${resultado}.`);

} else if (operacao === "-") {
    resultado = num1 - num2;
    alert(`O resultado de ${num1} - ${num2} é ${resultado}.`);

} else if (operacao === "*") {
    resultado = num1 * num2;
    alert(`O resultado de ${num1} * ${num2} é ${resultado}.`);

} else if (operacao === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
        alert(`O resultado de ${num1} / ${num2} é ${resultado}.`);
    } else {
        alert("Erro: Divisão por zero não é permitida.");
    }
} else {
    alert("Operação inválida. Por favor, introduza +, -, * ou /.");
}