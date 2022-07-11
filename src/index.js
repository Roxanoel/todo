import './style.css';

import { generateGeneralLayout, updateProjectsList, initializeSelectedProject } from "./uimanager.js";
import { tryAddProject, getProjects, initializeProjectsList } from "./projects.js";

import { parseJSON, differenceInCalendarDays } from 'date-fns';

generateGeneralLayout();
initializeProjectsList();
initializeSelectedProject();

// PRELIMINARY TESTING FOR DATE
const currentDate = new Date(Date.now());
console.log(currentDate);
const jsonDate = currentDate.toJSON();
console.log(jsonDate);
const parsedDate = parseJSON(jsonDate);
console.log(parsedDate);

const dateTwo = new Date('Wed Jul 13 2022 15:06:22 GMT+0100 (British Summer Time)');
console.log(differenceInCalendarDays(parsedDate, dateTwo));
