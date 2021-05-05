const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, github, more) {
    super(name, id, email);
    this.github = github;
    this.more = more;
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



module.exports = Engineer;