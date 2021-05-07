var elMap = document.getElementById('loc'); // Elemento HTML
var msg = 'Sorry, we were unable tp get your location'  // Sem msg de localização

if(Modernizr.geolocation) { // Geo é suportado?
    navigator.geolocation.getCurrentPosition(success, fail); // Pede localização
    elMap.textContent = 'checking loction...';  // Diga checking...
} else {
    elMap.textContent = msg;
}

function success(position) {    // Obteve a localização
    msg = '<h3>Longitude:<br>';     // Cria a mensagem
    msg += position.coords.longitude + '</h3>';   // Adiciona a Latitude
    msg += '<h3>Latitude:<br>'  // Cria a mensagem
    msg += position.coords.latitude + '</h3>'; // Adiciona a longitude
    elMap.innerHTML =msg;    // Exibe a localização
}

function fail(msg) {    // Não obteve a localização
    elMap.textContent = msg;    // Exibe a entrada de texto
    console.log(msg.code);  // Log de erro
}
