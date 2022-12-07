// Parent class to be used by the subclasses to adopt its methods and properties
class Employee {
  constructor(name, id, email) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
    this.employeeRole = "Employee";
  }
  // Method that returns employee name
  getName() {
    return this.employeeName;
  }
  // Method that returns employee ID
  getId() {
    return this.employeeId;
  }
  // Method that returns employee email
  getEmail() {
    return this.employeeEmail;
  }
  // Method that returns employee role
  getRole() {
    return this.employeeRole;
  }
}

// Exports Employee so it can be used ouside of this specific js file after being imported
module.exports = Employee;
