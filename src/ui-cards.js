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
    btnContainer.appendChild(createButtonWithId('edit-task', 'Edit'));
    btnContainer.appendChild(createButtonWithId('delete-task', 'Delete'));
    expanded.appendChild(btnContainer);

    return expanded;
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

//#region EXPORTS
export {
    createCard
};
//#endregion