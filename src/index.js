import './style.css';

import { generateGeneralLayout, updateProjectsList, initializeSelectedProject } from "./uimanager.js";
import { tryAddProject, getProjects, initializeProjectsList } from "./projects.js";

import { parseJSON, differenceInCalendarDays } from 'date-fns';

generateGeneralLayout();
initializeProjectsList();
initializeSelectedProject();


