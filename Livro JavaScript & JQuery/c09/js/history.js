$(function () {  // DOM foi carregado
    function loadContent(url) { // Carrega novo conteúdo na página
        $('#content').load(url + ' #content').hide().fadeIn('slow');
    }

    $('nav a').on('click', function (e) {    // Tratamento de clique
        e.preventDefault(); // Impede link de carregar nova página
        var href = this.href;   // Obtém atributo href do link
        var $this = $(this);    // Armazena link do obejto jQuery
        $('a').removeClass('current');  // Atualiza link atual
        loadContent(href);  // Chama a função loadContent
        history.pushState('', $this.text, href);    // Atualiza o histórico
    });

    window.onpopstate = function () {   // Trata botões volar/avançar
        var path = location.pathname;   // Obtém o caminho do arquivo
        var page = path.substring(location.pathname.lastIndexOf('/') + 1);
        $('a').removeClass('current');  // Remove o atual de links
        $('[href ="' + page + '"]').addClass('current');    // Atualiza link atual
    };
});