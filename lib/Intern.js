// Import the parent class Employee
const Employee = require("./Employee");

// Intern class adopts the methods and properties from the Employee parent class
// The intern's school property is specific to this class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.internSchool = school;
    this.employeeRole = "Intern";
  }
  getRole() {
    return this.employeeRole;
  }
}

// Exports Intern so it can be used ouside of this specific js file after being imported
module.exports = Intern;
