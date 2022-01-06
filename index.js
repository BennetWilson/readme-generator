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
        choices: ['Apache 2.0','Boost', 'BSD 3', 'BSD 2', 'CC0', 'CC1.0', 'CC4.0', 'EPL 1.0', 'GPL v3', 'AGPL v3', 'LGPL v3', 'FDL v1.3', 'Hippocratic 3.0', 'IPL 1.0', 'ISC', 'MIT', 'MPL 2.0', 'ODC BY', 'Perl', 'OFL 1.1', 'Unilicense', 'WTFPL', 'Zlib'],
        name: 'license'
      
    },
    {
       type: 'input',
       message: 'Enter your email for the Questions section.',
       name: 'questions' 
    }
]
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

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {

        const data = await inquirer.prompt(questions);
        console.log("Your responses: ", data);
        // console.log("Getting you GitHub data now..");

        // const userInfo = await api.getUser(data);
        // console.log("Your GitHub info: ", userInfo);

        console.log("Generating your README.md now..");
        const markdown = generateMarkdown(data);
        console.log(markdown);

        await writeFileAsync('README.md', markdown)

    } catch (error){
        console.log(error);
    }
}

// Function call to initialize app
init();
