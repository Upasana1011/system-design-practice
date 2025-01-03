//* Inheritance in Object-Oriented Programming (OOP)

//* Inheritance is one of the core principles of Object-Oriented Programming (OOP),
//* and it refers to the mechanism by which one class (called the subclass or derived class) can inherit 
//* properties and methods from another class (called the superclass or base class).
//* This allows a subclass to reuse code from the superclass and extend or modify its behavior.


//* Key Concepts of Inheritance:
//* 1. Reusability:
//*    - Inheritance allows subclasses to reuse the code of the superclass, which reduces redundancy and promotes code reuse.
//*    - Subclasses can directly use methods and properties from the superclass, eliminating the need to duplicate common functionality.
//* 
//* 2. Extensibility:
//*    - Subclasses can extend the functionality of a superclass by adding new methods or properties, or by overriding existing ones.
//*    - This enables subclasses to modify or enhance the behavior of the inherited methods as needed.

//* 3. Hierarchy:
//*    - Inheritance establishes a hierarchical relationship between the parent (superclass) and child (subclass) classes.
//*    - This relationship often models real-world hierarchies, such as animals inheriting from a generic "Animal" class, or vehicles
//*      inheriting from a generic "Vehicle" class.

//* 4. Method Overriding:
//*    - Subclasses can override methods inherited from the superclass to provide their own specific implementation,
//*      allowing more specialized behavior while still maintaining the overall structure from the parent class.


//* Example demonstrating inheritance in JavaScript:

//* Base class (Superclass)
class Animal {
    //* Constructor for the base class
    constructor(name) {
      this.name = name;
    }
  
    //* Method that can be inherited by subclasses
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  //* Derived class (Subclass) inheriting from Animal class
  class Dog extends Animal {
    //* Constructor for the subclass
    constructor(name, breed) {
      super(name);  // Call the constructor of the superclass
      this.breed = breed;
    }
  
    //* Method overriding (Customizing inherited method)
    speak() {
      console.log(`${this.name} barks.`);
    }
  
    //* Additional method specific to the subclass
    getBreed() {
      console.log(`${this.name} is a ${this.breed}.`);
    }
  }
  
  //* Creating an instance of the subclass Dog
  const dog = new Dog('Rex', 'Golden Retriever');
  
  //* Calling methods on the subclass object
  dog.speak();  // Output: Rex barks.
  dog.getBreed();  // Output: Rex is a Golden Retriever.
  
  
  //* Breakdown of the Example:
  //* 1. The `Animal` class is the superclass that defines a generic `speak()` method and has a `name` property.
  //* 2. The `Dog` class is the subclass that inherits from the `Animal` class using the `extends` keyword.
  //* 3. The `Dog` class overrides the `speak()` method to provide its own behavior, replacing the generic message
  //*    with a specific one for dogs (i.e., "barks").
  //* 4. The `Dog` class also adds a new method `getBreed()` that is not present in the superclass.
  
  
  //* Key Benefits of Inheritance:
  //* 1. Code Reusability:
  //*    - Inheritance allows a subclass to reuse the code from the superclass, reducing the need to rewrite common logic.
  //*    - For example, the `speak()` method in the `Animal` class is reused in the `Dog` class, reducing code duplication.
  
  //* 2. Extensibility:
  //*    - Subclasses can extend or customize the behavior of the superclass, making it easier to add specialized functionality.
  //*    - The `Dog` class extends the `Animal` class and overrides the `speak()` method to give a dog-specific behavior.
  
  //* 3. Hierarchical Structure:
  //*    - Inheritance establishes a hierarchical relationship between classes, which can make code easier to understand and maintain.
  //*    - For instance, we can infer from the example that "Dog" is a more specific type of "Animal."
  
  //* 4. Method Overriding:
  //*    - Subclasses can provide their own implementation for inherited methods, which allows for flexibility and specialization
  //*      of behavior. This is demonstrated in the `speak()` method in the `Dog` class, where the dog's specific behavior is defined.
  
  
  //* Example Use Cases of Inheritance:
  //* - **Real-world systems:** Modeling real-world entities, such as animals inheriting from a generic "Animal" class,
  //*   vehicles inheriting from a "Vehicle" class, or employees inheriting from a general "Employee" class.
  //* - **UI frameworks:** In frameworks like React, components can extend a base class to inherit common behaviors and extend them with their own functionality.
  //* - **Gaming:** Inheritance can be used to represent different types of characters or objects in a game, with base classes for general properties and specific classes for character actions.
  
  
  //* In Summary:
  //* - Inheritance allows a subclass to inherit properties and methods from a superclass, promoting code reuse and maintainability.
  //* - Subclasses can extend or override methods to customize behavior while retaining the structure of the parent class.
  //* - Inheritance helps establish a clear hierarchy between classes, simplifying the design and implementation of systems.
  