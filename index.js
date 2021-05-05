const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateMarkdown = require('./lib/generateMarkdown')


// where all the team members get stored
let teamMembers = [];

// ask the inital questions about the team manager
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
// make a constructor object from the subclass Manager
        .then(function (answer) {
            const name = answer.name
            const email = answer.email
            const id = answer.id
            const git = answer.git
            const role = "Manager"
            const teamMember = new Manager(role, name, id, email, git)
            teamMembers.push(teamMember)
            moreTeamMembers();
        });

}

const addEngineer = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?',

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
// make a constructor object from the subclass Manager
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

// runs inquirer again and asks if the user wants to add another member
const moreTeamMembers = () => {
    return inquirer
        .prompt([{
            type: 'confirm',
            name: 'moreMembers',
            message: 'Would you like to add another team member?',
            default: true,
        }, ])

// when the user is finished adding team members this runs
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


// runs the next function for who they want to add to their project
const addMore = () => {
    // console.log("You have said yes");
    // console.log(teamMembers)
    // promptUser();
    return inquirer
    .prompt([{
        type: 'list',
        name: 'addMemberType',
        message: 'Which type team member would you like to add?',
        choices: ["Engineer", "Intern"],
    }, ])
    .then((answer) => {
        if (answer.addMemberType === "Engineer") {
            return addEngineer();
        } else
            mapMembersCards();
            console.log(mapMembersCards);
            writeFileAsync('index.html', generateMarkdown(mapMembersCards(teamMembers)))
        console.log('Successfully wrote a index.html');
    })
    .catch((err) => console.error(err));
};





// runs just before the file is written to map each object to this html snippit
const mapMembersCards = () => {
    console.log(teamMembers);
    const mapCard = teamMembers.map(function (data) {
            return `<div class="card">   
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
        
          <p class="card-text">${data.getRole()}</p>
          <p class="card-text">${data.id}</p>
          <p class="card-text">${data.email}</p>
          <p class="card-text">${data.github}</p>
        </div>
      </div>`
       
    });

    return mapCard.join("")

}


// kicks the whole thing off
promptUser();