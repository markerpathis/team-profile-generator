// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
    choices: ["Engineer", "Intern", "I'm finished"],
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

function managerQuestions() {
  inquirer.prompt(questionsManager).then(function (answers) {
    const manager = new Manager(answers.inputManagerName, answers.inputManagerId, answers.inputManagerEmail, answers.inputManagerOffice);
    team.push(manager);

    employeeTypeQuestions();
  });
}

function employeeTypeQuestions() {
  inquirer.prompt(questionsEmployeeType).then(function (answers) {
    if (answers.inputEmployeeType === "Engineer") {
      engineerQuestions();
    } else if (answers.inputEmployeeType === "Intern") {
      internQuestions();
    } else if (answers.inputEmployeeType === "I'm finished") {
      writeToFile("index.html", generateHTML(team));
    }
  });
}

function engineerQuestions() {
  inquirer.prompt(questionsEngineer).then(function (answers) {
    const engineer = new Engineer(answers.inputEngineerName, answers.inputEngineerId, answers.inputEngineerEmail, answers.inputEngineerUsername);
    team.push(engineer);

    employeeTypeQuestions();
  });
}

function internQuestions() {
  inquirer.prompt(questionsIntern).then(function (answers) {
    const intern = new Intern(answers.inputInternName, answers.inputInternId, answers.inputInternEmail, answers.inputInternSchool);
    team.push(intern);

    employeeTypeQuestions();
  });
}

function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => (err ? console.error(err) : console.log("Success!")));
}

// Function to initialize app
function init() {
  managerQuestions();
}

// Function call to initialize app
init();

module.exports = Manager;
