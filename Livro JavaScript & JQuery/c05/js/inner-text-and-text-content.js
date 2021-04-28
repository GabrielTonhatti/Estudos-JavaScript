var firstItem = document.getElementById('one'); // Localiza o 1º item na lista
var showTextContent = firstItem.textContent; // Obtém o valor de textContent
var showInnerText = firstItem.innerText; // Obtém o valor de innerText

// Exibe o conteúdo dessas duas propriedades no final da lista
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>InnerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread'; // Atualiza o 1º item na lista