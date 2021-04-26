var scores = [24, 32, 17]; // Array de escores
var arrayLength = scores.length;    // Items in array
var roundNumber = 0;    // Rodada atual
var msg = '';   // Mensagem
var i;  // Contador

// Itera pelos itens no array
for (i = 0; i < arrayLength; i++){

    // Arrays são baseados em zero (então 0 é a rodada 1)
    // Adiciona 1 a rodada atual
    roundNumber = (i + 1);

    // Escreve a rodada atual na mensagem
    msg += 'Round ' + roundNumber + ': ';

    // Obtém o escore do array de escores
    msg += scores[i] + '<br/>';
}

document.getElementById('answer').innerHTML = msg;