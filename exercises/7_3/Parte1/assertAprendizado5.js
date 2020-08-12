const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual( obj1,obj2,'Error: not stricted equals!');
assert.deepEqual( obj1,obj2,'Error: not stricted equals!');

assert.notDeepStrictEqual( obj2,obj3,'Error: stricted equals!');
assert.notDeepStrictEqual( obj3,obj1,'Error: stricted equals!');

