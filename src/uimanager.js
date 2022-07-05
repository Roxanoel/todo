//#region References 
const body = document.querySelector('body');

//#endregion

//#region Parameters
const appName = 'My Planner';
//#endregion

//#region General Layout generation
function generateGeneralLayout() {
    // Append header
    body.appendChild(generateHeader());
    // Append sidebar
    body.appendChild(generateSidebar());
    // Append main
}

function generateHeader() {
    const header = document.createElement('header');
    const appTitle = document.createElement('h1');
    appTitle.textContent = appName;
    header.appendChild(appTitle);
    return header;
}

function generateSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const heading = document.createElement('h2');
    heading.textContent = 'Projects';
    sidebar.appendChild(heading);

    const projectsList = document.createElement('ul');
    projectsList.classList.add('projects-list');
    sidebar.appendChild(projectsList);
    //generate list content with its own method?

    const btn = document.createElement('button');
    btn.setAttribute('id', 'add-project');
    btn.textContent = 'Add new project';
    sidebar.appendChild(btn);

    return sidebar;
}

//#region Sidebar contents
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
//#endregion

//#region Exports
export {
    generateGeneralLayout,
    updateProjectsList
}
//#endregion