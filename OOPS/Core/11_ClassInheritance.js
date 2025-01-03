//* Class Inheritance is a key concept in Object-Oriented Programming where a class (known as the child or subclass) inherits properties and methods from another class (known as the parent or superclass). This allows the child class to reuse and extend the functionality of the parent class without duplicating code.

//* Key Concepts:
//** Superclass (Parent Class): The class from which properties and methods are inherited.
//** Subclass (Child Class): The class that inherits from the parent class and can add or modify properties and methods.
//** Inheritance: The mechanism by which one class inherits the properties and methods of another class, allowing for code reuse and extension.

//* How it Works:
//** A subclass inherits all the properties and methods of its superclass.
//** The subclass can also add its own properties and methods, or override methods from the superclass to change their behavior.
//** The `extends` keyword is used in JavaScript to create a subclass that inherits from a parent class.

//* Example:

// Parent class (Superclass)
class Animal {
    constructor(name) {
      this.name = name; // Property defined in the parent class
    }
  
    // Method in the parent class
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child class (Subclass) that inherits from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor to inherit properties
      this.breed = breed; // Additional property specific to Dog class
    }
  
    // Method in the child class that overrides the parent's method
    speak() {
      console.log(`${this.name} barks.`);
    }
  
    // Method specific to the Dog class
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  // Creating an instance of the Dog class
  const dog = new Dog('Buddy', 'Golden Retriever');
  
  // Accessing inherited method from the Animal class
  dog.speak(); // Output: Buddy barks.
  
  // Accessing method specific to the Dog class
  dog.fetch(); // Output: Buddy is fetching the ball.
  
  //* Breakdown of the Example:
  //** Parent Class: The `Animal` class defines a `speak` method and a `name` property.
  //** Child Class: The `Dog` class inherits from `Animal` using the `extends` keyword and calls `super(name)` in the constructor to inherit the `name` property.
  //** Overriding: The `Dog` class overrides the `speak` method to provide its own implementation (barking).
  //** New Method: The `Dog` class introduces a new method `fetch` that is not present in the `Animal` class.
  
  //* Advantages of Class Inheritance:
  //** Code Reusability: Inheritance allows the subclass to reuse code from the superclass, reducing duplication and improving maintainability.
  //** Extensibility: Subclasses can extend the functionality of the parent class by adding new methods or overriding existing ones.
  //** Polymorphism: Inheritance enables polymorphism, where a subclass object can be treated as an instance of the parent class, but with specialized behavior.
  
  //* Use Cases:
  //** Creating a hierarchy of objects that share common behavior (e.g., an Animal class with subclasses like Dog, Cat, Bird).
  //** Extending the functionality of an existing class in libraries or frameworks.
  //** Building UI components that share common features but need specialized behavior (e.g., a Button class with specialized methods for different button types).
  
  //* Variations:
  //** Single Inheritance vs. Multiple Inheritance: In JavaScript, classes can only inherit from one parent class (single inheritance). However, multiple inheritance can be simulated using mixins.
  //** Overriding vs. Extending: Overriding refers to changing a method from the parent class, while extending refers to adding new behavior or functionality in the subclass.
  
  //* In summary, class inheritance is a powerful mechanism in OOP that allows a subclass to inherit properties and methods from a superclass. This promotes code reuse, extensibility, and flexibility in object design.
  