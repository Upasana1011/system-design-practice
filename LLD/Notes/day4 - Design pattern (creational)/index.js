// * LLD  - Design pattern
// * Notes -  class, Object, Relationship 

// * Creational Design Pattern - creation of an object
// * Structural Design Pattern - Relationship between objects, structure of objects
// * Behavioural Design Pattern - Communication between objects, Behaviour of objects



// * Creational Design Pattern - creation of an object

// * 1. Singleton Design Pattern - if we need a single instance of an object across classes


// * The Singleton pattern ensures that a class has only one instance and provides a global point of
// * access to that instahce. This pattern is beneficial when you need to control access to a shared
// * resource, such as a configuration object or a connection pool. By ensuring that only one instance
// * of the class exists, you avoid issues caused by multiple instances and ensure consistent behavior
// * across the application.

// example - 1. Database connection, 2. Logger, 3. Configuration

// ? wrong way to implement singleton pattern
// class Logger {
//     constructor() {
//       this.logs = []; // Initialize logs as an empty array
//     }
  
//     log(message) {
//       this.logs.push(message); // Add the message to the logs
//       console.log(`Logger: ${message}`); // Print the message
//     }
  
//     printLogCount() {
//       console.log(`Logger: ${this.logs.length}`); // Print the number of logs
//     }
//   }
  
//   // Example usage:
//   const logger1 = new Logger();
//   logger1.log("First log message");
//   const logger2 = new Logger();
//   logger2.log("Second log message");
//   logger2.printLogCount();  1

// ? correct way to implement singleton pattern
class Logger {
    static logs = []; // Static property shared among all instances
  
    log(message) {
      Logger.logs.push(message); // Add the message to the shared logs
      console.log(`Logger: ${message}`); // Print the message
    }
  
    printLogCount() {
      console.log(`Logger: ${Logger.logs.length}`); // Print the count of shared logs
    }
  }
  
  // Example usage:
  const logger1 = new Logger();
  logger1.log("First log message");
  
  const logger2 = new Logger();
  logger2.log("Second log message");
  
  logger2.printLogCount(); // Outputs: Logger: 2
  

  class AsyncLogger {
    static logs = []; // Static property shared among all instances
    static lock = Promise.resolve(); // A lock to ensure synchronized behavior
  
    async log(message) {
      await AsyncLogger.lock; // Wait for the lock
      AsyncLogger.lock = (async () => {
        AsyncLogger.logs.push(message); // Add the message to the shared logs
        console.log(`Logger: ${message}`); // Print the message
      })(); // Update the lock to the current operation
    }
  
    async printLogCount() {
      await AsyncLogger.lock; // Wait for the lock to ensure up-to-date state
      console.log(`Logger: ${AsyncLogger.logs.length}`); // Print the count of shared logs
    }
  }
  
  // Example usage:
  (async () => {
    const logger1 = new AsyncLogger();
     logger1.log("First log message");
  
    const logger2 = new AsyncLogger();
     logger2.log("Second log message");
  
     logger2.printLogCount(); // Outputs: Logger: 2
  })();


// * static singleton pattern
// * Lazy singleton pattern


// * 2. Builder Design Pattern - if we need to create an object of a class with multiple properties/variables
// example - 1. QueryBuilder, 2. CarBuilder, 3. HouseBuilder

// * Builder design pattern: when the class contains too many attributes, then there are many problems
// * exists: 1. we have to pass many argument to create object. 2. some params might be optional. So,
// * In builder pattern, we create object step by step and finally return final object with only
// * design params filled.

class User {
    constructor(name, age, email, phone) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.phone = phone;
    }
}

class User1 {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
}

const user = new User1("Nanda kishor", 26, "nkp@me.co")


class UserBuilder {
    constructor(name) {
      this.name = name;
    }

    setName(name) {
      this.name = name;
      return this;
    }
  
    setAge(age) {
      this.age = age;
      return this;
    }
  
    setEmail(email) {
      this.email = email;
      return this;
    }
  
    setPhone(phone) {
      this.phone = phone;
      return this;
    }
  
    build() {
      return new User(this.name, this.age, this.email, this.phone);
    }
  }

  const userSilky = new UserBuilder("Upasana");
  userSilky.setAge(26);
  userSilky.setEmail("upasana@me.co");
  userSilky.setPhone("1234567890");
  userSilky.build();
  console.log(userSilky);



// * 3. Factory Design Pattern - if we need to create an object of a class based on some condition
