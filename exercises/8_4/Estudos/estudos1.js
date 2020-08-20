//spread operator
const currentArray = [0, 1, 2];
const newArray = [...currentArray, 3];
console.log(newArray);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

//parâmetro rest
const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log(...myPackage);

printPackageContents('cheese', 'eggs', 'milk', 'bread');
function printPackageContents(...items) {
    for (const item of items) {
        console.log(item);
    }
    console.log(items);
}

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
 
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5, 6))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))