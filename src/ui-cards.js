import { createButtonWithId, createDivWithClass } from "./ui-utils";

//#region CARD CREATION 
function createCard(taskData) {
    return generateElementsForCard(taskData);    
}

function generateElementsForCard(taskData) {
    const card = createDivWithClass('card');

    card.appendChild(generateCollapsedContents(taskData));

    card.appendChild(generateExpandedContents(taskData));

    return card;
}

function generateCollapsedContents(taskData) {
    const collapsed = createDivWithClass('collapsed');
    collapsed.appendChild(generateTitleBar(taskData.title, taskData.done));

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

function generateExpandedContents(taskData) {
    const expanded = createDivWithClass('expanded');
    expanded.classList.add('hidden');

    const descr = createDivWithClass('descr');
    descr.textContent = taskData.description;
    expanded.appendChild(descr);

    const btnContainer = createDivWithClass('btn-container');
    btnContainer.appendChild(createButtonWithId('delete-task', 'Delete'));
    expanded.appendChild(btnContainer);

    return expanded;
}

//#endregion

//#region EXPORTS
export {
    createCard
};
//#endregion