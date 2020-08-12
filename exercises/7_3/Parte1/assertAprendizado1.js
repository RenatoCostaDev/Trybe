const assert = require('assert');

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;}

// implemente seus testes aqui

assert.equal(sum(4,5), 9, 'return =>  4 + 5 = 9');//ou
assert.strictEqual(sum(4,5), 9, 'return =>  4 + 5 = 9');

assert.equal(sum(0,0), 0, 'return =>  4 + 5 = 9');//ou
assert.strictEqual(sum(0,0), 0, 'return =>  4 + 5 = 9');

//obs: pd usar para saber se o tipo é igual ao desejado
assert.strictEqual(typeof sum, 'function');

// assert.equal(sum(4,'5'), 9, 'return =>  4 + 5 = 9');//=> chama msg do if

assert.throws(() => {
    sum(4, '5');
  }, /^return =>should be 9:(different types) $/);
//customiza msg com a mesma e return...