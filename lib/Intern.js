const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  
  }
  returnGit() {
    return `Github: ${this.github}`
  }
  returnRole() {
    return `Intern`
  }
  
}



module.exports = Intern;