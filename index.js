
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require('./generateMarkdown');
const util= require('util');

console.log('1')

const writeFileAsync = util.promisify(fs.writeFile);
console.log('2')

// TODO: Create an array of questions for user input
function askUser (){
return inquirer
.prompt([
// const questions = [];
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your project name?",
        name: "title"
      },
      {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
      },
      {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "MIT",
          "APACHE 2.0",
          "BSD 3",
          "None"
        ]
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "instillation"
      },
      {
        type: "input",
        message: "Please provide the instructions on usage of the application.",
        name: "usage"
      },
      {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test"
      },
      {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
      }
    ])
}
    console.log('3')
  
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('4')
    return writeFileAsync(fileName, data);
    
}

// TODO: Create a function to initialize app
function init() {
    console.log('5')
    askUser().then(function(info){

      const contentFile=generateMarkdown(info)
      return writeToFile ("Test.md", contentFile);
    });
  
}

// Function call to initialize app
init();
