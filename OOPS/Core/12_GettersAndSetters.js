//* Getters and setters allow controlled access to an object's properties.


class Person {
    constructor(name) {
      this._name = name; // Use `_` to indicate a private property
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (newName.length > 0) {
        this._name = newName;
      } else {
        console.log("Name must be non-empty.");
      }
    }
  }
  
  const person = new Person("Nanda");
  console.log(person.name); // Output: Nanda
  person.name = "Kishor";
  console.log(person.name); // Output: Kishor
  