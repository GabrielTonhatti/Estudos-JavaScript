$('nav a').on('click', function(e) {    // O usuário clica no nav link
    e.preventDefault(); // Para de carregar o novo link
    var url = this.href;    // Obtém o valor de href

    $('nav a.current').removeClass('current');  // Limpa o indicador atual
    $(this).addClass('current');    // Novo indicador atual

    $('#container').remove();   // Remove conteúdo antigo
    $('#content').load(url + ' #container').hide().fadeIn('slow');  // Novo conteúdo
});