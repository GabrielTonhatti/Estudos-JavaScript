/* Este script exibe uma mensagem para o usuário de acordo com a hora atual.
Este é um exemplo do livro JAvaScript & JQuery */

var today = new Date(); // Cria um novo objeto Date
var hourNow = today.getHours(); // Verifica a hora atual
var greeting;

// Exibe a mensagem apropriada de acordo com a hora atual
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
