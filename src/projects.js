import _, { addToStorage, removeFromStorage } from "./storage.js";

//#region State/init
let projects = [];
const defaultProject = createAndAddProject('Default', true);
    defaultProject.default = true;
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
        },
        removeTodoItem: function(itemIndex) {
            this.todoList.splice(+itemIndex, 1);
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
    // If there isn't, add it to storage and array.
    addToStorage(defaultProject.title, _extractProjectData(defaultProject)); 
    projects.push(defaultProject);
}

function createAndAddProject(title, isDefault) {
    const proj = _createNewProject(title, isDefault);
    _addProject(proj);
    return proj;
}

function getProjects() {
    return projects;
}
//#endregion

//#region Exports
export {
    createAndAddProject,
    getProjects,
    _deleteProject
};
//#endregion
