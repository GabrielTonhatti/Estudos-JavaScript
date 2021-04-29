var noteInput, noteName, textEntered, target;    // Declara variáveis

noteName = document.getElementById('noteName'); // Elemento que armazena a nota
noteInput = document.getElementById('noteInput');

function writeLabel(e) {    // Declara função
    if (!e) {   // Senão houver objeto event
        e = window.event;   // Usa o fallback do IE5-8
    }

    target = e.target || e.srcElement;  // Obtém o aldo do evento
    textEntered = target.value;   // O valor desse elemento
    noteName.textContent = textEntered; // Atualiza o texto da nota
}

function recorderControls(e) {  // Declara recorderControls
    if (!e) {   // Se não houver objeto event
        e = window.event;   //  Usa fallback do IE5-8
    }

    target = e.target || e.srcElement; // Obtém o elemento alvo
    if (e.preventDefault) {    // Se preventDefault() suportado
        e.preventDefault(); // Impede ação padrão
    } else {    // Caso contrário
        e.returnValue = false;  // IE fallback: para padrão
    }

    switch(target.getAttribute('data-state')) { // Obtém o atributo data-state
        case 'record':  // Se seu valor for record
            record(target); // Chama a função record()
            break;  // Sai da função e volta para onde ela foi chamada
        case 'stop':    // Se seu valor for stop
            stop(target);   // Chama a função stop
            break;  // Sai da função e volta para onde ela foi chamada
        // Mais botões poderiam entrar aqui...
    }
}

// Aqui é onde os controles e funções de gravar/pausar entram...
function record(target) {   // Declara a função
    target.setAttribute('data-state', 'stop')   // Configura o data-state como stop
    target.textContent = 'stop';    // Configura o texto como 'stop'
}

function stop(target) {
    target.setAttribute('data-state', 'record');    // Configura data-state como record
    target.textContent = 'record';
}

if (document.addEventListener) {    // Se ouvinte de evento for suportado
    document.addEventListener('click', function (e) {    // Para qualquer click no documento

        recorderControls(e);   // Chama recorderControls()
    }, false);   // Captura na fase de propagação
    // Se o evento input for dispardo na entrada username, chama writeLabel()
    noteInput.addEventListener('input', writeLabel, false);
} else {    // Caso contrário
    document.attachEvent('onclick', function (e) {   // Fallback do IE: qquer clique
        recorderControls(e);   // Chama recorderControls()
    });
    // Se o evento keyup disparar na entrada username, chama writeLabel()
    noteInput.attachEvent('onkeyup', writeLabel);
}


