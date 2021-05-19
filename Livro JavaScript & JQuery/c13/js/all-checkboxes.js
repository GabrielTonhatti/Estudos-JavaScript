(function () {
    var form = document.getElementById('interests');    // Obtém o formulário
    var elements = form.elements;  // Todos os elementos no formulário
    var options = elements.genre;   // Array: caixas de verificação de genero
    var all = document.getElementById('all');   // A caixa de verificação 'all'

    function updateAll() {
        for (var i = 0; i < options.length; i++) {  // Itera pelas caixas
            options[i].checked = all.checked;   // Atualiza propriedade checked
        }
    }

    addEvent(all, 'change', updateAll); // Adiciona ouvintes de evento

    function clearAllOption(e) {
        var target = e.target || e.srcElement;  // Obtém alvo do evento
        if(!target.checked) {   // Se não estiver marcada
            all.checked = false // Desmarca caixa de verificação "All"
        }
    }
    for (var i = 0; i < options.length; i++) {  // Itera pelas caixas
        addEvent(options[i], 'change', clearAllOption); // Adiciona ouvinte de evento
    }


}());