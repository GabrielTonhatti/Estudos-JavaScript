(function () {   // Reside em um IIFE

    var $imgs = $('#gallery img');   // Obtém as imagens
    var $search = $('#filter-search');  // Obtém o elemento de entrada
    var cache = []; // Cria um array chamado cache

    $imgs.each(function () {  // Para cada imagem
        cache.push({    // Adiciona um objeto ao array cache
            element: this,  // Esta imagem
            text: this.alt.trim().toLowerCase() // Seu texto alt (em minúsculo e sem espaços iniciais e finais)
        });
    });

    function filter() { // Declara a função filter()
        var query = this.value.trim().toLowerCase();    // Obtém a consulta

        cache.forEach(function (img) {    // Para cada entrada em cache passa imagem
            var index = 0;  // Configura indice para 0
            if (query) {    // Se houver algum texto de consulta
                index = img.text.indexOf(query);    // Verifica se texto da consulta está la
            }
            
            img.element.style.display = index === -1 ? 'none' : ''  // Exibe/Oculta
        });
    }

    if ('oninput' in $search[0]) {  // Se o navegador suportar evento de entrada
        $search.on('input', filter);    // Usa evento de entrada para chamar filter()
    } else {    // Caso contrário
        $search.on('keyup', filter);    // Use evento keyup para chamar filter()
    }

}());