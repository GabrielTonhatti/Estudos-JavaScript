function transformar(valorDecimal) {
    valor = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valor)
}

transformar(0.1 + 0.2)