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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\nlet testProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createAndAddProject)('Test Project');\nconst testTask = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)('Test item', 'This is a description', 'Mock due date', 'High priority');\n\n\nconsole.log(testTask);\ntestTask.changeDoneStatus();\nconsole.log(testTask);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVBbmRBZGRQcm9qZWN0LCBnZXRQcm9qZWN0cywgX2RlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5sZXQgdGVzdFByb2plY3QgPSBjcmVhdGVBbmRBZGRQcm9qZWN0KCdUZXN0IFByb2plY3QnKTtcbmNvbnN0IHRlc3RUYXNrID0gY3JlYXRlVG9kb0l0ZW0oJ1Rlc3QgaXRlbScsICdUaGlzIGlzIGEgZGVzY3JpcHRpb24nLCAnTW9jayBkdWUgZGF0ZScsICdIaWdoIHByaW9yaXR5Jyk7XG5cblxuY29uc29sZS5sb2codGVzdFRhc2spO1xudGVzdFRhc2suY2hhbmdlRG9uZVN0YXR1cygpO1xuY29uc29sZS5sb2codGVzdFRhc2spO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_deleteProject\": () => (/* binding */ _deleteProject),\n/* harmony export */   \"createAndAddProject\": () => (/* binding */ createAndAddProject),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects)\n/* harmony export */ });\n//#region State\nlet projects = [];\nconst defaultProject = _createNewProject('Default');\n    defaultProject.default = true;\n//#endregion\n\n//#region Functions\nfunction _createNewProject(title){\n    return {\n        title: title,\n        todoList: [], \n        default: false,\n\n        //functions\n        addTodoItem: function(item) {\n            this.todoList.push(item);\n        },\n        removeTodoItem: function(itemIndex) {\n            this.todoList.splice(+itemIndex, 1);\n        }\n    }\n}\n\n// WILL BE REPLACED BY STORAGE LATER!\nfunction _addProjectToArray(project) {\n    _checkForDefault();\n    \n    projects.push(project);\n}\n\nfunction _deleteProject(index) {\n    projects.splice(+index, 1);\n}\n\nfunction _checkForDefault() {\n    // If there is already the default project, do nothing more\n    if (projects.find(project => project.default === true)) return;\n    // If there isn't, add it. \n    projects.push(defaultProject);\n}\n\nfunction createAndAddProject(title) {\n    const proj = _createNewProject(title);\n    _addProjectToArray(proj);\n    return proj;\n}\n\nfunction getProjects() {\n    return projects;\n}\n//#endregion\n\n//#region Exports\n\n//#endregion\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzPzEyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIFN0YXRlXG5sZXQgcHJvamVjdHMgPSBbXTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gX2NyZWF0ZU5ld1Byb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBkZWZhdWx0UHJvamVjdC5kZWZhdWx0ID0gdHJ1ZTtcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRnVuY3Rpb25zXG5mdW5jdGlvbiBfY3JlYXRlTmV3UHJvamVjdCh0aXRsZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB0b2RvTGlzdDogW10sIFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcblxuICAgICAgICAvL2Z1bmN0aW9uc1xuICAgICAgICBhZGRUb2RvSXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUb2RvSXRlbTogZnVuY3Rpb24oaXRlbUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZSgraXRlbUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gV0lMTCBCRSBSRVBMQUNFRCBCWSBTVE9SQUdFIExBVEVSIVxuZnVuY3Rpb24gX2FkZFByb2plY3RUb0FycmF5KHByb2plY3QpIHtcbiAgICBfY2hlY2tGb3JEZWZhdWx0KCk7XG4gICAgXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gX2RlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoK2luZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrRm9yRGVmYXVsdCgpIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IHRoZSBkZWZhdWx0IHByb2plY3QsIGRvIG5vdGhpbmcgbW9yZVxuICAgIGlmIChwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5kZWZhdWx0ID09PSB0cnVlKSkgcmV0dXJuO1xuICAgIC8vIElmIHRoZXJlIGlzbid0LCBhZGQgaXQuIFxuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgY29uc3QgcHJvaiA9IF9jcmVhdGVOZXdQcm9qZWN0KHRpdGxlKTtcbiAgICBfYWRkUHJvamVjdFRvQXJyYXkocHJvaik7XG4gICAgcmV0dXJuIHByb2o7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbn1cbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRXhwb3J0c1xuZXhwb3J0IHtcbiAgICBjcmVhdGVBbmRBZGRQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIF9kZWxldGVQcm9qZWN0XG59O1xuLy8jZW5kcmVnaW9uXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/projects.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem)\n/* harmony export */ });\nfunction createTodoItem(title, descr, dueDate, priority) {\n    return {\n        title: title,\n        description: descr,\n        dueDate: dueDate,\n        priority: priority /*Eventually do a check to ensure it is either\n         'low', 'medium', or 'high'; think about where to put it! \n         Could also be an unspecified value.*/,\n        done: false,\n        editItem: function(property, newValue) {\n            if (property in this)\n            this[property] = newValue;\n        },\n        changeDoneStatus: function() {\n            this.done = !this.done;\n        }\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3IsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3IsXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSAvKkV2ZW50dWFsbHkgZG8gYSBjaGVjayB0byBlbnN1cmUgaXQgaXMgZWl0aGVyXG4gICAgICAgICAnbG93JywgJ21lZGl1bScsIG9yICdoaWdoJzsgdGhpbmsgYWJvdXQgd2hlcmUgdG8gcHV0IGl0ISBcbiAgICAgICAgIENvdWxkIGFsc28gYmUgYW4gdW5zcGVjaWZpZWQgdmFsdWUuKi8sXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBlZGl0SXRlbTogZnVuY3Rpb24ocHJvcGVydHksIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGhpcylcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZURvbmVTdGF0dXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVUb2RvSXRlbSxcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/todo.js\n");

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