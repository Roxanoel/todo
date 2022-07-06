import './style.css';

import { generateGeneralLayout, updateProjectsList } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAdd, getProjects, _deleteProject } from "./projects.js";

generateGeneralLayout();

const testProject = tryAdd('Project 3');
const testProject2 = tryAdd('Another project');

updateProjectsList(getProjects());
console.log(getProjects());
