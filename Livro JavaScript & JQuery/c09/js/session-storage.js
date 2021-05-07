if (window.sessionstorage) {

    var txtUsername = document.getElementById('username');  // Obtém elemento
    var txtAnswer = document.getElementById('answer');  // do forumulário

    txtUsername.value = sessionStorage.getItem('username');   // Elementos preenchidos
    txtAnswer.value = sessionStorage.getItem('answer');   // por dados sessionStorage

    txtUsername.addEventListener('input', function() {  // Salva dados
        sessionStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function() {    // Salva dados
        sessionStorage.setItem('answer', txtAnswer.value);
    })
} 