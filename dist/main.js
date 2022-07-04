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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nconst testTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)('Test title', 'This is a description', \n'Mock due date', 'High');\n\nfunction test() {\n    console.table(testTodo);\n    testTodo.editItem('title', 'New title');\n    console.table(testTodo);\n}\n\ntest();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmNvbnN0IHRlc3RUb2RvID0gY3JlYXRlVG9kb0l0ZW0oJ1Rlc3QgdGl0bGUnLCAnVGhpcyBpcyBhIGRlc2NyaXB0aW9uJywgXG4nTW9jayBkdWUgZGF0ZScsICdIaWdoJyk7XG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgY29uc29sZS50YWJsZSh0ZXN0VG9kbyk7XG4gICAgdGVzdFRvZG8uZWRpdEl0ZW0oJ3RpdGxlJywgJ05ldyB0aXRsZScpO1xuICAgIGNvbnNvbGUudGFibGUodGVzdFRvZG8pO1xufVxuXG50ZXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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