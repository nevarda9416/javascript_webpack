(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

async function getComponent() {
    const {default:_} = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));
    /*
    return import('lodash')
        .then(({default:_})=>{
        */
            const element = document.createElement('div');
            element.innerHTML =  _.join(['Hello', 'webpack'], ' ');
            return element;
        //}).catch((error)=>'An error occured while loading the component');
}
getComponent().then((component)=>{
    document.body.appendChild(component);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxVQUFVLFNBQVMsMklBQWdCO0FBQzlDO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3Qge2RlZmF1bHQ6X30gPSBhd2FpdCBpbXBvcnQoJ2xvZGFzaCcpO1xyXG4gICAgLypcclxuICAgIHJldHVybiBpbXBvcnQoJ2xvZGFzaCcpXHJcbiAgICAgICAgLnRoZW4oKHtkZWZhdWx0Ol99KT0+e1xyXG4gICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAgXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAvL30pLmNhdGNoKChlcnJvcik9PidBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbXBvbmVudCcpO1xyXG59XHJcbmdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCk9PntcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==