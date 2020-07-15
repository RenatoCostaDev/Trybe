let triangulo = "";

for (let index = 0; index < 5; index += 1) {
    for (let indexDentro = 0; indexDentro < 5; indexDentro += 1) {

        triangulo += "*";
        if (index === indexDentro) {
            console.log(triangulo);
        }
    }    
    triangulo = "";
}