$(function () {
    // DADOS SOBRE PESSOAS ENTRAM AQUI (mostrado na página oposta)

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

    // A função atua como um filtro
    function priceRange(person) {   // Declara priceRange()
        return (person.rate >= 65) && (person.rate <= 90);  // Se na faixa, retorta true
    }

    // Filtra o array people & Adiciona correspondências ao array results
    var results = [];   // Array para as pessoas correspondentes
    results = people.filter(priceRange);    // filter() chama priceRange()

    // CÓDIGO DE FILTRAGEM (ver p. 537) ENTRA AQUI - CRIA UM NOVO ARRAY CHAMADO results
    // ITERA PELOS RESULTADOS DO ARRAY E ADICIONA À TABELA DE RESULTADADO AS PESSOAS CORERESPONDENTES
    var $tableBody = $('<tbody></tbody>');  // Novo conteúdo jQuery
    for (var i = 0; i < results.length; i++) {
        var person = results[i];    // Aramzena pessoa atual
        var $row = $('<tr></tr>');   // Cria uma linha para eles
        $row.append($('<td></td>').text(person.name));  // Adiciona seu nome
        $row.append($('<td></td>').text(person.rate));  // Adiciona seu preço
        $tableBody.append($row);    // Adiciona linha para o novo conteúdo
    }

    // Adiciona o novo conteúdo após o corpo da página
    $('thead').after($tableBody);   // Adciona tbody depois do thead
})