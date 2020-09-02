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

const addShift = (lesson, key, value) => {
    lesson[key] = value;
}
// changeShift(lesson2, 'turno', 'manhã');
console.log(lesson2);