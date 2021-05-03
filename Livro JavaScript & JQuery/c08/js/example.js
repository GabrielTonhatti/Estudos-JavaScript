$(function () {  // Quando o DOM estiver pronto

    var times;  // Declara a variável global
    $.ajax({    // Configura a solicitação
        beforeSend: function (xhr) { // Antes de solicitar dados
            if (xhr.overrideMimeType) { // Se suportado
                xhr.overrideMimeType('application/json');   // Configura o MIME para impedir erros
            }
        }
    });

    // FUNCÇÃO QUE COLETA DADOS DO ARQUIVO JSON
    function loadTimetable() {  // Decalra a função
        $.getJSON('data/example.json')  // Tenta coletar dados JSON
            .done(function (data) {  // Se Bem-sucedido
                times = data;   // Aramzena-os em uma variável
            }).fail(function () {   // Se ocorrer um problema: exibe mensagem
                $('#event').html('Sorry! We could not load the timetable at the moment');
            });
    }

    loadTimetable();    // Chama a função

    // CLICK ON THE EVENT TO LOAD A TIMETABLE
    $('#content').on('click', '#event a', function (e) { // Usuário clica em place

        e.preventDefault(); // Impede que a pg carregue
        var loc = this.id.toUpperCase();    // Obtém o valor do atributo id

        var newContent = '';    // Monta a tabela de horários
        for (var i = 0; i < times[loc].length; i++) {    // Itera pelas sessões
            newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
            newContent += '<a href="descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-') + '">';
            newContent += times[loc][i].title + '</a></li>';
        }

        $('#sessions').html('<ul>' + newContent + '</ul>');   // Exibe o horário

        $('#event a.current').removeClass('current');   // Atualiza o link selecionado
        $(this).addClass('current');

        $('#details').text(''); // Limpa a terceira coluna
    });

    // CLIQUE EM UMA SESSÃO PARA CARREGAR A DESCRIÇÃO
    $('#content').on('click', '#sessions li a', function (e) {   // Clique em session
        e.preventDefault(); // Impede de carregar
        var fragment = this.href;   // Title está em  href

        fragment = fragment.replace('#', ' #'); // Insere espaço após #
        $('#details').load(fragment);   // Para carregar info

        $('#sessions a.current').removeClass('current');    // Atualiza selecionado
        $(this).addClass('current');
    });

    // CLIQUE NA NAVEGÃO PRIMÁRIA
    $('nav a').on('click', function (e) {    // Clique em nav
        e.preventDefault(); // Impede de carregar
        var url = this.href;    // Obtém o URl a carregar

        $('nav a.current').removeClass('current');  // Atualiz nav
        $(this).addClass('current');

        $('#container').remove();   // Remove antigo
        $('#content').load(url + ' #container').hide().fadeIn('slow');  // Insere novo

    });

});