import { createButtonWithId } from "./ui-utils";

//#region DOM creation
function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const heading = document.createElement("h2");
  heading.textContent = "Projects";
  sidebar.appendChild(heading);

  const projectsList = document.createElement("ul");
  projectsList.classList.add("projects-list");
  sidebar.appendChild(projectsList);

  const btn = createButtonWithId("add-project", "Add new project");
  sidebar.appendChild(btn);

  document.addEventListener("projectsUpdated", (e) => {
    updateProjectsList(e.detail);
  });

  return sidebar;
}
//#endregion

//#region EVENT LISTENERS

document.addEventListener("currentProjectUpdated", handleCurrentProjectUpdated);

function handleCurrentProjectUpdated(e) {
  const index = e.detail.index;
  const listItem = document.querySelector(
    `.projects-list [data-index="${index}"]`
  );
  applySelectedStyle(listItem);
}

//#endregion

//#region INIT
function initializeSelectedProject() {
  applySelectedStyle(document.querySelector(".projects-list :first-child"));
  dispatchActiveProjectUpdated(0);
}
//#endregion

//#region Updating projects list
function updateProjectsList(projectsArray) {
  const projectsList = document.querySelector(".projects-list");

  clearProjectsList(projectsList);

  for (let i = 0; i < projectsArray.length; i++) {
    const entry = document.createElement("li");
    entry.textContent = projectsArray[i].title;
    entry.setAttribute("data-index", i);
    entry.addEventListener("click", setActiveProject);

    projectsList.appendChild(entry);
  }
}

function clearProjectsList(projectsList) {
  while (projectsList.lastChild) {
    projectsList.removeChild(projectsList.lastChild);
  }
}

function setActiveProject(e) {
  const project = e.currentTarget;
  const thisIndex = project.dataset.index;

  applySelectedStyle(project);

  dispatchActiveProjectUpdated(thisIndex);
}

function applySelectedStyle(project) {
  // For styling; ensure previous styling is removed.
  const projectsArray = document.querySelectorAll(".projects-list li");
  projectsArray.forEach((item) => item.classList.remove("selected"));
  // Apply style to clicked element
  project.classList.add("selected");
}

function dispatchActiveProjectUpdated(index) {
  // Event dispatch
  const event = new CustomEvent("activeProjectUpdated", {
    detail: {
      index: +index,
    },
  });
  document.dispatchEvent(event);
}
//#endregion

//#region EXPORTS
export { createSidebar, updateProjectsList, initializeSelectedProject };
//#endregion
