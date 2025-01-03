//* A class is a blueprint for creating objects. It defines properties and methods 
//* that the objects created from the class will have.

class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    introduce() {
      return `Hi, I'm ${this.name}, and I'm in grade ${this.grade}.`;
    }
  }
  
  const student = new Student("Nanda", 10);
  console.log(student.introduce()); // Output: Hi, I'm Nanda, and I'm in grade 10.
  