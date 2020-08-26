const notas = [7.0, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// s/ callback
let notasBaixas1 = [];
for (const i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);
// com callback                      CBK
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
})
console.log(notasBaixas2);  // CBK
console.log(notas.filter(nota => nota < 7));