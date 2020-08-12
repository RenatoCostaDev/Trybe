const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const key in people) {
    greeting.push(`Hello ${people[key]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');

const saida = greetPeople(parameter);
assert.deepEqual(saida, result); 
assert.deepStrictEqual(saida, result); 

console.log(greetPeople(parameter));