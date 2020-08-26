const fabricantes =['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}
// CALLBACK: vc passa uma função p/ outra e qndo 
//det. evento acontecer essa função passada será disparada e chamada de volta.

fabricantes.forEach(imprimir); //o evento é o loop do forEach
fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
});
fabricantes.forEach(fabricante => console.log(fabricante));
