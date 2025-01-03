//* Object.freeze(): Prevents modifications to an object.

//* Object.seal(): Prevents adding or deleting properties but allows modification of existing properties.

const obj = { name: "Nanda" };
Object.freeze(obj);

obj.name = "Kishor"; // Ignored
console.log(obj.name); // Output: Nanda
