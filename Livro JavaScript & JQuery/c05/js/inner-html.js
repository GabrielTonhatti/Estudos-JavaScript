// Armazena o primeiro item da lista em uma variável
var firstItem = document.getElementById('one');

// Obtém o conteúdo do primeiro item da lista
var itemContent = firstItem.innerHTML;

// Atualiza conteúdo do primeiro item da lista de modo que eles se torne um link
firstItem.innerHTML = '<a href =\ "http://example.org\">' + itemContent + '</a>';