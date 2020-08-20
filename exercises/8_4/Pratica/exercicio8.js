const assert = require('assert')

// escreva greet abaixo
const greet = (a, b = 'Hi') => {
    return b.concat(' ').concat(a);
}

console.log(greet("John"));
console.log(greet("John", "Good morning"));
console.log(greet("Isabela", "Oi"));

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")

