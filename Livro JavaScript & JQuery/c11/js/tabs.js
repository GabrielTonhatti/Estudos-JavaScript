$('.tab-list').each(function() {    // Localiza listas de abas
    var $this = $(this);    // Armazena essa lista
    var $tab = $this.find('li.active'); // Obtém item de lista ativo
    var $link = $tab.find('a'); // Obtém link da aba ativa
    var $panel = $($link.attr('href')); // Obtém painel ativo

    $this.on('click', '.tab-control', function(e) { // Ao clicar em uma aba
        e.preventDefault(); // Impede comportamento do link
        var $link = $(this);    // Armazena o link atual
        var id = this.hash; // Obtém href da guia clicado

        if (id && !$link.is('.active')) {   // Se não estiver atualmente ativo
            $panel.removeClass('active');   // Torna painel inativo
            $tab.removeClass('active'); // Torna guia inativa

            $panel = $(id).addClass('active');  // Torna novo painel ativo
            $tab = $link.parent().addClass('active');   // Torna nova aba ativa
        }
    });
});