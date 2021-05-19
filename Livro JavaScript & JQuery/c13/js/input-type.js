(function() {

    var pwd = document.getElementById('pwd');   // Obtém entrada de senha
    var chk = document.getElementById('showPwd');   // Obtém caixa de verificação

    addEvent(chk, 'change', function(e) {   // Quando o usuário clica na checkbox
        var target = e.target || e.srcElement;  // Obtém esse elemento
        try {
            if (target.checked) {   // Se a opção estiver marcada
                pwd.type = 'text';  // Configura tipo de senha como texto
            } else {    // Caso contrário
                pwd.type = 'password';  // Configura tipo de senha como senha
            }
        } catch(error) {    // Se isso causar um erro
            alert('This browser cannot swtich type');   // Diz 'cannot switch type'
        }
    });
}());