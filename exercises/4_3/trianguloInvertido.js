let triangulo = "";
let espaco = "";
let cont = 5;

for (let index = 0; index < 5; index += 1) {
    for (let indexDentro = 0; indexDentro <= 5; indexDentro += 1) {

        if (indexDentro < cont) {
            triangulo = triangulo + " ";
        }else {
            triangulo = triangulo + "*";
        }      
    }
    console.log(triangulo);    
    triangulo = "";
    cont--;
}