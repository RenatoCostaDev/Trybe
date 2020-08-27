// qndo vc cria uma promise vc passa uma função q recebe outra
//obs: vc passa um valor se quise mais passe um array ou object
// let p = new Promise(function (cumprirPromessa) {
//     cumprirPromessa(['Ana', 'Bia', 'Carlos']);
// });
let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos']);
});
// Valor q recebe da função dentro da promise
p.then(valor => console.log(valor));

const primeiroElemento = letra => letra[0];
const primeiroLetra = letra => letra[0];
const letraMinuscula = letra => letra.toLowerCase();

p.then(primeiroElemento)
.then(primeiroLetra)
.then(letraMinuscula)
// .then(valor => console.log(valor));
.then(console.log);