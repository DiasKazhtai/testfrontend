webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wrapper wrapper__flex wrapper__flex_column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper__flex",
      children: finUsers.map(function (user) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "wrapper__flex wrapper__flex_column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: user.picture,
            alt: "driver picture",
            className: "wrapper__img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/users/".concat(user.uuid),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "wrapper__link",
              children: user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_s(Users, "y3EmPrIityA5k/nLV2KUtaDc1iE=");

_c = Users;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwiZmluVXNlcnMiLCJzZXRGaW5Vc2VycyIsImNvbnNvbGUiLCJsb2ciLCJjaGFtcGlvbnNIYW5kbGVyIiwiZmlueVVzZXJzIiwiZmlsdGVyIiwiZWxlbSIsImNvbGxlY3Rpb25zIiwid2lubmVyc0hhbmRsZXIiLCJhbm5IYW5kbGVyIiwibWFwIiwidXNlciIsInBpY3R1cmUiLCJ1dWlkIiwibmFtZSIsImlkIiwic3R5bGVzIiwiVGFicyIsIlRhYnNfX2l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUNELEtBQUQsQ0FGakI7QUFBQSxNQUVoQkUsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkwsS0FBckI7O0FBRUEsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1DLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixXQUF4QixJQUF1Q0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFdBQW5FO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVAsZUFBVyxDQUFDSSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFNSixTQUFTLEdBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsU0FBeEIsSUFBcUNELElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixTQUFqRTtBQUFBLEtBQWpCLENBQWxCO0FBQ0FQLGVBQVcsQ0FBQ0ksU0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFFBQU1MLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixlQUF4QixJQUEyQ0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLGVBQXZFO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVAsZUFBVyxDQUFDSSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDRDQUFmO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNLTCxRQUFRLENBQUNXLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2Q7QUFBbUIsbUJBQVMsRUFBQyxvQ0FBN0I7QUFBQSxrQ0FDSTtBQUFLLGVBQUcsRUFBRUEsSUFBSSxDQUFDQyxPQUFmO0FBQXdCLGVBQUcsRUFBQyxnQkFBNUI7QUFBNkMscUJBQVMsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxtQkFBWUQsSUFBSSxDQUFDRSxJQUFqQixDQUFWO0FBQUEsbUNBQ0k7QUFBRyx1QkFBUyxFQUFDLGVBQWI7QUFBQSx3QkFBOEJGLElBQUksQ0FBQ0c7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxXQUFVSCxJQUFJLENBQUNJLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBWUk7QUFBSyxlQUFTLEVBQUVDLCtEQUFNLENBQUNDLElBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRCwrREFBTSxDQUFDRSxVQUF2QjtBQUFtQyxlQUFPLEVBQUVmLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFYSwrREFBTSxDQUFDRSxVQUF2QjtBQUFtQyxlQUFPLEVBQUVWLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUVRLCtEQUFNLENBQUNFLFVBQXZCO0FBQW1DLGVBQU8sRUFBRVQsVUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXpDRDs7R0FBTWIsSzs7S0FBQUEsSzs7QUEyQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjOGNhYjE3MWJmOTBhMjVhZGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3RhYnMubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaW5Vc2Vycywgc2V0RmluVXNlcnNdID0gdXNlU3RhdGUodXNlcnMpXHJcblxyXG4gICAgY29uc29sZS5sb2coJ3VzZXJzJywgdXNlcnMpXHJcblxyXG4gICAgY29uc3QgY2hhbXBpb25zSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcImNoYW1waW9uc1wiIHx8IGVsZW0uY29sbGVjdGlvbnNbMV0gPT09IFwiY2hhbXBpb25zXCIpXHJcbiAgICAgICAgc2V0RmluVXNlcnMoZmlueVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdpbm5lcnNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbnlVc2VycyA9IHVzZXJzLmZpbHRlcihlbGVtID0+IGVsZW0uY29sbGVjdGlvbnNbMF0gPT09IFwid2lubmVyc1wiIHx8IGVsZW0uY29sbGVjdGlvbnNbMV0gPT09IFwid2lubmVyc1wiKVxyXG4gICAgICAgIHNldEZpblVzZXJzKGZpbnlVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbm5IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbnlVc2VycyA9IHVzZXJzLmZpbHRlcihlbGVtID0+IGVsZW0uY29sbGVjdGlvbnNbMF0gPT09IFwiYW5uaXZlcnNhcmllc1wiIHx8IGVsZW0uY29sbGVjdGlvbnNbMV0gPT09IFwiYW5uaXZlcnNhcmllc1wiKVxyXG4gICAgICAgIHNldEZpblVzZXJzKGZpbnlVc2VycylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciB3cmFwcGVyX19mbGV4IHdyYXBwZXJfX2ZsZXhfY29sdW1uXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX2ZsZXhcIj5cclxuICAgICAgICAgICAgICAgIHtmaW5Vc2Vycy5tYXAodXNlciA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwid3JhcHBlcl9fZmxleCB3cmFwcGVyX19mbGV4X2NvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5waWN0dXJlfSBhbHQ9XCJkcml2ZXIgcGljdHVyZVwiIGNsYXNzTmFtZT1cIndyYXBwZXJfX2ltZ1wiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyLnV1aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3cmFwcGVyX19saW5rXCI+e3VzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17Y2hhbXBpb25zSGFuZGxlcn0+Q2hhbXBpb25zaGlwIExlYWRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17d2lubmVyc0hhbmRsZXJ9PlJlY2VudCBXaW5uZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e2FubkhhbmRsZXJ9PkFubml2ZXJzYXJpZXM8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnIGh0dHBzOi8vYXBpLm1vY2tpLmlvL3YxLzQ5ZGQ5ZDU2JylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge3VzZXJzfSxcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==