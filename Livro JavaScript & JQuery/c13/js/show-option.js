(function () {
    var form, options, other, otherText, hide;  // Declara variáveis
    form = document.getElementById('how-heard');    // Obtém o formulário
    options = form.elements.heard;  // Obtém os dados de rádio
    other = document.getElementById('other');   // Botão de rádio other
    otherText = document.getElementById('other-text');  // Entrada de texto other
    otherText.className = 'hide';   // Oculta a entrada de text

    for (var i = [0]; i < options.length; i++) {    // Loop pelos botões de rádio
        addEvent(options[i], 'click', radioChanged);    // Adiciona ouvintes de evento
    }

    function radioChanged() {
        hide = other.checked ? '' : 'hide'; // Other está marcada?
        otherText.className = hide; // Visibilidade da entrada de texto
        if (hide) { // Se a entrada de texto estiver oculta
            otherText.value = '';   // Limpa seu conteúdo
        }
    }

}());