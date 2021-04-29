var elUsername = document.getElementById('username'); // Obtém a entrada username
var elMsg = document.getElementById('feedback') // Obtém o elemento feedback

function checkUsername(minlength) { // Declara a função
    if (elUsername.value.length < minlength) { // Se username foi muito curto
        // Configura a mensagem
        elMsg.innerHTML = 'Username must be ' + minlength + ' characters or more';
    } else {    // Caso contrário
        elMsg.innerHTML = ''; // Limpa a mensagem
    }
}

if (elUsername.addEventListener) { // Se o ouvinte de evento for suportado
    elUsername.addEventListener('blur', function() {    // Quando username perde o foco
        checkUsername(5);   // Chama checkUsername
    }, false);  // Captura na fase de progapagação
} else {    // Caso contrário
    elUsername.attachEvent('onblur', function() {   // IE fallback: onblur
    checkUsername(5);   // Chama checkUsername()
}, false)
}