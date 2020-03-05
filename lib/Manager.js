// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// OFFICE NUMBER


const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;

    super(officeNumber);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;