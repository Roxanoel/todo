import './style.css';

import { generateGeneralLayout, updateProjectsList } from "./uimanager.js";

import { createTodoItem } from "./todo.js";
import { tryAdd, getProjects, _deleteProject } from "./projects.js";

generateGeneralLayout();

const testProject = tryAdd('Project 3');
const testProject2 = tryAdd('Another2 project');
const testProject3 = tryAdd('Pro2ject 3');
const testProject24 = tryAdd('Anot22her project');
const testProject4 = tryAdd('Projectt 3');
const testProject255 = tryAdd('Another pggroject');
const testProject6 = tryAdd('Projecgt 3');
const testProject27 = tryAdd('Another projehct');
tryAdd('fernfe');
tryAdd('dedede');

updateProjectsList(getProjects());
console.log(getProjects());
