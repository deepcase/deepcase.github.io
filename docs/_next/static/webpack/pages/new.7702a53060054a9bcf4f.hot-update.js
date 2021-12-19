webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150%',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: '-25%',\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      transformOrigin: 'top',\n      border: '1px dashed #ffffff40',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: 'auto',\n      zIndex: 1 // transform: 'translate3d(0, 0, 0px)',\n\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  var cube = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    from: {\n      y: 0\n    },\n    to: {\n      y: -5\n    },\n    // default: { immediate: true },\n    delay: 100\n  }); // useEffect(() => {\n  //   cube.y.start(-5)\n  // })\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n      className: classes.cubeZone,\n      style: _objectSpread({}, cube),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n        className: classes.root,\n        style: {\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(226, 0, 0, 1)']\n          }),\n          transform: n.to({\n            range: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0],\n            output: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0]\n          }).to(trans)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n                variant: \"h1\",\n                component: react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div,\n                style: {\n                  fontSize: n.to({\n                    range: [0, 0.35, 0.5, 0.65, 1],\n                    output: [32, 28, 24, 20, 16]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 98,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"hjLEaJbFI6pTgizzq9N/dEW5FrI=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1YmVab25lIiwiaGVpZ2h0IiwiYm9yZGVyIiwidG9wIiwibGVmdCIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtU3R5bGUiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJib3hDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9ucyIsIm1hcmdpblJpZ2h0IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJjdWJlIiwiZnJvbSIsInkiLCJ0byIsImRlbGF5IiwiYmFja2dyb3VuZCIsInJhbmdlIiwib3V0cHV0IiwidHJhbnNmb3JtIiwiYSIsImRpdiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRDtBQUFBLDBCQUFpQkEsQ0FBakI7QUFBQSxDQUFkOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNELENBQUQ7QUFBQSxzQ0FBNkJBLENBQTdCO0FBQUEsQ0FBZDs7QUFFQSxJQUFNRSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYSwgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcblxuY29uc3Qgc2NhbGUgPSAobikgPT4gYHNjYWxlWSgke259KWA7XG5jb25zdCB0cmFucyA9IChuKSA9PiBgdHJhbnNsYXRlM2QoMCwgMCwgLSR7bn1yZW0pYDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMixcbiAgfSxcbiAgY3ViZVpvbmU6IHtcbiAgICB3aWR0aDogJzE1MCUnLFxuICAgIGhlaWdodDogJzVyZW0nLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCwgbGVmdDogJy0yNSUnLFxuICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgcGVyc3BlY3RpdmU6IDAsXG4gICAgdHJhbnNmb3JtU3R5bGU6ICdmbGF0JyxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogJ3RvcCBjZW50ZXInLFxuICB9LFxuICByb290OiB7XG4gICAgcGFkZGluZzogJzFyZW0gMCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjQwJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMHB4KScsXG4gIH0sXG4gIGJveENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgICcmID4gOm50aC1jaGlsZCgtbisyKSc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnMS41cmVtJyxcbiAgICB9XG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFVwcGVyTWVudSA9ICh7c2Nyb2xsQ29udGFpbmVyfTp7c2Nyb2xsQ29udGFpbmVyOiBhbnl9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRTY3JvbGwoc2Nyb2xsQ29udGFpbmVyPy5jdXJyZW50Py5zY3JvbGxUb3AgPiAxMzYgPyB0cnVlIDogZmFsc2UpO1xuICAgIH0sIDEwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgbiB9ID0gdXNlU3ByaW5nKHsgbjogc2Nyb2xsZWQgPT09IHRydWUgPyAxIDogMCB9KTtcblxuICBjb25zdCBjdWJlID0gdXNlU3ByaW5nKHtcbiAgICBmcm9tOiB7IHk6IDAgfSxcbiAgICB0bzogeyB5OiAtNSB9LFxuICAgIC8vIGRlZmF1bHQ6IHsgaW1tZWRpYXRlOiB0cnVlIH0sXG4gICAgZGVsYXk6IDEwMCxcbiAgfSlcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjdWJlLnkuc3RhcnQoLTUpXG4gIC8vIH0pXG5cbiAgcmV0dXJuICg8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGEuZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdWJlWm9uZX0gc3R5bGU9e3suLi5jdWJlfX0+XG4gICAgICAgIDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbi50byh7IHJhbmdlOiBbMCwgMC4zNSwgMC41MCwgMC42NSwgMV0sIG91dHB1dDogWydyZ2JhKDAsIDAsIDAsIDAuMTkpJywgJ3JnYmEoMCwgMCwgMCwgMC4zNyknLCAncmdiYSgwLCAwLCAwLCAwLjU4KScsICdyZ2JhKDAsIDAsIDAsIDAuNzkpJywgJ3JnYmEoMjI2LCAwLCAwLCAxKSddIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBuLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFsxLCAwLjk1LCAwLjg1LCAwLjY1LCAwLjUsIDAuMzUsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IFsxLCAwLjk1LCAwLjg1LCAwLjY1LCAwLjUsIDAuMzUsIDBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG8odHJhbnMpXG4gICAgICAgICAgfX0gXG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9IHhsPXs2fT5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjb21wb25lbnQ9e2EuZGl2fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG4udG8oe1xuICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMCwgMC4zNSwgMC41LCAwLjY1LCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IFszMiwgMjgsIDI0LCAyMCwgMTZdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9fT5EZWVwLkZvdW5kYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPkRvY3M8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+VGFsayB0byB1czwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29tcG9uZW50PXsnYSd9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGVlcGNhc2UvZGVlcGNhc2VcIj48R2l0SHViIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319Lz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9hLmRpdj5cbiAgICAgIDwvYS5kaXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})