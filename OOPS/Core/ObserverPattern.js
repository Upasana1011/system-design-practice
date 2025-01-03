//* The Observer Pattern is a behavioral design pattern in object-oriented programming where an object (known as the subject) maintains a list of its dependents (called observers) and notifies them of any state changes, usually by calling one of their methods. This pattern is particularly useful when you need to update multiple objects or components in response to a change in another object.

//* Key Components:

//** Subject: The object that maintains a list of observers and notifies them of any changes to its state.
  
//** Observer: An object that gets notified when the subject’s state changes.
  
//** ConcreteSubject: A specific implementation of the subject, where the state change occurs.
  
//** ConcreteObserver: A specific implementation of the observer, which reacts to the change in the subject.

//* How it Works:
//** Subject registers observers (objects that are interested in its state).
//** Observer subscribes to the subject and specifies what should happen when the subject's state changes.
//** When the Subject's state changes, it calls the notify method to inform all registered observers.
//** The Observer updates itself based on the changes in the Subject.

//* Example:
//* Let's look at an example in JavaScript:

// The Subject (Observable)
class Subject {
    constructor() {
      this.observers = []; // List of observers
    }
  
    // Method to add observers
    addObserver(observer) {
      this.observers.push(observer); // Add the observer to the observers list
    }
  
    // Method to remove observers
    removeObserver(observer) {
      const index = this.observers.indexOf(observer); // Find the observer in the list
      if (index > -1) {
        this.observers.splice(index, 1); // Remove the observer from the list
      }
    }
  
    // Notify all observers of a change
    notifyObservers() {
      this.observers.forEach(observer => observer.update(this)); // Notify each observer
    }
  }
  
  // Concrete Subject (The object that changes state)
  class WeatherStation extends Subject {
    constructor() {
      super(); // Call the constructor of the parent class (Subject)
      this.temperature = 0; // Initialize the temperature
    }
  
    // Method to simulate temperature change
    setTemperature(temp) {
      this.temperature = temp; // Set the new temperature
      this.notifyObservers(); // Notify observers when the temperature changes
    }
  
    // Getter for the current temperature
    getTemperature() {
      return this.temperature; // Return the current temperature
    }
  }
  
  // Observer (Observer interface)
  class Observer {
    update(subject) {
      console.log('Observer updated with new temperature:', subject.getTemperature()); // Display updated temperature
    }
  }
  
  // Concrete Observer
  class TemperatureDisplay extends Observer {
    update(subject) {
      console.log(`Temperature Display updated: ${subject.getTemperature()}°C`); // Display the updated temperature on the display
    }
  }
  
  // Concrete Observer
  class TemperatureLogger extends Observer {
    update(subject) {
      console.log(`Logging new temperature: ${subject.getTemperature()}°C`); // Log the updated temperature
    }
  }
  
  // Creating instances
  const weatherStation = new WeatherStation(); // Create a new weather station (subject)
  const tempDisplay = new TemperatureDisplay(); // Create a new temperature display observer
  const tempLogger = new TemperatureLogger(); // Create a new temperature logger observer
  
  // Registering observers
  weatherStation.addObserver(tempDisplay); // Register temperature display as an observer
  weatherStation.addObserver(tempLogger); // Register temperature logger as an observer
  
  // Changing the state (temperature) in the weather station
  weatherStation.setTemperature(25);  // Set temperature to 25°C, both observers are notified
  weatherStation.setTemperature(30);  // Set temperature to 30°C, both observers are notified
  
  // Output:
  // Temperature Display updated: 25°C
  // Logging new temperature: 25°C
  // Temperature Display updated: 30°C
  // Logging new temperature: 30°C
  
  //* Breakdown of the Example:
  //** Subject: The WeatherStation class acts as the subject, which maintains the state (temperature) and notifies observers whenever it changes.
  //** Observers: TemperatureDisplay and TemperatureLogger are concrete observers that react to changes in the subject by implementing the update() method.
  //** Notification: When the temperature is updated (weatherStation.setTemperature()), both the observers are notified via their update() method.
  
  //* Advantages of the Observer Pattern:
  //** Loose Coupling: The subject doesn't need to know about the specific details of the observers, only that they implement the update method.
  //** Dynamic Relationships: Observers can be added or removed at runtime without modifying the subject.
  //** Multiple Observers: A single subject can notify many observers simultaneously, making it ideal for scenarios where multiple components need to react to changes in one central entity (e.g., a UI system or event-driven application).
  
  //* Use Cases:
  //** Event handling systems (e.g., DOM events in browsers)
  //** Real-time data updates (e.g., stock ticker updates, weather monitoring systems)
  //** UI Frameworks where multiple components need to react to changes in shared data (like React's state management with hooks).
  
  //* Variations:
  //** Push Model: The subject sends the entire updated state to the observer when notifying them (like in the example above).
  //** Pull Model: The observer queries the subject for the latest state when it receives a notification (subject notifies, but observers fetch data when necessary).
  
  //* In summary, the Observer Pattern is an elegant way to manage dependencies between objects, particularly useful for building scalable, event-driven systems.
  