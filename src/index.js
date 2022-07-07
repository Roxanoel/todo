import './style.css';

import { generateGeneralLayout, updateProjectsList } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAddProject, getProjects, initializeProjectsList } from "./projects.js";
import _ from "./storage.js";

generateGeneralLayout();
initializeProjectsList();