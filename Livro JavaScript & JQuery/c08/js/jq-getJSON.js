$('#exchangerates').append('<div id = "rates"></div><div id = "reload"></div>');

function loadRates() {
    $.getJSON('data/rates.json')
        .done(function (data) {   // O servidor retorna dados
            var d = new Date(); // Cria o objeto date
            var hrs = d.getHours(); // Obtém a hora
            var mins = d.getMinutes();  // Obtém os minutos
            var msg = '<h2> Exchange Rates</h2>';   // Inicia a mensagem
            $.each(data, function (key, val) {   // Adiciona cada taxa
                msg += '<div class = "' + key + '">' + key + ': ' + val + '</div>';
            });
            msg += '<br> Last update: ' + hrs + ':' + mins + '<br>';    // Exibe a hora da atualização
            $('#rates').html(msg);  // Adiciona taxas à página
        }).fail(function () {    // Há um erro
            $('#rates').text('Sorry, we cannot load rates.');  // Exibe msg de erro
        }).always(function () {  // Sempre executa
            var reload = '<a id="refresh" href="#">';    // Adiciona link de atualização
            reload += '<img src = "img/refresh.png" alt = "refresh" /></a>';
            $('#reload').html(reload);  // Adiciona link de atualização
            $('#refresh').on('click', function (e) { // Adiciona handler de click
                e.preventDefault(); // Para o link
                loadRates();    // Chama loadRates
            });
        });
}

loadRates();    // Chama loadRates();