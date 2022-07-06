import './style.css';

import { generateGeneralLayout, updateProjectsList } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAddProject, getProjects, _deleteProject } from "./projects.js";

generateGeneralLayout();

const testProject = tryAddProject('Project 1');


updateProjectsList(getProjects());
console.log(getProjects());
