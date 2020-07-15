let quadrado = "";
let cont = 0;
for (let index = 0; index < 5; index += 1) {
    for (let indexDentro = 0; indexDentro < 5; indexDentro += 1) {
        
        if (cont < indexDentro) {
          quadrado += "*";  
        } else {
            quadrado += "*"; 
        }
        cont +=1; 
    }
    console.log(quadrado);
    quadrado = "";
}