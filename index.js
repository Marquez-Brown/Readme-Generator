// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [];
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'what is the title of your project?',
      name: 'title',
      
    },
    {
      type: 'input',
      message: 'what is the purpose of your project?',
      name: 'purpose',
      
    },
    {
      type: 'input',
      message: 'what modules need to be installed to run this app?',
      name: 'usage',
      
    },
    {
      type: 'input',
      message: 'who were your contributors?',
      name: 'contributor',
      
    },
    {
      type: 'input',
      message: 'Enter your GitHub Username',
      name: 'github',
      
    },
    {
      type: 'input',
      message: 'Enter your LinkedIn URL.',
      name: 'linkedin',
      
    },
  ]);
};
const generateReadme = (answers) => 
` #${answers.title}

## Purpose

${answers.purpose}

## Usage

${answers.usage}

## Contributors 

${answers.contributors}

## Contact

${answers.github}
${answers.linkedin}

##License
${generateMarkdown.}
`
// TODO: Create a function to write README file
// function writeToFile("README1.md", ) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app;

promptUser()
.then((answers) => writeFileAsync('Readme1.md', generateReadme(answers)))
.then(() => console.log('Successfully wrote to Readme1.md'))
.catch((err) => console.error(err));
