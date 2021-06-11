// Pessoa -> 123 -> {...} 
const pessoa = { nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // Vai congelar o obj, fazendo com que apartir dessa linha, não possa fazer nenhuma alteração, remover ou adicionar nada no obj

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)