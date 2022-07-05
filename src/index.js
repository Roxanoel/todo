import './style.css';

import { generateMainLayout } from './uimanager';

import { createTodoItem } from "./todo.js";
import { createAndAddProject, getProjects, _deleteProject } from "./projects.js";

generateMainLayout();
