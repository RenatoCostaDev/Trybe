const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    // return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    return reject(number);
  }
  resolve(number);
}).then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg));
.then(console.log)
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));