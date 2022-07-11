import { compareDesc } from "date-fns";
import { createButtonWithId, createDivWithClass } from "./ui-utils";

//#region CARD CREATION 
function createCard(taskData, index) {    
    const card = createDivWithClass('card');

    card.appendChild(generateCollapsedContents(taskData, index));

    card.appendChild(generateExpandedContents(taskData, index));

    card.setAttribute('data-index', index);

    return card;
}

function generateCollapsedContents(taskData, index) {
    const collapsed = createDivWithClass('collapsed');
    collapsed.appendChild(generateTitleBar(taskData.title, taskData.done));

    const arrow = createDivWithClass('arrow');
    arrow.setAttribute('data-index', index);
    arrow.addEventListener('click', handleArrowClicked);
    collapsed.appendChild(arrow);

    const date = createDivWithClass('date');
    date.textContent = `Due: ${taskData.dueDate}`;
    collapsed.appendChild(date);

    return collapsed;
}

function generateTitleBar(title, isDone) {
    const titleContainer = createDivWithClass('title-container');

    const tickBox = createDivWithClass('tick');
    if (isDone) tickBox.classList.add('ticked');
    titleContainer.appendChild(tickBox);

    const heading = document.createElement('h4');
    heading.classList.add('task-title');
    heading.textContent = title;
    titleContainer.appendChild(heading);

    return titleContainer;
}

function generateExpandedContents(taskData, index) {
    const expanded = createDivWithClass('expanded');
    expanded.classList.add('hidden');
    expanded.setAttribute('data-index', index);

    const descr = createDivWithClass('descr');
    descr.textContent = taskData.description;
    expanded.appendChild(descr);

    const btnContainer = createDivWithClass('btn-container');
    btnContainer.appendChild(createEditButton(index));
    btnContainer.appendChild(createDeleteButton(index));
    expanded.appendChild(btnContainer);

    return expanded;
}

function createEditButton(index) {
    const btn = createButtonWithId('edit-task', 'Edit');
    btn.setAttribute('data-index', index);
    btn.addEventListener('click', handleEditTaskClicked);
    return btn;
}

function createDeleteButton(index) {
    const btn = createButtonWithId('delete-task', 'Delete');
    btn.setAttribute('data-index', index);
    btn.addEventListener('click', handleDeleteTaskClicked);
    return btn;
}
//#endregion

//#region EXPANDING/COLLAPSING 
function handleArrowClicked(e) {
    toggleArrowDirection(e);
    toggleCardExpansion(e);
}
function toggleCardExpansion(e) {
    const index = e.currentTarget.dataset.index;
    const expanded = document.querySelector(`.expanded[data-index="${index}"]`);

    expanded.classList.toggle('hidden');
}

function toggleArrowDirection(e) {
    e.currentTarget.classList.toggle('up');
}
//#endregion

//#region EDITING/DELETING
function handleEditTaskClicked(e) {
    const index = e.currentTarget.dataset.index;

    const titleContent = document.querySelector(`.card[data-index="${index}"] .task-title`).textContent;
    const dateContent = document.querySelector(`.card[data-index="${index}"] .date`).textContent.slice(4);  // Removes the "Due: ", for now. There is probably a better way to do this. 
    const descrContent = document.querySelector(`.card[data-index="${index}"] .descr`).textContent;
    
    const event = new CustomEvent('editTask', {
        detail: {
            index: index,
            title: titleContent,
            dueDate: dateContent,
            description: descrContent,
            priority: getPriorityValue(e)
        }
    });

    document.dispatchEvent(event);
}

function handleDeleteTaskClicked(e) {
    const event = new CustomEvent('taskDeleted', {
        detail: {
            index: e.currentTarget.dataset.index,
        }
    });

    document.dispatchEvent(event);
}

function getPriorityValue(e) {
    const box = e.path.find(item => item.classList.contains('task-box'));
    if (box.classList.contains('med-priority')) return 'med-priority';
    if (box.classList.contains('low-priority')) return 'low-priority';
    return 'high-priority'; // Default value
}
//#endregion

//#region EXPORTS
export {
    createCard
};
//#endregion