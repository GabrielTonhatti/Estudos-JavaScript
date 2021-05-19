(function () {
    var form = document.getElementById('newPwd');   // O formulário
    var password = document.getElementById('pwd');  // Entrada de senha
    var submit = document.getElementById('submit'); // Botão Enviar

    var submitted = false;  // O formulaŕio foi enviado?

    submit.disabled = true; // Desativa o botão Enviar
    submit.className = 'disabled';  // Estiliza o botão Enviar

    // Em inout: Verifica se habilita ou não o botão submit
    addEvent(password, 'input', function (e) {    // Na entrada de senha
        var target = e.target || e.srcElement;  // Alvo do evento
        submit.disabled = submitted || !target.value;    // Configura a prop. disable
        // Se o formulário foi entregue ou a senha não possuir valor, configure o CSS para disable
        submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
    });

    // Em submit: desativa o formulário para que ele não possa ser entregue novamente
    addEvent(form, 'submit', function (e) {  // Ao Enviar
        if (submit.disabled || submitted) {  // Se desativado OU enviado
            e.preventDefault(); // Para o envio do formulário
            return; // Para a função de processamento
        }   // Caso contrário, continua...
        submit.disabled = true; // Desativa o botão Enviar
        submitted = true;   // Atualiza var submitted
        submit.className = 'disabled';   // Atualiza estilo

        // Apenas para demonstração: Está desativa o que teria sido enviado & mostrar entrega
        e.preventDefault(); // Impede envio do formulário
        alert('Password is ' + password.value); // Exibe o texto

    })
}());