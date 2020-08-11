const lesson1 = {
  materia: 'Matemática',
  numeroAlunos: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroAlunos: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroAlunos: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
// console.log(allLessons);

const sumStudents = e => {
  let sum = 0;
  const keysArray = Object.keys(e);
  for (const key in keysArray) {
    sum += e[keysArray[key]].numeroAlunos;    
  }
  return sum;
}
console.log(sumStudents(allLessons));