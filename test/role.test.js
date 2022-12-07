const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

describe("Employee", () => {
  describe("Employee class", () => {
    it("should create an object with Name, ID, Email, and Role if provided valid arguments", () => {
      const employee = new Employee("Parker", "1", "test@test.com");
      expect(employee.getRole()).toBe("Employee");
      expect(employee.getName()).toBe("Parker");
      expect(employee.getId()).toBe("1");
      expect(employee.getEmail()).toBe("test@test.com");
    });
  });
});

describe("Manager", () => {
  describe("Manager class", () => {
    it("should create an object with Name, ID, Email, Office Number and Role if provided valid arguments", () => {
      const manager = new Manager("Parker", "1", "test@test.com", "55");
      expect(manager.getRole()).toBe("Manager");
      expect(manager.getName()).toBe("Parker");
      expect(manager.getId()).toBe("1");
      expect(manager.getEmail()).toBe("test@test.com");
      expect(manager.managerOffice).toBe("55");
    });
  });
});

describe("Engineer", () => {
  describe("Engineer class", () => {
    it("should create an object with Name, ID, Email, School and Role if provided valid arguments", () => {
      const engineer = new Engineer("Elliot Alderson", "2", "elliott@allsafe.com", "elliotalderson");
      expect(engineer.getRole()).toBe("Engineer");
      expect(engineer.getName()).toBe("Elliot Alderson");
      expect(engineer.getId()).toBe("2");
      expect(engineer.getEmail()).toBe("elliott@allsafe.com");
      expect(engineer.engineerUsername).toBe("elliotalderson");
    });
  });
});

describe("Intern", () => {
  describe("Intern class", () => {
    it("should create an object with Name, ID, Email, Office Number and Role if provided valid arguments", () => {
      const intern = new Intern("Billy McMahon", "3", "billy@google.com", "University of Phoenix");
      expect(intern.getRole()).toBe("Intern");
      expect(intern.getName()).toBe("Billy McMahon");
      expect(intern.getId()).toBe("3");
      expect(intern.getEmail()).toBe("billy@google.com");
      expect(intern.internSchool).toBe("University of Phoenix");
    });
  });
});
