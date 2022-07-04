import { createTodoItem } from "./todo.js";
import { createAndAddProject, getProjects } from "./projects.js";

console.table(getProjects());
createAndAddProject('New Project');
console.table(getProjects());