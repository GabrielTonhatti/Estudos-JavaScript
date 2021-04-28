var itemTwo = document.getElementById('two'); // Obtém o 2º item da lista

var elText = itemTwo.firstChild.nodeValue; // Otém seu conteúdo de texto

elText = elText.replace('pine nuts', 'kale'); // Muda pine nuts para kale

itemTwo.firstChild.nodeValue = elText; // Atualiza o item de lista