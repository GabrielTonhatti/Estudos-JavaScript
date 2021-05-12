$('.accordion').on('click', '.accordion-control', function(e) { // Quando clicado
    e.preventDefault(); // Impede a ação padrão do botão
    $(this) // Obtém o elemento que o usuário cliclou
    .next('.accordion-panel')    // Seleciona painel seguinte
    .not(':animated')   // Se ele não estiver sendo atualmente animado
    .slideToggle(); // Usa alternância de slides para exibir ou ocultar
});