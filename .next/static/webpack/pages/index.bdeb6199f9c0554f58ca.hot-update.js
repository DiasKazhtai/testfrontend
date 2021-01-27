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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = fetch('https://api.mocki.io/v1/49dd9d56');
            users = response.json();
            console.log('users', users);

          case 3:
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
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Tabs__item,
        onClick: winnersHandler,
        children: "Recent Winners"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Tabs__item,
        onClick: annHandler,
        children: "Anniversaries"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwiZmluVXNlcnMiLCJzZXRGaW5Vc2VycyIsInVzZUVmZmVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNoYW1waW9uc0hhbmRsZXIiLCJmaW55VXNlcnMiLCJmaWx0ZXIiLCJlbGVtIiwiY29sbGVjdGlvbnMiLCJ3aW5uZXJzSGFuZGxlciIsImFubkhhbmRsZXIiLCJzdHlsZXMiLCJUYWJzIiwiVGFic19faXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUNELEtBQUQsQ0FGakI7QUFBQSxNQUVoQkUsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUt2QkMseURBQVMsZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0RDLG9CQURDLEdBQ1VDLEtBQUssQ0FBQyxrQ0FBRCxDQURmO0FBRUROLGlCQUZDLEdBRU9LLFFBQVEsQ0FBQ0UsSUFBVCxFQUZQO0FBR1BDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCVCxLQUFyQjs7QUFITztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFGLEdBQVQ7O0FBT0EsTUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1DLFNBQVMsR0FBR1gsS0FBSyxDQUFDWSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixXQUF4QixJQUF1Q0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLFdBQW5FO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVgsZUFBVyxDQUFDUSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFNSixTQUFTLEdBQUdYLEtBQUssQ0FBQ1ksTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsQ0FBakIsTUFBd0IsU0FBeEIsSUFBcUNELElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixTQUFqRTtBQUFBLEtBQWpCLENBQWxCO0FBQ0FYLGVBQVcsQ0FBQ1EsU0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFFBQU1MLFNBQVMsR0FBR1gsS0FBSyxDQUFDWSxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixDQUFqQixNQUF3QixlQUF4QixJQUEyQ0QsSUFBSSxDQUFDQyxXQUFMLENBQWlCLENBQWpCLE1BQXdCLGVBQXZFO0FBQUEsS0FBakIsQ0FBbEI7QUFDQVgsZUFBVyxDQUFDUSxTQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDRDQUFmO0FBQUEsMkJBWUk7QUFBSyxlQUFTLEVBQUVNLCtEQUFNLENBQUNDLElBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRCwrREFBTSxDQUFDRSxVQUF2QjtBQUFtQyxlQUFPLEVBQUVULGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFTywrREFBTSxDQUFDRSxVQUF2QjtBQUFtQyxlQUFPLEVBQUVKLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUVFLCtEQUFNLENBQUNFLFVBQXZCO0FBQW1DLGVBQU8sRUFBRUgsVUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQkgsQ0EvQ0Q7O0dBQU1qQixLOztLQUFBQSxLO0FBaURTQSxvRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmRlYjYxOTlmOWMwNTU0ZjU4Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy90YWJzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmNvbnN0IFVzZXJzID0gKHt1c2Vyc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmluVXNlcnMsIHNldEZpblVzZXJzXSA9IHVzZVN0YXRlKHVzZXJzKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGZldGNoKCdodHRwczovL2FwaS5tb2NraS5pby92MS80OWRkOWQ1NicpXHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlcnMnLCB1c2VycylcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNoYW1waW9uc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlueVVzZXJzID0gdXNlcnMuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb2xsZWN0aW9uc1swXSA9PT0gXCJjaGFtcGlvbnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImNoYW1waW9uc1wiKVxyXG4gICAgICAgIHNldEZpblVzZXJzKGZpbnlVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aW5uZXJzSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcIndpbm5lcnNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcIndpbm5lcnNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYW5uSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaW55VXNlcnMgPSB1c2Vycy5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbGxlY3Rpb25zWzBdID09PSBcImFubml2ZXJzYXJpZXNcIiB8fCBlbGVtLmNvbGxlY3Rpb25zWzFdID09PSBcImFubml2ZXJzYXJpZXNcIilcclxuICAgICAgICBzZXRGaW5Vc2VycyhmaW55VXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgd3JhcHBlcl9fZmxleCB3cmFwcGVyX19mbGV4X2NvbHVtblwiPlxyXG57LyogXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fZmxleFwiPlxyXG4gICAgICAgICAgICAgICAge2ZpblVzZXJzLm1hcCh1c2VyID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJ3cmFwcGVyX19mbGV4IHdyYXBwZXJfX2ZsZXhfY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBpY3R1cmV9IGFsdD1cImRyaXZlciBwaWN0dXJlXCIgY2xhc3NOYW1lPVwid3JhcHBlcl9faW1nXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIudXVpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndyYXBwZXJfX2xpbmtcIj57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17Y2hhbXBpb25zSGFuZGxlcn0+Q2hhbXBpb25zaGlwIExlYWRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFic19faXRlbX0gb25DbGljaz17d2lubmVyc0hhbmRsZXJ9PlJlY2VudCBXaW5uZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYnNfX2l0ZW19IG9uQ2xpY2s9e2FubkhhbmRsZXJ9PkFubml2ZXJzYXJpZXM8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubW9ja2kuaW8vdjEvNDlkZDlkNTYnKVxyXG4vLyAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7dXNlcnN9LFxyXG4vLyAgICAgfVxyXG4vLyAgIH0iXSwic291cmNlUm9vdCI6IiJ9