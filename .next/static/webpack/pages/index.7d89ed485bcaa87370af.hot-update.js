webpackHotUpdate_N_E("pages/index",{

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
    //     <div className={styles.Tabs}>
    //         <div className={styles.Tabs__item} onClick={championsHandler}>Championship Leaders</div>
    //         <div className={styles.Tabs__item} onClick={winnersHandler}>Recent Winners</div>
    //         <div className={styles.Tabs__item} onClick={annHandler}>Anniversaries</div>
    //     </div>
    //  </div>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "123"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this)
  );
};

_s(Users, "y3EmPrIityA5k/nLV2KUtaDc1iE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwiZmluVXNlcnMiLCJzZXRGaW5Vc2VycyIsImNvbnNvbGUiLCJsb2ciLCJjaGFtcGlvbnNIYW5kbGVyIiwiZmlueVVzZXJzIiwiZmlsdGVyIiwiZWxlbSIsImNvbGxlY3Rpb25zIiwid2lubmVyc0hhbmRsZXIiLCJhbm5IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUNELEtBQUQsQ0FGakI7QUFBQSxNQUVoQkUsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkwsS0FBckI7O0FBRUEsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1DLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixXQUF4QixJQUF1Q0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFdBQW5FO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVAsZUFBVyxDQUFDSSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFNSixTQUFTLEdBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsU0FBeEIsSUFBcUNELElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixTQUFqRTtBQUFBLEtBQWpCLENBQWxCO0FBQ0FQLGVBQVcsQ0FBQ0ksU0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFFBQU1MLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixlQUF4QixJQUEyQ0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLGVBQXZFO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVAsZUFBVyxDQUFDSSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBO0FBQUE7QUFDSTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQko7QUFxQkgsQ0ExQ0Q7O0dBQU1SLEs7O0tBQUFBLEs7QUE0Q1NBLG9FQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZDg5ZWQ0ODViY2FhODczNzBhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy90YWJzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmNvbnN0IFVzZXJzID0gKHt1c2Vyc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmluVXNlcnMsIHNldEZpblVzZXJzXSA9IHVzZVN0YXRlKHVzZXJzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd1c2VycycsIHVzZXJzKVxyXG5cclxuICAgIGNvbnN0IGNoYW1waW9uc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlueVVzZXJzID0gdXNlcnMuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb2xsZWN0aW9uc1swXSA9PT0gXCJjaGFtcGlvbnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImNoYW1waW9uc1wiKVxyXG4gICAgICAgIHNldEZpblVzZXJzKGZpbnlVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aW5uZXJzSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcIndpbm5lcnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcIndpbm5lcnNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYW5uSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcImFubml2ZXJzYXJpZXNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImFubml2ZXJzYXJpZXNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgd3JhcHBlcl9fZmxleCB3cmFwcGVyX19mbGV4X2NvbHVtblwiPlxyXG5cclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19mbGV4XCI+XHJcbiAgICAgICAgLy8gICAgICAgICB7ZmluVXNlcnMubWFwKHVzZXIgPT4gXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cIndyYXBwZXJfX2ZsZXggd3JhcHBlcl9fZmxleF9jb2x1bW5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIucGljdHVyZX0gYWx0PVwiZHJpdmVyIHBpY3R1cmVcIiBjbGFzc05hbWU9XCJ3cmFwcGVyX19pbWdcIi8+IFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlci51dWlkfWB9PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid3JhcHBlcl9fbGlua1wiPnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgKX1cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic30+XHJcbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e2NoYW1waW9uc0hhbmRsZXJ9PkNoYW1waW9uc2hpcCBMZWFkZXJzPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e3dpbm5lcnNIYW5kbGVyfT5SZWNlbnQgV2lubmVyczwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzX19pdGVtfSBvbkNsaWNrPXthbm5IYW5kbGVyfT5Bbm5pdmVyc2FyaWVzPC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PjEyMzwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubW9ja2kuaW8vdjEvNDlkZDlkNTYnKVxyXG4vLyAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7dXNlcnN9LFxyXG4vLyAgICAgfVxyXG4vLyAgIH0iXSwic291cmNlUm9vdCI6IiJ9