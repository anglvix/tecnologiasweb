function Par(numero) {
    return numero % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
    if (Par(i)) {
        alert(`${i} é par`);
    }
}
