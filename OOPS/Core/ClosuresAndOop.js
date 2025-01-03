//* Closures can be used to simulate private properties and methods in JavaScript.

function Person(name) {
    let _name = name; // Private variable
  
    return {
      getName() {
        return _name;
      },
      setName(newName) {
        _name = newName;
      },
    };
  }
  
  const person = Person("Nanda");
  console.log(person.getName()); // Output: Nanda
  person.setName("Kishor");
  console.log(person.getName()); // Output: Kishor
  