const numbers = [19, 21, 30, 3, 45, 22, 15];

//condição pd ser usado para cada elemento
const verifyEven = (number) => number % 2 === 0;
console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

//percorre array e acha o primeiro
const isEven = numbers.find(verifyEven);
console.log(isEven); // 30


// Outra forma de ser realizada sem a necessidade de criar uma nova função(condição).
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2); // 30

