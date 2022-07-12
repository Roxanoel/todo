import _, { addToStorage, removeFromStorage, retrieveAllFromStorage } from "./storage.js";
import { createTodoItem } from "./todo.js";

//#region STATE
const maxProjects = 10;
let projects = [];
let currentProject;
//#endregion

//#region INIT
function initializeProjectsList(){
    // If no storage, generate default & return
    if (localStorage.length < 1) {
        _generateDefaultProject();
    }
    else {
        // Retrieving JSON data
        const data = retrieveAllFromStorage();
        // Reassembling full objects from JSON data
        data.forEach(datum => {
        const obj = _reconstituteProject(datum);
        projects.push(obj);
        });
    }

    // Set first project in list as current 
    currentProject = projects[0];
    
    document.dispatchEvent(projectsUpdatedEvent);
};
//#endregion

//#region EVENTS - DEFINITION
const projectsUpdatedEvent = new CustomEvent('projectsUpdated', {
    detail: projects
})

//#endregion

//#region EVENTS - LISTENING
document.addEventListener('newProjectSubmitted', handleNewProjectSubmitted);
document.addEventListener('newTaskSubmitted', handleNewTaskSubmitted);
document.addEventListener('activeProjectUpdated', handleActiveProjectUpdated);
document.addEventListener('taskDeleted', handleTaskDeleted);
document.addEventListener('editTaskSubmitted', handleEditTask);
document.addEventListener('doneStatusUpdated', handleDoneStatusUpdated);
document.addEventListener('deleteProject', handleDeleteProject);
document.addEventListener('editProjectSubmitted', handleEditProjectSubmitted);

function handleNewProjectSubmitted(e) {
    const newProject = tryAddProject(e.detail.title, false);

    if (!newProject) return;  // Will work with any falsy value

    // Sets current project to the newly added project
    currentProject = projects[projects.length - 1];

    document.dispatchEvent(projectsUpdatedEvent);
    dispatchCurrentProjectUpdatedEvent();
}

function handleEditProjectSubmitted(e) {
    currentProject.editProjectTitle(e.detail.title);

    document.dispatchEvent(projectsUpdatedEvent);
    dispatchCurrentProjectUpdatedEvent();
}

function handleNewTaskSubmitted(e) {
    const task = createTodoItem(e.detail.title, e.detail.description, e.detail.dueDate, e.detail.priority);

    currentProject.addTodoItem(task);
    
    dispatchTasksUpdatedEvent();
}

function handleActiveProjectUpdated(e) {
    const index = e.detail.index;
    currentProject = projects[index];

    dispatchCurrentProjectUpdatedEvent();
    dispatchTasksUpdatedEvent();
}

function dispatchCurrentProjectUpdatedEvent() {
    const currentProjectUpdated = new CustomEvent('currentProjectUpdated', {
        detail: {
            title: currentProject.title,
            tasks: currentProject.todoList, 
            index: projects.indexOf(currentProject)
        }
    })

    document.dispatchEvent(currentProjectUpdated);
}

function dispatchTasksUpdatedEvent() {
    const tasksUpdated = new CustomEvent('tasksUpdated', {
        detail: currentProject.todoList
    })

    document.dispatchEvent(tasksUpdated);
}

function handleTaskDeleted(e) {
    const index = e.detail.index;
    
    currentProject.removeTodoItem(index);

    dispatchTasksUpdatedEvent();
}

function handleEditTask(e) {
    const task = currentProject.todoList[e.detail.index];

    // Make array with all properties in event's details except index
    let properties = Object.entries(e.detail);
    properties.splice(0, 1);

    properties.forEach(propertyValueCouple => {
        const propertyName = propertyValueCouple[0];
        const value = propertyValueCouple[1];

        currentProject.editTodoItem(task, propertyName, value);
    })


    dispatchTasksUpdatedEvent();
}

function handleDoneStatusUpdated(e) {
    const index = e.detail.index;
    
    currentProject.toggleTaskDone(index);

    dispatchTasksUpdatedEvent();
}

function handleDeleteProject() {    
    if (currentProject.default === true) {
        alert('Cannot delete default project');
        return;
    }

    const currentProjectIndex = projects.indexOf(currentProject);
    projects.splice(currentProjectIndex, 1);
    removeFromStorage(currentProject.title);
    
    currentProject = projects[0];

    document.dispatchEvent(projectsUpdatedEvent);
    dispatchCurrentProjectUpdatedEvent();
}
//#endregion


//#region Factory functions
function _createNewProject(title, isDefault){
    return {
        title: title,
        todoList: [], 
        default: isDefault,

        //functions
        editProjectTitle: function(newTitle) {
            // Check if name is empty
            if (!newTitle) return;
            // Otherwise, first delete old entry from storage
            removeFromStorage(this.title);
            console.log(localStorage);
            // Change name
            this.title = newTitle;
            // Save entry again but with the new title. 
            addToStorage(this.title, _extractProjectData(this));
        },
        addTodoItem: function(item) {
            this.todoList.push(item);
            addToStorage(this.title, _extractProjectData(this));
        },
        removeTodoItem: function(itemIndex) {
            this.todoList.splice(+itemIndex, 1);
            addToStorage(this.title, _extractProjectData(this));
        },
        editTodoItem: function(task, property, newValue) {
            if (!newValue || newValue.toString() === 'Invalid Date') return;

            if (property in task) 
            task[property] = newValue;  
            addToStorage(this.title, _extractProjectData(this));
        },
        toggleTaskDone: function(itemIndex) {
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
            addToStorage(this.title, _extractProjectData(this));
        }
    }
}

function _extractProjectData(project) {
    return {
        title: project.title,
        todoList: project.todoList,
        default: project.default,
    }
}

//#endregion

//#region Other functions

function _reconstituteProject(savedData) {
    const proj = _createNewProject(savedData.title);
    proj.todoList = savedData.todoList;
    proj.default = savedData.default;
    return proj;
}

function _addProject(project) {
    _checkForDefault();
    
    // Add to storage
    const projectData = _extractProjectData(project);
    addToStorage(project.title, projectData);
    // Add to local array
    projects.push(project);
    // Dispatch event to notify listeners that project list was changed 
    document.dispatchEvent(projectsUpdatedEvent);
}

function _deleteProject(index) {
    const proj = projects[+index];
    
    removeFromStorage(proj.title);
    projects.splice(+index, 1);
}

function _checkForDefault() {
    // If there is already the default project, do nothing more
    if (projects.find(project => project.default === true)) return;
    // If there isn't: 
    _generateDefaultProject();
}

function _generateDefaultProject() {
    const defaultProj = _createNewProject('Default', true);
    projects.push(defaultProj);
    addToStorage(defaultProj.title, _extractProjectData(defaultProj));
}

function tryAddProject(title, isDefault) {
    if (checkForDuplicateTitle(title)) {
        console.log("Unable to add, there is already a project with that title.");
        return;
    }
    
    if (projects.length >= maxProjects) {
        console.log(`Unable to add project, maximum = ${maxProjects}`);
        return;
    }

    return _createAndAddProject(title, isDefault);
}

function _createAndAddProject(title, isDefault) {
    const proj = _createNewProject(title, isDefault);
    _addProject(proj);
    return proj;
}

function getProjects() {
    return projects;
}

function checkForDuplicateTitle(value) {
    return projects.find(project => project.title === value);
}

//#endregion

//#region Exports
export {
    tryAddProject,
    getProjects,
    initializeProjectsList
};
//#endregion
