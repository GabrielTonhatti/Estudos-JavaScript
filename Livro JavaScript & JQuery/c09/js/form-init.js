$(function () {  // Use a entrada para um JQUI datepicker

    $('#arrival').datepicker(); // Usa a entrada de preço

    var $amount = $('#amount'); // Armazena a entrada de preço
    var $range = $('#price-range'); // Aramazena o <div> para a faixa de preço

    $('#price-range').slider({  // Usa essa entrada em um slider
        range: true,    // Se for uma faixa ganha duas alças
        min: 0, // Valor mínimo
        max: 400,   // Valor máximo
        values: [175, 300],  // Valores a usar quando a página carregar
        slide: function (event, ui) {    // Qaundo slider usado, atualiza elemento amount
            $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });
    $amount // Define valores iniciais do elemento
        .val('$' + $range.slider('values', 0)  // Um sinal $ significa faixa menor
        + ' - $' + $range.slider('values', 1));  // Um sinal $ significa faixa maior
});