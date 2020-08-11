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

const objectLength = e => console.log(Object.keys(e).length);
objectLength(lesson1);
objectLength(lesson2);
objectLength(lesson3);