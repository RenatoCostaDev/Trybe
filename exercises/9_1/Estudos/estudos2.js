const assert = require('assert');

// funções q usam destructuring nos dados recebidos da função(getUser())
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => { // função q retorna um objeto
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

setTimeout(() => assert.equal(getUser(userFullName),"Hello! My name is Ivan Ivanovich", 3000));
setTimeout(() => assert.equal(getUser(userNationality),"Ivan is Russian", 3000));


