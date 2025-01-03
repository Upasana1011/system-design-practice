//* A factory function is a regular function that creates and returns objects,
//* offering a flexible alternative to class-based object creation.

function createCar(brand, model) {
    return {
      brand,
      model,
      drive() {
        console.log(`${this.brand} ${this.model} is driving!`);
      },
    };
  }
  
  const car = createCar("Tesla", "Model S");
  car.drive(); // Output: Tesla Model S is driving!
  