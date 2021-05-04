const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee.js");
const Engineer = require('./lib/Engineer.js');
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

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter your email address.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id number?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter an id number.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a GitHub username.");
                }
             
                return true;
            }

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