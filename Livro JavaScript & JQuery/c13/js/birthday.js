(function () {
    var $birth = $('#birthday'),    // Entrada da data de nascimento
        $parentsConsent = $('#parents-consent'),   // Checkbox de consentimento
        $consentContainer = $('#consent-container');    // Checkbox contêiner
        // Cria o seletor de data usando jQuery UI
        $birth.prop('type', 'text').data('type', 'date').datepicker({
            dateFormat: 'yy-mm-dd'  // Configura o formato de data
        });
        $birth.on('blur change', checkDate);    // Data de nascimento perde o foco
        function checkDate() {  // Declara checkDate()
            var dob = this.value.split('-');    // Array a partir de date
            toggleParentsConsent(new Date(dob[0], dob[1] -1, dob[2]));
        }

        function toggleParentsConsent(date) {   // Declara a função
            if (isNaN(date)) return;    // Par a se date inválido
            var now = new Date();   // Novo objeto date: today

            // Se a diferença (agora menos data de nasc., for menor que 13 anos)
            // Exibe a checkbox de consentimento dos pais (não lida com anos bissextos)
            // Para obter 13 anos: ms * secs * mons * hrs * days * years
            if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {
                $consentContainer.removeClass('hide');  // Remove a classe hide
                $parentsConsent.focus();    // Dá o foco a ela
            } else {    // Caso contrário
                $consentContainer.addClass('hide'); // Adiciona hide á classe
                $parentsConsent.prop('checked', false); // Configura checked como false
            }
        }

}());