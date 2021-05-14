(function () {

    var $imgs = $('#gallery img');   // Armazena todas as imagens
    var $buttons = $('#buttons');   // Armazena elemento buttons
    var tagged = {};    // Cria objeto tagged

    $imgs.each(function () {  // Faz um loop pelas imagens e
        var img = this; // Armazena img na variável
        var tags = $(this).data('tags');    // Obtém maracas desse elemento

        if (tags) { // Se o elemento tiver tags
            tags.split(',').forEach(function (tagName) {  // Divide na virgula e
                if (tagged[tagName] == null) {  // Se o objeto não tiver tag
                    tagged[tagName] = [];   // Adiciona array vazio ao objeto
                }
                tagged[tagName].push(img);  // Adiciona a imagem ao array
            });
        }
    });

    // Botões, tratamento de evento e filtros aqui
    $('<button/>', {    // Cria botão vazio
        text: 'Show All',   // Adiciona texto 'show all'
        class: 'active',    // Torna-o Ativo
        click: function() { // Adiciona tratamento de onclick a ele
            $(this) // Obtém o botão clicado
            .addClass('active') // Adiciona a classe active
            .siblings() // Obtém seus irmãos
            .removeClass('active'); // Remove active deles
            $imgs.show();    // Exibe todas as imagens
        }
    }).appendTo($buttons);  // Adiciona aos botões

    $.each(tagged, function(tagName){   // Para cada nome de tag
        $('<button/>',  {   // Cria botão vazio
            text: tagName + ' (' + tagged[tagName].length + ')',   // Adiciona nome da tag
            click: function() { // Adiciona manipulador de clique
                $(this) // O botão clicado
                .addClass('active') // Torna ativo item clicado
                .siblings() // Obtém seus irmãos
                .removeClass('active'); // Remove active deles
                $imgs   // Com todas as imagens
                .hide() // Oculta-as
                .filter(tagged[tagName])    // Localiza aqueles com essa tag
                .show();    // Exibe apenas essas imagens
            }
        }).appendTo($buttons);  // Adiciona aos botões
    });

}());