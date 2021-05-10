console.log('And we\'re off...')    // Indica que o script está sendo executado
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {    // Quando entrada perde foco
    console.log('You entered ', this.value);    // Imprime o valor no console
});

$('#calculator').on('submit', function(e) { // Quando o usuário clica em enviar
    e.preventDefault(); // Impede que o formulário seja enviado
    console.log('Clicked submit...');   // Indica que o botão foi clicado

    width = $('#width').val();
    console.log('Width ' + width)   // Imprime largura no console

    height = $('#height').val();
    console.log('Height ' + height);    // Imprime altura no console

    area = width * height;
    console.log(area);  // Imprime area no console

    $form.append('<p>' + area + '</p>')
});