var width = 12; // Largura variável
var height = 'test';    // Altura variável

function calculateArea(width, height) {
    try {
        var area = width * height;  // Tenta calcular a área
        if (!isNaN(area)) { // Se for um número
            return area // Retorna a área
        } else {    // Caso contrário, lança um erro
            throw new Error('calculateArea() received invalid number');
        }
    } catch(e) {    // Se houver um erro
        console.log(e.name + ' ' + e.message);  // Exibe erro no console
        return 'We were unable to calculate the area.'; // Exibe uma msg ao usuário  
    }
}

// TENTA EXIBIR A ÁREA NA PÁGINA
document.getElementById('area').innerHTML = calculateArea(width, height);