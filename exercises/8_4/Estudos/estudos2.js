const aluno = {
nome : "Matheus", 
idade : "23", 
email : "matheushcastiglioni@gmail.com"
};
const {nome, idade, email} = aluno;
console.log(nome);
console.log(idade);
console.log(email);
//Se quiser usar abreviações
const {nome:n, idade:i, email:e} = aluno;
console.log(n);
console.log(i);
console.log(e);


function ran({min = 0, max = 0}) {
    if(min > max)[min,max] = [max, min];
    const value = Math.random()*(max - min) + min;
    return Math.floor(value);
}
const obj = {max: 50, min: 40};
console.log("Número sorteado :"+ran(obj));

// function ran1([min = 0, max = 0]) {
//     if(min > max)[min,max] = [max, min];
//     const value = Math.random()*(max - min) + min;
//     return Math.floor(value);
// }
// console.log("Número sorteado :"+ran1([20, 10]));