var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('Clicked submit..');

    width = $('#width').val();
    height = $('#height').val();
    area = (width * height);

    if (area < 100) {
        debugger;   // Um ponto de interrupção é definido se as ferramentas de desenvolvedor estiverem abertas
    }

    $form.append('<p>' + area + '</p>');

})