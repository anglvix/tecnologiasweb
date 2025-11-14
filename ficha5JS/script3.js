let numeros = [121, 123, 44, 456, 11, 90, 909, 22];

verificarCapicua(numeros);

function verificarCapicua(lista) {
    lista.forEach(num => {
        let strNum = num.toString();
        let reverso = strNum.split('').reverse().join('');  
        if (strNum === reverso) {
            alert(`O número ${num} é capicua.`);
        }
        else {
            alert(`O número ${num} não é capicua.`);
        }
    });
}
