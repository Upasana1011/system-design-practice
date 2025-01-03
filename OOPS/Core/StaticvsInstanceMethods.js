//* Static vs Instance Methods in Object-Oriented Programming (OOP):

//** Static Methods:
// Static methods are methods that belong to the class itself rather than to instances of the class. They can be called directly on the class and do not require an instance of the class to be created.

// Characteristics of Static Methods:
// - Static methods are called on the class itself, not on instances of the class.
// - They do not have access to instance-specific data (i.e., properties of an object created from the class).
// - They are used for functionality that is related to the class but does not need access to instance properties.
// - Static methods are typically used for utility functions, helper methods, or factory methods that are associated with the class but do not operate on instance data.

// Example of Static Method:
class MathUtils {
    // Static method to add two numbers
    static add(a, b) {
      return a + b;
    }
  
    // Static method to subtract two numbers
    static subtract(a, b) {
      return a - b;
    }
  }
  
  // Calling static methods without creating an instance
  console.log(MathUtils.add(5, 3)); // Output: 8
  console.log(MathUtils.subtract(10, 4)); // Output: 6
  
  // Static methods can also be used as utility functions for operations that do not depend on instance data.
  
  
  //** Instance Methods:
  // Instance methods are methods that are bound to an instance of the class. They operate on the instance data (properties) and can access and modify the instance's state. These methods are called on an object created from the class.
  
  // Characteristics of Instance Methods:
  // - Instance methods operate on an instance of the class (i.e., an object).
  // - They can access and modify the properties of that instance.
  // - They are used to define behavior that depends on the instance state.
  // - Instance methods are typically used for operations that require knowledge of the specific object or its state.
  
  // Example of Instance Method:
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Instance method to calculate area
    calculateArea() {
      return this.width * this.height;
    }
  
    // Instance method to calculate perimeter
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Creating an instance of Rectangle
  const rect = new Rectangle(5, 10);
  
  // Calling instance methods on the object
  console.log(rect.calculateArea()); // Output: 50
  console.log(rect.calculatePerimeter()); // Output: 30
  
  // Instance methods are called on the object, and they can modify or access the object’s internal state.
  
  
  //** Detailed Distinction between Static and Instance Methods:
  
  // 1. **Usage Context**:
  //    - Static methods are called on the class itself and do not require an instance of the class. They are typically used for utility or helper functions.
  //    - Instance methods are called on objects (instances of the class) and rely on instance data (properties). They define behavior specific to that object.
  
  
  // 2. **Access to Instance Data**:
  //    - Static methods do not have access to instance data. They can only operate on static properties or parameters passed to them.
  //    - Instance methods can access and modify instance properties (data that is unique to each object).
  
  
  // 3. **Memory Efficiency**:
  //    - Static methods are memory-efficient because there is only one copy of the static method shared across all instances of the class.
  //    - Instance methods are stored in each individual object, which could lead to slightly higher memory consumption if many instances are created, though this is usually not significant unless there are many instances.
  
  
  // 4. **Inheritance and Overriding**:
  //    - Static methods are inherited by subclasses, but they are not polymorphic (cannot be overridden the same way instance methods can). You can call the static method using the class name, but subclassing doesn’t change their behavior unless explicitly overridden.
  //    - Instance methods can be overridden by subclasses, allowing for polymorphic behavior. This is useful when a subclass needs to provide a specific implementation of an instance method.
  
  
  // 5. **Binding Context (`this`)**:
  //    - Static methods do not have a `this` context bound to instances. In fact, inside a static method, `this` refers to the class itself (or is `undefined` in strict mode).
  //    - Instance methods have a `this` context bound to the specific instance of the class. The `this` keyword in instance methods refers to the object on which the method was called.
  
  
  // Example: **Static Method vs Instance Method**
  
  class Counter {
    static count = 0; // Static property
  
    constructor() {
      this.instanceCount = ++Counter.count; // Instance property that increments static count
    }
  
    // Static method
    static getStaticCount() {
      return Counter.count;
    }
  
    // Instance method
    getInstanceCount() {
      return this.instanceCount;
    }
  }
  
  // Create instances of Counter
  const counter1 = new Counter();
  const counter2 = new Counter();
  
  // Calling static method directly from class
  console.log(Counter.getStaticCount()); // Output: 2 (This can be called without an instance)
  
  // Calling instance methods on the objects
  console.log(counter1.getInstanceCount()); // Output: 1
  console.log(counter2.getInstanceCount()); // Output: 2
  
  //* Breakdown of the Example:
  // **Static Method:** `getStaticCount` is called on the class itself, not requiring any instance. It returns the static property `count`, which tracks the number of instances created.
  // **Instance Method:** `getInstanceCount` is called on instances of the `Counter` class, and it returns a property unique to each instance (`instanceCount`).
  
  
  //** Advantages of Static Methods:**
  // - Can be called without instantiating the class.
  // - Ideal for utility functions or operations that don’t depend on instance data.
  // - Often used for creating helper methods, factory functions, or managing shared class-level state.
  
  
  //** Advantages of Instance Methods:**
  // - Can interact with instance data, making them ideal for behavior that depends on object-specific properties.
  // - Allows for polymorphism and method overriding, making them essential for object-oriented design and inheritance.
  