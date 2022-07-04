/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\nconsole.table((0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createAndAddProject)('New Project');\nconsole.table((0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQW5kQWRkUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zb2xlLnRhYmxlKGdldFByb2plY3RzKCkpO1xuY3JlYXRlQW5kQWRkUHJvamVjdCgnTmV3IFByb2plY3QnKTtcbmNvbnNvbGUudGFibGUoZ2V0UHJvamVjdHMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAndAddProject\": () => (/* binding */ createAndAddProject),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects)\n/* harmony export */ });\n//#region State\nlet projects = [];\nconst defaultProject = () => {\n    let proj = createNewProject('Default');\n    proj.default = true;\n    addProjectToArray(proj)\n    return proj;\n}\n//#endregion\n\n//#region Functions\nfunction _createNewProject(title){\n    return {\n        title: title,\n        todoList: [], \n        default: false\n    }\n}\n\n// WILL BE REPLACED BY STORAGE LATER!\nfunction _addProjectToArray(project) {\n    projects.push(project);\n}\n\nfunction createAndAddProject(title) {\n    const proj = _createNewProject(title);\n    _addProjectToArray(proj);\n}\n\nfunction getProjects() {\n    return projects;\n}\n//#endregion\n\n//#region Exports\n\n//#endregion\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanM/MTIxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gU3RhdGVcbmxldCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IHByb2ogPSBjcmVhdGVOZXdQcm9qZWN0KCdEZWZhdWx0Jyk7XG4gICAgcHJvai5kZWZhdWx0ID0gdHJ1ZTtcbiAgICBhZGRQcm9qZWN0VG9BcnJheShwcm9qKVxuICAgIHJldHVybiBwcm9qO1xufVxuLy8jZW5kcmVnaW9uXG5cbi8vI3JlZ2lvbiBGdW5jdGlvbnNcbmZ1bmN0aW9uIF9jcmVhdGVOZXdQcm9qZWN0KHRpdGxlKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHRvZG9MaXN0OiBbXSwgXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxufVxuXG4vLyBXSUxMIEJFIFJFUExBQ0VEIEJZIFNUT1JBR0UgTEFURVIhXG5mdW5jdGlvbiBfYWRkUHJvamVjdFRvQXJyYXkocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEFkZFByb2plY3QodGl0bGUpIHtcbiAgICBjb25zdCBwcm9qID0gX2NyZWF0ZU5ld1Byb2plY3QodGl0bGUpO1xuICAgIF9hZGRQcm9qZWN0VG9BcnJheShwcm9qKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuLy8jZW5kcmVnaW9uXG5cbi8vI3JlZ2lvbiBFeHBvcnRzXG5leHBvcnQge1xuICAgIGNyZWF0ZUFuZEFkZFByb2plY3QsXG4gICAgZ2V0UHJvamVjdHNcbn07XG4vLyNlbmRyZWdpb25cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/projects.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem)\n/* harmony export */ });\nfunction createTodoItem(title, descr, dueDate, priority) {\n    return {\n        title: title,\n        description: descr,\n        dueDate: dueDate,\n        priority: priority /*Eventually do a check to ensure it is either\n         'low', 'medium', or 'high'; think about where to put it! \n         Could also be an unspecified value.*/,\n        editItem: function(property, newValue) {\n            if (property in this)\n            this[property] = newValue;\n        }\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzPzI0ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0odGl0bGUsIGRlc2NyLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkgLypFdmVudHVhbGx5IGRvIGEgY2hlY2sgdG8gZW5zdXJlIGl0IGlzIGVpdGhlclxuICAgICAgICAgJ2xvdycsICdtZWRpdW0nLCBvciAnaGlnaCc7IHRoaW5rIGFib3V0IHdoZXJlIHRvIHB1dCBpdCEgXG4gICAgICAgICBDb3VsZCBhbHNvIGJlIGFuIHVuc3BlY2lmaWVkIHZhbHVlLiovLFxuICAgICAgICBlZGl0SXRlbTogZnVuY3Rpb24ocHJvcGVydHksIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGhpcylcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVG9kb0l0ZW0sXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;