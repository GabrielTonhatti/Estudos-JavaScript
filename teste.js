const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.json');

let arquivo = fs.readFileSync(caminho);
const dados = JSON.parse(arquivo.toString());
// console.log(dados);

const newDados = Object.values(dados);
// console.log(newDados);

let newArray = [];

for (let i in newDados) {
    for (let j in newDados[i]) {
        newArray = newDados[i]
    }
}

console.log(newArray)

let email = ['gabrieltonhatti245@gmail.com', 'rafaela.oliveira21@hotmail.com'];

for (let i in newArray) {
    console.log(newArray[i].email)
    if (email[i] !== newArray[i].email) {
        console.log(`email ${email[i]} está incorreto`);
    } else {
        console.log('Entrando na conta!')
    }
}