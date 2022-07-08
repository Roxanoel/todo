import { createButtonWithId } from "./ui-utils";
import { createCard } from './ui-cards';

//#region EVENTS
document.addEventListener('currentProjectUpdated', handleCurrentProjectUpdated)
document.addEventListener('tasksUpdated', handleTasksUpdated);

function handleCurrentProjectUpdated(e) {
    const heading = document.querySelector('.heading h2');
    heading.textContent = e.detail.title;

    const tasksLeft = document.querySelector('.heading .tasks-left');
    tasksLeft.textContent = `${e.detail.tasks.length} tasks left`;
}

function handleTasksUpdated(e) {
    clearAllTaskCards();

    const tasksArray = e.detail;

    for (let i = 0; i < tasksArray.length; i++) {
        const card = createCard(tasksArray[i]);
        card.setAttribute('data-index', i);
        // Find the right box to append card to (depending on priority level)
        const parentContainer = findContainer(tasksArray[i].priority);
        parentContainer.appendChild(card);
    }
}
//#endregion

 //#region
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
//#endregion

//#region CARDS

function clearAllTaskCards() {
    const containers = document.querySelectorAll('.task-box');
    containers.forEach(container => {
        while (container.lastChild) {
            container.removeChild(container.lastChild);
        }
    })
}

function findContainer(priority) {
    switch (priority) {
        case 'high-priority':
            return document.querySelector('.task-box.high-priority');
        case 'med-priority':
            return document.querySelector('.task-box.med-priority');
        case 'low-priority':
            return document.querySelector('.task-box.low-priority');
        default: 
            return document.querySelector('.task-box.med-priority');
    }
}

//#endregion

export {
    createMain
}