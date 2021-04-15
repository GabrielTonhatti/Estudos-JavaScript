// par nome/valor

const saudacao = 'Opa' // constexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // constexto léxico 2
    return saudacao
}

// objetos são grupos alinhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)