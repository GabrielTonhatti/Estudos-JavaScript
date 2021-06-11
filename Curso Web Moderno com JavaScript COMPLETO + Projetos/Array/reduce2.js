const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.bolsista))
// Desafio 1: Todos os alunos são bolsista?
const desafio1 = alunos.map(a => a.bolsista).reduce(function(bolsista, naoBolsista) {
    console.log( bolsista, naoBolsista)

    return bolsista === naoBolsista
}, false)

console.log(desafio1)

// Resposta
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desfaio 2: Algum aluno é bolsista?
const desafio2 = alunos.map(a => a.bolsista).reduce(function(bolsista, naoBolsista) {
    console.log( bolsista, naoBolsista)

    return bolsista === naoBolsista
})

console.log(desafio2)

// Resposta
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))