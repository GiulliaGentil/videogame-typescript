class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number;

    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: [string], preco: number) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma; 
        this.preco = preco;
    }

    exibirDetalhes(): void {
        console.log(`O jogo ${this.nome} do genero ${this.genero} custa ${this.preco}`)
    }
    aplicarDesconto(): number {
        let desconto = this.preco * 10 / 100;
        let total = this.preco - desconto;
        return total;
    }
    addPlataforma(novaPlataforma): [string] {
            this.plataforma.push(novaPlataforma);
            return this.plataforma
    }
    
    estimarTempoJogo(): string {
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
        }
    }
    
    const Olimpiadas = new VideoGame("Olimpiadas", "Esporte", 2, ['PC'], 30.00);
    const resultado = Olimpiadas.aplicarDesconto();
    console.log(resultado)
    Olimpiadas.addPlataforma("PlayStation");
    console.log(Olimpiadas.plataforma);
    const tempoEstimado = Olimpiadas.estimarTempoJogo();
    console.log(tempoEstimado);