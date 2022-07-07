import _, { addToStorage, removeFromStorage, retrieveAllFromStorage } from "./storage.js";

//#region STATE
const maxProjects = 10;
//#endregion

//#region INIT
let projects = (() => {
    // Empty array to store results
    const projs = [];
    // Retrieving JSON data
    const data = retrieveAllFromStorage();
    // Reassembling full objects from JSON data
    data.forEach(datum => {
        const obj = _reconstituteProject(datum);
        projs.push(obj);
    })
    return projs;
})();

//#endregion

//#region Factory functions
function _createNewProject(title, isDefault){
    return {
        title: title,
        todoList: [], 
        default: isDefault,

        //functions
        addTodoItem: function(item) {
            this.todoList.push(item);
            addToStorage(this.title, _extractProjectData(this));
        },
        removeTodoItem: function(itemIndex) {
            this.todoList.splice(+itemIndex, 1);
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
    /*if (checkForDuplicateTitle(title)) {
        console.log("Unable to add, there is already a project with that title.");
        return;
    }
    
    if (projects.length >= maxProjects) {
        console.log(`Unable to add project, maximum = ${maxProjects}`);
        return;
    }*/

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
    _deleteProject
};
//#endregion
