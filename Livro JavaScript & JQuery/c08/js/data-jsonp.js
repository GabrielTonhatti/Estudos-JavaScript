function showEvents(data) { // Callback quando o json carrega
    var newContent = '';    // Variável para armazena HTML

    // CONTROI A STRING COM NOVO CONTEÚDO (também pode usar manipulação DOM)
    for (var i = 0; i < data.events.length; i++) {  // Loop pelos dados
        newContent += '<div class="event">';
        newContent += '<img src = "' + data.events[i].map + '" ';
        newContent += 'alt = "' + data.events[i].location + '"/>';
        newContent += '<p><b>' + data.events[i].location + '</b><br>'
        newContent += data.events[i].date + '</p>';
        newContent += '</div>';
    }


    // Atualzia a página com novo conteúdo
    document.getElementById('content').innerHTML = newContent;
}
