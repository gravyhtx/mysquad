# mysquad

This was not a success at all... I am not even sure even after running tests what is wrong 
bc the first 2 were right and now they are not. So this is my best guess of what is supposed
to happen.

Inquirer asks all questions. User would first choose the manager and then change a manager
is true check to true so that only the other employees can be added next. This would be able
to inquire again until team is set.

The main constructor is Employee where this.(name, id, role, and email) are set. The others
extend Employee and "super" to add a new element depending on the role.

The inquirer answers would populate these elements to append to a new card from the htmlRenderer
and would then need to be rendered with the main.html file.

Main file with added cards are then sent to fs.readAsync and render with fs.writeAsync to then
generateHTML to create a file in the "output" folder called team.html