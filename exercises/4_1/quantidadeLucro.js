var custoProducao = 1;
var vendaValor = 3;

if (custoProducao !== 0 && vendaValor !== 0) {
  var lucroTotal = (vendaValor - custoProducao) * 1000 * 0.20;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser");
};