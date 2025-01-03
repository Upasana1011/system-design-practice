//* Object Inheritance in JavaScript

//* Object inheritance is one of the core principles of Object-Oriented Programming (OOP).
// * It allows one object to inherit properties and methods from another.
// * In JavaScript, inheritance is achieved primarily through prototypes.

//* Prototype Chain:
//* Every JavaScript object has a prototype, and if you try to access a property or method that
//* does not exist on the object itself, JavaScript looks up the prototype chain to find it.
//* The prototype chain is a series of objects linked together.
//* If an object does not have a property or method you're looking for, JavaScript will search for it
//* in the prototype chain.

//* Example of Object Inheritance using Constructor Functions:

// Parent constructor function (Base class)
function Animal(name) {
    this.name = name; // Instance property
  }
  
  // Adding an instance method to the Animal prototype
  Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise');
  };
  
  // Child constructor function (Subclass)
  function Dog(name, breed) {
    Animal.call(this, name);  // Call the parent constructor to inherit properties
    this.breed = breed;       // Additional property for Dog
  }
  
  // Set the prototype of Dog to be an instance of Animal
  Dog.prototype = Object.create(Animal.prototype);
  
  // Set the constructor property of Dog to refer to Dog
  Dog.prototype.constructor = Dog;
  
  // Add a new method specific to Dog
  Dog.prototype.bark = function() {
    console.log(this.name + ' barks');
  };
  
  // Create a new instance of Dog
  const dog1 = new Dog('Max', 'Golden Retriever');
  dog1.speak();  // Inherited method from Animal
  dog1.bark();   // Method from Dog
  
  //* Explanation of the Example:
  
  //* Parent (Base) Class - `Animal`:
  //* The `Animal` function is a constructor for creating instances of `Animal` objects.
  //* It has a method `speak` defined on its prototype, which is shared by all instances of `Animal`.
  
  //* Child (Subclass) - `Dog`:
  //* The `Dog` function is a constructor for creating instances of `Dog` objects.
  //* The `Animal.call(this, name)` within the `Dog` constructor ensures that the `Dog` instances 
  //* inherit the properties (like `name`) from the `Animal` class.
  //* `Dog.prototype = Object.create(Animal.prototype)` ensures that the `Dog` class inherits methods 
  //* (like `speak`) from the `Animal` class.
  
  //* Prototype Chain:
  //* When an instance of `Dog` is created, it has access to both its own properties and the methods 
  //* from the `Dog` prototype.
  //* If a property or method is not found on the `Dog` object itself, it will look up the prototype chain 
  //* and find the method `speak` in the `Animal` prototype.
  
  //* Key Points:
  //* Inheritance allows one object to inherit properties and methods from another object.
  //* The child class (like `Dog`) can inherit from the parent class (like `Animal`) using the prototype chain.
  //* The `super()` function (in ES6 class syntax) or `call()` method (in constructor functions) is used to
  //* call the parent constructor and inherit properties.
  //* Methods defined on the prototype of a class are shared by all instances of that class, allowing for 
  //* code reuse and organization.
  