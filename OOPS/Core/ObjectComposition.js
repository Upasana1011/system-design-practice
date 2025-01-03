//* Instead of using inheritance, JavaScript can compose objects by assigning or spreading
//*  their properties into other objects.

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
  
  const duck = Object.assign({}, canFly, canSwim);
  duck.fly(); // Output: Flying...
  duck.swim(); // Output: Swimming...
  
