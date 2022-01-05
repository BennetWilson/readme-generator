// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { Console } = require('console');
const util = require('util');
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        default: 'BennetWilson',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('Please enter a valid GitHub username.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub repository?',
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('Please enter a valid GitHub repo name');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'name',
        default: 'Project-Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('Please enter a valid title');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Write a brief description of you project for the Description section',
        name: 'description',
        default: 'Project-Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('Please enter a valid description');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'If applicable, describe the steps required to install your project for the Installation section.',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for the Usage section',
        name: 'usage'

    },
    {
        type: 'input',
        message: 'If applicable, provide any test written for your application and provide examples on how to run them.',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Were there other contributors?',
        name: 'contributors'
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['chocie1','choice2', 'chocie3'],
        name: 'license'
      
    },
    {
       type: 'input',
       message: 'Enter your email for the Questions section.',
       name: 'questions' 
    }
])
// .then ((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`;
//     fs.writeFile('log.txt', JSON.stringify(data), (err) =>
//     err ? console.error(err) : console.log('Success'))
// })

// TODO: Create a function to write README file
function writeToFile(filename, data) {
fs.writeFile(filename, data, err => {
    if (err) {
        return console.log(err);
    }
    console.log("Success! Your README.md file has been generated")
})
}

const writeFileAsync = until.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
