var compare = { // Declara objeto compare
    name: function (a, b) {  // Adiciona um método chamado name()
        a = a.replace(/^the /i, '');   // Remove The do início do parâmetro
        b = b.replace(/^the /i, '');   // Remove The do início do parâmetro

        if (a < b) {    // Se o valor a for menor que o valor b
            return -1;  // Retorna -1
        } else {    // Caso contrário
            return a > b ? 1 : 0;   // Se a for maior que b retorna 1 ou se forem os mesmos, retorna 0
        }

    },
    duration: function (a, b) {     // Adiciona o método duration()
        a = a.split(':');   // Divide o tempo na vírgula
        b = b.split(':');   // Divide o tempo na vŕigula

        a = Number(a[0]) * 60 + Number(a[1]);   // Converte o tempo em segundos
        b = Number(b[0]) * 60 + Number(b[1]);   // Converte o tempo em segundos

        return a - b;   // Retorna a menos b
    },
    date: function (a, b) {  // Adiciona um método chamado date()
        a = new Date(a);    // Novo objeto Date para armazenar a data
        b = new Date(b);    // Novo onjeto Date para armazenar a data

        return a - b;   // Retorna a menos b
    }
};

$('.sortable').each(function () {
    var $table = $(this);     // Esta tabela ordenável
    var $tbody = $table.find('tbody');  // Armazena corpo da tabela
    var $controls = $table.find('th');  // Armazena cabeçalhos da tabela
    var rows = $tbody.find('tr').toArray(); // Armazena array contendo linhas

    $controls.on('click', function () {  // Quando o usuário clica em um cabeçalho
        var $header = $(this)   // Obtém o cabeçalho
        var order = $header.data('sort');   // Obtém o valor do atributo data-sort
        var column; // Declara variável chamada column

        // Se o item selecionado tiver classe ascendente ou descendente, inverte seu conteúdo
        if ($header.is('.ascending') || $header.is('.descending')) {
            $header.toggleClass('ascending descending');    // Alternar para outra classe
            $tbody.append(rows.reverse());  // Inverte o array
        } else {    // Caso contrário, realiza uma ordenação
            $header.addClass('ascending');  // Adiciona classe ao cabeçalho
            // Remove asc ou desc de todos os outros cabeçalhos
            $header.siblings().removeClass('ascending descending');

            if (compare.hasOwnProperty(order)) {    // Se o objeto tiver método
                column = $controls.index(this); // Procura o no. de índice da coluna

                rows.sort(function (a, b) {   // Chama sort() no array de linhas
                    a = $(a).find('td').eq(column).text();  // Obtém texto da col na linha a
                    b = $(b).find('td').eq(column).text();  /// Obtém texto da col na linha v
                    return compare[order](a, b); // Chama método compare
                });

                $tbody.append(rows)
            }
        }
    });

});