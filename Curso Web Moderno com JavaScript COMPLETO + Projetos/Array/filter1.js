const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Videro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false
}))

const produtoFragil = p => p.fragil
const Caro = p => p.preco >= 500

console.log(produtos.filter(produtoFragil).filter(Caro))
