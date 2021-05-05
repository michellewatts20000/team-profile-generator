const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  
  }
  getGithub() {
    return `Github: ${this.github}`
  }
  getRole() {
    return `Engineer`
  }
  getMore() {
    return `More: ${this.more}`
  }
}



module.exports = Manager;