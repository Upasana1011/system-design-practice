//* Creating copies of objects (shallow or deep) is a 
//* critical part of working with objects in JavaScript.


//? Shallow Copy
//* Copies the object structure but not the nested objects.

const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 42;
console.log(original.b.c); // Output: 42 (changes in shallowCopy affect original)


//? Deep Copy
//* Copies the entire object structure, including nested objects.

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 21;
console.log(original.b.c); // Output: 42 (changes in deepCopy do not affect original)