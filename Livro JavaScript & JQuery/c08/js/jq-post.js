$('#register').on('submit', function(e) {   // Quando o form é enviado
    e.preventDefault(); // Impede-o de ser enviado
    var details = $('#register').serialize();   // Serializa dados do form
    $.post('register.php', details, function(data){ // Usa $.post() p/ enviar
        $('#register').hmtl(data);  // Onde exibir o resultado
    });
});