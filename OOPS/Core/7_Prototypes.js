//* Every JavaScript object has an internal prototype (__proto__), 
//* which acts as a fallback object for property and method lookups.

function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.speak = function () {
    console.log(`${this.type} makes a sound.`);
  };
  
  const dog = new Animal("Dog");
  dog.speak(); // Output: Dog makes a sound.
  