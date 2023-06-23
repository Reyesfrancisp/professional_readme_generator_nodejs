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
        message: "What is your project description?"
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

function dataHandling(answers)
{
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