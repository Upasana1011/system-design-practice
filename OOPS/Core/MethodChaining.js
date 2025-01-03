//* A pattern where methods return the object itself,
//* enabling multiple method calls on the same object in a chain.

class Calculator {
    constructor(value = 0) {
      this.value = value;
    }
  
    add(num) {
      this.value += num;
      return this;
    }
  
    subtract(num) {
      this.value -= num;
      return this;
    }
  
    result() {
      return this.value;
    }
  }
  
  const calc = new Calculator();
  const result = calc.add(5).subtract(2).result(); // Chaining
  console.log(result); // Output: 3
  