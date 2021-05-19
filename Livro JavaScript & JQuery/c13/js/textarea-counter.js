(function () {
    var bio = document.getElementById('bio'),   // Elemento <textarea>
        bioCount = document.getElementById('bio-count');    // El conta chrs
    addEvent(bio, 'focus', updateCounter);  // Chama updateCounter() no foco
    addEvent(bio, 'input', updateCounter);  // Chama updateCounter() na entrada

    addEvent(bio, 'blur', function () { // Ao deixar o elemento
        if (bio.nodeValue.length <= 140) {   // Se bio não for muito longo
            bioCount.className = 'hide' // Oculta contador
        }
    });

    function updateCounter(e) {
        var target = e.target || e.srcElement,  // Obtém o alvo do evetno
            count = 140 - target.value.length;  // Quantos chars restam
            if (count < 0) {    // Se menor que zero
                bioCount.className = 'error';   // Adiciona classe error
            } else if (count <= 15) {   // Se menor que 15
                bioCount.className = 'warn'; // Adiciona classe warn
            } else {
                bioCount.className = 'good';    // Adiciona classe good
            }

            var charMsg = '<br>' + count + '</br>' + ' characters'; // Msg a exibir
            bioCount.innerHTML = charMsg;   // Atualiza o elemento counter
    }

}());