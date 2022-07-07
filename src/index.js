import './style.css';

import { generateGeneralLayout, updateProjectsList } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAddProject, getProjects, _deleteProject } from "./projects.js";
import _ from "./storage.js";

generateGeneralLayout();

const testProject = tryAddProject('Project 2', '');
const newTask = createTodoItem('Test task', 'defbhebf', 'fbfgefbeeh', 'low-priority');

testProject.addTodoItem(newTask);
localStorage.setItem(testProject.title, testProject);

updateProjectsList(getProjects());
console.log(getProjects());
