webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/tabs.module.scss */ "./styles/tabs.module.scss");
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\\u0414\u0438\u0430\u0441 \u041A\u0430\u0436\u0442\u0430\u0439\\Desktop\\test\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var Users = function Users(_ref) {
  _s();

  var users = _ref.users;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(users),
      finUsers = _useState[0],
      setFinUsers = _useState[1];

  console.log('users', users);

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

  return (
    /*#__PURE__*/
    // <div className="wrapper wrapper__flex wrapper__flex_column">
    //     <div className="wrapper__flex">
    //         {finUsers.map(user => 
    //             <div key={user.id} className="wrapper__flex wrapper__flex_column">
    //                 <img src={user.picture} alt="driver picture" className="wrapper__img"/> 
    //                 <Link href={`/users/${user.uuid}`}>
    //                     <a className="wrapper__link">{user.name}</a>
    //                 </Link>
    //             </div>
    //             )}
    //     </div>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tabs,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tabs__item,
        onClick: championsHandler,
        children: "Championship Leaders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tabs__item,
        onClick: winnersHandler,
        children: "Recent Winners"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tabs__item,
        onClick: annHandler,
        children: "Anniversaries"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this) // </div>

  );
};

_s(Users, "y3EmPrIityA5k/nLV2KUtaDc1iE=");

_c = Users;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Users);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwiZmluVXNlcnMiLCJzZXRGaW5Vc2VycyIsImNvbnNvbGUiLCJsb2ciLCJjaGFtcGlvbnNIYW5kbGVyIiwiZmlueVVzZXJzIiwiZmlsdGVyIiwiZWxlbSIsImNvbGxlY3Rpb25zIiwid2lubmVyc0hhbmRsZXIiLCJhbm5IYW5kbGVyIiwic3R5bGVzIiwiVGFicyIsIlRhYnNfX2l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUNELEtBQUQsQ0FGakI7QUFBQSxNQUVoQkUsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkwsS0FBckI7O0FBRUEsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1DLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixXQUF4QixJQUF1Q0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFdBQW5FO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVAsZUFBVyxDQUFDSSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFNSixTQUFTLEdBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsU0FBeEIsSUFBcUNELElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixTQUFqRTtBQUFBLEtBQWpCLENBQWxCO0FBQ0FQLGVBQVcsQ0FBQ0ksU0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFFBQU1MLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixlQUF4QixJQUEyQ0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLGVBQXZFO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVAsZUFBVyxDQUFDSSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBO0FBQUE7QUFDSTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFBSyxlQUFTLEVBQUVNLCtEQUFNLENBQUNDLElBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRCwrREFBTSxDQUFDRSxVQUF2QjtBQUFtQyxlQUFPLEVBQUVULGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFTywrREFBTSxDQUFDRSxVQUF2QjtBQUFtQyxlQUFPLEVBQUVKLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUVFLCtEQUFNLENBQUNFLFVBQXZCO0FBQW1DLGVBQU8sRUFBRUgsVUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiUixDQWtCSTs7QUFsQko7QUFvQkgsQ0F6Q0Q7O0dBQU1iLEs7O0tBQUFBLEs7O0FBMkNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOTQ0MDQ1OWI0ZjllZTMxMTA1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy90YWJzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmNvbnN0IFVzZXJzID0gKHt1c2Vyc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmluVXNlcnMsIHNldEZpblVzZXJzXSA9IHVzZVN0YXRlKHVzZXJzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd1c2VycycsIHVzZXJzKVxyXG5cclxuICAgIGNvbnN0IGNoYW1waW9uc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlueVVzZXJzID0gdXNlcnMuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb2xsZWN0aW9uc1swXSA9PT0gXCJjaGFtcGlvbnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImNoYW1waW9uc1wiKVxyXG4gICAgICAgIHNldEZpblVzZXJzKGZpbnlVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aW5uZXJzSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcIndpbm5lcnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcIndpbm5lcnNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYW5uSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcImFubml2ZXJzYXJpZXNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImFubml2ZXJzYXJpZXNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgd3JhcHBlcl9fZmxleCB3cmFwcGVyX19mbGV4X2NvbHVtblwiPlxyXG5cclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19mbGV4XCI+XHJcbiAgICAgICAgLy8gICAgICAgICB7ZmluVXNlcnMubWFwKHVzZXIgPT4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cIndyYXBwZXJfX2ZsZXggd3JhcHBlcl9fZmxleF9jb2x1bW5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIucGljdHVyZX0gYWx0PVwiZHJpdmVyIHBpY3R1cmVcIiBjbGFzc05hbWU9XCJ3cmFwcGVyX19pbWdcIi8+IFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlci51dWlkfWB9PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid3JhcHBlcl9fbGlua1wiPnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgKX1cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e2NoYW1waW9uc0hhbmRsZXJ9PkNoYW1waW9uc2hpcCBMZWFkZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e3dpbm5lcnNIYW5kbGVyfT5SZWNlbnQgV2lubmVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzX19pdGVtfSBvbkNsaWNrPXthbm5IYW5kbGVyfT5Bbm5pdmVyc2FyaWVzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnIGh0dHBzOi8vYXBpLm1vY2tpLmlvL3YxLzQ5ZGQ5ZDU2JylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge3VzZXJzfSxcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==