function checkUsername() {  // Declara a função
    var elMsg = document.getElementById('feedback');    // Obtém o el feedback
    if(this.value.length < 5){ // Se for muito curto
        elMsg.textContent = 'Username must be 5 characters or more'; // Define a msg
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username'); // Obtém entrada username
// Ao perder o foco, chama checkUsername()
elUsername.addEventListener('blur', checkUsername, false);