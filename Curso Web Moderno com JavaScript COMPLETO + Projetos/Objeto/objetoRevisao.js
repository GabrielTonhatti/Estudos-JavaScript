// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }

}

carro.proprietario.endereco.numero = 1000 // Atriubir ou trocar o valor de numero
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // Atrubuir ou trocar o valor de logradouro
console.log(carro.proprietario.endereco) // Mostrar apeanas o endereço dentro do objeto proprietario, que esta dentro do objeto carro
console.log(carro) // Mostrar todo o obj
console.log(carro.condutores)
delete carro.condutores
console.log(carro)
delete carro.proprietario.endereco
console.log(carro)
delete carro.calcularValorSeguro
console.log(carro)