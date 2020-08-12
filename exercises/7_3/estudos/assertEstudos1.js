const assert = require('assert');
//Exemplo 1 
// OK
assert.equal(50, 50); 
 // AssertionError: 50 == 70
//  assert.equal(50, 70, 'Mensagem customizada do erro');

//Exemplo 2 c/ função

function division(x, y) {
  return x / y;
}
const expected = division(9, 3);
assert.equal(expected, 3, 'return =>  9 / 3 = 3');

//Exemplo 3 video aula customizado c/arrow function
const sum = (x, y) => x + y;

assert(sum(3, 4) === 7, 'return =>  3 + 4 = 7');
assert.ok(sum(3, 4) === 7, 'return =>  3 + 4 = 7');
assert.equal(sum(3, 4), 7, 'return =>  3 + 4 = 7');
assert.notEqual(sum(3, 4), 8, 'return =>  3 + 4 = 7');