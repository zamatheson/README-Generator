var generateMarkdown = require("./generateMarkdown.js");
var fs = require("fs");
const { default: inquirer } = require("inquirer");
var inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What is the title of your respository?",
        name: "title"
    }, {
        type: "input",
        message: "Please give your logo information if applicable",
        name: "logo"
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
        message: "Write a repository description now.",
        name: "description"
    }, {
        type: "input",
        message: "May others contribute?",
        name: "contribute",
    }, {
        type: "input",
        message: "Please include any test(s) if applicable",
        name: "test"
    }, {
        type: "input",
        message: "Please include a screenshot of your application",
        name: "screenshot"
    }, {
        type: "input",
        message: "Please state the end goal for your application",
        name: "goal"
    }
];

inquirer.prompt(questions).then(function(response) {
    console.log(response);

    var content = generateMarkdown(response);
    console.log(content);
    fs.writeFile("./ReadMe.md", content, function(err) {
        if (err) throw err
        console.log("success");
    });
});
