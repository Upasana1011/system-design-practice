//* Mixins are a way to add shared behavior between classes without using inheritance.

let FlyMixin = (Base) =>
    class extends Base {
      fly() {
        console.log(`${this.name} is flying!`);
      }
    };
  
  class Bird {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Eagle extends FlyMixin(Bird) {}
  
  const eagle = new Eagle("Golden Eagle");
  eagle.fly(); // Output: Golden Eagle is flying!
  