function validation() {
    let vetCPF = [];
    let invalidCPF = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999',];
    let validacao = [];
    let firstAccount = 0;
    let secondAccount = 0
    let resto = 0;
    let newCPF = [];
    let firsValidation = 10;
    let secondValidation = 11;
    let cpf;
    let updateCPF;
    let secondUpdateCPF;
    let concatenate;

    cpf = document.getElementById('cpf-validate').value;
    console.log(cpf)
    updateCPF = cpf.split('.')
    secondUpdateCPF = updateCPF[2].split('-')
    concatenate = updateCPF[0] + updateCPF[1] + secondUpdateCPF[0] + secondUpdateCPF[1]

    for (let i = 0; i < 11; i++) {
        if (invalidCPF[i] === concatenate) {
            vetCPF[9] = 9
            vetCPF[10] = 0
            console.log('Vetor Alterado', vetCPF)
        } else {
            vetCPF[i] = parseInt(concatenate.charAt(i))
        }
    }

    for (let j = 0; j < 9; j++) {
        validacao[j] = vetCPF[j] * firsValidation;
        firstAccount += validacao[j];
        newCPF[j] = vetCPF[j]
        console.log(firsValidation)
        firsValidation--
    }

    resto = firstAccount * 10 % 11

    if (resto == 10) {
        newCPF[9] = 0;

        if (newCPF[9] != vetCPF[9]) {
            document.getElementById('resultado').textContent = 'CPF inválido!'
        }
    }

    if (resto == vetCPF[9]) {
        newCPF[9] = resto;
    } else {
        document.getElementById('resultado').textContent = 'CPF válido!'

    }

    for (let j = 0; j < 10; j++) {
        validacao[j] = vetCPF[j] * secondValidation;
        secondAccount += validacao[j];
        console.log(secondValidation)
        secondValidation--
    }

    resto = secondAccount * 10 % 11

    if (resto == 10) {
        newCPF[10] = 0;
    }

    if (resto == vetCPF[10]) {
        newCPF[10] = resto;
        document.getElementById('resultado').textContent = 'CPF válido!'
    } else {
        document.getElementById('resultado').textContent = 'CPF inválido!'
    }

    console.log('vetor CPF', vetCPF)
    console.log('validação', validacao)
    console.log('primeira Conta', firstAccount)
    console.log('Segunda Conta', secondAccount)
    console.log('concatenar', concatenate)
    console.log('resto', resto)
    console.log('Novo CPF', newCPF)
    console.log('String CPF', cpf)
    console.log('remove os .', updateCPF)
    console.log('remove -', secondUpdateCPF)    
}

var el = document.getElementById('Validacao_CPF');
el.onclick = validation;