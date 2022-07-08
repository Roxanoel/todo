import './style.css';

import { generateGeneralLayout, updateProjectsList, initializeSelectedProject } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAddProject, getProjects, initializeProjectsList } from "./projects.js";
import {createCard} from './cards.js';

generateGeneralLayout();
initializeProjectsList();
initializeSelectedProject();

document.querySelector('.task-box.high-priority').appendChild(createCard('Test card', false, 'This is a description', 'high-priority', 'date'));