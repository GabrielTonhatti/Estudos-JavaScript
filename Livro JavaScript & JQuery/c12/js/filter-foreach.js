$(function() {
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

    // VERIFICA CADA PESSOA E ADICIONA AQUELEAS NO INTERVALO AO ARRAY
    var results = [];   // Array para as pessoas da faixa
    people.forEach(function(person) {
        if (person.rate >= 65 && person.rate <= 90) {   // O preço está na faixa?
            results.push(person);   // Se sim adicionar ao array
        }
    });

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