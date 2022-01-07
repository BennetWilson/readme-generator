// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');
// TODO: Create an array of questions for user input

const questions = [
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
        name: 'title',
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
        name: 'installation'
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
        choices: ['Apache 2.0', 'BSD 3', 'GPL v3', 'MIT', 'MPL 2.0', 'none'],
        name: 'license'
      
    },
    {
       type: 'input',
       message: 'Enter your email for the Questions section.',
       name: 'questions' 
    }

]
async function init () {
    const data = await inquirer.prompt(questions)
    fs.writeFileSync('README.md', generateMarkdown(data))
}


init()