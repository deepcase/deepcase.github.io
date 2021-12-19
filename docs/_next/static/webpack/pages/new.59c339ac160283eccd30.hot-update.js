webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '100%',\n      zIndex: 1\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n; // useScroll(({ xy: [, y] }) => api.start({ width: (y / height) * 100 + '%' }), { target: window })\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n    className: classes.root,\n    style: {\n      transformOrigin: 'top',\n      background: n.to({\n        range: [0, 0.35, 0.50, 0.65, 1],\n        output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 1)']\n      }),\n      transform: n.to({\n        range: [0, 0.5, 1],\n        //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n        output: [1, 0.8, 0.5] //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n\n      }).to(scale).to(trans)\n    } // scrollTop={scroll}\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"rlToER9aSqQFF11PrP3wGvP107w=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmciLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiekluZGV4IiwiYm94Q29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbnMiLCJtYXJnaW5SaWdodCIsIlVwcGVyTWVudSIsInNjcm9sbENvbnRhaW5lciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNjcm9sbGVkIiwic2V0U2Nyb2xsIiwidXNlRWZmZWN0IiwiaWQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJjbGVhckludGVydmFsIiwidXNlU3ByaW5nIiwidHJhbnNmb3JtT3JpZ2luIiwiYmFja2dyb3VuZCIsInRvIiwicmFuZ2UiLCJvdXRwdXQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFEO0FBQUEsMEJBQWlCQSxDQUFqQjtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0QsQ0FBRDtBQUFBLDBCQUFpQkEsQ0FBakI7QUFBQSxDQUFkOztBQUVBLElBQU1FLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxRQURMO0FBRUpDLFdBQUssRUFBRSxNQUZIO0FBR0pDLHFCQUFlLEVBQUUsV0FIYjtBQUcwQjtBQUM5QkMsWUFBTSxFQUFFLHNCQUpKO0FBS0pDLGNBQVEs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBRVEsT0FBTyxDQUFDSixPQUF4QjtBQUFBLG9DQUNFLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLHFFQUFDLDREQUFEO0FBQVksdUJBQVMsRUFBRSxHQUF2QjtBQUE0QixrQkFBSSxFQUFDLHNDQUFqQztBQUFBLHFDQUF3RSxxRUFBQyxnRUFBRDtBQUFRLHFCQUFLLEVBQUU7QUFBQ1osdUJBQUssRUFBRTtBQUFSO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQTZCRCxDQTVDTTs7R0FBTWMsUztVQUNLbkIsUyxFQVdGK0Isc0Q7OztLQVpIWixTIiwiZmlsZSI6Ii4vaW1wb3J0cy91cHBlci1tZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGEsIHVzZVNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tIFwicmVhY3QtdXNlLWdlc3R1cmVcIjtcblxuY29uc3Qgc2NhbGUgPSAobikgPT4gYHNjYWxlWSgke259KWA7XG5jb25zdCB0cmFucyA9IChuKSA9PiBgc2NhbGVZKCR7bn0pYDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogJzFyZW0gMCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMzAnLCAvL2Rhcmtlbihjb3JlVGhlbWU/LnBhbGV0dGU/LmJhY2tncm91bmQ/LmRlZmF1bHQsIDAuMyksXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCAjZmZmZmZmNDAnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCwgbGVmdDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHpJbmRleDogMSxcbiAgfSxcbiAgYm94Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgJyYgPiA6bnRoLWNoaWxkKC1uKzIpJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcxLjVyZW0nLFxuICAgIH1cbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgVXBwZXJNZW51ID0gKHtzY3JvbGxDb250YWluZXJ9OntzY3JvbGxDb250YWluZXI6IGFueX0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFNjcm9sbChzY3JvbGxDb250YWluZXI/LmN1cnJlbnQ/LnNjcm9sbFRvcCA+IDEzNiA/IHRydWUgOiBmYWxzZSk7XG4gICAgfSwgMTApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBuIH0gPSB1c2VTcHJpbmcoeyBuOiBzY3JvbGxlZCA9PT0gdHJ1ZSA/IDEgOiAwIH0pO1xuICAvLyB1c2VTY3JvbGwoKHsgeHk6IFssIHldIH0pID0+IGFwaS5zdGFydCh7IHdpZHRoOiAoeSAvIGhlaWdodCkgKiAxMDAgKyAnJScgfSksIHsgdGFyZ2V0OiB3aW5kb3cgfSlcblxuICByZXR1cm4gKDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXG4gICAgICAgIGJhY2tncm91bmQ6IG4udG8oeyByYW5nZTogWzAsIDAuMzUsIDAuNTAsIDAuNjUsIDFdLCBvdXRwdXQ6IFsncmdiYSgwLCAwLCAwLCAwLjE5KScsICdyZ2JhKDAsIDAsIDAsIDAuMzcpJywgJ3JnYmEoMCwgMCwgMCwgMC41OCknLCAncmdiYSgwLCAwLCAwLCAwLjc5KScsICdyZ2JhKDAsIDAsIDAsIDEpJ10gfSksXG4gICAgICAgIHRyYW5zZm9ybTogblxuICAgICAgICAgICAgICAgICAgICAudG8oe1xuICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMCwgMC41LCAxXSwgLy9bMSwgMC45NywgMC45NSwgMC45MywgMC45MCwgMC44NywgMC44NSwgMC44NywgMC45MF0sXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMSwgMC44LCAwLjVdIC8vWzEsIDAuOTcsIDAuOTUsIDAuOTMsIDAuOTAsIDAuODcsIDAuODUsIDAuODcsIDAuOTBdLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oc2NhbGUpXG4gICAgICAgICAgICAgICAgICAgIC50byh0cmFucyksXG4gICAgICAgIFxuICAgICAgfX0gXG4gICAgICAvLyBzY3JvbGxUb3A9e3Njcm9sbH1cbiAgICA+XG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OH0geGw9ezZ9PlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5EZWVwLkZvdW5kYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5Eb2NzPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+VGFsayB0byB1czwvQnV0dG9uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eydhJ30gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZWVwY2FzZS9kZWVwY2FzZVwiPjxHaXRIdWIgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9hLmRpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})