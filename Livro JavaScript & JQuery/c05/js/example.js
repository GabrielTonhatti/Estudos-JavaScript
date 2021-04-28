// Adiciona itens ao início e ao fim da lista
var list = document.getElementsByTagName('ul')[0]; // obtém o elemento <ul>

// Adiciona um novo item ao fim da lista
var newItemLast = document.createElement('li'); // Cria o elemento
var newTextLast = document.createTextNode('cream'); // Cria o nó de texto
newItemLast.appendChild(newTextLast); // Adiciona o nó de texto ao elemento
list.appendChild(newItemLast); // Adiciona o elemento ao fim da lista

// Adiciona um novo item ao início da lista
var newItemFirst = document.createElement('li'); // Cria o elemento
var newTextFirst = document.createTextNode('kale'); // Cria o nó de texto
newItemFirst.appendChild(newTextFirst); // Adiciona o nó de texto ao elemento
list.insertBefore(newItemFirst, list.firstChild); // Adiciona o elemento à lista
var listItems = document.querySelectorAll('li'); // Todos os elementos <li>

// Adiciona a classe cool a todos os itens
var i;  // Variável contadora
for (i = 0; i < listItems.length; i++) { // itera pelos elementos
    listItems[i].className = 'cool'; // Muda a classe para cool
}

// Adiciona o número de itens da lista ao titulo
var heading = document.querySelector('h2'); // Elemento h2
var headingText = heading.firstChild.nodeValue; // Texto do elemento h2
var totalItems = listItems.length; // No de elementos <li>
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Conteúdo
heading.innerHTML = newHeading; // Atualiza h2