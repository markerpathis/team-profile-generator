const Employee = require("./Employee");

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

module.exports = Engineer;
