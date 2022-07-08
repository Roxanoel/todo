import { createButtonWithId, createDivWithClass } from "./ui-utils";

//#region FACTORY 
function createCardContents(title, isDone, descr, priority, dueDate, isExpanded) {
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
function createAndAddCard(title, isDone, descr, priority, dueDate, isExpanded) {
    const contents = createCardContents(title, isDone, descr, priority, dueDate, isExpanded);

    
}

function generateElementsForCard(contents) {
    
}
//#endregion