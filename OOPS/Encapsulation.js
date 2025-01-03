//* Encapsulation in Object-Oriented Programming (OOP)

//* Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP),
//* and it refers to the bundling of data (attributes) and methods (functions) that operate on the data
//* into a single unit known as a class or object. Additionally, it involves restricting direct access to some of an
//* object's components and only exposing certain parts of it to the outside world, typically through public methods.

//* In simpler terms, encapsulation hides the internal workings of an object and only exposes what is necessary 
//* to the outside world, protecting the integrity of the object's data and controlling how it is modified.

//* Key Points of Encapsulation:
//* 1. Data Hiding:
//*    - Encapsulation ensures that data is hidden from direct access. Instead of allowing external code to manipulate
//*      an object's data directly, the object’s internal state is accessed or modified only through well-defined methods.
//*    - This helps in protecting the data from unauthorized or unintended modifications.

//* 2. Access Control:
//*    - Through encapsulation, you can define access control mechanisms, such as public, private, and protected methods
//*      and properties. This allows you to limit the scope of access to the internal data and behavior of an object.

//* 3. Improved Maintenance and Flexibility:
//*    - Encapsulation makes objects easier to maintain and modify, as you can change the internal implementation
//*      without affecting the external code that interacts with the object. The external code only depends on the public
//*      interface of the object, not its internal details.


//* Example demonstrating encapsulation using a class in JavaScript:

//* Class representing a bank account
class BankAccount {
    //* Private property (Data hiding)
    #balance = 0;  // Using the `#` syntax to declare a private field
  
    //* Public method to get the balance
    getBalance() {
      return this.#balance;
    }
  
    //* Public method to deposit money
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
      }
      this.#balance += amount;
    }
  
    //* Public method to withdraw money
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
      }
      if (amount > this.#balance) {
        console.log("Insufficient balance.");
        return;
      }
      this.#balance -= amount;
    }
  }
  
  //* Creating an instance of the BankAccount class
  const account = new BankAccount();
  
  //* Interacting with the account
  account.deposit(1000);   // Deposits 1000 into the account
  console.log(account.getBalance());  // Output: 1000
  account.withdraw(500);   // Withdraws 500 from the account
  console.log(account.getBalance());  // Output: 500
  
  //* Attempting direct access to private field (This will throw an error)
  // console.log(account.#balance);  // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
  
  
  //* Breakdown of the Example:
  //* 1. Data Hiding: 
  //*    - The `#balance` property is declared as private using the `#` syntax, making it inaccessible from outside the class.
  //*    - This ensures that the balance can only be modified or accessed through the provided public methods (`deposit()`, `withdraw()`, and `getBalance()`).
    
  //* 2. Public Methods: 
  //*    - The methods `deposit()`, `withdraw()`, and `getBalance()` provide controlled access to the internal data of the object.
  //*    - External code can only interact with the `BankAccount` class through these methods, ensuring that the integrity of the balance is preserved.
  //*    - If an invalid deposit or withdrawal is attempted, the internal state is not corrupted, and proper validation is done within the methods.
  
  
  //* Key Benefits of Encapsulation:
  //* 1. Data Protection:
  //*    - Encapsulation helps protect an object’s data by restricting direct access to it, preventing accidental or 
  //*      unauthorized modification. This helps in maintaining data integrity and prevents invalid state transitions.
  
  //* 2. Controlled Access:
  //*    - By defining methods to access or modify an object’s data, you can control how the data is manipulated.
  //*    - This ensures that the object’s internal state remains valid, as any modifications must go through the defined methods.
  //*    - For example, the `deposit()` and `withdraw()` methods in the example ensure that only valid transactions can occur.
  
  //* 3. Flexibility and Maintainability:
  //*    - Encapsulation makes the internal implementation of the object changeable without affecting the external code that uses it.
  //*    - If you need to change the way the balance is stored or updated, you can do so inside the class, without needing to
  //*      modify code that interacts with the `BankAccount` class.
  
  
  //* 4. Code Modularity:
  //*    - Encapsulation encourages designing objects with clearly defined interfaces. Each class encapsulates its own state and behavior,
  //*      making it easier to develop and maintain smaller, focused components rather than large, monolithic codebases.
  
  
  //* 5. Security:
  //*    - Encapsulation can also be used to hide sensitive information by making certain properties or methods private.
  //*    - For example, you could hide sensitive customer data within an object and expose only non-sensitive information to the outside world.
  
  
  //* Example Use Cases of Encapsulation:
  //* - Banking applications where you want to hide account balances and ensure that deposits or withdrawals follow a set of rules.
  //* - Employee or customer management systems, where certain details are private and only accessible through specific methods.
  //* - E-commerce applications, where a shopping cart object's internal state is protected, and operations like adding/removing items
  //*   are controlled through public methods.
  
  //* In Summary:
  //* - Encapsulation helps in bundling data and methods together into a single unit and restricting access to certain parts of an object’s data.
  //* - By controlling how data is accessed or modified, encapsulation ensures data integrity and adds a layer of security.
  //* - It improves flexibility, modularity, and maintainability by allowing changes to an object’s internal implementation without affecting external code.
  