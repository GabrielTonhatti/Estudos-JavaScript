var elemets = document.getElementsByTagName('li'); // Localiza elementos <li>

if (elemets.length > 0) { // Se 1 ou mais forem encontrados

    var el = elemets[0];
    el.className = 'cool';

}