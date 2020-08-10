//1- Crie uma função que receba um número e retorne seu fatorial.
const fatora = e => {
  let resultado = e;
  for (let index = e; index > 0 ; index--) {
   resultado += index * (index - 1);
  }
  return resultado;
}
console.log(fatora(4));

const fatoraLinha = e => e > 1 ? e * fatoraLinha( e -1) : 1;

console.log(fatoraLinha(4));