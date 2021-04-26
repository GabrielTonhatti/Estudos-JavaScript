let string = "10, 20, 20, 8, 25, 3, 0, 30, 1"
let pontuacao = [];

function Pontuacao() {
    let number = string.split(", ")
    let MelhorEPiorPonto = [];
    let PiorPonto = 1;
    let qtdPontos = 0;
    let MaiorPonto = 0;
    for (let i = 0; i < 9; i++) {
        pontuacao[i] = parseInt(number[i])
        MaiorPonto = pontuacao[0];
        if (pontuacao[i] > MaiorPonto) {
            MaiorPonto = pontuacao[i]
            qtdPontos++
        } else if (pontuacao[i] == MaiorPonto) {
            qtdPontos--
        }

        if (pontuacao[i] < PiorPonto) {
            PiorPonto = i - 1
        }
    }
    MelhorEPiorPonto.push(qtdPontos, PiorPonto)

    return MelhorEPiorPonto
}

console.log(Pontuacao())
