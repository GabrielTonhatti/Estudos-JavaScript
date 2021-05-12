var modal = (function () {   // Declara objeto modal

    var $window = $(window);
    var $modal = $('<div class = "modal"/>');   // Cria marcação para modal
    var $content = $('<div class = "modal-content"/>');
    var $close = $('<button role = "button" class="modal-close">close</button>');

    $modal.append($content, $close);    // Adiciona botão fechar modal

    $close.on('click', function (e) {    // Se o usuário clicar no próximo
        e.preventDefault(); // Impede comportamento do link
        modal.close();  // Fecha a janela modal
    });

    return {    // Adiciona código para modal
        center: function () {    // Configura método center()
            // Calcula distância do canto superior esquerdo da janela ao centro de modal
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({    //Configura CSS para o modal
                top: top + $window.scrollTop(), // Centraliza verticalmente
                left: left + $window.scrollLeft()   // Centraliza horizontalmente
            });
        },
        open: function(settings) {  // configura método open();
            $content.empty().append(settings.content);  // Configura novo conteúdo de modal

            $modal.css({    // Configura dimensões de modal
                width: settings.width || 'auto', // Configura largura
                height: settings.height || 'auto',   // Configura altura
            }).appendTo('body');    // Adiciona o conteúdo à página

            modal.center(); // Chama método center()
            $(window).on('resize', modal.center);   //  Chama-o se a janela for redimensionada
        },
        close: function() {     // Configura método close()
            $content.empty();   // Remove conteúdo de modal
            $modal.detach();    // Remove moda da página
            $(window).off('resize', modal.center);  // Remove rotina de tratamento de evento
        }
    };

}());