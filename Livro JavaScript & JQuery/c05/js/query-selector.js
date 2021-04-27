// querySelector() retorna somente a primeira correspondência
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll retorna uma NodeList
// O 2º elemento correspondente (o 3º item da lista ) é selecionado e alterado
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';