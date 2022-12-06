const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

describe("Manager class", () => {
  it("Manager class should return Manager as the role", () => {
    const manager = new Manager("Parker", "1", "test@test.com", "55");
    expect(manager.getRole()).toBe("Manager");
  });
});

describe("Engineer class", () => {
  it("Engineer class should return Engineer as the role", () => {
    const engineer = new Engineer("Elliot Alderson", "2", "elliott@allsafe.com", "elliotalderson");
    expect(engineer.getRole()).toBe("Engineer");
  });
});

describe("Intern class", () => {
  it("Intern class should return Intern as the role", () => {
    const intern = new Intern("Billy McMahon", "3", "billy@google.com", "University of Phoenix");
    expect(intern.getRole()).toBe("Intern");
  });
});
