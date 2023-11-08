let generateMarkdown = require("./utils/generateMarkdown.js");
let fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");


const questions = [
    {
        type: "input",
        message: "What is the title of your respository?",
        name: "title"
    }, {
        type: "input",
        message: "Please describe your project.",
        name: "logo"
    }, {
        type: "input",
        message: "Please describe the installation process.",
        name: "installation"

    }, {
        type: "input",
        message: "How will this application be used? Insert your User Story here.",
        name: "usage"
    }, {
        type: "list",
        name: "license",
        message: "Please select a license to use:",
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    }, {
        type: "input",
        message: "Any contributors?",
        name: "contribute"
    }, {
        type: "input",
        message: "Insert FAQ here.",
        name: "questions"
    }, {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    }, {
        type: "input",
        message: "Link your GitHub profile here:",
        name: "GitHub",
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "input",
        message: "Write a repository description now.",
        name: "description"
    }, {
        type: "input",
        message: "May others contribute?",
        name: "contribute",
    }, {
        type: "input",
        message: "Please include any test(s) if applicable.",
        name: "test"
    }, {
        type: "input",
        message: "Please include a screenshot of your application.",
        name: "screenshot"
    }, {
        type: "input",
        message: "Please state the end goal for your application, what problem is solved and how?",
        name: "goal"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("README.md File Loading...");
        writeToFile("./GeneratedREADME.md", generateMarkdown({...responses}));
    });
}
init();