let user = prompt("Insira o seu Username:");

if (user == null) {
    alert("Operação cancelada.");
}else if (user.toLowerCase() === "admin") {
    let password = prompt("Insira a sua Password:");
    if (password == null) {
        alert("Operação cancelada.");
    } else if (password === "TheMaster") {
        alert("Bem-vindo, Admin!");
    } else {
        alert("Password incorreta.");
    }
} else {
    alert("Utilizador desconhecido.");
}