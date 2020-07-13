let nome = "peao";

switch (nome.toLowerCase()) {
    case "peao":
        console.log("Anda para frente e para atrás");
        break;
    case "torre":
        console.log("Anda para frente, para atrás e para os lados");
        break;
    case "cavalo":
        console.log("Anda em l para direita e para a esquerda");
        break;
    case "bispo":
        console.log("Anda em diagonal para direita e esquerda");
        break;
    case "rainha":
        console.log("Anda para todas as direções e diagonais quantos espaços quiser");
        break;
    case "rei":
        console.log("Anda para todas as direções e diagonais apenas uma casa");
        break;
    default:
        console.log("Deu ruim")
        break;
}