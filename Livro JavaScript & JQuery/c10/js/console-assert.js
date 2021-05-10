var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
    // A mensagem só é exibida se o usuário inseriu número inferior a 10
    console.assert(this.value > 10, 'User entered less than 10')
});

$('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;
    // A mensagem só é exibida se o usuário não tiver inserido um número
    console.assert($.isNumeric(area), "User entered non-numeric value");

    $form.append('<p>' + area + '</p>');

});