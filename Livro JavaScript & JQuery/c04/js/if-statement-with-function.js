var score = 75; // Escore
var msg = ''; // Mensagem

function  congratulate() {
    msg += 'Congratulations! ';
}

if (score >= 50) { // Se score for 50 ou mais
    congratulate()
    msg += 'Proceed to the next round.';
}
var el = document.getElementById('answer');
el.innerHTML = msg;