//* Ensures that only one instance of a class is created and 
//* provides a global point of access to it.

const Singleton = (function () {
    let instance;
  
    function createInstance() {
      return { name: "I am the only instance" };
    }
  
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log(instance1 === instance2); // Output: true
  