$(function () {

    // Configuração
    var $list, $newItemForm, $newItemButton;
    var item = '';  // Item é uma string vazia
    $list = $('ul');    // Armazena em cache a lista não ordenada
    $newItemForm = $('#newItemForm');   // Armazena em cache o formulário para adicionar novos itens
    $newItemButton = $('#newItemButton');   // Armazena em cache botão para exibir o formulário

    $('li').hide().each(function (index) {   // Oculta itens da lista
        $(this).delay(450 * index).fadeIn(1600);    // Então exibe gradualmente
    });

    // Contador de itens
    function updateCount() {    // Declara a função
        var items = $('li[class!=complete]').length;    // Número de itens na lista
        $('#counter').text(items);  // Adicionado ao contador   
    }
    updateCount();

    // configura o formulário para novos itens
    $newItemButton.show();  // Exibe o botão
    $newItemForm.hide();    // Oculta o formulário
    $('#showForm').on('click', function () { // Quando o novo item é clicado
        $newItemButton.hide();  // Oculta o botão
        $newItemForm.show();    // Exibe o formulário
    });

    // Adicionando um novo item de lista
    $newItemForm.on('submit', function (e) {     // Quando um novo item é enviado
        e.preventDefault(); // Impede que o form seja enviado
        var text = $('input:text').val();   // Insere item no fim da lista
        $list.append('<li>' + text + '</li>');  // Obtém o valor da entrada de texto
        $('input:text').val('');  // Limpa a entrada text
        updateCount();  // Atualiza o contador
    });

    // Tratamento de Clique - Usa delegação no elemento <ul>
    $list.on('click', 'li', function () {
        var $this = $(this);    // Armazena me cache o elemento em um objeto jQuery
        var complete = $this.hasClass('complete');  // O item está completo?

        if (complete === true) {    // Verifica se o item está completo
            $this.animate({ // Se sim, anima opacity + padding
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function () {   // Usa callback quando a animação está completa
                $this.remove(); // Então remove completamente este item
            });
        } else {    // Caso contrário, indica se está completo
            item = $this.text();    // Obtém o texto da lista de itens
            $this.remove();
            $list   // Voltando aoo fim da lista como completa
                .append('<li class = \"complete\">' + item + '</li>')
                .hide().fadeIn(300);    // Oculta-o para que possa ser exibido
            updateCount();  // Atualiza o contador
        }   // Fim da opção else
    }); // Fim da rotina de tratamento de evento

});