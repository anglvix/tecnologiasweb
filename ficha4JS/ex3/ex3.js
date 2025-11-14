let lista = [];

function adicionar() {
    let item = prompt("Introduza o alimento a adicionar:");
    if(!item) return;
    item = item.toLowerCase();
    if(lista.includes(item)){
        alert("Este alimento já está na lista!");
    }else{
        lista.push(item);
        alert("Adicionado: " + item);
    }
}

function remover() {
    let item = prompt("Introduza o alimento a remover:");
    if (!item) return;
    item = item.toLowerCase();
    let index = lista.indexOf(item);
    if(index === -1){
        alert("Este alimento não existe na lista!");
    }else{
        lista.splice(index, 1);
        alert("Removido: " + item);
    }
}

function verificar() {
    if(lista.length === 0){
        alert("A lista de compras está vazia.");
    }else{
        alert("Lista de compras:\n" + lista.join(", "));
    }
}
const botoes = document.querySelectorAll("input[type='button']");
botoes[0].addEventListener("click", adicionar);
botoes[1].addEventListener("click", remover);
botoes[2].addEventListener("click", verificar);