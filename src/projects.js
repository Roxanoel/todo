//#region Functions
function createNewProject(title){
    return {
        title: title,
        todoList: [], 
        default: false
    }
}
//#endregion
//#region State
const defaultProject = () => {
    let proj = createNewProject(defaultProject);
    proj.default = true;
    return proj;
}
//#endregion
//#region Exports

//#endregion
