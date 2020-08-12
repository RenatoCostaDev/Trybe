const assert = require('assert');

const myRemoveWithoutCopy = (arr, item) => {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4],'Expected array =>[1, 2, 4]!');
assert.notDeepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4],'Not expected this array =>[1, 2, 3, 4]!');

//=> Array original é modificado
const newList = [4, 3, 2, 1];
console.log(myRemoveWithoutCopy(newList, 4));
myRemoveWithoutCopy(newList, 4);//Passando array em uma constante como parâmetro
// assert.deepStrictEqual(newList, [4, 3, 2, 1], 'Error: Modifica o original') //=> Gera Error!
assert.strictEqual(myList.length, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

