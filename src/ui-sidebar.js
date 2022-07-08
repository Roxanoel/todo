import { createButtonWithId } from "./ui-utils";

//#region DOM creation
function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const heading = document.createElement('h2');
    heading.textContent = 'Projects';
    sidebar.appendChild(heading);

    const projectsList = document.createElement('ul');
    projectsList.classList.add('projects-list');
    sidebar.appendChild(projectsList);

    const btn = createButtonWithId('add-project', 'Add new project');
    sidebar.appendChild(btn);

    document.addEventListener('projectsUpdated', (e)=> {
        updateProjectsList(e.detail);
    });

    return sidebar;
}
//#endregion

//#region Updating projects list
function updateProjectsList(projectsArray) {
    const projectsList = document.querySelector('.projects-list');
    
    clearProjectsList(projectsList);
    
    for (let i = 0; i < projectsArray.length; i++) {
        const entry = document.createElement('li');
        entry.textContent = projectsArray[i].title;
        entry.setAttribute('data-index', i);
        entry.addEventListener('click', setActiveProject)

        projectsList.appendChild(entry);
    }
}

function clearProjectsList(projectsList) {
    while(projectsList.lastChild) {
        projectsList.removeChild(projectsList.lastChild);
    }
}

function setActiveProject(e) {
    const project = e.currentTarget;
    const thisIndex = project.dataset.index;

    // figure out styling later. Issues that will arise: 
    // - Clearing style of previously selected item
    // - Ensuring the styling remains when a new project is added to the list (unless I circumvent this by just automatically setting new project to active)

    // Event dispatch
    const event = new CustomEvent('activeProjectUpdated', {
        detail: {
            index: +thisIndex
        }
    });
    document.dispatchEvent(event);
}
//#endregion

//#region EXPORTS
export {
    createSidebar,
    updateProjectsList,
};
//#endregion