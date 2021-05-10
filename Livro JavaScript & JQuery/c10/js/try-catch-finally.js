var feed = document.getElementById('feed');

var response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l tins are all reduced this week","price": 30,"link": "http://www.example.com/farrow-and-ball/"},{"title": "Siecle Paints from the UK","description": "Probably the best named paints in the world","price": 28,"link": "http://www.example.com/siecle/"},{"title": "Kelly Hoppen","description": "Now stocking paints by interior designer Kelly Hoppen","price": 42,"link": "http://www.example.com/kelly-hoppen/"}]}';
response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l ';   // Dados JSON

if (response) {
    try {
        var dealData = JSON.parse(response); // Tenta analisar JSON
        showContent(dealData);  // Exibir dados JSON
    } catch (e) {
        var errorMessage = e.name + ' ' + e.message;    // Cria msg de erro
        console.log(errorMessage);
        feed.innerHTML = '<em>Sorry, could not load deals</em>' // MSG p/users
    } finally {
        var link = document.createElement('a'); // Adiciona link de atualizar
        link.innerHTML = '<a href = "try-catch-finally.html"> reload</a>';
        feed.appendChild(link);
    }
}

function showContent(dealData) {
    var newContent = '';
    for (var i in dealData.deals) {
        newContent += '<div class = "deal">';
        newContent += '<h2>' + dealData.deals[i].title + '</h2>';
        newContent += '<p>' + dealData.deals[i].description + '</p>';
        newContent += '<a href = "' + dealData.deals[i].link + '">';
        newContent += ' ' + dealData.deals[i].link;
        newContent += '</a>';
        newContent += '</div>';
    }
    feed.innerHTML = newContent;
}