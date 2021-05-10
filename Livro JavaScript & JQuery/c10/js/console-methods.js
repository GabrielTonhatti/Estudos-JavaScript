console.info('And we\'re off...');  // Info: script em execução

var $form, width, height, area;
$form = $('calculator');

$('form input[type="text"]').on('blur', function() {    // No caso de um evento blur
    console.warn('You entered ', this.value);   // Alerta: o que foi inserido
});

$('#calculator').on('submit', function(e) { // Quando o formulário for enviado
    e.preventDefault();

    width = $('#width').val();
    height = $('#height').val();

    area = width * height;
    console.error(area);    // Erro: exibe area

    $form.append('<p class = "result">' + area + '</p>');
});