//* Objects in JavaScript can be extended dynamically, even after creation.

const car = { brand: "Tesla" };
car.model = "Model S";
car.drive = function () {
  console.log(`${this.brand} ${this.model} is driving!`);
};

car.drive(); // Output: Tesla Model S is driving!
