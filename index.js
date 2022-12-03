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

class Employee {
  constructor(name, id, email) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
  }
}

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.managerOffice = office;
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
    team.push(answers);
    console.log(team);

    employeeTypeQuestions();
  });
}

function employeeTypeQuestions() {
  inquirer.prompt(questionsEmployeeType).then(function (answers) {
    if (answers.inputEmployeeType === "Engineer") {
      console.log("Engineer Selected!");
    }
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
