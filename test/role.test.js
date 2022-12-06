const Manager = require("../index");

describe("Manager class", () => {
  it("should return Manager as the role when Manager is called", () => {
    const manager = new Manager("Parker", "1", "test@test.com", "55");
    expect(manager.getRole()).toBe("Manager");
  });
});
