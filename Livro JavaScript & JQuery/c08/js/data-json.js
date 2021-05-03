var xhr = new XMLHttpRequest(); // Cria o objeto XMLHttpRequest

xhr.onload = function () {  // Quando readystate muda
    if (xhr.status === 200) {    // Se o stauts do servidor for ok
        responseObject = JSON.parse(xhr.responseText);

        // Constroi a string com novo conteúdo ( também pode usar manipulação DOM)
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {    // Itera pelo objeto
            newContent += '<div class = "event">';
            newContent += '<img src = "' + responseObject.events[i].map + '" ';
            newContent += 'alt = "' + responseObject.events[i].location + '" />';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }

        // Atualiza a página com o novo conteúdo
        document.getElementById('content').innerHTML = newContent;

    }
}

xhr.open('GET', 'data/data.json', true);    // Prepara a solicitação
xhr.send(null); // Envia a solicitação