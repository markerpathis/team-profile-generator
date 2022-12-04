// npm init and install inquirer v8.2.4
// install jest as a dev dependency

// Inquirer Flow
// Objective:
// Prompt and enter team members and their information, an HTML file is generated that displays a nicely formatted team roster based on the input
// Requirements:
// Step 1 - team managers name, employee ID, email address, and office number
// Step 2 - option to add engineer or intern or finsih building my team
/////////// engineer - name, employee ID, email, github username, then return to menu
/////////// intern - name, employee ID, email, school, then return to menu
/////////// when finished, the HTML file is generated

// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { getSystemErrorName } = require("util");

const team = [];
const questionsManager = [
  {
    type: "input",
    message: "Team Manager's Full Name:",
    name: "inputManagerName",
  },
  {
    type: "input",
    message: "Team Manager's Employee ID:",
    name: "inputManagerId",
  },
  {
    type: "input",
    message: "Team Manager's Email Address:",
    name: "inputManagerEmail",
  },
  {
    type: "input",
    message: "Team Manager's Office Number:",
    name: "inputManagerOffice",
  },
];

const questionsEmployeeType = [
  {
    type: "list",
    message: "Please select an employee type to add to your team:",
    name: "inputEmployeeType",
    choices: ["Engineer", "Intern", "I'm finsihed"],
  },
];

const questionsEngineer = [
  {
    type: "input",
    message: "Engineer's Full Name:",
    name: "inputEngineerName",
  },
  {
    type: "input",
    message: "Engineer's Employee ID:",
    name: "inputEngineerId",
  },
  {
    type: "input",
    message: "Engineer's Email Address:",
    name: "inputEngineerEmail",
  },
  {
    type: "input",
    message: "Engineer's GitHub Username:",
    name: "inputEngineerUsername",
  },
];

const questionsIntern = [
  {
    type: "input",
    message: "Intern's Full Name:",
    name: "inputInternName",
  },
  {
    type: "input",
    message: "Intern's Employee ID:",
    name: "inputInternId",
  },
  {
    type: "input",
    message: "Intern's Email Address:",
    name: "inputInternEmail",
  },
  {
    type: "input",
    message: "Intern's School:",
    name: "inputInternSchool",
  },
];

class Employee {
  constructor(name, id, email) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
    this.employeeRole = "Employee";
  }
  getName() {
    console.log("getName: " + this.employeeName);
    return this.employeeName;
  }
  getId() {
    console.log("getId: " + this.employeeId);
    return this.employeeId;
  }
  getEmail() {
    console.log("getEmail: " + this.employeeEmail);
    return this.employeeEmail;
  }
  getRole() {
    console.log("getRole: " + this.employeeRole);
    return "this.employeeRole";
  }
}

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.managerOffice = office;
    this.managerRole = "Manager";
  }
  getRole() {
    console.log("getRole: " + this.managerRole);
    return this.managerRole;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, username) {
    super(name, id, email);
    this.engineerUsername = username;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.internSchool = school;
  }
}

function managerQuestions() {
  inquirer.prompt(questionsManager).then(function (answers) {
    const manager = new Manager(
      answers.inputManagerName,
      answers.inputManagerId,
      answers.inputManagerEmail,
      answers.inputManagerOffice
    );
    team.push(manager);

    employeeTypeQuestions();
  });
}

function employeeTypeQuestions() {
  inquirer.prompt(questionsEmployeeType).then(function (answers) {
    if (answers.inputEmployeeType === "Engineer") {
      console.log("Engineer Selected!");
      engineerQuestions();
    } else if (answers.inputEmployeeType === "Intern") {
      console.log("Intern Selected!");
      internQuestions();
    }
  });
}

function engineerQuestions() {
  inquirer.prompt(questionsEngineer).then(function (answers) {
    team.push(answers);
    console.log(team);

    employeeTypeQuestions();
  });
}

function internQuestions() {
  inquirer.prompt(questionsIntern).then(function (answers) {
    team.push(answers);
    console.log(team);

    employeeTypeQuestions();
  });
}

// Function to initialize app
function init() {
  managerQuestions();
}

// Function call to initialize app
init();

// const manager = new Manager(
//   answers.inputManagerName,
//   answers.inputManagerId,
//   answers.inputManagerEmail,
//   answers.inputManagerOffice
// );
// console.log(manager);
