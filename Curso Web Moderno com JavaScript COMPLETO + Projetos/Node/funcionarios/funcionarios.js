const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = p => p.pais === "China" && p.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // Mulher chinesa com menor sálario?
    const func = funcionarios.filter(chineses).reduce(menorSalario)

    console.log(func)
})