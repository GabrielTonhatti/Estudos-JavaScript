var score1 = 90; // Escore da rodada 1
var score2 = 95; // Escore da rodada 2
var highScore1 = 75; // Escore alto da rodada 1
var highScore2 = 95; // Escore alto da rodada 2

// verifica se o escore é mais alto que os escores altos atuais
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Escreva a mensagem n página
var el = document.getElementById('answer');
el.textContent = 'New high score: ' + comparison;
