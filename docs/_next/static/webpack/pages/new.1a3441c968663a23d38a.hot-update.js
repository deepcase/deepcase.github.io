webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150%',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: '-25%',\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      transformOrigin: 'top',\n      border: '1px dashed #ffffff40',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: 'auto',\n      zIndex: 1 // transform: 'translate3d(0, 0, 0px)',\n\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  var cube = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    from: {\n      y: 0\n    },\n    to: {\n      y: -5\n    },\n    delay: 100\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n      className: classes.cubeZone,\n      style: _objectSpread({}, cube),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n        className: classes.root,\n        style: {\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 1)']\n          }),\n          transform: n.to({\n            range: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0],\n            output: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0]\n          }).to(trans)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                variant: \"h1\",\n                component: react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div,\n                style: {\n                  fontSize: n.to({\n                    range: [0, 0.35, 0.5, 0.65, 1],\n                    output: [32, 28, 24, 20, 16]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"hjLEaJbFI6pTgizzq9N/dEW5FrI=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1YmVab25lIiwiaGVpZ2h0IiwiYm9yZGVyIiwidG9wIiwibGVmdCIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtU3R5bGUiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJib3hDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9ucyIsIm1hcmdpblJpZ2h0IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJjdWJlIiwiZnJvbSIsInkiLCJ0byIsImRlbGF5IiwiYmFja2dyb3VuZCIsInJhbmdlIiwib3V0cHV0IiwidHJhbnNmb3JtIiwiYSIsImRpdiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRDtBQUFBLDBCQUFpQkEsQ0FBakI7QUFBQSxDQUFkOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNELENBQUQ7QUFBQSxzQ0FBNkJBLENBQTdCO0FBQUEsQ0FBZDs7QUFFQSxJQUFNRSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFB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dCB7IEJveCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEdpdEh1YiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGEsIHVzZVNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmNvbnN0IHNjYWxlID0gKG4pID0+IGBzY2FsZVkoJHtufSlgO1xuY29uc3QgdHJhbnMgPSAobikgPT4gYHRyYW5zbGF0ZTNkKDAsIDAsIC0ke259cmVtKWA7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDIsXG4gIH0sXG4gIGN1YmVab25lOiB7XG4gICAgd2lkdGg6ICcxNTAlJyxcbiAgICBoZWlnaHQ6ICc1cmVtJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6ICctMjUlJyxcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHBlcnNwZWN0aXZlOiAwLFxuICAgIHRyYW5zZm9ybVN0eWxlOiAnZmxhdCcsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46ICd0b3AgY2VudGVyJyxcbiAgfSxcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkICNmZmZmZmY0MCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAwLCBsZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgekluZGV4OiAxLFxuICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDBweCknLFxuICB9LFxuICBib3hDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAgJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gMTM2ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LCAxMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IG4gfSA9IHVzZVNwcmluZyh7IG46IHNjcm9sbGVkID09PSB0cnVlID8gMSA6IDAgfSk7XG5cbiAgY29uc3QgY3ViZSA9IHVzZVNwcmluZyh7XG4gICAgZnJvbTogeyB5OiAwIH0sXG4gICAgdG86IHsgeTogLTUgfSxcbiAgICBkZWxheTogMTAwLFxuICB9KVxuXG4gIHJldHVybiAoPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3ViZVpvbmV9IHN0eWxlPXt7Li4uY3ViZX19PlxuICAgICAgICA8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG4udG8oeyByYW5nZTogWzAsIDAuMzUsIDAuNTAsIDAuNjUsIDFdLCBvdXRwdXQ6IFsncmdiYSgwLCAwLCAwLCAwLjE5KScsICdyZ2JhKDAsIDAsIDAsIDAuMzcpJywgJ3JnYmEoMCwgMCwgMCwgMC41OCknLCAncmdiYSgwLCAwLCAwLCAwLjc5KScsICdyZ2JhKDAsIDAsIDAsIDEpJ10gfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG4udG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzEsIDAuOTUsIDAuODUsIDAuNjUsIDAuNSwgMC4zNSwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzEsIDAuOTUsIDAuODUsIDAuNjUsIDAuNSwgMC4zNSwgMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50byh0cmFucylcbiAgICAgICAgICB9fSBcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J3JvdycganVzdGlmeT0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OH0geGw9ezZ9PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGNvbXBvbmVudD17YS5kaXZ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogbi50byh7XG4gICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFswLCAwLjM1LCAwLjUsIDAuNjUsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzMyLCAyOCwgMjQsIDIwLCAxNl1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH19PkRlZXAuRm91bmRhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+RG9jczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5UYWxrIHRvIHVzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eydhJ30gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZWVwY2FzZS9kZWVwY2FzZVwiPjxHaXRIdWIgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2EuZGl2PlxuICAgICAgPC9hLmRpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})