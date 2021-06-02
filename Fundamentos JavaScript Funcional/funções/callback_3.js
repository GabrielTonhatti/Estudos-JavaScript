const nums = [1, 2, 3, 4, 5];
const dobro = n => n * 2;
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', "Lia", 'Rafa'];
const primeiraLetra = text => text[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
];

const nomeProduto = produto => produto.nome;
const total = preco => preco.qtde * preco.preco;

const nome = carrinho.map(nomeProduto);
console.log(nome);

const precoFinal = carrinho.map(total);
console.log(precoFinal);

Array.prototype.meuMap = function (fn) {
    const novoArray = [];
    for (let i = 0; i< this.length; i++) {
        novoArray.push( fn(this[i], i, this));
    }

    return novoArray;

}

const nome2 = carrinho.meuMap(nomeProduto);
console.log(nome);

const precoFinal2 = carrinho.meuMap(total);
console.log(precoFinal);