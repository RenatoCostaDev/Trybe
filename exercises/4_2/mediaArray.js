let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;
let cont = 0;
let media = 0;

numbers.forEach(e => {
    cont++;
    total += e;    
});

console.log(total,cont);

media = total / cont;

console.log("Média ritmética dos valores contidos no array: "+media);