function jurosSimples (capital, juros, aplicacao) {
    return capital + (capital * juros * aplicacao)
}

function jurosComposto (capital, juros, aplicacao) {
    return capital * ( 1 + juros) ** aplicacao
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosComposto(100, 10/100, 2))
