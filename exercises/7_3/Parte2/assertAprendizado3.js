const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = (e) => {
  let sum = 0;
  for (let index = 0; index < e.length; index++) {
    sum += e[index]    ;
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);

