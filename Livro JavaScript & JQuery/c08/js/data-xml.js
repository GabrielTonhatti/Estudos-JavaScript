var xhr = new XMLHttpRequest(); // Cria o objeto XMLHttpRequest

xhr.onload = function () {   // Quando a resposta carregar
    // A verificação condicional abaixo não funciona localmente - só em um servidor
    if (xhr.status === 200) {    // Se o status do servidor for ok

        // Esta parte é diferente porque processa XML não HTML
        var response = xhr.responseXML; // Obtém XML do servidor
        var events = response.getElementsByTagName('event');    // Localiza elementos <event>

        for (var i = 0; i < events.length; i++) {   // Itera por eles
            var container, image, location, city, newline;  // Declara variáveis
            container = document.createElement('div');  // Cria o contêiner <div>
            container.className = 'event';  // Adiciona atributo class

            image = document.createElement('img');  // Adiciona mapa de imagem
            image.setAttribute('src', getNodeValue(events[i], 'map'));
            image.setAttribute('alt', getNodeValue(events[i], 'location'));
            container.appendChild(image);

            location = document.createElement('p');  // Adiciona dados da localização
            city = document.createElement('b');
            newline = document.createElement('br');
            city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);

            document.getElementById('content').appendChild(container);
        }
        function getNodeValue(obj, tag) {
            return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
        }

        // A PARTE FINAL É A MESMO DO EXEMPLO HTML MAS REQUER UM ARQUIVO XML
    }
}

xhr.open('GET', 'data/data.xml', true); // Prepara a solicitação
xhr.send(null); // Envia a solicitação