const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers1 = numbers.reduce((result, number) => result + number); 
// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers1); // 113
// Ou seja:
//Condição
const getSum1 = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum1);
console.log(sumNumbers2); // 113
console.log('--------------------------')
const getSum2 = (result, number) => {
  console.log('result: '+ result+' number: '+number); // 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum2);
console.log(sumNumbers3); // 113
console.log('--------------------------')
const getSum3 = (result, number) => result + number;
const sumNumbers4 = numbers.reduce(getSum3, 10); // Parâmetro adicionado ao reduce: o "10"
console.log(sumNumbers4); // 123