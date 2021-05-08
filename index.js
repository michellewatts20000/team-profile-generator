const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateMarkdown = require('./src/generateMarkdown')


// where all the team members get stored
let managerMembers = [];
let engineerMembers = [];
let internMembers = [];

// ask the inital questions about the team manager and adds the team manager to an array
const promptUser = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Manager`s name?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter a name.");
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'phone',
                message: 'What is the Manager`s office phone number?',
                validate: idInput => {
                    if (!isNaN(parseInt(idInput))) {
                        return true;
                    } else {
                        console.log('Please enter numbers');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter an email.");
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID number?',
                validate: idInput => {
                    if (!isNaN(parseInt(idInput))) {
                        return true;
                    } else {
                        console.log('Please enter numbers');
                        return false;
                    }
                }

            },

        ])
        // make a constructor object from the subclass Manager
        .then(function (answer) {
            const name = answer.name
            const id = answer.id
            const email = answer.email
            const phone = answer.phone
            const teamMember = new Manager(name, id, email, phone)
            managerMembers.push(teamMember)
            addMore();
        });

}

// adds an engineer to the engineer array
const addEngineer = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Engineer`s name?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter an name.");
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter an email.");
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID number?',
                validate: idInput => {
                    if (!isNaN(parseInt(idInput))) {
                        return true;
                    } else {
                        console.log('Please enter numbers');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'git',
                message: 'What is their GitHub username?',

            },
        ])
        // make a constructor object from the subclass Engineer
        .then(function (answer) {
            const name = answer.name
            const email = answer.email
            const id = answer.id
            const git = answer.git
            const teamMember = new Engineer(name, id, email, git)
            engineerMembers.push(teamMember)
            addMore();
        });

}

// adds an intern to the intern array
const addIntern = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Intern`s name?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter a name.");
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("You must enter an email.");
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID number?',
                validate: idInput => {
                    if (!isNaN(parseInt(idInput))) {
                        return true;
                    } else {
                        console.log('Please enter numbers');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do they go to?',


            },
        ])
        // make a constructor object from the subclass Intern
        .then(function (answer) {
            const name = answer.name
            const email = answer.email
            const id = answer.id
            const school = answer.school
            const teamMember = new Intern(name, id, email, school)
            internMembers.push(teamMember)
            addMore();
        });

}

// user chooses who they want to add next, if anyone
const addMore = () => {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'addMemberType',
            message: 'What type of team member would you like to add now?',
            choices: ["Engineer", "Intern", "I'm done adding team members"],
        }, ])
        .then((answer) => {
            if (answer.addMemberType === "Engineer") {
                return addEngineer();
            } else if (answer.addMemberType === "Intern") {
                return addIntern();
            } else
            writeFileAsync('./dist/index.html', generateMarkdown(mapMembersCards(managerMembers, engineerMembers, internMembers)))
            console.log('Successfully generated an index.html page');
        })
        .catch((err) => console.error(err));
};


// runs just before the file is written to map each object to this html snippit
// manager snippit
const mapMembersCards = () => {
    const managerMap = managerMembers.map(function (data) {
        return `<div class="card">  
        <div class="card-header text-white bg-info">
        <h3>${data.getRole()} <i class="fas fa-dog"></i><h3>
       </div>  
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">ID: ${data.id}</p>
          <p class="card-text">Office number: ${data.officeNumber}</p>
          <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
           <a href="mailto:${data.email}" class="btn btn-primary">Email</a>
        </div>
      </div>`

    });

    // engineer snippit
    const engineerMap = engineerMembers.map(function (data) {
        return `<div class="card">   
        <div class="card-header text-white bg-danger">
        <h3>${data.getRole()} <i class="fas fa-crow"></i><h3>
       </div>  
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">ID: ${data.id}</p>
          <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
          <p class="card-text">GitHub: <a target="_blank" href="https://github.com/${data.getGithub()}"> 
          ${data.getGithub()}</a></p>
           <a href="mailto:${data.email}" class="btn btn-primary">Email</a>
        </div>
      </div>`

    });

    // intern snippet
    const internMap = internMembers.map(function (data) {
        return `<div class="card">   
        <div class="card-header bg-warning">
        <h3>${data.getRole()} <i class="fas fa-fish"></i><h3>
       </div>  
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">ID: ${data.id}</p>
          <p class="card-text">School: ${data.getSchool()}</p>
          <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
           <a href="mailto:${data.email}" class="btn btn-primary">Email</a>
        </div>
      </div>`

    });

    // combine all the arrays and then join them into one html chunck
    const mapCard = [...managerMap, ...engineerMap, ...internMap];
    return mapCard.join("")

}


// kicks the whole thing off
promptUser();