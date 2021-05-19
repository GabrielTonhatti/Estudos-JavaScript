(function () {
    var password = document.getElementById('password'), // Armazena entrada de senha
        passwordConfirm = document.getElementById('conf-password');

    function setErrorHighLighter(e) {
        var target = e.target || e.srcElement;  // Obtém elemento alvo
        if (target.value.length < 8) {  // Se seu comprimento for < 8
            target.className = 'fail';  // Configura classe como fail
        } else {    // Caso contrário,
            target.className = 'pass';
        }
    }

    function removeErrorHightLighter(e) {
        var target = e.target || e.srcElement;  // Obtém o elemento alvo
        if (target.className === 'fail') {  // Se classe for igual fail
            target.className = '';  // Limpa classe
        }
    }

    function passwordMatch(e) {
        var target = e.target || e.srcElement;  // Obtém o alvo
        // Se value = pwd e tive mais de 8 caracteres
        if ((password.value === target.value) && target.value.length >= 8) {
            target.className = 'pass';  // Configura class como pass
        } else {    // Caso contrário
            target.className = 'fail';  // Configura class como fail
        }
    }
    addEvent(password, 'focus', removeErrorHightLighter);
    addEvent(password, 'blur', setErrorHighLighter);
    addEvent(passwordConfirm, 'focus', removeErrorHightLighter);
    addEvent(passwordConfirm, 'blur', passwordMatch);
}());