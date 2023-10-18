var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
    VideoGame.prototype.exibirDetalhes = function () {
        console.log("O jogo ".concat(this.nome, " do genero ").concat(this.genero, " custa ").concat(this.preco));
    };
    VideoGame.prototype.aplicarDesconto = function () {
        var desconto = this.preco * 10 / 100;
        var total = this.preco - desconto;
        return total;
    };
    VideoGame.prototype.addPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
        return this.plataforma;
    };
    VideoGame.prototype.estimarTempoJogo = function () {
        switch (this.genero) {
            case "Ação":
                return "Cerca de 12 horas";
            case "Aventura":
                return "Cerca de 20 horas";
            case "Esporte":
                return "Indeterminado";
            case "Estratégia":
                return "Cerca de 40 horas";
            default:
                return "";
        }
    };
    return VideoGame;
}());
var Olimpiadas = new VideoGame("Olimpiadas", "Esporte", 2, ['PC'], 30.00);
var resultado = Olimpiadas.aplicarDesconto();
console.log(resultado);
Olimpiadas.addPlataforma("PlayStation");
console.log(Olimpiadas.plataforma);
var tempoEstimado = Olimpiadas.estimarTempoJogo();
console.log(tempoEstimado);
