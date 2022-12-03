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
  //   {
  //     type: "list",
  //     message: "Please select an employee type to add to your team:",
  //     name: "inputMenu",
  //     choices: ["Engineer", "Intern", "I'm finsihed"],
  //   },
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

// Function to initialize app
function init() {
  inquirer.prompt(questionsManager).then((answers) => {
    const manager = new Manager(
      answers.inputManagerName,
      answers.inputManagerId,
      answers.inputManagerEmail,
      answers.inputManagerOffice
    );
    console.log(manager);
  });
}

// Function call to initialize app
init();
