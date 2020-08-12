const assert = require('assert');

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function');
// assert.deepEqual( myRemove([1, 2, 3, 4], 3),[1, 2, 4],'Expected array =>[1, 2, 4]!');
assert.deepStrictEqual( myRemove([1, 2, 3, 4], 3),[1, 2, 4],'Expected array =>[1, 2, 4]!');

// assert.notDeepEqual( myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4],'Not expected this array =>[1, 2, 3, 4]!');
assert.notDeepStrictEqual( myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4],'Not expected this array =>[1, 2, 3, 4]!');

//=> É criado um novo array dentro da função
const newList = [4, 3, 2, 1];
console.log(myRemove(newList, 4));
myRemove(newList, 4);//Passando array em uma constante como parâmetro
assert.deepStrictEqual(newList, [4, 3, 2, 1])//Não modifica o original


let newListLet = [4, 3, 2, 1];
console.log(myRemove(newListLet, 4));
myRemove(newListLet, 4);//Passando array em uma let como parâmetro
assert.deepStrictEqual(newListLet, [4, 3, 2, 1],'Let => array original muda')//Não modifica o original
//Obs: colocar uma let ou const para salvar novo obj ou array

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);