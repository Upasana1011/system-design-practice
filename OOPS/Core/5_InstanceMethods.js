//* In JavaScript, instance methods are methods that are defined inside a class and 
//* are accessible via instances (objects) of that class. These methods operate on the specific
//* instance of the object and can access and modify the instance's properties.

//* When you create an instance of a class, it has its own set of properties and methods.  Instance
//* methods are typically used to define actions that are specific to an instance of the class

class Person {
    // Constructor method
    constructor(name, age) {
      this.name = name; // instance property
      this.age = age;   // instance property
    }
  
    // Instance method
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Calling the instance method on different instances
  person1.sayHello(); // Hello, my name is Alice and I am 30 years old.
  person2.sayHello(); // Hello, my name is Bob and I am 25 years old.
  

  //* Explanation:
//* Instance Methods: In this example, sayHello() is an instance method defined inside the Person class. 
//* It is called on an instance of the class, like person1 or person2.

//* Accessing Instance Properties: Inside the sayHello() method, we access the instance properties this.name and this.age. 
//* These properties are specific to the individual instance of the Person class.

//* Behavior: Each instance can call the sayHello() method and display its own unique message, because the this keyword 
//* refers to the current instance of the object.

//* Key Points:
//* Instance methods are specific to individual instances of a class.
//* They are defined inside the class, but outside of the constructor.
//* These methods have access to the instance’s properties using the this keyword.
//* They can modify the instance’s properties or perform actions on the instance.
