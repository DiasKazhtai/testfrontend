webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/tabs.module.scss */ "./styles/tabs.module.scss");
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\\u0414\u0438\u0430\u0441 \u041A\u0430\u0436\u0442\u0430\u0439\\Desktop\\test\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var Users = function Users(_ref) {
  _s();

  var users = _ref.users;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(users),
      finUsers = _useState[0],
      setFinUsers = _useState[1];

  console.log('users', users);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = fetch('https://api.mocki.io/v1/49dd9d56');
            users = response.json();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  var championsHandler = function championsHandler() {
    var finyUsers = users.filter(function (elem) {
      return elem.collections[0] === "champions" || elem.collections[1] === "champions";
    });
    setFinUsers(finyUsers);
  };

  var winnersHandler = function winnersHandler() {
    var finyUsers = users.filter(function (elem) {
      return elem.collections[0] === "winners" || elem.collections[1] === "winners";
    });
    setFinUsers(finyUsers);
  };

  var annHandler = function annHandler() {
    var finyUsers = users.filter(function (elem) {
      return elem.collections[0] === "anniversaries" || elem.collections[1] === "anniversaries";
    });
    setFinUsers(finyUsers);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wrapper wrapper__flex wrapper__flex_column",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Tabs,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Tabs__item,
        onClick: championsHandler,
        children: "Championship Leaders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Tabs__item,
        onClick: winnersHandler,
        children: "Recent Winners"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Tabs__item,
        onClick: annHandler,
        children: "Anniversaries"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_s(Users, "R8kK8M2F/6Z68qdNJYS5vTIHU/g=");

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users); // export async function getStaticProps() {
//     const response = await fetch('https://api.mocki.io/v1/49dd9d56')
//     const users = await response.json()
//     return {
//       props: {users},
//     }
//   }

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXJzIiwidXNlcnMiLCJ1c2VTdGF0ZSIsImZpblVzZXJzIiwic2V0RmluVXNlcnMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJjaGFtcGlvbnNIYW5kbGVyIiwiZmlueVVzZXJzIiwiZmlsdGVyIiwiZWxlbSIsImNvbGxlY3Rpb25zIiwid2lubmVyc0hhbmRsZXIiLCJhbm5IYW5kbGVyIiwic3R5bGVzIiwiVGFicyIsIlRhYnNfX2l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUNELEtBQUQsQ0FGakI7QUFBQSxNQUVoQkUsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkwsS0FBckI7QUFFQU0seURBQVMsZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0RDLG9CQURDLEdBQ1VDLEtBQUssQ0FBQyxrQ0FBRCxDQURmO0FBRURSLGlCQUZDLEdBRU9PLFFBQVEsQ0FBQ0UsSUFBVCxFQUZQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUYsR0FBVDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsUUFBTUMsU0FBUyxHQUFHWCxLQUFLLENBQUNZLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFdBQXhCLElBQXVDRCxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsV0FBbkU7QUFBQSxLQUFqQixDQUFsQjtBQUNBWCxlQUFXLENBQUNRLFNBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0EsTUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLFFBQU1KLFNBQVMsR0FBR1gsS0FBSyxDQUFDWSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixTQUF4QixJQUFxQ0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFNBQWpFO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVgsZUFBVyxDQUFDUSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBTUwsU0FBUyxHQUFHWCxLQUFLLENBQUNZLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLGVBQXhCLElBQTJDRCxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsZUFBdkU7QUFBQSxLQUFqQixDQUFsQjtBQUNBWCxlQUFXLENBQUNRLFNBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQSwyQkFZSTtBQUFLLGVBQVMsRUFBRU0sK0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVELCtEQUFNLENBQUNFLFVBQXZCO0FBQW1DLGVBQU8sRUFBRVQsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVPLCtEQUFNLENBQUNFLFVBQXZCO0FBQW1DLGVBQU8sRUFBRUosY0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUssaUJBQVMsRUFBRUUsK0RBQU0sQ0FBQ0UsVUFBdkI7QUFBbUMsZUFBTyxFQUFFSCxVQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQTlDRDs7R0FBTWpCLEs7O0tBQUFBLEs7QUFnRFNBLG9FQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTVjYWU2OTJjYmYxZDk1ODVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3RhYnMubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaW5Vc2Vycywgc2V0RmluVXNlcnNdID0gdXNlU3RhdGUodXNlcnMpXHJcblxyXG4gICAgY29uc29sZS5sb2coJ3VzZXJzJywgdXNlcnMpXHJcblxyXG4gICAgdXNlRWZmZWN0KCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCgnaHR0cHM6Ly9hcGkubW9ja2kuaW8vdjEvNDlkZDlkNTYnKVxyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gcmVzcG9uc2UuanNvbigpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNoYW1waW9uc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlueVVzZXJzID0gdXNlcnMuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb2xsZWN0aW9uc1swXSA9PT0gXCJjaGFtcGlvbnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImNoYW1waW9uc1wiKVxyXG4gICAgICAgIHNldEZpblVzZXJzKGZpbnlVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aW5uZXJzSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcIndpbm5lcnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcIndpbm5lcnNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYW5uSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcImFubml2ZXJzYXJpZXNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImFubml2ZXJzYXJpZXNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgd3JhcHBlcl9fZmxleCB3cmFwcGVyX19mbGV4X2NvbHVtblwiPlxyXG57LyogXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fZmxleFwiPlxyXG4gICAgICAgICAgICAgICAge2ZpblVzZXJzLm1hcCh1c2VyID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJ3cmFwcGVyX19mbGV4IHdyYXBwZXJfX2ZsZXhfY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBpY3R1cmV9IGFsdD1cImRyaXZlciBwaWN0dXJlXCIgY2xhc3NOYW1lPVwid3JhcHBlcl9faW1nXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIudXVpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndyYXBwZXJfX2xpbmtcIj57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17Y2hhbXBpb25zSGFuZGxlcn0+Q2hhbXBpb25zaGlwIExlYWRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17d2lubmVyc0hhbmRsZXJ9PlJlY2VudCBXaW5uZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e2FubkhhbmRsZXJ9PkFubml2ZXJzYXJpZXM8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubW9ja2kuaW8vdjEvNDlkZDlkNTYnKVxyXG4vLyAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7dXNlcnN9LFxyXG4vLyAgICAgfVxyXG4vLyAgIH0iXSwic291cmNlUm9vdCI6IiJ9