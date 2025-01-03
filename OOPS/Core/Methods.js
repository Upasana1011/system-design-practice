// * Methods are functions defined inside a class or an object. They operate on the object's data.

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(5, 3)); // Output: 8
  console.log(calc.subtract(5, 3)); // Output: 2
  