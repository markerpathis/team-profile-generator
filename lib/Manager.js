const Employee = require("./Employee");

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

module.exports = Manager;
