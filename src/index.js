import { createTodoItem } from "./todo.js";
import { createAndAddProject, getProjects } from "./projects.js";

let testProject = createAndAddProject('Test Project');
const taskToAdd = createTodoItem('Test item', 'This is a description', 'Mock due date', 'High priority');

console.log(testProject);

testProject.addTodoItem(taskToAdd);

console.log(testProject);