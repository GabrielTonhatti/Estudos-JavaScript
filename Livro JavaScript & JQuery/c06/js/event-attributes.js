function checkUsername() { // Declara a função
    var elMsg = document.getElementById('feedback'); // Obtém o el feedback
    var elUsername = document.getElementById('username'); // Obtém o username
    if (elUsername.value.length < 5) {  // Se for muito curto
        elMsg.textContent = 'Username must be 5 characters or more'; // Define msg
    } else {    // Caso contrário
        elMsg.textContent = ''; // Limpa msg
    }

    console.log(elMsg)
}

