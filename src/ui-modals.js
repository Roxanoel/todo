import { appendLabelAndInput, appendLabelAndTextarea, createButtonWithId } from "./ui-utils";

//#region STATE
const titleInputID = 'title-input';
const descrInputID = 'descr-input';
const dateInputID = 'date-input';
const priorityInputID = 'priority-input';
//#endregion

//#region EVENTS
document.addEventListener('editTask', editTaskModal);
//#endregion

//#region CREATION

function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'hidden');

    const modalContents = document.createElement('div');
    modalContents.classList.add('modal-contents');
    const heading = document.createElement('h2');
    const form = document.createElement('form');
    modalContents.appendChild(heading);
    modalContents.appendChild(form);

    modal.appendChild(modalContents);
    return modal;
}
//#endregion

//#region SHOW/HIDE
function modalToggleHidden(){
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hidden');
}

function clearModalContents() {
    const form = document.querySelector('.modal form');

    while (form.lastChild) {
        form.removeChild(form.lastChild);
    }
}

function clearAndCloseModal() {
    clearModalContents();
    modalToggleHidden();
}

function clickOutsideModalContents(e) {
    const modalContents = document.querySelector('.modal-contents');
    if(e.path.includes(modalContents)) return;
    clearAndCloseModal(); // Works on its own
}
//#endregion

//#region PROJECT CREATION MODAL
function newProjectModal() {
    // Update heading
    document.querySelector('.modal h2').textContent = 'Create New Project';
    // Get a hold of the form
    const form = document.querySelector('.modal form');
    // Form contents creation
    appendLabelAndInput(form, 'Title: ', titleInputID, 'text', true);
    // Button
    const btn = createButtonWithId('submit-form', 'Add project');
    form.appendChild(btn);
    btn.addEventListener('click', handleSubmitNewProject);
    // Visibility
    modalToggleHidden();
}

function handleSubmitNewProject(e) {
    e.preventDefault();

    // FUNCTIONALITY
    const event = new CustomEvent('newProjectSubmitted', {
        detail: {
            title: document.getElementById(titleInputID).value
        }
    })

    document.dispatchEvent(event);

    // Closes the modal
    clearAndCloseModal();
}
//#endregion

//#region TASK CREATION MODAL
function newTaskModal() {
    // Update heading
    document.querySelector('.modal h2').textContent = 'Add a Task';
    // Get a hold of the form
    const form = document.querySelector('.modal form');
    // Form contents creation - fields
    appendLabelAndInput(form, 'Title: ', titleInputID, 'text', true);
    appendLabelAndTextarea(form, 'Description: ', descrInputID, false);
    appendLabelAndInput(form, 'Due date: ', dateInputID, 'text', false);
    appendLabelAndDropdown(form, 'Priority level: ', priorityInputID)
    
    // Button
    const btn = createButtonWithId('submit-form', 'Add task');
    form.appendChild(btn);
    btn.addEventListener('click', handleSubmitNewTask);


    // Visibility 
    modalToggleHidden();
}

function appendLabelAndDropdown(parent, labelText, id) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;
    parent.appendChild(label);

    parent.appendChild(createPriorityLevelDropdown(id));
}

function createPriorityLevelDropdown(id) {
    const select = document.createElement('select');
    select.setAttribute('name', id);
    select.setAttribute('id', id);

    const option1 = document.createElement('option');
    option1.setAttribute('value', 'high-priority');
    option1.textContent = 'High';

    const option2 = document.createElement('option');
    option2.setAttribute('value', 'med-priority');
    option2.textContent = 'Medium';

    const option3 = document.createElement('option');
    option3.setAttribute('value', 'low-priority');
    option3.textContent = 'Low';

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    return select;
}

function handleSubmitNewTask(e) {
    e.preventDefault();

    // FUNCTIONALITY
    const event = new CustomEvent('newTaskSubmitted', {
        detail: {
            title: document.getElementById(titleInputID).value,
            description: document.getElementById(descrInputID).value,
            dueDate: document.getElementById(dateInputID).value,
            priority: document.getElementById(priorityInputID).value
        }
    })

    document.dispatchEvent(event);


    // Closes the modal
    clearAndCloseModal();
}
//#endregion

//#region EDIT TASK MODAL
function editTaskModal(e) {
    // Update heading
    document.querySelector('.modal h2').textContent = 'Edit Task';
    // Get a hold of the form
    const form = document.querySelector('.modal form');
    // Form contents creation - fields
    appendLabelAndInput(form, 'Title: ', titleInputID, 'text', true);
    appendLabelAndTextarea(form, 'Description: ', descrInputID, false);
    appendLabelAndInput(form, 'Due date: ', dateInputID, 'text', false);
    appendLabelAndDropdown(form, 'Priority level: ', priorityInputID)
    
    // Button
    const btn = createButtonWithId('submit-form', 'Submit');
    btn.setAttribute('data-index', e.detail.index);
    form.appendChild(btn);
    btn.addEventListener('click', handleEditTask);


    // Visibility 
    modalToggleHidden();
}

function handleEditTask(e) {
    e.preventDefault();

    // FUNCTIONALITY
    const event = new CustomEvent('editTaskSubmitted', {
        detail: {
            index: e.currentTarget.dataset.index,
            title: document.getElementById(titleInputID).value,
            description: document.getElementById(descrInputID).value,
            dueDate: document.getElementById(dateInputID).value,
            priority: document.getElementById(priorityInputID).value
        }
    })

    document.dispatchEvent(event);
    
    // Closes the modal
    clearAndCloseModal();
}

//#endregion

export {
    createModal,
    newProjectModal,
    newTaskModal,
    clickOutsideModalContents
}