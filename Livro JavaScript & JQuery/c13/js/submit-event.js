(function(){
    var form = document.getElementById('login');    // Obtém o elemento de formulário

    addEvent(form, 'submit', function(e){   // Quando o usuário envia o formulario
        e.preventDefault(); // Impede de ser enviado
        var elements = this.elements;   // Obtém todos os elementos de formulário
        var username = elements.username.value; // Seleciona nome de usuário informado
        var msg = 'Welcome ' + username;    // Cria mensagem de boas vindas
        document.getElementById('main').textContent = msg; // Imprime mensagem de boas vindas
    });
}());