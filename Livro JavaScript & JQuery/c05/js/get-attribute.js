var firsItem = document.getElementById('one'); // Obtém o 1º item da lista

if (firsItem.hasAttribute('class')) {   // Se for um atributo classe
    var attr = firsItem.getAttribute('class'); // Obtém o atributo
    
    // Adiciona o valor do atributo depois da lista
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p> The First item has a class name: ' + attr + '</p>'
}