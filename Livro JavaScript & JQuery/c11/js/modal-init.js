(function () {
    var $content = $('#share-options').detach();    // Remove modal da página

    $('#share').on('click', function () {    // Tratamento de clique para abrir modal
        modal.open({ content: $content, width: 340, height: 300 });
    })
}());