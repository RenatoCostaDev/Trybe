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

const keysList = e => console.log(Object.keys(e));
keysList(lesson1);
keysList(lesson2);
keysList(lesson3);