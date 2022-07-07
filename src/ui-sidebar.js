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
    //generate list content with its own method?

    const btn = createButtonWithId('add-project', 'Add new project');
    sidebar.appendChild(btn);

    return sidebar;
}

function updateProjectsList(projectsArray) {
    const projectsList = document.querySelector('.projects-list');
    
    clearProjectsList(projectsList);
    
    projectsArray.forEach(project => {
        const entry = document.createElement('li');
        entry.textContent = project.title;
        projectsList.appendChild(entry);
    })
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