import { createButtonWithId } from "./ui-utils";

function createMain() {
    const main = document.createElement('main');
    // heading area
    main.appendChild(createHeadingArea(''));
    // Task boxes * 3
    const highPriority = createTaskBox('high-priority');
    highPriority.firstChild.textContent = 'High Priority';

    const medPriority = createTaskBox('med-priority');
    medPriority.firstChild.textContent = 'Medium Priority';

    const lowPriority = createTaskBox('low-priority');
    lowPriority.firstChild.textContent = 'Low Priority';

    main.appendChild(highPriority);
    main.appendChild(medPriority);
    main.appendChild(lowPriority);

    return main;
}

function createHeadingArea(currentProject) {
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

function createTaskBox(priorityClass) {
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

export {
    createMain
}