(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);
    // Note that becasuse a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app
    button.onclick = e => __webpack_require__.e(/*! import() */ "src_print_js").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ 569)).then(module => {
        const print = module.default;
        print();
    });
    return element;
}
document.body.appendChild(component());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","shared"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2SEFBaUI7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUMiLCJmaWxlIjoiaW5kZXguZmVlMzA1ZjMxYmQ2OGY2MDViZjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBsb29rIGF0IHRoZSBjb25zb2xlISc7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIC8vIE5vdGUgdGhhdCBiZWNhc3VzZSBhIG5ldHdvcmsgcmVxdWVzdCBpcyBpbnZvbHZlZCwgc29tZSBpbmRpY2F0aW9uXHJcbiAgICAvLyBvZiBsb2FkaW5nIHdvdWxkIG5lZWQgdG8gYmUgc2hvd24gaW4gYSBwcm9kdWN0aW9uLWxldmVsIHNpdGUvYXBwXHJcbiAgICBidXR0b24ub25jbGljayA9IGUgPT4gaW1wb3J0KCcuL3ByaW50JykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaW50ID0gbW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgICAgcHJpbnQoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==