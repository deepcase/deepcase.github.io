webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar transCube = function transCube(y) {\n  return \"translateY(-\".concat(y, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150%',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: '-25%',\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      transformOrigin: 'top',\n      border: '1px dashed #ffffff40',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: 'auto',\n      zIndex: 1 // transform: 'translate3d(0, 0, 0px)',\n\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 100);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  var _useSpring2 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    y: scrolled === true ? -5 : 0\n  }),\n      y = _useSpring2.y;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {}, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n      className: classes.cubeZone,\n      style: {\n        transform: y.to({\n          range: [0, 1],\n          output: [0, 5]\n        }).to(transCube)\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n        className: classes.root,\n        style: {\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 0.85, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 89)', 'rgba(0, 0, 0, 1)']\n          }),\n          transform: n.to({\n            // range: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0],\n            // output: [1, 0.95, 0.85, 0.65, 0.5, 0.35, -5]\n            range: [1, 0],\n            output: [0.01, 0]\n          }).to(trans)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n                variant: \"h1\",\n                component: react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div,\n                style: {\n                  alignSelf: 'center',\n                  fontSize: n.to({\n                    range: [0, 1],\n                    output: [32, 24]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 107,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 108,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 109,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 109,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"mhS1oQtDaIhQnjWvgJ5bcBg6k4M=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidHJhbnNDdWJlIiwieSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdWJlWm9uZSIsImhlaWdodCIsImJvcmRlciIsInRvcCIsImxlZnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVN0eWxlIiwicGVyc3BlY3RpdmVPcmlnaW4iLCJyb290IiwicGFkZGluZyIsImNvbG9yIiwidHJhbnNmb3JtT3JpZ2luIiwiYm94Q29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbnMiLCJtYXJnaW5SaWdodCIsIlVwcGVyTWVudSIsInNjcm9sbENvbnRhaW5lciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNjcm9sbGVkIiwic2V0U2Nyb2xsIiwidXNlRWZmZWN0IiwiaWQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJjbGVhckludGVydmFsIiwidXNlU3ByaW5nIiwidHJhbnNmb3JtIiwidG8iLCJyYW5nZSIsIm91dHB1dCIsImJhY2tncm91bmQiLCJhIiwiZGl2IiwiYWxpZ25TZWxmIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFEO0FBQUEsMEJBQWlCQSxDQUFqQjtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0QsQ0FBRDtBQUFBLHNDQUE2QkEsQ0FBN0I7QUFBQSxDQUFkOztBQUNBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENB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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBNENELENBbkVNOztHQUFNUSxTO1VBQ0sxQixTLEVBV0ZzQyxzRCxFQUVBQSxzRDs7O0tBZEhaLFMiLCJmaWxlIjoiLi9pbXBvcnRzL3VwcGVyLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYSwgdXNlU3ByaW5nLCBjb25maWcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG5jb25zdCBzY2FsZSA9IChuKSA9PiBgc2NhbGVZKCR7bn0pYDtcbmNvbnN0IHRyYW5zID0gKG4pID0+IGB0cmFuc2xhdGUzZCgwLCAwLCAtJHtufXJlbSlgO1xuY29uc3QgdHJhbnNDdWJlID0gKHkpID0+IGB0cmFuc2xhdGVZKC0ke3l9cmVtKWA7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDIsXG4gIH0sXG4gIGN1YmVab25lOiB7XG4gICAgd2lkdGg6ICcxNTAlJyxcbiAgICBoZWlnaHQ6ICc1cmVtJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6ICctMjUlJyxcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHBlcnNwZWN0aXZlOiAwLFxuICAgIHRyYW5zZm9ybVN0eWxlOiAnZmxhdCcsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46ICd0b3AgY2VudGVyJyxcbiAgfSxcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkICNmZmZmZmY0MCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAwLCBsZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgekluZGV4OiAxLFxuICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDBweCknLFxuICB9LFxuICBib3hDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAgJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gMTM2ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LCAxMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBuIH0gPSB1c2VTcHJpbmcoeyBuOiBzY3JvbGxlZCA9PT0gdHJ1ZSA/IDEgOiAwIH0pO1xuXG4gIGNvbnN0IHsgeSB9ID0gdXNlU3ByaW5nKHsgeTogc2Nyb2xsZWQgPT09IHRydWUgPyAtNSA6IDAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgXG4gICAgfSwgMTApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuICg8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGEuZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdWJlWm9uZX0gXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNmb3JtOiB5LnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzAsIDVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byh0cmFuc0N1YmUpXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbi50byh7IHJhbmdlOiBbMCwgMC4zNSwgMC41MCwgMC42NSwgMC44NSwgMV0sIG91dHB1dDogWydyZ2JhKDAsIDAsIDAsIDAuMTkpJywgJ3JnYmEoMCwgMCwgMCwgMC4zNyknLCAncmdiYSgwLCAwLCAwLCAwLjU4KScsICdyZ2JhKDAsIDAsIDAsIDAuNzkpJywgJ3JnYmEoMCwgMCwgMCwgODkpJywgJ3JnYmEoMCwgMCwgMCwgMSknXSB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbi50byh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJhbmdlOiBbMSwgMC45NSwgMC44NSwgMC42NSwgMC41LCAwLjM1LCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cHV0OiBbMSwgMC45NSwgMC44NSwgMC42NSwgMC41LCAwLjM1LCAtNV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFsxLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMC4wMSwgMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8odHJhbnMpXG4gICAgICAgICAgfX0gXG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9IHhsPXs2fT5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjb21wb25lbnQ9e2EuZGl2fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBuLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzMyLCAyNF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH19PkRlZXAuRm91bmRhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+RG9jczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5UYWxrIHRvIHVzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eydhJ30gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZWVwY2FzZS9kZWVwY2FzZVwiPjxHaXRIdWIgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2EuZGl2PlxuICAgICAgPC9hLmRpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})