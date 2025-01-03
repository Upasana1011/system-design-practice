//* JavaScript does not support multiple inheritance natively but can be simulated using mixins.

const canFly = {
    fly() {
      console.log("Flying...");
    },
  };
  
  const canSwim = {
    swim() {
      console.log("Swimming...");
    },
  };
  
  class Bird {}
  Object.assign(Bird.prototype, canFly, canSwim);
  
  const penguin = new Bird();
  penguin.fly(); // Output: Flying...
  penguin.swim(); // Output: Swimming...
  