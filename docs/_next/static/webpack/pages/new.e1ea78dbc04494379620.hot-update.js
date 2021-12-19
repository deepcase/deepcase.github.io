webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar trans1 = function trans1(n) {\n  return \"scaleY(\".concat(n === 1 ? 0.9 : 1, \")\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '100%',\n      zIndex: 1\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n    className: classes.root,\n    style: {\n      background: n.to({\n        range: [0, 0.35, 0.50, 0.65, 1],\n        output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 1)']\n      }),\n      transform: n.to(trans1)\n    } // scrollTop={scroll}\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"rlToER9aSqQFF11PrP3wGvP107w=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInRyYW5zMSIsIm4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwicGFkZGluZyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJ6SW5kZXgiLCJib3hDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9ucyIsIm1hcmdpblJpZ2h0IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJiYWNrZ3JvdW5kIiwidG8iLCJyYW5nZSIsIm91dHB1dCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQ7QUFBQSwwQkFBaUJBLENBQUMsS0FBRyxDQUFKLEdBQVEsR0FBUixHQUFjLENBQS9CO0FBQUEsQ0FBZjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsUUFETDtBQUVKQyxXQUFLLEVBQUUsTUFGSDtBQUdKQyxxQkFBZSxFQUFFLFdBSGI7QUFHMEI7QUFDOUJDLFlBQU0sRUFBRSxzQkFKSjtBQUtKQyxjQUFRLEVBQUUsT0FMTjtBQU1KQyxTQUFHLEVBQUUsQ0FORDtBQU1JQyxVQUFJLEVBQUUsQ0FOVjtBQU9KQyxXQUFLLEVBQUUs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R0FBdkI7QUFBNEIsa0JBQUksRUFBQyxzQ0FBakM7QUFBQSxxQ0FBd0UscUVBQUMsZ0VBQUQ7QUFBUSxxQkFBSyxFQUFFO0FBQUNaLHVCQUFLLEVBQUU7QUFBUjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFzQkQsQ0FwQ007O0dBQU1jLFM7VUFDS25CLFMsRUFXRitCLHNEOzs7S0FaSFosUyIsImZpbGUiOiIuL2ltcG9ydHMvdXBwZXItbWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIsIEJveCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEdpdEh1YiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhLCB1c2VTcHJpbmcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG5jb25zdCB0cmFuczEgPSAobikgPT4gYHNjYWxlWSgke249PT0xID8gMC45IDogMX0pYDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogJzFyZW0gMCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMzAnLCAvL2Rhcmtlbihjb3JlVGhlbWU/LnBhbGV0dGU/LmJhY2tncm91bmQ/LmRlZmF1bHQsIDAuMyksXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCAjZmZmZmZmNDAnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCwgbGVmdDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHpJbmRleDogMSxcbiAgfSxcbiAgYm94Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgJyYgPiA6bnRoLWNoaWxkKC1uKzIpJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcxLjVyZW0nLFxuICAgIH1cbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgVXBwZXJNZW51ID0gKHtzY3JvbGxDb250YWluZXJ9OntzY3JvbGxDb250YWluZXI6IGFueX0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFNjcm9sbChzY3JvbGxDb250YWluZXI/LmN1cnJlbnQ/LnNjcm9sbFRvcCA+IDEzNiA/IHRydWUgOiBmYWxzZSk7XG4gICAgfSwgMTApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBuIH0gPSB1c2VTcHJpbmcoeyBuOiBzY3JvbGxlZCA9PT0gdHJ1ZSA/IDEgOiAwIH0pO1xuXG4gIHJldHVybiAoPGEuZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogbi50byh7IHJhbmdlOiBbMCwgMC4zNSwgMC41MCwgMC42NSwgMV0sIG91dHB1dDogWydyZ2JhKDAsIDAsIDAsIDAuMTkpJywgJ3JnYmEoMCwgMCwgMCwgMC4zNyknLCAncmdiYSgwLCAwLCAwLCAwLjU4KScsICdyZ2JhKDAsIDAsIDAsIDAuNzkpJywgJ3JnYmEoMCwgMCwgMCwgMSknXSB9KSxcbiAgICAgICAgdHJhbnNmb3JtOiBuLnRvKHRyYW5zMSlcbiAgICAgICAgXG4gICAgICB9fSBcbiAgICAgIC8vIHNjcm9sbFRvcD17c2Nyb2xsfVxuICAgID5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J3JvdycganVzdGlmeT0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkRlZXAuRm91bmRhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPkRvY3M8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5UYWxrIHRvIHVzPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17J2EnfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RlZXBjYXNlL2RlZXBjYXNlXCI+PEdpdEh1YiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2EuZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})