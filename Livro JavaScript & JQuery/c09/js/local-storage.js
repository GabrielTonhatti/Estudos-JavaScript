if (window.localstorage) {

    var txtUsername = document.getElementById('username');  // Obtém elemento
    var txtAnswer = document.getElementById('answer');  // do forumulário

    txtUsername.value = localStorage.getItem('username');   // Elementos preenchidos
    txtAnswer.value = localStorage.getItem('answer');   // por dados localStorage

    txtUsername.addEventListener('input', function() {  // Dados salvos
        localStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function() {    // Dados salvos
        localStorage.setItem('answer', txtAnswer.value);
    })
} 