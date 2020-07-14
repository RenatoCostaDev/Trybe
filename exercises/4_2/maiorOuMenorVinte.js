let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;
let cont = 0;
let media = 0;

numbers.forEach(e => {
    cont++;
    total += e;    
});
media = total / cont;

if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}