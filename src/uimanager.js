//#region References 
const body = document.querySelector('body');
//#endregion

//#region Parameters
const appName = 'My Planner';
//#endregion

//#region Main Layout generation
function generateMainLayout() {
    // Append header
    body.appendChild(generateHeader());
}

function generateHeader() {
    const header = document.createElement('header');
    const appTitle = document.createElement('h1');
    appTitle.textContent = appName;
    header.appendChild(appTitle);
    return header;
}

//#region Exports
export {
    generateMainLayout
}
//#endregion