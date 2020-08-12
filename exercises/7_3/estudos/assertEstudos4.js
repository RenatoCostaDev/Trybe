const assert = require('assert');

// assert.strictEqual(1, '1', 'not the same'); // this will fail

assert.notStrictEqual(1, true, 'not the same (strictly)');