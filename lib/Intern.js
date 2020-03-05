// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// SCHOOL


const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;

    super(school);
    this.school = school;
  }
}

module.exports = Intern;