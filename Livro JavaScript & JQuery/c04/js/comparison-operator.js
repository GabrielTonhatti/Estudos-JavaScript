var pass = 50;  // Marca de aprovação
var score = 90; // Escore

// Verifica se o usuário foi aprovado
var hasPassed = score >= pass;

// Escreve a mensagem na página
var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;