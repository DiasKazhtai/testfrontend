webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

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
      lineNumber: 44,
      columnNumber: 9
    }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwiZmluVXNlcnMiLCJzZXRGaW5Vc2VycyIsImNoYW1waW9uc0hhbmRsZXIiLCJmaW55VXNlcnMiLCJmaWx0ZXIiLCJlbGVtIiwiY29sbGVjdGlvbnMiLCJ3aW5uZXJzSGFuZGxlciIsImFubkhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUNELEtBQUQsQ0FGakI7QUFBQSxNQUVoQkUsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsUUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFdBQXhCLElBQXVDRCxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsV0FBbkU7QUFBQSxLQUFqQixDQUFsQjtBQUNBTCxlQUFXLENBQUNFLFNBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0EsTUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLFFBQU1KLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixTQUF4QixJQUFxQ0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFNBQWpFO0FBQUEsS0FBakIsQ0FBbEI7QUFDQUwsZUFBVyxDQUFDRSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBTUwsU0FBUyxHQUFHTCxLQUFLLENBQUNNLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLGVBQXhCLElBQTJDRCxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsZUFBdkU7QUFBQSxLQUFqQixDQUFsQjtBQUNBTCxlQUFXLENBQUNFLFNBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0E7QUFBQTtBQUNJO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CSjtBQXFCSCxDQXhDRDs7R0FBTU4sSzs7S0FBQUEsSzs7QUEwQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4MGEyZTcxMGRlMWI2MzI4OTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdGFicy5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5jb25zdCBVc2VycyA9ICh7dXNlcnN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpblVzZXJzLCBzZXRGaW5Vc2Vyc10gPSB1c2VTdGF0ZSh1c2VycylcclxuXHJcbiAgICBjb25zdCBjaGFtcGlvbnNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbnlVc2VycyA9IHVzZXJzLmZpbHRlcihlbGVtID0+IGVsZW0uY29sbGVjdGlvbnNbMF0gPT09IFwiY2hhbXBpb25zXCIgfHwgZWxlbS5jb2xsZWN0aW9uc1sxXSA9PT0gXCJjaGFtcGlvbnNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lubmVyc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlueVVzZXJzID0gdXNlcnMuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb2xsZWN0aW9uc1swXSA9PT0gXCJ3aW5uZXJzXCIgfHwgZWxlbS5jb2xsZWN0aW9uc1sxXSA9PT0gXCJ3aW5uZXJzXCIpXHJcbiAgICAgICAgc2V0RmluVXNlcnMoZmlueVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFubkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlueVVzZXJzID0gdXNlcnMuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb2xsZWN0aW9uc1swXSA9PT0gXCJhbm5pdmVyc2FyaWVzXCIgfHwgZWxlbS5jb2xsZWN0aW9uc1sxXSA9PT0gXCJhbm5pdmVyc2FyaWVzXCIpXHJcbiAgICAgICAgc2V0RmluVXNlcnMoZmlueVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIHdyYXBwZXJfX2ZsZXggd3JhcHBlcl9fZmxleF9jb2x1bW5cIj5cclxuXHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fZmxleFwiPlxyXG4gICAgICAgIC8vICAgICAgICAge2ZpblVzZXJzLm1hcCh1c2VyID0+IFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJ3cmFwcGVyX19mbGV4IHdyYXBwZXJfX2ZsZXhfY29sdW1uXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBpY3R1cmV9IGFsdD1cImRyaXZlciBwaWN0dXJlXCIgY2xhc3NOYW1lPVwid3JhcHBlcl9faW1nXCIvPiBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIudXVpZH1gfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndyYXBwZXJfX2xpbmtcIj57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICl9XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnN9PlxyXG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzX19pdGVtfSBvbkNsaWNrPXtjaGFtcGlvbnNIYW5kbGVyfT5DaGFtcGlvbnNoaXAgTGVhZGVyczwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzX19pdGVtfSBvbkNsaWNrPXt3aW5uZXJzSGFuZGxlcn0+UmVjZW50IFdpbm5lcnM8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17YW5uSGFuZGxlcn0+QW5uaXZlcnNhcmllczwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4xMjM8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm1vY2tpLmlvL3YxLzQ5ZGQ5ZDU2JylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge3VzZXJzfSxcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==