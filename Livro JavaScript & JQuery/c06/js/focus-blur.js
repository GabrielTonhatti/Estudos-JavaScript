function checkUsername(){   // Declara a função
    var username = el.value;    //Armazena usernma na variável
    if(username.length < 5) {   // Se username < 5 caracteres
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';  // Atualiza msg
    }   else {  // Caso contrário
        elMsg.textContent = ''; // Limpa msg
    }
}

function tipUsername() {    // Declara a função
    elMsg.className = 'tip';    // Muda class para msg
    elMsg.innerHTML = 'username must be at least 5 characters'; // Adiciona msg
}

var el = document.getElementById('username');   // Entrada username
var elMsg = document.getElementById('feedback');    // Elemento para armazenar msg

// Quando a entrada username ganha/perde foco, chama as funções acima:
el.addEventListener('focus', tipUsername, false);   // focus chama tipUsername()
el.addEventListener('blur', checkUsername, false);  // blur chama checkUsername()