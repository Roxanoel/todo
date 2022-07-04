//#region State
let projects = [];
const defaultProject = _createNewProject('Default');
    defaultProject.default = true;
//#endregion

//#region Functions
function _createNewProject(title){
    return {
        title: title,
        todoList: [], 
        default: false,

        //functions
        addTodoItem: function(item) {
            this.todoList.push(item);
        },
        removeTodoItem: function(itemIndex) {
            this.todoList.splice(+itemIndex, 1);
        }
    }
}

// WILL BE REPLACED BY STORAGE LATER!
function _addProjectToArray(project) {
    _checkForDefault();
    
    projects.push(project);
}

function _checkForDefault() {
    // If there is already the default project, do nothing more
    if (projects.find(project => project.default === true)) return;
    // If there isn't, add it. 
    projects.push(defaultProject);
}

function createAndAddProject(title) {
    const proj = _createNewProject(title);
    _addProjectToArray(proj);
    return proj;
}

function getProjects() {
    return projects;
}
//#endregion

//#region Exports
export {
    createAndAddProject,
    getProjects
};
//#endregion
