const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'return expected =>  fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'return expected =>  fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'return expected => buzz');
assert.strictEqual(myFizzBuzz(11), 11, 'return expected => 11');

// assert.strictEqual(myFizzBuzz('11'), 11, 'Run-time error: Type mismatch');

// const numTest = '11';
// assert.throws(() => {
//   myFizzBuzz(numTest);
// }, 'Run-time error: Type mismatch');

assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);
