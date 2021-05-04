const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateMarkdown = require("./lib/generateMarkdown")
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


// run inquirer questions
const promptUser = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'Who would you like to make a profile for?',
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
      },
     
    ]);
  };
  
  
  
  // creates a index.html page
  const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./dist/index.html', generateMarkdown(answers)))
      .then(() => {
        console.log('Successfully wrote a index.html page');
  
      })
      .catch((err) => console.error(err));
  
  
  };
  
  // runs the init function
  init();