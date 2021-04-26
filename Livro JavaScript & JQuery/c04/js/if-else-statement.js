var pass = 50; // Marca de aprovação
var score = 75; // Escore atual
var msg; // Mensagem

// Seleciona mensagem de acordo com o escore
if (score >= pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;