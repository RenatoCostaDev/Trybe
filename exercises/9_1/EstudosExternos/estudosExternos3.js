const http = require('http');
// obs: a letra compõe a url
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  //             CBK
  http.get(url, res =>{
    let resultado = '';

    res.on('data', dados =>{
      resultado += dados;
    })
    res.on('end', () => {
      callback(JSON.parse(resultado));
    })
  })
}
// let nomes = [];
// getTurma('A', alunos => {
//   console.log(alunos);
// })

let nomes = [];
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
    console.log(nomes);
  })
})
// obs: para salvar em um array teria que intercalar...solução? => promises!