class Employee {
  constructor(name, id, email) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
    this.employeeRole = "Employee";
  }
  getName() {
    return this.employeeName;
  }
  getId() {
    return this.employeeId;
  }
  getEmail() {
    return this.employeeEmail;
  }
  getRole() {
    return this.employeeRole;
  }
}

module.exports = Employee;
