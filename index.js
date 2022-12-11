// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// Questions for User Input
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'What are the installation instructions for your project?',
    'What are the rules of usage for your project?',
    'What are the rules for contributing to your project?',
    'What tests can be run for your project?',
    'Please choose a license for your project:',
    'Please enter your GitHub username:',
    'Please enter your email address:'
];

// This function will create the README file and add data based on functions in the generateMarkdown file.
function writeToFile(data) {
    const pageData = generate.generateMarkdown(data);
    console.log("Page data: " + pageData);
    console.log(`test 3: ${data.title}`);
    fs.writeFile(`./result/README.md`, pageData, (err) =>
        err ? console.log(err) : console.log("README file created!")
    );

    if (data.license.toLowerCase() === 'none') {
        return
       } else {
            const licenseData = generate.renderLicenseSection(data);
            console.log('Before append: ' + fs.readFileSync('README.md', 'UTF8'));
            fs.appendFile('README.md', licenseData, (err) =>
                err ? console.log(err) : console.log("License Section added!")
            );
       }
}

// This function prompts the user for responses to questions in order to generate README.
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'tests',
            },
            {
                type: 'list',
                message: questions[6],
                choices: ['None', 'MIT', 'Apache', 'GNU GPLv3', 'ISC'],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((data) => {
            console.log(`test 1: ${data.title}`)
            return data
        })
        .then((data) => {
            writeToFile(data);
        })
};

// Function call to initialize app
init();