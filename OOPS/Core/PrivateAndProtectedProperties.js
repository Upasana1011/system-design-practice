//* With JavaScript ES2020, private fields can be defined using a # prefix.

class Counter {
    #count = 0; // Private field
  
    increment() {
      this.#count++;
    }
  
    getCount() {
      return this.#count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  console.log(counter.getCount()); // Output: 1
  // console.log(counter.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class
  