let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

numbers.forEach(e => {
    if (e >= maior) maior = e;
});

console.log(maior);