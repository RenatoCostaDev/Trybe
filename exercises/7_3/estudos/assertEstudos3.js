const assert = require('assert');

const division = (x, y) => {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.equal(division(10, 2), 5); // OK
// assert.equal(division(10, 0), 0);
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK