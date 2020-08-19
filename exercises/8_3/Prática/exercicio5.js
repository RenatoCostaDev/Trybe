    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

//Condições 1a tentativa
// const numberOfA = (sum, name) =>sum + Array.from(name).forEach((item)=> {(item ==='a' || item ==='A')?  sum+1 : sum });
// const containsA = () => names.reduce(numberOfA,0);

function containsA() {    
  return names.reduce((acc, curr)=> 
    acc + curr.split('').reduce((acumulador, current) => {
       if(current === 'a'|| current === 'A') return acumulador + 1;
       return acumulador;
    }, 0),0);
}
console.log(containsA());
assert.deepEqual(containsA(), 20);