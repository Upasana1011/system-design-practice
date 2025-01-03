//* JavaScript objects form a chain called the prototype chain, 
//* where objects can inherit properties and methods from other objects.

const parent = { greet: function() { console.log("Hello from parent!"); } };
const child = Object.create(parent);

child.greet(); // Output: Hello from parent!
console.log(child.__proto__ === parent); // Output: true
