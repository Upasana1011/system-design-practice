//* Abstraction in Object-Oriented Programming (OOP)

//* Abstraction is one of the fundamental concepts in OOP, and it refers to the practice of
//* hiding complex implementation details and showing only the necessary features of an object.
//* It allows a programmer to focus on the essential characteristics of an object,
//* while ignoring the irrelevant details. Abstraction helps in reducing complexity and makes the
//* code more modular and easier to understand.

//* In simpler terms, abstraction allows you to define "what" an object does,
//* without necessarily having to know "how" it does it.

//* Key Points of Abstraction:
//* 1. Hiding Implementation Details: 
//*    - You only expose the necessary functionality of an object, keeping the implementation details hidden. 
//*    - This is particularly useful when you're working with complex systems, where you don't want every user
//*      of the object to deal with the intricate details of how things work.

//* 2. Simplifying Interaction:
//*    - By defining clear interfaces and hiding the internal workings, you can interact with objects in a simplified
//*      manner. This reduces the chances of errors and makes the codebase easier to maintain.
   
//* 3. Helps in Code Reusability:
//*    - Abstraction encourages you to design reusable and modular components that can be used in different contexts
//*      without concern for the specific implementation details.


//* How Abstraction Works in JavaScript:
//* JavaScript does not have native abstract classes like languages such as Java or C++.
//* However, you can achieve abstraction using classes and methods in JavaScript, by making use of:
//* - Abstract Methods (methods that are declared but not implemented in a class)
//* - Interfaces (through design patterns like the Factory or Strategy pattern)


//* Example demonstrating abstraction using classes and abstract-like methods in JavaScript:

//* Abstract class (using constructor function)
function Animal() {
    if (this.constructor === Animal) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }
  
  Animal.prototype.speak = function() {
    throw new Error("Method 'speak()' must be implemented.");
  };
  
  //* Concrete class extending Animal
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.speak = function() {
    console.log(this.name + " says Woof!");
  };
  
  //* Concrete class extending Animal
  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.speak = function() {
    console.log(this.name + " says Meow!");
  };
  
  //* Usage
  const dog = new Dog("Rex");
  dog.speak();  // Output: Rex says Woof!
  
  const cat = new Cat("Whiskers");
  cat.speak();  // Output: Whiskers says Meow!
  
  
  //* Breakdown of the Example:
  //* 1. Abstract Class (`Animal`): 
  //*    - The `Animal` function acts as an abstract class. It cannot be instantiated directly. 
  //*    - It defines an abstract method `speak()`, which is not implemented. This enforces that any subclass of `Animal`
  //*      must implement the `speak()` method. 
  //*    - If you try to create an instance of `Animal`, it throws an error.
  
  //* 2. Concrete Classes (`Dog` and `Cat`):
  //*    - `Dog` and `Cat` are concrete implementations of the abstract class `Animal`. 
  //*      These classes implement the `speak()` method, fulfilling the contract established by the abstract class.
    
  //* 3. Notification:
  //*    - When the `speak()` method is called on a concrete instance (like `dog.speak()`), 
  //*      the respective method in the concrete class gets executed. It avoids the internal implementation details 
  //*      from the calling code, showing only the necessary behavior.
  
  
  //* Key Benefits of Abstraction:
  //* 1. Code Simplification:
  //*    - You can simplify complex systems by focusing on the essential components, while leaving out the unnecessary complexity.
     
  //* 2. Decoupling:
  //*    - Abstraction helps decouple different parts of the program. For example, if a change occurs in the internal workings
  //*      of a class, the rest of the program (that uses the class) doesn’t need to know about it.
  
  
  //* 3. Increased Modularity:
  //*    - Abstracting common behavior allows you to define a single interface or blueprint for different implementations. 
  //*      This modularity enables easier maintenance and extension of the code.
  
  //* 4. Flexibility:
  //*    - By working with abstract concepts, you can easily swap out different implementations. 
  //*      For example, you can easily swap out a `Dog` for a `Cat`, or even introduce a new type of `Animal`, 
  //*      without affecting the rest of the program.
  
  
  //* Example Use Cases of Abstraction:
  //* - Database Connections: An abstract class might define how to connect to a database, 
  //*   while the concrete class would define whether you're connecting to MySQL, MongoDB, or another type of database.
  //* - User Interfaces: An abstract `Button` class could define a method for `render()`, 
  //*   while the concrete classes implement specific rendering behaviors for different button styles or platforms.
  //* - Shape Drawing: An abstract `Shape` class could define methods for calculating the area or perimeter, 
  //*   while concrete classes like `Circle` or `Rectangle` implement the specific details of how those calculations are performed.
  
  
  //* In Summary:
  //* - Abstraction in OOP allows you to hide complexity and only expose what is necessary.
  //* - JavaScript provides ways to simulate abstraction even though it lacks built-in support for abstract classes.
  //* - Abstraction leads to cleaner, easier-to-maintain, and more flexible code by focusing on the essential functionality
  //*   and abstracting away unnecessary details.
  