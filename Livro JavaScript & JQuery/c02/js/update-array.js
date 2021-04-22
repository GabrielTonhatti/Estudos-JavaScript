// Cria o array
var colors = ['white',
    'black',
    'custom'];

// Atualiza o terceiro array
colors[2] = 'beige';

// Obtém o elemento com o id colors
var el = document.getElementById('colors');

// Substitui o terceiro item no array
el.textContent = colors[2];