//* The constructor method is a special function in a class that initializes
//*  the object’s properties when it is created.

class Laptop {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    showDetails() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
  }
  
  const myLaptop = new Laptop("Apple", "MacBook Pro");
  myLaptop.showDetails(); // Output: Brand: Apple, Model: MacBook Pro
  