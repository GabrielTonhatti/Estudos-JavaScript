function checkUsername() { // Declara a função
    var elMsg = document.getElementById('feedback'); // Obtém o elemento feedback
    if(this.value.length < 5) { // Se for muito curto
        elMsg.textContent = 'Username must be 5 characteres or more;' // Define msg
    } else {    // Caso contrario
        elMsg.textContent = ''; // Limpa msg
    }
}

var elUsername = document.getElementById('username'); // Obtém entrada do usuário
elUsername.onblur = checkUsername; // Ao perder o foco chama a checkUsername()