// Seleciona o ponto de partida e encontra seus irmãos
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Altera o valor dos atributos class e dos irmãos
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');