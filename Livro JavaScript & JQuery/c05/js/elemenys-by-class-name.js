var elements = document.getElementsByClassName('hot'); // Localiza novos itens hot

if (elements.length > 2) { // se 3 ou mais for encontrado

    var el = elements[2];   // Seleciona o 3º elemento na Nodelist
    el.className = 'cool'; // Muda o valor de seu atributo class
}