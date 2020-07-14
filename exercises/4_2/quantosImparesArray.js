let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

numbers.forEach(e => {
    if (e % 2 != 0) cont++;
});

if (cont >0) {
   console.log("Quantidade de ímpares => "+ cont); 
} else {
    console.log( "nenhum valor ímpar encontrado"); 
}

