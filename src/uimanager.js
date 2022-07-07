import { createSidebar, updateProjectsList } from "./ui-sidebar";
import { createMain } from "./ui-main";
import { createModal, newProjectModal, newTaskModal, clickOutsideModalContents } from "./ui-modals";

//#region References 
const body = document.querySelector('body');

//#endregion

//#region Parameters
const appName = 'My Planner';
//#endregion

//#region General Layout generation
function generateGeneralLayout() {
    // Append header
    body.appendChild(createHeader());
    // Append sidebar
    body.appendChild(createSidebar());
    // Append main
    body.appendChild(createMain());
    // Append modal 
    const modal = createModal()
    body.appendChild(modal);

    // Listeners
    document.getElementById('add-project').addEventListener('click', newProjectModal);
    document.getElementById('add-task').addEventListener('click', newTaskModal);
    modal.addEventListener('click', clickOutsideModalContents);
}

function createHeader() {
    const header = document.createElement('header');
    const appTitle = document.createElement('h1');
    appTitle.textContent = appName;
    header.appendChild(appTitle);
    return header;
}


//#endregion


//#endregion

//#region Exports
export {
    generateGeneralLayout,
    updateProjectsList
}
//#endregion