//* In OOP, this refers to the current instance of the object.
//* The context of this depends on how a function is called.

class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    describe() {
      console.log(`This car is a ${this.brand}.`);
    }
  }
  
  const myCar = new Car("Tesla");
  myCar.describe(); // Output: This car is a Tesla.
  