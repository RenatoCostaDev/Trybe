let nome = "peao";

switch (nome.toLowerCase()) {
    case "peao":
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    case "torre":
        console.log("Torre ->Anda para frente, para atrás e para os lados");
        break;
    case "cavalo":
        console.log("Cavalo ->Anda em l para direita e para a esquerda");
        break;
    case "bispo":
        console.log("Bispo->Anda em diagonal para direita e esquerda");
        break;
    case "rainha":
        console.log("Rainha->Anda para todas as direções e diagonais quantos espaços quiser");
        break;
    case "rei":
        console.log("Rei->Anda para todas as direções e diagonais apenas uma casa");
        break;
    default:
        console.log("Deu erro")
        break;
}