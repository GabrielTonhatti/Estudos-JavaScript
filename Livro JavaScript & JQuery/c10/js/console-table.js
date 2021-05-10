var contacts = {    // Armazena informações de contato em um objeto literal
    "London": {
        "Tel": "+44 (0)207 946 0128",
        "Country": "UK"
    },
    "Sydney": {
        "Tel": "+61 (0)2 7010 1212",
        "Country": "Australia"
    },
    "New York": {
        "Tel": "+1 (0)1 555 2104",
        "Country": "USA"
    }
}

console.table(contacts) // Imprime os dados no console

var city, contactDetails;   // Declara as variáveis para a página
contactDetails = '';    // Armazena detalhes escritos na página

$.each(contacts, function(city, contacts) { // Itera pelos dados para
    contactDetails += city + ': ' + contacts.Tel + '<br />';
});
$('h2').after('<p>' + contactDetails + '</p>'); // Adiciona dados na página