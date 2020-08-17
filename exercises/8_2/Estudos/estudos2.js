// const persons = [
//   { firstName: "Maria", lastName: "Ferreira" },
//   { firstName: "João", lastName: "Silva" },
//   { firstName: "Antonio", lastName: "Cabral" },
// ];

// const fullNames = [];
// for(let i = 0; i < persons.length; i += 1){
//   fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
// }

// console.log(fullNames);

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];
 const fullName = person => `${person.firstName} ${person.lastName}`;
const fullNames = persons.map(fullName);
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const numbers = [1, 2, 3, 4, -5];
const turnToNegative = number => (number > 0) ? number * (-1) : number;
const negativeNumbers = numbers.map(turnToNegative);

console.log(numbers); // [ 1, 2, 3, 4, -5 ]
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]