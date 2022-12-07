// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Import the generate HTML js file to be used in the writeToFile function
const generateHTML = require("./utils/generateHTML");

// Import the subclasses
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array used to capture the employee entries from Inquirer
const team = [];

// Questions used in Inquirer to provide details about the team Manager
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

// Question used in Inquirer to determine if the user will next provide details
const questionsEmployeeType = [
  {
    type: "list",
    message: "Please select an employee type to add to your team:",
    name: "inputEmployeeType",
    choices: ["Engineer", "Intern", "I'm finished"],
  },
];

// Questions used in Inquirer to provide details about the team Engineer(s)
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

// Questions used in Inquirer to provide details about the team Intern(s)
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

// Creates a new Manager object using the information provided using Inquirer and pushes the object to the team array
function managerQuestions() {
  inquirer.prompt(questionsManager).then(function (answers) {
    const manager = new Manager(answers.inputManagerName, answers.inputManagerId, answers.inputManagerEmail, answers.inputManagerOffice);
    team.push(manager);

    employeeTypeQuestions();
  });
}

// Function controls the branching question options in inquirer to provide details about Engineer(s), Intern(s), or Finish the process
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

// Creates a new Engineer object using the information provided using Inquirer and pushes the object to the team array
function engineerQuestions() {
  inquirer.prompt(questionsEngineer).then(function (answers) {
    const engineer = new Engineer(answers.inputEngineerName, answers.inputEngineerId, answers.inputEngineerEmail, answers.inputEngineerUsername);
    team.push(engineer);

    employeeTypeQuestions();
  });
}

// Creates a new Intern object using the information provided using Inquirer and pushes the object to the team array
function internQuestions() {
  inquirer.prompt(questionsIntern).then(function (answers) {
    const intern = new Intern(answers.inputInternName, answers.inputInternId, answers.inputInternEmail, answers.inputInternSchool);
    team.push(intern);

    employeeTypeQuestions();
  });
}

// Function to write the HTML file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => (err ? console.error(err) : console.log("Success!")));
}

// Function to initialize app, will start with asking the Manger questions
function init() {
  managerQuestions();
}

// Function call to initialize app
init();

module.exports = Manager;
