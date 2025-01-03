//* Polymorphism in Object-Oriented Programming (OOP)

//* Polymorphism is one of the core principles of Object-Oriented Programming (OOP),
//* and it refers to the ability of different objects to respond to the same method in a way that is specific to their type.
//* The term "polymorphism" comes from Greek, meaning "many forms," and it allows for methods to behave differently depending on the object
//* that is calling them, making the code more flexible and reusable.

//* Types of Polymorphism:
//* 1. Compile-time Polymorphism (Static Polymorphism):
//*    - This is resolved at compile-time and includes method overloading and operator overloading (not directly supported in JavaScript).
//*    - Method overloading allows multiple methods with the same name but different parameters.
//*    - JavaScript doesn't support method overloading directly, but we can achieve similar behavior by handling variable arguments in a function.

//* 2. Runtime Polymorphism (Dynamic Polymorphism):
//*    - This occurs when a method in a superclass is overridden by a subclass.
//*    - It allows the same method to behave differently based on the object's type at runtime.
//*    - JavaScript uses runtime polymorphism, where the method that gets executed is determined at runtime based on the object's actual class.


//* Example demonstrating Polymorphism in JavaScript:

//* Base class (Superclass)
class Animal {
    //* Constructor for the base class
    constructor(name) {
      this.name = name;
    }
  
    //* Method that will be overridden by subclasses
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  //* Derived class (Subclass)
  class Dog extends Animal {
    //* Constructor for the subclass
    constructor(name, breed) {
      super(name);  // Call the constructor of the superclass
      this.breed = breed;
    }
  
    //* Overriding the speak() method from the superclass
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  //* Derived class (Subclass)
  class Cat extends Animal {
    //* Constructor for the subclass
    constructor(name, breed) {
      super(name);  // Call the constructor of the superclass
      this.breed = breed;
    }
  
    //* Overriding the speak() method from the superclass
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  //* Creating instances of the subclasses
  const dog = new Dog('Rex', 'Golden Retriever');
  const cat = new Cat('Whiskers', 'Persian');
  
  //* Polymorphism in action: Calling the same method on different objects
  dog.speak();  // Output: Rex barks.
  cat.speak();  // Output: Whiskers meows.
  
  
  //* Breakdown of the Example:
  //* 1. The `Animal` class is the superclass that defines a generic `speak()` method, which can be inherited by subclasses.
  //* 2. The `Dog` and `Cat` classes are subclasses that override the `speak()` method to provide their specific behavior.
  //* 3. When we call the `speak()` method on `dog` and `cat`, polymorphism ensures that the correct version of `speak()` is called based on the actual type of the object, not its reference type.
  
  //* Key Benefits of Polymorphism:
  //* 1. Flexibility:
  //*    - Polymorphism allows for writing more flexible and reusable code, where the same method can be used with different types of objects.
  //*    - In the example above, we can call the `speak()` method on any object of type `Animal`, and it will behave differently depending on whether it's a `Dog` or a `Cat`.
  //* 2. Code Simplification:
  //*    - Polymorphism allows you to use the same method name across different classes, which reduces complexity by avoiding the need for different method names for similar actions.
  //*    - For instance, both `Dog` and `Cat` classes use the same `speak()` method, but with different implementations.
  //* 3. Reusability:
  //*    - Polymorphism allows code to be more reusable, as it can handle different types of objects with the same interface (e.g., `Animal` class in this case).
  
  
  //* Example Use Cases of Polymorphism:
  //* - **UI frameworks:** Different UI components (buttons, checkboxes, sliders) can all respond to a generic `click()` method in their own way.
  //* - **Shape Drawing:** A graphics library might have a `draw()` method for different shapes (circle, rectangle, square), with each shape implementing its own version of `draw()`.
  //* - **Event Handling:** Multiple event listeners might all handle the same event (e.g., `click`), but each listener could take a different action based on the specific type of object.
  
  
  //* In Summary:
  //* - Polymorphism allows methods to behave differently based on the object's type at runtime.
  //* - It provides flexibility, reusability, and simplification by allowing the same method name to be used across different types of objects.
  //* - In JavaScript, polymorphism is primarily achieved through method overriding, where a subclass provides its own implementation of a method inherited from a superclass.
  