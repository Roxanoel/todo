import './style.css';

import { generateGeneralLayout, updateProjectsList } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { createAndAddProject, getProjects, _deleteProject } from "./projects.js";

generateGeneralLayout();

const testProject = createAndAddProject('Project 1');
const testProject2 = createAndAddProject('Another project');

updateProjectsList(getProjects());
