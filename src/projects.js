//#region State
let projects = [];
const defaultProject = () => {
    let proj = createNewProject('Default');
    proj.default = true;
    addProjectToArray(proj)
    return proj;
}
//#endregion

//#region Functions
function _createNewProject(title){
    return {
        title: title,
        todoList: [], 
        default: false
    }
}

// WILL BE REPLACED BY STORAGE LATER!
function _addProjectToArray(project) {
    projects.push(project);
}

function createAndAddProject(title) {
    const proj = _createNewProject(title);
    _addProjectToArray(proj);
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
