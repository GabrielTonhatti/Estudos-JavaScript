// Função auxiliar para adicionar um ouvinte de evento
function addEvent(el, event, callback) {
    if ('addEventListener' in el) { // Se addEventListener funciona
        el.addEventListener(event, callback, false);    // Use-o
    } else {    // Caso contrário
        el['e' + event + callback] = callback;  // Torna callback um método de el
        el[event + callback] = function() { // Adiciona o segundo método
            el['e' + event + callback](window.event);   // Usa-o para chamar funcção anterior
        };
        el.attachEvent('on' + event, el[event + callback]); // Usa attachEvent() para chamar a segunda função, que então chama a primeria
    }
}