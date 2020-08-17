const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

//condição, acessa o name como array de letras 
const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

//condição, usa o Object.values p/ ter acesso aos atributos do object em array!
const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));