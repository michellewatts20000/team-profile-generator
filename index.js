const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
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
            const teamMember = new Manager(name, id, email, git)
            teamMembers.push(teamMember)
            moreTeamMembers();
        });

}


const moreTeamMembers = () => {
    return inquirer
        .prompt([{
            type: 'confirm',
            name: 'moreMembers',
            message: 'Would you like to add another team member?',
            default: true,
        }, ])


        .then((answer) => {
            if (answer.moreMembers === true) {
                return addMore();
            } else
                mapMembersCards();
                console.log(mapMembersCards);
                writeFileAsync('index.html', generateMarkdown(mapMembersCards(teamMembers)))
            console.log('Successfully wrote a index.html');
        })
        .catch((err) => console.error(err));
};



const addMore = () => {
    console.log("You have said yes");
    console.log(teamMembers)
    promptUser();
}


const mapMembersCards = () => {
    console.log(teamMembers);
    const mapCard = teamMembers.map(function (data) {
            return `<div class="card">   
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.id}</p>
          <p class="card-text">${data.email}</p>
          <p class="card-text">${data.git}</p>
        </div>
      </div>`
       
    });

    return mapCard.join("")

}



promptUser();