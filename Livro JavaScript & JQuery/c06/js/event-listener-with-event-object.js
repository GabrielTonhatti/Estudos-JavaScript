function checLength(e, minLength) {   // Declara a função
    var el, elMsg;  // Declara variáveis
    if (!e) {   // Se o objeto event não existir
        e = window.event;   // Usa o fallback do IE
    }
    el = e.target || e.srcElement;  // Obtém o alvo do evento
    elMsg = el.nextSibling; // Obtém seu proximo irmão

    if (el.value.lenth < minLength) {    // Se for muito curto, define msg
        elMsg.InnerHtml = 'Username must be ' + minLength + ' characters or more'
    } else {    // Caso contrário
        elMsg.InnerHtml = '';
    }
}

var elUsername = document.getElementById('username'); // Obtém a entrada username
if (elUsername.addEventListener) { // Se o ouvinte de evento for suportado
    elUsername.addEventListener('blur', function (e) {    // No caso de um evento blur
        checLength(e, 5);    // Chama checkUsername()
    }, false);  // Captura na fase de propagação
} else { // Caso contrário
    elUsername.attachEvent('onblur', function (e) {     // Fallback do IE onblur
        checLength(e, 5);;    // Chama checkUsername()
    });
}