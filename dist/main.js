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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQW5kQWRkUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAndAddProject\": () => (/* binding */ createAndAddProject),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects)\n/* harmony export */ });\n//#region State\nlet projects = [];\nconst defaultProject = _createNewProject('Default');\n    defaultProject.default = true;\n//#endregion\n\n//#region Functions\nfunction _createNewProject(title){\n    return {\n        title: title,\n        todoList: [], \n        default: false\n    }\n}\n\n// WILL BE REPLACED BY STORAGE LATER!\nfunction _addProjectToArray(project) {\n    _checkForDefault();\n    \n    projects.push(project);\n}\n\nfunction _checkForDefault() {\n    // If there is already the default project, do nothing more\n    if (projects.find(project => project.default === true)) return;\n    // If there isn't, add it. \n    projects.push(defaultProject);\n}\n\nfunction createAndAddProject(title) {\n    const proj = _createNewProject(title);\n    _addProjectToArray(proj);\n}\n\nfunction getProjects() {\n    return projects;\n}\n//#endregion\n\n//#region Exports\n\n//#endregion\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzPzEyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIFN0YXRlXG5sZXQgcHJvamVjdHMgPSBbXTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gX2NyZWF0ZU5ld1Byb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBkZWZhdWx0UHJvamVjdC5kZWZhdWx0ID0gdHJ1ZTtcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRnVuY3Rpb25zXG5mdW5jdGlvbiBfY3JlYXRlTmV3UHJvamVjdCh0aXRsZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB0b2RvTGlzdDogW10sIFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbn1cblxuLy8gV0lMTCBCRSBSRVBMQUNFRCBCWSBTVE9SQUdFIExBVEVSIVxuZnVuY3Rpb24gX2FkZFByb2plY3RUb0FycmF5KHByb2plY3QpIHtcbiAgICBfY2hlY2tGb3JEZWZhdWx0KCk7XG4gICAgXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrRm9yRGVmYXVsdCgpIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IHRoZSBkZWZhdWx0IHByb2plY3QsIGRvIG5vdGhpbmcgbW9yZVxuICAgIGlmIChwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5kZWZhdWx0ID09PSB0cnVlKSkgcmV0dXJuO1xuICAgIC8vIElmIHRoZXJlIGlzbid0LCBhZGQgaXQuIFxuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgY29uc3QgcHJvaiA9IF9jcmVhdGVOZXdQcm9qZWN0KHRpdGxlKTtcbiAgICBfYWRkUHJvamVjdFRvQXJyYXkocHJvaik7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbn1cbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRXhwb3J0c1xuZXhwb3J0IHtcbiAgICBjcmVhdGVBbmRBZGRQcm9qZWN0LFxuICAgIGdldFByb2plY3RzXG59O1xuLy8jZW5kcmVnaW9uXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/projects.js\n");

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