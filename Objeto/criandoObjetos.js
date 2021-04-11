// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Arroz', 23, 0.1)
const p2 = new Produto('Notebook', 2998.99, 0.25)
const p3 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto(), p3.getPrecoComDesconto())

// Funçao Factory
function CriarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('João', 7980, 4)
const f2 = CriarFuncionario('Maroa', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSon = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSon.info)