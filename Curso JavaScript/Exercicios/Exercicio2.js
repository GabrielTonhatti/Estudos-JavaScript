function triangulo(lado, lado2, lado3) {
    if (lado == lado2 && lado == lado3) {
        console.log('Triângulo Equilátero!')
    } else if (lado == lado2 || lado == lado3 || lado2 == lado3) {
        console.log('Triângulo Isósceles!')
    } else {
        console.log('Triângulo Escaleno!')
    }
}

triangulo(5, 5, 5)
triangulo(6, 6, 8)
triangulo(6, 8, 6)
triangulo(5, 6, 6)
triangulo(6, 8, 4)
