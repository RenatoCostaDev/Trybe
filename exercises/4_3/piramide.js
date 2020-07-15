let n = 5;
let linha;
let coluna;
let piramide = '';
let asterisco = '*';

let midOfMatrix = (n + 1) / 2;
let esquerda = midOfMatrix;
let direita= midOfMatrix;

for (linha = 0; linha <= midOfMatrix; linha +=1) {
  for (coluna = 1; coluna <= n; coluna +=1) {

    if (coluna > direita && coluna < esquerda) {
        piramide = piramide + asterisco;
    } else {
        piramide = piramide + ' ';
    }
    
  }
  console.log(piramide);
  piramide = '';
  direita--;
  esquerda++;
};