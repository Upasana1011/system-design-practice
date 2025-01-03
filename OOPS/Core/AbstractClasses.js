//* Abstract Classes (Optional in JavaScript):

//** What is an Abstract Class?
// An abstract class is a class that cannot be instantiated directly. It serves as a blueprint for other classes to extend. It is used to define common behavior or attributes that can be shared by subclasses, while also allowing subclasses to provide specific implementations for certain methods.
// In languages like Java or C#, abstract classes are explicitly defined with the `abstract` keyword. However, in JavaScript, there is no built-in `abstract` keyword, but the concept can still be achieved using a combination of class methods and inheritance.

//** Characteristics of Abstract Classes:
// - **Cannot be instantiated directly:** You cannot create an instance of an abstract class itself. You can only create instances of concrete subclasses that extend the abstract class.
// - **Provides a blueprint:** Abstract classes often define methods or properties that must be implemented by concrete subclasses. These are referred to as abstract methods.
// - **May contain implementation:** Abstract classes can have both abstract methods (without implementation) and concrete methods (with implementation).
// - **Used for inheritance:** They are used to provide a base class for other classes to inherit from, sharing common behavior and attributes, while allowing flexibility in specific implementations.


//** How to Simulate Abstract Classes in JavaScript:
// JavaScript does not have a built-in `abstract` keyword, but we can simulate abstract classes by throwing an error in a method, which forces subclasses to implement it. This helps ensure that certain methods are always defined in subclasses.

// Example of Simulating an Abstract Class in JavaScript:

// Abstract class simulation using JavaScript:
class Animal {
    constructor(name) {
      if (new.target === Animal) {
        throw new Error('Cannot instantiate an abstract class directly.');
      }
      this.name = name;
    }
  
    // Abstract method (must be implemented by subclass)
    makeSound() {
      throw new Error('Abstract method "makeSound" must be implemented by subclass.');
    }
  
    // Concrete method (can be shared by subclasses)
    describe() {
      console.log(`This is a(n) ${this.name}.`);
    }
  }
  
  // Subclass (Concrete class) that extends the abstract class Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the constructor of the Animal class
      this.breed = breed;
    }
  
    // Implementing the abstract method
    makeSound() {
      console.log(`${this.name} says Woof!`);
    }
  
    // Additional method specific to the Dog class
    displayBreed() {
      console.log(`This dog is a ${this.breed}.`);
    }
  }
  
  // Subclass (Concrete class) that extends the abstract class Animal
  class Cat extends Animal {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
  
    // Implementing the abstract method
    makeSound() {
      console.log(`${this.name} says Meow!`);
    }
  
    // Additional method specific to the Cat class
    displayColor() {
      console.log(`This cat is ${this.color}.`);
    }
  }
  
  // Creating instances of concrete subclasses
  const dog = new Dog('Buddy', 'Golden Retriever');
  dog.describe();  // Output: This is a(n) Buddy.
  dog.makeSound(); // Output: Buddy says Woof!
  dog.displayBreed(); // Output: This dog is a Golden Retriever.
  
  const cat = new Cat('Whiskers', 'Black');
  cat.describe();  // Output: This is a(n) Whiskers.
  cat.makeSound(); // Output: Whiskers says Meow!
  cat.displayColor(); // Output: This cat is Black.
  
  
  //** Breakdown of the Example:
  // - **Abstract Class:** The `Animal` class is abstract. You cannot create an instance of `Animal` directly. The `makeSound` method is abstract, meaning it is not implemented in the `Animal` class and must be implemented in subclasses.
  // - **Concrete Classes:** `Dog` and `Cat` are concrete subclasses of `Animal`. These classes implement the `makeSound` method, providing their specific behaviors.
  // - **Error Handling:** If someone tries to instantiate the `Animal` class directly, an error will be thrown: `Cannot instantiate an abstract class directly`.
  // - **Inheritance and Method Overriding:** Both `Dog` and `Cat` inherit from `Animal`, allowing them to share common methods like `describe()`, while each provides its specific implementation of the `makeSound` method.
  
  
   //** Advantages of Using Abstract Classes:
   // - **Code Reusability:** Abstract classes allow common functionality (such as the `describe` method in the example) to be shared across all subclasses.
   // - **Consistency and Structure:** Abstract classes enforce a certain structure on the subclasses. By requiring that subclasses implement specific methods, abstract classes help maintain consistency in the application.
   // - **Flexibility:** While abstract classes define mandatory methods, they also allow for flexible implementation in subclasses. Subclasses can implement these methods differently while adhering to the same interface.
  
   //** When to Use Abstract Classes in JavaScript:
   // - Use abstract classes when you have common behavior or attributes that should be shared across multiple classes.
   // - Use abstract methods to define a contract that subclasses must adhere to, ensuring that certain methods are implemented in all subclasses.
   // - Use abstract classes when you want to prevent direct instantiation of a class that is meant to serve only as a base class for other classes.
  
  