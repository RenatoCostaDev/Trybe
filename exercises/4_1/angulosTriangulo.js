//A soma dos ângulos internos de qualquer triângulo é sempre igual a 180°.

let a = 45;
let b = 45;
let c = 90;
let resposta = true;

soma = a + b + c;
if (soma == 180) {
    resposta = true;
} else if (soma != 180){
    resposta = false;
} else {
    console.log("Erro");
}
console.log(resposta);