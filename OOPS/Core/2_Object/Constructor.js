// * Using Constructor Functions:

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  const car = new Car("Tesla", "Model S");
  console.log(car.brand); // Output: Tesla