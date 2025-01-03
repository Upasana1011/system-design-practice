//* Error handling in Object-Oriented Programming (OOP) is the process of managing exceptions or errors that may occur during the execution of a program. In OOP, error handling is often implemented using mechanisms such as exceptions, try-catch blocks, and custom error classes. The goal is to ensure that errors are caught, handled properly, and that the program continues to run smoothly without unexpected crashes.

//* Key Concepts:

//** Exception: An error or unexpected event that occurs during the program execution. In OOP, exceptions are typically represented as objects, allowing for structured error handling.
//** Try-Catch: A block of code used to "try" executing code that may throw an error and "catch" it to handle it gracefully.
//** Custom Error Classes: In OOP, we can create custom error classes that extend the built-in Error class to represent specific types of errors.

//* How it Works:
//** When an error occurs, it can be thrown using the `throw` keyword, which will interrupt the normal flow of the program.
//** The code can be wrapped inside a `try` block to attempt the execution of potentially error-prone code.
//** If an error is thrown, the control is transferred to the corresponding `catch` block where the error is handled appropriately.
//** After handling the error, the program can continue executing or terminate gracefully.

//* Example:
//* Let's look at an example in JavaScript that demonstrates error handling in OOP:

// Creating a custom error class
class InvalidAgeError extends Error {
    constructor(message) {
      super(message); // Call the parent class constructor (Error)
      this.name = 'InvalidAgeError'; // Set the name of the error
    }
  }
  
  // Class with error handling
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to set the age of the person
    setAge(age) {
      if (age < 0 || age > 150) {
        throw new InvalidAgeError('Age must be between 0 and 150'); // Throw a custom error if age is invalid
      }
      this.age = age; // If the age is valid, set the person's age
    }
  }
  
  // Using try-catch to handle errors
  try {
    const person = new Person('John', 30);
    person.setAge(200); // Attempt to set an invalid age
  } catch (error) {
    if (error instanceof InvalidAgeError) {
      console.error(error.name + ': ' + error.message); // Handle specific InvalidAgeError
    } else {
      console.error('An unknown error occurred: ' + error.message); // Handle other types of errors
    }
  }
  
  // Output:
  // InvalidAgeError: Age must be between 0 and 150
  
  //* Breakdown of the Example:
  //** Custom Error Class: The `InvalidAgeError` class extends the built-in `Error` class to define a custom error type for invalid age.
  //** Throwing an Error: The `setAge` method checks if the provided age is valid. If not, it throws an `InvalidAgeError`.
  //** Try-Catch Block: The `try` block attempts to set an invalid age for the person, and if an error occurs, it is caught in the `catch` block.
  //** Handling the Error: The `catch` block checks if the error is an instance of `InvalidAgeError` and handles it accordingly.
  
  //* Advantages of Error Handling in OOP:
  //** Centralized Error Management: Errors can be handled in one place, allowing for better management and troubleshooting.
  //** Graceful Degradation: Errors can be caught and handled, allowing the program to continue running smoothly without crashing.
  //** Customization: Custom error classes allow for more specific and meaningful error messages, making it easier to debug and fix issues.
  
  //* Use Cases:
  //** User input validation (e.g., checking if an age is valid)
  //** Network requests (e.g., handling API response errors)
  //** File I/O operations (e.g., handling missing files or read/write errors)
  //** Database interactions (e.g., handling connection or query failures)
  
  //* Variations:
  //** Try-Catch Block: The `try-catch` block is the most common way to handle errors, but in some languages, there are alternative mechanisms like `finally` for cleanup or `throws` for explicitly defining exceptions.
  //** Custom Errors: Custom error classes can be used to represent specific error conditions in the program, providing more meaningful messages for debugging.
  
  //* In summary, error handling in OOP is essential for building robust applications that can handle unexpected situations gracefully, ensuring smooth program execution even when things go wrong.
  