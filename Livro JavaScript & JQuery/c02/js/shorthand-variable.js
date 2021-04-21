//variaveis são declaradas e os valores são atribuidos na mesma declaração
var price = 5;
var quantity = 14;
var total = price * quantity;

// Três variáveus são declaradas na mesma linha, então os valores são atribuídos a cada uma.
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

/* Duas variáveis são declaradas e os valores são atribuídos na mesma linha.
 Então uma é declarada e um valor lhe é atribuído na linha seguinte*/
var price = 5, quantity = 14;
var total = price * quantity;

// GRava o total no elemento com o id cost
var el = document.getElementById('cost');
el.textContent = '$' + total;