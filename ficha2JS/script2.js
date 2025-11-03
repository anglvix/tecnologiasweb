let num=prompt("Insira um número:");
num=Number(num);

function ePrimo(n){
        if(n<=1) return false;
    for(let i=2;i<n;i++) {
        if(n%i===0) return false;
    }
    return true;
}

if(ePrimo(num)) {
    alert(`${num} é um número primo.`);
}else{
    alert(`${num} não é um número primo.`);
}
