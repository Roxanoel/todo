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
    body.appendChild(generateMain());
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

    const btn = createButtonWithId('add-project', 'Add new project');
    sidebar.appendChild(btn);

    return sidebar;
}

function generateMain() {
    const main = document.createElement('main');
    // heading area
    main.appendChild(generateHeadingArea(''));
    // Task boxes * 3
    const highPriority = generateTaskBox('high-priority');
    highPriority.firstChild.textContent = 'High Priority';

    const medPriority = generateTaskBox('med-priority');
    medPriority.firstChild.textContent = 'Medium Priority';

    const lowPriority = generateTaskBox('low-priority');
    lowPriority.firstChild.textContent = 'Low Priority';

    main.appendChild(highPriority);
    main.appendChild(medPriority);
    main.appendChild(lowPriority);

    return main;
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

//#region Main contents
function generateHeadingArea(currentProject) {
    const headingArea = document.createElement('div');
    headingArea.classList.add('heading-area');

    const heading = document.createElement('div');
    heading.classList.add('heading');

    const projectName = document.createElement('h2');
    //projectName.textContent = currentProject.title; 
    projectName.textContent = 'HARDCODED FOR TESTING';
    
    const tasksLeft = document.createElement('div');
    tasksLeft.classList.add('tasks-left');
    tasksLeft.textContent = 'x tasks left';

    const addBtn = createButtonWithId('add-task', '');

    const editBtn = createButtonWithId('edit-project', '');

    const deleteBtn = createButtonWithId('delete-project', '');

    heading.appendChild(projectName);
    heading.appendChild(tasksLeft);
    heading.appendChild(addBtn);
    heading.appendChild(editBtn);
    heading.appendChild(deleteBtn);

    headingArea.appendChild(heading);

    return headingArea;
}

function generateTaskBox(priorityClass) {
    const box = document.createElement('div');
    box.classList.add('task-box', priorityClass);
    box.appendChild(document.createElement('h3'));
    return box;
}

function createCard(task) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.appendChild(createCardTop(task));
    card.appendChild(createCardBottom(task));

    return card;
}

function createCardTop(task) {
    const collapsed = document.createElement('div');
    collapsed.classList.add('collapsed');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    
    const checkBox = document.createElement('div');
    checkBox.classList.add('tick');
    // logic to determine whether the box should be ticked or not
    if (task.done) checkBox.classList.add('ticked');

    const heading = document.createElement('h4');
    heading.classList.add('task-title');
    heading.textContent = task.title;

    titleContainer.appendChild(checkBox);
    titleContainer.appendChild(heading);

    const arrow = document.createElement('div');
    arrow.classList.add('arrow');

    collapsed.appendChild(titleContainer);
    collapsed.appendChild(arrow);

    return collapsed;
}

function createCardBottom(task) {
    const expanded = document.createElement('div');
    expanded.classList.add('expanded');

    const descr = document.createElement('div');
    descr.classList.add('descr');
    descr.textContent = task.description;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const btn = createButtonWithId('delete-task', 'Delete');
    btnContainer.appendChild(btn);

    expanded.appendChild(descr);
    expanded.appendChild(btnContainer);

    expanded.classList.add('hidden');

    return expanded;
}

//#endregion

//#region UTIL

function createButtonWithId(id, textContent) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = textContent;
    return btn;
}

//#endregion

//#region Exports
export {
    generateGeneralLayout,
    updateProjectsList
}
//#endregion