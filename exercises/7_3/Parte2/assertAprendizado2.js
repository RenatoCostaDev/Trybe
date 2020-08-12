const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (e) => {
  let wordLengthArray = [];
  let wordLength = 0;
  for (let index = 0; index < e.length; index++) {
    wordLength= e[index].length;
    wordLengthArray.push(wordLength)
    wordLength = 0;
  }
  return wordLengthArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);