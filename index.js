const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const generateMarkdown = require('./lib/generateMarkdown')
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


let teamMembers = [];



// run inquirer questions
const promptUser = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Team Mangers name?',

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID number?',

            },
            {
                type: 'input',
                name: 'git',
                message: 'What is their GitHub?',

            },


        ])

        .then(function (answer) {
            const name = answer.name
            const email = answer.email
            const id = answer.id
            const git = answer.git
            const teamMember = new Engineer(name, id, email, git)
            teamMembers.push(teamMember)
            moreTeamMembers();
        });

}


const moreTeamMembers = () => {
   
    return inquirer
        .prompt([{
                type: 'list',
                name: 'more',
                message: 'Would you like to add more team members?',
                choices: [
                    "Yes",
                    "No"
                ],
                validate: function (answer) {
                   
                    if (answer.more === "Yes") {
                        return addMore();
                    }
                    return true
                }

            },

        ])


        .then((answers) => writeFileAsync('index.html', generateMarkdown(answers, teamMembers)))
        .then(() => {
            console.log('Successfully wrote a index.html');

        })
        .catch((err) => console.error(err));


};


const addMore = () => {
    console.log("You have said yes");

} 

promptUser();

