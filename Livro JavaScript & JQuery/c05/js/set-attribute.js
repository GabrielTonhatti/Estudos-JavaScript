var firsItem = document.getElementById('one'); // Obtém o 1º item
firsItem.className = 'complete';    // Muda seu atributo class

var fourthItem = document.getElementsByTagName('li').item(3); // Obtém o 4º item
fourthItem.setAttribute('class', 'cool') // Adiciona um atributo a ele