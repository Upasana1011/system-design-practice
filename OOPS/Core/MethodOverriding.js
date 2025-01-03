//* Method Overriding is an OOP concept where a subclass provides a specific implementation for a method that is already defined in its superclass. The purpose of overriding is to change or extend the behavior of a method inherited from the parent class in the child class. It allows a subclass to provide a more specialized or specific implementation of the method based on its requirements.

//* Key Concepts:

//** Inheritance: The subclass inherits methods from the superclass, which can be overridden to provide a different implementation.
//** Overriding: The process of defining a method in the subclass that has the same name, signature, and return type as the method in the superclass.
//** Super: The `super` keyword is often used in the subclass to call the method of the parent class, if needed.

//* How it Works:
//** The child class overrides the method defined in the parent class.
//** The overridden method in the child class has the same signature (name, parameters, and return type) as the method in the parent class.
//** The subclass method will be called instead of the parent class method when invoked on an instance of the subclass.

//* Example:

// Base class (Parent class)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method to be overridden
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Derived class (Child class)
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    // Overriding the speak method
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Derived class (Child class)
  class Cat extends Animal {
    constructor(name, color) {
      super(name); // Call the parent constructor
      this.color = color;
    }
  
    // Overriding the speak method
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  // Creating instances of the classes
  const dog = new Dog('Buddy', 'Golden Retriever');
  const cat = new Cat('Whiskers', 'Black');
  
  // Calling the overridden methods
  dog.speak(); // Output: Buddy barks.
  cat.speak(); // Output: Whiskers meows.
  
  //* Breakdown of the Example:
  //** Parent Class: The `Animal` class defines a `speak` method that provides a general behavior for making a sound.
  //** Child Classes: The `Dog` and `Cat` classes both inherit from `Animal` and override the `speak` method to provide specific behaviors (barking and meowing).
  //** Overriding: The `speak` method in the `Dog` and `Cat` classes overrides the `speak` method in the `Animal` class, so when `speak()` is called on instances of `Dog` and `Cat`, their respective implementations are executed.
  
  //* Advantages of Method Overriding:
  //** Polymorphism: Method overriding is a key aspect of polymorphism, where the same method name behaves differently based on the object calling it (dynamic method dispatch).
  //** Code Reusability: By overriding methods, subclasses can reuse the code of the superclass while providing their own specific functionality.
  //** Extensibility: The behavior of inherited methods can be extended or modified by overriding them in the subclass, enabling flexibility in object behavior.
  
  //* Use Cases:
  //** Specialized behavior in subclasses (e.g., different types of animals making different sounds)
  //** Handling different behavior in a UI framework (e.g., a generic `render` method overridden by different components)
  //** Extending the functionality of inherited methods in libraries or frameworks
  
  //* Variations:
  //** Method Overloading vs. Method Overriding: Method overloading involves defining multiple methods with the same name but different parameters (not supported in JavaScript), while method overriding involves redefining a method with the same signature in the subclass.
  //** Super Keyword: The `super` keyword can be used in the overridden method to call the parent class method, which is useful if the child class wants to extend or modify the functionality of the parent method.
  
  //* In summary, method overriding is a fundamental concept in OOP that allows subclasses to define their own version of a method already defined in the parent class, facilitating polymorphism, code reusability, and flexible object behavior.
  