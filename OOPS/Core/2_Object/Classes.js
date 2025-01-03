//* Using Classes (introduced in ES6):

class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    drive() {
      console.log("Driving...");
    }
  }
  
  const car = new Car("Tesla", "Model S");
  car.drive(); // Output: Driving...
  