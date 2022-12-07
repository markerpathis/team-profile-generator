// Import the parent class Employee
const Employee = require("./Employee");

// Engineer class adopts the methods and properties from the Employee parent class
// The engineer's Username for GitHub is a property that is specific to this class
class Engineer extends Employee {
  constructor(name, id, email, username) {
    super(name, id, email);
    this.engineerUsername = username;
    this.employeeRole = "Engineer";
  }
  getRole() {
    return this.employeeRole;
  }
}

// Exports Engineer so it can be used ouside of this specific js file after being imported
module.exports = Engineer;
