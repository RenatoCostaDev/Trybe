const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const biggerTest = numbers.reduce(getBigger);
console.log(biggerTest); // 85
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85