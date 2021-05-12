(function($) {  // Usa $ como nome da variavel
    $.fn.accordion = function(speed) {  // Retorna a seleção jQuery
        this.on('click', '.accordion-control', function(e) {
            e.preventDefault();
            $(this)
            .next('.accordion-panel')
            .not(':animated')
            .slideToggle(speed);
        })
        return this;    // Retorna a seleção jQuery
    }
})(jQuery); // Passa o objeto jQuery