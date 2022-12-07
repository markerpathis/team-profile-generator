// Import the parent class Employee
const Employee = require("./Employee");

// Manager class adopts the methods and properties from the Employee parent class
// The manager office property is specific to this class
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.managerOffice = office;
    this.employeeRole = "Manager";
  }
  getRole() {
    return this.employeeRole;
  }
}

// Exports Manager so it can be used ouside of this specific js file after being imported
module.exports = Manager;
