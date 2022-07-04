import { createTodoItem } from "./todo.js";
import { createAndAddProject, getProjects, _deleteProject } from "./projects.js";

let testProject = createAndAddProject('Test Project');
const taskToAdd = createTodoItem('Test item', 'This is a description', 'Mock due date', 'High priority');

console.log(getProjects());
console.log(testProject);

testProject.addTodoItem(taskToAdd);

console.log(testProject);

testProject.removeTodoItem(0);

console.log(testProject);

_deleteProject(1);

console.log(getProjects());