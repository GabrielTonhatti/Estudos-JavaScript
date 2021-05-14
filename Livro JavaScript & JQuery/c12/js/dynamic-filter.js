(function () {   // array people entra aqui
    
    var people = [
        {
            name: 'Casey',
            rate: 60
        },
        {
            name: 'Camille',
            rate: 80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Nigel',
            rate: 120
        }
    ];

    var rows = [],  // Aray rows
        $min = $('#value-min'), // Mínima entrada de texto
        $max = $('#value-max'), // Máxima entrada de texto
        $table = $('#rates');   // A tabela que exibe os resultados
    function makeRows() {   // Cria linhas da tabela e do array
        people.forEach(function(person) {   // Para cada objeto person em people
            var $row = $('<tr></tr>');  // Cria uma linha para eles
            $row.append( $('<td></td>').text(person.name) );    // Adiciona seu nome
            $row.append( $('<td></td>').text(person.rate) );    // Adiciona seu preço
            rows.push({ // Adiciona objeto a referências entre pessoas e linhas
                person: person, // Referência ao obejto person
                $element: $row  // Referência a linha como seleção jQuery
            });
        });
    }

    function appendRows() { // Adiciona linhas à tabela
        var $tbody = $('<tbody></tbody>');  // Cria o elemento <tbody>
        rows.forEach(function(row) {    // Para cada objeto no array rows
            $tbody.append(row.$element);    // Adiciona o HTML da linha
        });
        $table.append($tbody);  // Adiciona linhas à tabela
    }

    function update(min, max) { // Atualiza o conteúdo da tabela
        rows.forEach(function(row) {    // Para cada linha no array linhas
            if(row.person.rate >= min && row.person.rate <= max) {  // Se no intervlo
                row.$element.show();    // Exibe a linha
            } else {    // Caso contrário
                row.$element.hide();    // Oculte a linha
            }
        });
    }

    function init() {   // Tarefas quando o script é executado pela primeira vez
        $('#slider').noUiSlider({   // Configure o controle deslizante
            range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
            serialization: { to: [$min, $max], resolution: 1 }
        }).change(function() { update($min.val(), $max.val()); });
        makeRows(); // Cria as linhas de tabela e o array linhas
        appendRows();   // Adiciona as linhas à tabela
        update($min.val(), $max.val()); // Atualiza tabela para mostrar jogos
    }
    $(init);    // Chama init() quando o DOM está pronto
}());