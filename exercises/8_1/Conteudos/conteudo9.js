const stringArray = ['Blue', 'Humpback', 'Beluga'];
const numericStringArray = ['80', '9', '700'];
const numberArray = [40, 1, 5, 200];
const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

//Condição, trata sem verificar tipos
function compararNumeros(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());//join concatena separando por ,
console.log('Ordenada:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));

console.log('numericStringArray:', numericStringArray.join());
console.log('Ordenada sem função de comparação:', numericStringArray.sort());
console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));

