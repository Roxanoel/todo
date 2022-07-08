import { createButtonWithId, createDivWithClass } from "./ui-utils";

//#region STATE
let cards = [];
//#endregion

//#region FACTORY 
function createCardContents(title, isDone, descr, priority, dueDate) {
    return {
        title: title,
        isDone: isDone,
        description: descr,
        priorityLevel: priority,
        dueDate: dueDate,
        isExpanded: false
    }
}
//#endregion

//#region CARD CREATION 
function createCard(title, isDone, descr, priority, dueDate) {
    const contents = createCardContents(title, isDone, descr, priority, dueDate);

    return generateElementsForCard(contents);    
}

function generateElementsForCard(contents) {
    const card = createDivWithClass('card');

    card.appendChild(generateCollapsedContents(contents));

    card.appendChild(generateExpandedContents(contents));

    return card;
}

function generateCollapsedContents(contents) {
    const collapsed = createDivWithClass('collapsed');
    collapsed.appendChild(generateTitleBar(contents.title, contents.isDone));

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

function generateExpandedContents(contents) {
    const expanded = createDivWithClass('expanded');
    expanded.classList.add('hidden');

    const descr = createDivWithClass('descr');
    descr.textContent = contents.description;
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