var el; // Declara variáveis

function charCount(e) {  // Declara função
    var textEntered, charDisplay,counter, lastkey;  // Declara variáveis
    textEntered =  document.getElementById('message').value; // Texto do usuário
    charDisplay = document.getElementById('charactersLeft');    // Contador
    counter = (180 - (textEntered.length));     // No de chars restantes
    charDisplay.textContent = counter;  // Exive chars restantes
    lastkey = document.getElementById('lastkey');   // Obtém última tecla usada
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;  // Cria msg
}

el = document.getElementById('message');    // Obtém elemento msg
el.addEventListener('keypress', charCount, false);  // Evento keypress