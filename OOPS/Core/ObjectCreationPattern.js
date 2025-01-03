//* Object Creation Patterns are design patterns that deal with the process of creating objects in a flexible and scalable way. These patterns focus on how objects are created, initialized, and managed in an application. The goal is to ensure that object creation is simple, efficient, and adaptable to future changes.

//* Key Object Creation Patterns:
//** Singleton Pattern: Ensures that a class has only one instance and provides a global access point to that instance.
//** Factory Method Pattern: Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
//** Abstract Factory Pattern: Creates families of related or dependent objects without specifying their concrete classes.
//** Builder Pattern: Allows for the construction of complex objects step by step.
//** Prototype Pattern: Creates new objects by copying an existing object (prototyping).

//* How Object Creation Patterns Work:
//** These patterns abstract the object creation process to allow for more flexibility and maintainability.
//** They encapsulate the logic of how objects are created, which can improve code reuse and reduce the complexity of managing object creation.
//** The patterns help decouple the client code from the concrete object creation logic, making the system more adaptable to changes.

//* Example: Singleton Pattern

// Singleton Pattern ensures only one instance of a class is created and provides a global point of access to that instance.
class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance; // If instance already exists, return the existing instance
      }
      this.data = 'Some data';
      Singleton.instance = this; // Assign the current instance to the static instance property
    }
  
    getData() {
      return this.data;
    }
  }
  
  // Creating multiple instances of Singleton class
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // Output: true (Both instances are the same)
  
  //* Breakdown of the Example:
  //** Singleton Pattern: The `Singleton` class ensures only one instance is created by checking if the `Singleton.instance` property already exists. If it does, it returns the existing instance; otherwise, it creates a new instance.
  //** Global Access: The singleton instance can be accessed by calling the class constructor, but the internal logic prevents the creation of more than one instance.
  
  //* Example: Factory Method Pattern
  
  // The Factory Method Pattern defines a method for creating objects but lets subclasses decide which class to instantiate.
  class Animal {
    speak() {
      console.log('Animal speaks');
    }
  }
  
  // Concrete class Dog
  class Dog extends Animal {
    speak() {
      console.log('Dog barks');
    }
  }
  
  // Concrete class Cat
  class Cat extends Animal {
    speak() {
      console.log('Cat meows');
    }
  }
  
  // Factory method to create animals
  function createAnimal(type) {
    if (type === 'dog') {
      return new Dog();
    } else if (type === 'cat') {
      return new Cat();
    }
    return new Animal();
  }
  
  // Creating animals using the factory method
  const dog = createAnimal('dog');
  const cat = createAnimal('cat');
  
  dog.speak(); // Output: Dog barks
  cat.speak(); // Output: Cat meows
  
  //* Breakdown of the Example:
  //** Factory Method: The `createAnimal` function is a factory method that creates an animal based on the provided type. It returns an instance of either `Dog` or `Cat` depending on the type argument.
  //** Flexibility: The client code does not need to know the concrete class to instantiate, making it flexible for future extensions (e.g., adding new animal types).
  
  //* Example: Builder Pattern
  
  // The Builder Pattern allows for step-by-step creation of a complex object.
  class Car {
    constructor() {
      this.make = '';
      this.model = '';
      this.color = '';
    }
  
    setMake(make) {
      this.make = make;
    }
  
    setModel(model) {
      this.model = model;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    show() {
      console.log(`Car: ${this.make} ${this.model} ${this.color}`);
    }
  }
  
  // Builder class for constructing the Car object
  class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setMake(make) {
      this.car.setMake(make);
      return this;
    }
  
    setModel(model) {
      this.car.setModel(model);
      return this;
    }
  
    setColor(color) {
      this.car.setColor(color);
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  
  // Creating a car object using the builder pattern
  const builder = new CarBuilder();
  const car = builder.setMake('Toyota').setModel('Camry').setColor('Red').build();
  car.show(); // Output: Car: Toyota Camry Red
  
  //* Breakdown of the Example:
  //** Builder Pattern: The `CarBuilder` class provides methods to set various properties of a `Car` object. The builder returns the `Car` object after all properties are set.
  //** Step-by-step Construction: The client can build a `Car` object in a flexible way by chaining setter methods, making it easier to create complex objects with many properties.
  
  
  //* Advantages of Object Creation Patterns:
  //** Flexibility: These patterns provide flexibility in how objects are created, initialized, and extended.
  //** Code Reuse: Common object creation logic is abstracted into reusable classes or functions.
  //** Maintainability: By decoupling object creation from the client code, it is easier to modify object creation logic without affecting the rest of the system.
  //** Scalability: Patterns like the Factory Method and Builder allow for easy extension by adding new concrete classes without changing existing code.
  
  //* Use Cases:
  //** Singleton Pattern is often used for managing shared resources, such as a database connection or logging system.
  //** Factory Method and Abstract Factory are useful when creating families of related objects, especially in frameworks and libraries.
  //** Builder Pattern is useful for creating complex objects like UI components, documents, or configuration objects that require many optional parameters.
  //** Prototype Pattern is useful when cloning complex objects or when objects need to be created based on existing templates.
  
  