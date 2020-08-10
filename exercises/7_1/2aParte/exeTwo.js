//2- Crie uma função que receba uma frase e retorne qual a maior palavra.
//longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")  retorna 'aconteceu'
const longestWord = e => {
  let eArray = e.split(' ');
  let maiorPalavra = 0;
  let maiorPalavraTxt = '';

  for (const ePalavra of eArray) {
      if (ePalavra.length > maiorPalavra) {
          maiorPalavra = ePalavra.length;
          maiorPalavraTxt = ePalavra;
      }
  }

  return maiorPalavraTxt;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

//O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão //é de acordo com a  pontuação de código unicode.

const longestWordTwo = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWordTwo("Antonio foi no banheiro e não sabemos o que aconteceu"))
