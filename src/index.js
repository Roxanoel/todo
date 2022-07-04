import './style.css';

import { createTodoItem } from "./todo.js";
import { createAndAddProject, getProjects, _deleteProject } from "./projects.js";

let testProject = createAndAddProject('Test Project');
const testTask = createTodoItem('Test item', 'This is a description', 'Mock due date', 'High priority');


console.log(testTask);
testTask.changeDoneStatus();
console.log(testTask);
