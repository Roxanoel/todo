import './style.css';

import { generateGeneralLayout, updateProjectsList, initializeSelectedProject } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAddProject, getProjects, initializeProjectsList } from "./projects.js";

generateGeneralLayout();
initializeProjectsList();
initializeSelectedProject();
