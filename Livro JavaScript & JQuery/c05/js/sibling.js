// Selecione o ponto de oartuda e encontra seus irmãos
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Altera o valor dos atributos class dos irmãos
prevItem.className = 'complete';
nextItem.className = 'cool';