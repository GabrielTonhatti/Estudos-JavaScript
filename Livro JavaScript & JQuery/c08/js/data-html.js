var xhr = new XMLHttpRequest(); // Cria o objeto XMLHttpRequest

xhr.onload = function() {   // Quando a resposta carregar
    // A verificação condicional abaixo não funciona localmente - só em um servidor
    if (xhr.status === 200) {   // Se status do servidor for ok
        document.getElementById('content').innerHTML = xhr.responseText;    // Atualiza
    }
};

xhr.open('GET', 'data/data.html', true);    // Prepara a solicitação
xhr.send(null); // Envia a solicitação