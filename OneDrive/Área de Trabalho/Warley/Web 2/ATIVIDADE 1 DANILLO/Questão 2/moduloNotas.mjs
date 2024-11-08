export function media(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

export function menor(notas) {
    return Math.min(...notas);
}

export function maior(notas) {
    return Math.max(...notas);
}
