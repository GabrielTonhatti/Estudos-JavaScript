$('nav a').on('click', function (e) {
    e.preventDefault();
    var url = this.href;    // URL a carregar
    var $content = $('#content');   // Armazena em cache a seleção

    $('nav a.current').removeClass('current');  // Atualiza os linsk
    $(this).addClass('current');
    $('#container').remove();   // Remove o conteúdo

    $.ajax({
        type: "GET",   // GET ou POST
        url: url,   // Caminho para o arquivo
        timeout: 2000,  // Tempo de espera
        beforeSend: function () {    // Antes do Ajax
            $content.append('<div id="load">Loading</div>');    // Carrega mensagem
        },
        complete: function () {  // Depois de terminar
            $('#load').remove(); // Limpa a mensagem
        },
        success: function (data) {    // Exibe o conteúdo
            $content.html($(data).find('#container')).hide().fadeIn(400);
        },
        error: function () {  // Exibe a mensagem de erro
            $content.html('<div class = "container"> Please try again soon.</div>');
        }
    });
});