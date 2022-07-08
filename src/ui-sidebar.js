import { createButtonWithId } from "./ui-utils";


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

function updateProjectsList(projectsArray) {
    const projectsList = document.querySelector('.projects-list');
    
    clearProjectsList(projectsList);
    
    for (let i = 0; i < projectsArray.length; i++) {
        const entry = document.createElement('li');
        entry.textContent = projectsArray[i].title;
        entry.setAttribute('data-index', i);

        projectsList.appendChild(entry);
    }
}

function clearProjectsList(projectsList) {
    while(projectsList.lastChild) {
        projectsList.removeChild(projectsList.lastChild);
    }
}

export {
    createSidebar,
    updateProjectsList,
};