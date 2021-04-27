var hotItems = document.querySelectorAll('li.hot'); // Armazena NodeList no array

if (hotItems.length > 0) {  // Se contiver itens

    for (var i = 0; i < hotItems.length; i++) { // Itera por cada item
        hotItems[i].className = 'cool'; // Muda o valor do atributo classe
    }
}