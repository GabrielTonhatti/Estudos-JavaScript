var elList, addLink, newEl, newText, counter, listItems; // Declara variáveis

elList = document.getElementById('list');   // Obtém a lista
addLink = document.querySelector('a'); // obtém o botão add item
counter = document.getElementById('counter');    // Obtém contador de item

function addItem(e) { // Declara a função
    e.preventDefault(); // impede ação do link
    newEl = document.createElement('li');   // Novo elemento <li>
    newText = document.createTextNode('New list item'); // Novo nó de texto
    newEl.appendChild(newText); // Adiciona o texto a <li>
    elList.appendChild(newEl);  // Adiciona <li> a lista
}

function updateCount() {    // Declara a função
    listItems = elList.getElementsByTagName('li').length;   // Obtémm total de <li>
    counter.innerHTML = listItems;  // Atualiza o contador
}

addLink.addEventListener('click', addItem, false);  // Clique no botão
elList.addEventListener('DOMNodeInserted', updateCount, false); // Dom atualizado