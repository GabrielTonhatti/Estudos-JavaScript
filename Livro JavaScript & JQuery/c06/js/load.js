function setup () {     // Declara a função
    var textInput;  // Cria variável
    textInput = document.getElementById('username');    // Obtém a entrada username
    textInput.focus();  // Dá o foco para username
}
// Depois que a página é carregada,
window.addEventListener('load', setup, false);  // Chama setup()