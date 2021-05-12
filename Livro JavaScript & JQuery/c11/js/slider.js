$('.slider').each(function () {  // Para cada controle deslizante
    var $this = $(this);    // Obtém o controle deslizante atual
    var $group = $this.find('.slide-group');    // Obtém o slide-group (contêiner)
    var $slides = $this.find('.slide'); // Obtém jQuery para conter todos os slides
    var buttonArray = [];   // Cria Array para armazenar botões de navegação
    var currentIndex = 0;   // Número de índice do slide atual
    var timeout;    // Usado para armazenar o timer

    // move() - A função para mover os slides entra aqui
    function move(newIndex) {   // Cria o slide do antigo para o novo
        var animateLeft, slideLeft; // Declara variáveis

        advance();  // Quando o slide se move, chama advance() de novo

        // Se o slide atual estiver sendo exibido ou um slide estiver sendo animado, não faz nada
        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        buttonArray[currentIndex].removeClass('active');    // Remove a classe do item
        buttonArray[newIndex].addClass('active');   // Adiciona classe ao novo item

        if (newIndex > currentIndex) {  // Se novo item > atual
            slideLeft = '100%'  // colcoa o novo slide à direita
            animateLeft = '-100%';  // Anima o grupo atual para a esquerda
        } else {    // Caso contrário
            slideLeft = '-100%';    // Coloca o novo slide a esquerda
            animateLeft = '100%';   // Aniam o grupo para a direita
        }
        // Posiciona o novo slide à esquerda (se menor) e à direita (se maior) do atual
        $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

        $group.animate({ left: animateLeft }, function () {   // Anima os slides e
            $slides.eq(currentIndex).css({ display: 'none' });  // Oculta slide ant.
            $slides.eq(newIndex).css({ left: 0 });  // Define a posição do grupo de slides
            $group.css( {left: 0} );    // Define a posição do grupo de slides
            currentIndex = newIndex;    // Configura currentIndex como nova imagem
        })
    }

    function advance() {    // Define um timer entre os slides
        clearTimeout(timeout);  // Limpar timer armazenado no timeout
        // Iniciar timer para executar uma função anônima a cada 4 segundos
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {  // Se não o últmo slide
                move(currentIndex + 1);   // Move para o próximo slide
            } else {    // Caso contrário
                move(0);    // Move para o próximo sldie
            }
        }, 4000);   // Milissegundos que timer vai esperar
    }

    $.each($slides, function (index) {
        // Cria um elemento button para o botão
        var $button = $('<button tupe = "button" class = "slide-btn">&bull;</button>');
        if (index === currentIndex) {    // Se o índice é o item atual
            $button.addClass('active'); // Adiciona a classe ativa
        }
        $button.on('click', function () {    // Cria rotina de tratamento para o botão
            move(index);    // Ela chama a funcção move()
        }).appendTo('.slide-buttons');  // Adiciona ao armazenador de botões
        buttonArray.push($button);  // Adiciona-o ao array de botões
    });

    advance();

});

