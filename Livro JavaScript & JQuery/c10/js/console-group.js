var $form = $('#calculator');

$form.on('submit', function (e) {    // Executa quando submit é pressionado
    e.preventDefault();
    console.log('Clicked submit...');   // Exibe o botão que foi clicado

    var width,height, area;
    width = $('#width').val();
   height = $('#height').val();
    area = width *height;

    console.group('Area calculations'); // Inicia grupo
    console.info('Width ', width);  // Imprime a largura
    console.info('Height',height); // Imprime a altura
    console.log(area);  // Imprime a área
    console.groupEnd(); // Fim do grupo

    $form.append('<p>' + area + '</p>');
});