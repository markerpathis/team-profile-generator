const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

describe("Manager", () => {
  describe("Manager class", () => {
    it("should create an object with Name, ID, Email, Office Number and Role if provided valid arguments", () => {
      const manager = new Manager("Parker", "1", "test@test.com", "55");
      expect(manager.getRole()).toBe("Manager");
      expect(manager.getName()).toBe("Parker");
      expect(manager.getId()).toBe("1");
      expect(manager.getEmail()).toBe("test@test.com");
    });
  });
});

describe("Engineer", () => {
  describe("Engineer class", () => {
    it("should create an object with Name, ID, Email, Office Number and Role if provided valid arguments", () => {
      const engineer = new Engineer("Elliot Alderson", "2", "elliott@allsafe.com", "elliotalderson");
      expect(engineer.getRole()).toBe("Engineer");
      expect(engineer.getName()).toBe("Elliot Alderson");
      expect(engineer.getId()).toBe("2");
      expect(engineer.getEmail()).toBe("elliott@allsafe.com");
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
    });
  });
});
