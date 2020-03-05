// TODO: Write code to define and export the this class
// Name
// Role
// ID
// Email


class Employee {
    constructor(name, role, id, email) {
      this.name = name;
      this.role = role;
      this.id = id;
      this.email = email;
    }
}
function getName() {return this.name}
function getId() {return this.id}
function getRole() {return this.role}
getId();
getName();
getRole();
module.exports = Employee;