function getTarget(e) { // Declara a função
    if (!e) {   // Se não houver objeto event
        e = window.event;   // Usa objeto event IE antigo
    }
    return e.target || e.srcElement;    // Obtém o valor alvo
}

function itemDone(e) { // Declara a função
    // Remove item da lista
    var target, elParent, elGrandparent;    // Decalra variáveis
    target = getTarget(e);  // Obtém o link do item clicado
    elParent = target.parentNode;   // Obtém seu item de lista
    elGrandparent = target.parentNode.parentNode; // Obtém sua lista
    elGrandparent.removeChild(elParent);    // Remove o item da lista

    // Impede que o link leve o usuário para outro lugar
    if (e.preventDefault) { // Se o preventDefault() funcionar
        e.preventDefault(); // Use preventeDefault()
    } else {    // Caso contrário
        e.returnValue = false;  // Use versão antiga do IE

    }
}

// Configura ouvintes de evento para chamar itemDone() on click
var el = document.getElementById('shoppingList'); // Obtém a lista de compras
if(el.addEventListener) {   // Se os ouvintes funcionarem
    el.addEventListener('click', function(e) {  // Adiciona ouvinte de on click
        itemDone(e);    // Chama itemDone()
    }, false);  // Usa a fase de propagação para fluir
} else {    // Caso contrário
    el.attachEvent('onclick', function(e){  // Usa antigo modelo IE: onclick
        itemDone(e);    // Chama itemDone()
    });
}