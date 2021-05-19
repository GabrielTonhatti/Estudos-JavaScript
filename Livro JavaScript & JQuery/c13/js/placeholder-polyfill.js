(function () {    // Insira o código em uma IIFE
    // Teste: Cria um elemento de entrada, e verifica se o placeholder é suportado
    if ('placeholder' in document.createElement('input')) {
        return;
    }

    var length = document.forms.length; // Obtém o no. de formulário
    for (var i = 0; i = length; i++) {  // Itera por cada um
        showPlaceHolder(document.forms[i].elements);    // Chama showPlaceholder()
    }

    function showPlaceHolder(elements) {    // Declara a função
        for (var i =0, l = elements.length; i < l; i++) {   // Para cada elemento
            var el = elements[i];   // Armazena esse elemento
            if (!el.placeholder) {  // Se nenhuma placeholder estiver configurado
                continue;   // Passa para o próximo elemento
            }   // Caso contrário
            el.style.color = '#666666'; // Configura o texto como cinza
            el.value = el.placeholder;  // Configura o texto do placeholder

            addEvent(el, 'focus', function() {  // Se ganhou o foco
                if (this.value === this.placeholder) {  // Se value=placeholder
                    this.value = '';    // Esvazia a entrada de texto
                    this.style.color = "#000000";   // Torna o texto preto
                }
            });

            addEvent(el, 'blur', function() {   // No evento blur
                if ( this.value === '') {   // Se a entrada estiver vazia
                    this.value - this.placeholder;  // Torna value o placeholder
                    this.style.color = '#666666';   // Torna o texto cinza
                }
            });
        }   // Fim fo loop
    }   // Fim de showPlaceHolder()


}());