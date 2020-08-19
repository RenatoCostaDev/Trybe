    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
//Condição
const concatArray = (resultArray, arrayPart) => resultArray.concat(arrayPart);
const flatten = () => arrays.reduce(concatArray,[]);
console.log(flatten())
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);