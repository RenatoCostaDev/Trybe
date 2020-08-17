//Para ordenar strings com caracteres não-ASCII
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items);

// o array a ser ordenado
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})
console.log(mapped);

// ordenando o array mapeado contendo os dados resumidos
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});
console.log(mapped);

// container para o resultado ordenado
var result = mapped.map(function(el){
  return list[el.index];
});
console.log(result);