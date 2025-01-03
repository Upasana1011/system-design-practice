//* Objects delegate method calls to another object, commonly their prototype.

const dog = {
    speak() {
      console.log("Woof!");
    },
  };
  
  const puppy = Object.create(dog);
  puppy.speak(); // Output: Woof!
  