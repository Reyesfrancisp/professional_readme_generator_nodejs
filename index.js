// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is your project title?"
    },
    {
        name: "description",
        message: "What is your project description?",
    },
    {
        name: "installation",
        message: "What is your project installation?",
    },
    {
        name: "usage",
        message: "What is your project usage description?",
    },
    {
        name: "contribution",
        message: "What is your project contribution section",
    },
    {
        name: "test",
        message: "What is your project test description?",
    },
    {
        name: "license",
        message: "What is your project license?",
        type: "list",
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause \"Simplified\" License",
            "BSD 3-Clause \"New\" or \"Revised\" License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ],

    },
    {
        name: "github",
        message: "What is your github username?"
    },
    {
        name: "email",
        message: "What is your email?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./readme_gen/${fileName}.md`, data, (err) => {
        if (err) {
            console.error("Error:", err);
        }
    });

}

function dataHandling(answers) {
    const writeData = generateMarkdown(answers);
    writeToFile(answers.title, writeData);
}

// TODO: Create a function to initialize app
function init() {
    let userPrompt = inquirer.createPromptModule();
    userPrompt(questions)
        .then(dataHandling)
        .catch((error) => console.error("Error:", error));
}

// Function call to initialize app
init();