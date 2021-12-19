webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150%',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: '-25%',\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      transformOrigin: 'top',\n      border: '1px dashed #ffffff40',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: 'auto',\n      zIndex: 1 // transform: 'translate3d(0, 0, 0px)',\n\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 100);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  var cube = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    to: {\n      y: 0\n    },\n    from: {\n      y: -5\n    } // delay: 100,\n    // config: config.molasses,\n\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var id = setInterval(function () {}, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n      className: classes.cubeZone,\n      style: _objectSpread({}, cube),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n        className: classes.root,\n        style: {\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 0.85, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 89)', 'rgba(0, 0, 0, 1)']\n          }),\n          transform: n.to({\n            // range: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0],\n            // output: [1, 0.95, 0.85, 0.65, 0.5, 0.35, -5]\n            range: [1, 0],\n            output: [0.01, 0]\n          }).to(trans)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                variant: \"h1\",\n                component: react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div,\n                style: {\n                  fontSize: n.to({\n                    range: [0, 1],\n                    output: [32, 24]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 104,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 104,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"3pdDUlyTAuEgrWrjubdUvQndP5I=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1YmVab25lIiwiaGVpZ2h0IiwiYm9yZGVyIiwidG9wIiwibGVmdCIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtU3R5bGUiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJib3hDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9ucyIsIm1hcmdpblJpZ2h0IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJjdWJlIiwidG8iLCJ5IiwiZnJvbSIsImJhY2tncm91bmQiLCJyYW5nZSIsIm91dHB1dCIsInRyYW5zZm9ybSIsImEiLCJkaXYiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQ7QUFBQSwwQkFBaUJBLENBQWpCO0FBQUEsQ0FBZDs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRCxDQUFEO0FBQUEsc0NBQTZCQSxDQUE3QjtBQUFBLENBQWQ7O0FBRUEsSUFBTUUsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7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dCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBHaXRIdWIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhLCB1c2VTcHJpbmcsIGNvbmZpZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmNvbnN0IHNjYWxlID0gKG4pID0+IGBzY2FsZVkoJHtufSlgO1xuY29uc3QgdHJhbnMgPSAobikgPT4gYHRyYW5zbGF0ZTNkKDAsIDAsIC0ke259cmVtKWA7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDIsXG4gIH0sXG4gIGN1YmVab25lOiB7XG4gICAgd2lkdGg6ICcxNTAlJyxcbiAgICBoZWlnaHQ6ICc1cmVtJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6ICctMjUlJyxcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHBlcnNwZWN0aXZlOiAwLFxuICAgIHRyYW5zZm9ybVN0eWxlOiAnZmxhdCcsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46ICd0b3AgY2VudGVyJyxcbiAgfSxcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkICNmZmZmZmY0MCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAwLCBsZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgekluZGV4OiAxLFxuICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDBweCknLFxuICB9LFxuICBib3hDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAgJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gMTM2ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LCAxMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBuIH0gPSB1c2VTcHJpbmcoeyBuOiBzY3JvbGxlZCA9PT0gdHJ1ZSA/IDEgOiAwIH0pO1xuXG4gIGNvbnN0IGN1YmUgPSB1c2VTcHJpbmcoeyBcbiAgICB0bzogeyB5OiAwIH0sXG4gICAgZnJvbTogeyB5OiAtNSB9LFxuICAgIC8vIGRlbGF5OiAxMDAsXG4gICAgLy8gY29uZmlnOiBjb25maWcubW9sYXNzZXMsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIFxuICAgIH0sIDEwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3ViZVpvbmV9IHN0eWxlPXt7Li4uY3ViZX19PlxuICAgICAgICA8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG4udG8oeyByYW5nZTogWzAsIDAuMzUsIDAuNTAsIDAuNjUsIDAuODUsIDFdLCBvdXRwdXQ6IFsncmdiYSgwLCAwLCAwLCAwLjE5KScsICdyZ2JhKDAsIDAsIDAsIDAuMzcpJywgJ3JnYmEoMCwgMCwgMCwgMC41OCknLCAncmdiYSgwLCAwLCAwLCAwLjc5KScsICdyZ2JhKDAsIDAsIDAsIDg5KScsICdyZ2JhKDAsIDAsIDAsIDEpJ10gfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG4udG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByYW5nZTogWzEsIDAuOTUsIDAuODUsIDAuNjUsIDAuNSwgMC4zNSwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dDogWzEsIDAuOTUsIDAuODUsIDAuNjUsIDAuNSwgMC4zNSwgLTVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMSwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzAuMDEsIDBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG8odHJhbnMpXG4gICAgICAgICAgfX0gXG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9IHhsPXs2fT5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjb21wb25lbnQ9e2EuZGl2fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG4udG8oe1xuICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMzIsIDI0XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfX0+RGVlcC5Gb3VuZGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5Eb2NzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPlRhbGsgdG8gdXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17J2EnfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RlZXBjYXNlL2RlZXBjYXNlXCI+PEdpdEh1YiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvYS5kaXY+XG4gICAgICA8L2EuZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})