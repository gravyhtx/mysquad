// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// ​
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// ​
// const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// NEED TO BE ABLE TO THROW ERRORS FOR INCORRECT ANSWERS
// 
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Hello friend! Please enter an employee name."
      },
      {
        type: "input",
        name: "email",
        message: "That's a beautiful name! How about this dude's email?"
      },
      {
        type: "input",
        name: "id",
        message: "Really? Hmm. Well what about the employee ID?"
      },
      {
        type: "list",
        name: "role",
        message: "That's super cool... What does this employee do?",
        choices: [
            "Manager", 
            "Engineer", 
            "Intern",
          ]
      },
      {
        type: "input",
        name: "github",
        message: `Ok, so your employer is an engineer. What is homie's GitHub username?`,
        when: function(answers) {
            // Only run if user answered Engineer
            return answers.role === "Engineer";
        },
      },
      {
        type: "input",
        name: "office",
        message: `Great job choosing this dood for manager! Show me the office number!`,
        when: function(answers) {
            // Only run if user answered Manager
            return answers.role === "Manager";
        },
      },
      {
        type: "input",
        name: "school",
        message: `So little homie is a n00b! I know him or her. What's the school little homie goes to again??`,
        when: function(answers) {
            // Only run if user answered Intern
            return answers.role === "Intern";
        },
      },
    ]);
  }


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
promptUser()
.then(function(answers) {
const html = generateHTML(answers);

return writeFileAsync("team.html", html);
})
.then(function() {
console.log("Successfully wrote to index.html");
})
.catch(function(err) {
console.log(err);
});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

// The first class is an `Employee` parent class with the following properties and
// methods:
// * name
// * id
// * email
// * getName()
// * getId()
// * getEmail()
// * getRole() // Returns 'Employee'

// The other three classes will extend `Employee`. 

// In addition to `Employee`'s properties and methods, `Manager` will also have:
//   * officeNumber
//   * getRole() // Overridden to return 'Manager'

// In addition to `Employee`'s properties and methods, `Engineer` will also have:
//   * github  // GitHub username
//   * getGithub()
//   * getRole() // Overridden to return 'Engineer'

// In addition to `Employee`'s properties and methods, `Intern` will also have:
//   * school 
//   * getSchool()
//   * getRole() // Overridden to return 'Intern'