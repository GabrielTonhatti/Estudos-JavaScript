var request;    // Última ímagem a ser solicitada
var $current;   // Imagem atualmente sendo exibida
var cache = {}; //  // Armazena o objeto em cache
var $frame = $('#photo-viewer');    // Contêiner para a imagem
var $thumbs = $('.thumb');  // Contêiner    para a imagem

function crossfade($img) {  // Função para o fading entre as imagens
                            // Passa a nova imagem como parâmetro
    if ($current) { // Se não houver atualmente uma imagem sendo exibida
        $current.stop().fadeOut('slow');    // Para a animação e faz um fade-ou
    }

    $img.css({  // Define as margens de CSS para a imagem
        marginLeft: -$img.width() / 2,  // Margem negativa = largura da imagem / 2
        marginTop: -$img.height() / 2   // Margem negativa = altura da imagem / 2 
    });

    $img.stop().fadeTo('slow', 1);  // Para animação na nova imagem & fade-in

    $current = $img;    // Nova imagem torna-se imagem atual
}

$(document).on('click', '.thumb', function(e) { // Quando uma miniatura é clicada
    var $img;   // Cria variável local chamada $img
    var src = this.href;    // Armazena caminho da imagem
    request = src;  // Armazena caminho da imagem novamente sob solicitação

    e.preventDefault(); // Para comportamento padrão de link

    $thumbs.removeClass('active');  // Remove active de todas as miniaturas
    $(this).addClass('active'); // Adiciona active à miniatura clicada

    if (cache.hasOwnProperty(src)) {    // Se o cache contiver essa imagem
        if (cache[src].isLoading === false) {   // E se isLoading for false
            crossfade(cache[src].$img); // Chama a funçãp crossfade()
        }
    } else {    // Caso contrário, ela não está no cache
        $img = $('<img/>'); // Armazena elemento <img/> vazio em $img
        cache[src] = {  // Armazena essa imagem no cache
            $img: $img, // Adiciona o caminho da imagem
            isLoading: true // Configura propriedade isLoading como true
        };
        // As próximas linhas serão executadas quando a imagem tiver sido carregada, mas são preparadas primeiro
        $img.on('load', function() {    // Quando a imagem carregar
            $img.hide();    // Oculta-a
            // Remove a classe is-loading da nova imagem de frame $ append para ela
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;   // Atualiza isLoading no cache
            // Se a imagem pedida ainda for recente então
            if(request === src) {
                crossfade($img);    // Chama a função crossfade()
            }                       // Resolve problema de carregamento assincrono
        });

        $frame.addClass('is-loading');  // Adiciona a classe is-loading ao frame

        $img.attr({ // Configura atributos no elemento <img>
            'src': src, // Adiciona atributo src para carregar a imagem
            'alt': this.title || ''    // Adiciona titulo, se um foi dado no link
        });
    }

});

// A última linha é executada uma vez (quando o resto do script foi carregado) para mostrar a primeira imagem
$('.thumb').eq(0).click();  // Simula clique na primeira miniatura