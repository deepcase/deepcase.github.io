webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'relative'\n    },\n    cubeZone: {\n      width: '150%',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: '-25%',\n      backfaceVisibility: 'hidden',\n      perspective: 300,\n      transformStyle: 'preserve-3d'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '150%',\n      zIndex: 1,\n      perspectiveOrigin: '50% 50%'\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n; // useScroll(({ xy: [, y] }) => api.start({ width: (y / height) * 100 + '%' }), { target: window })\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.cubeZone,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n        className: classes.root,\n        style: {\n          transformOrigin: 'top',\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 1)']\n          }),\n          transform: n.to({\n            range: [1, 0.65, 0.5, 0.35, 0],\n            //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n            output: [1, 0.65, 0.5, 0.35, 0] //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n\n          }).to(trans) //`scaleY(${n}) translateY(0)`\n          // .to(trans),\n\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n                variant: \"h1\",\n                component: react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div,\n                style: {\n                  fontSize: n.to({\n                    range: [0, 0.35, 0.5, 0.65, 1],\n                    output: [32, 28, 24, 20, 16]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"rlToER9aSqQFF11PrP3wGvP107w=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJwb3NpdGlvbiIsImN1YmVab25lIiwiaGVpZ2h0IiwiYm9yZGVyIiwidG9wIiwibGVmdCIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtU3R5bGUiLCJyb290IiwicGFkZGluZyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicGVyc3BlY3RpdmVPcmlnaW4iLCJib3hDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9ucyIsIm1hcmdpblJpZ2h0IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJiYWNrZ3JvdW5kIiwidG8iLCJyYW5nZSIsIm91dHB1dCIsInRyYW5zZm9ybSIsImEiLCJkaXYiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQ7QUFBQSwwQkFBaUJBLENBQWpCO0FBQUEsQ0FBZDs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRCxDQUFEO0FBQUEsc0NBQTZCQSxDQUE3QjtBQUFBLENBQWQ7O0FBRUEsSUFBTUUsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxT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LHdDQUNFLHFFQUFDLHdEQUFEO0FBQVEseUJBQU8sRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLHFFQUFDLHdEQUFEO0FBQVEseUJBQU8sRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFLHFFQUFDLDREQUFEO0FBQVksMkJBQVMsRUFBRSxHQUF2QjtBQUE0QixzQkFBSSxFQUFDLHNDQUFqQztBQUFBLHlDQUF3RSxxRUFBQyxnRUFBRDtBQUFRLHlCQUFLLEVBQUU7QUFBQ1IsMkJBQUssRUFBRTtBQUFSO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBb0NELENBbkRNOztHQUFNVSxTO1VBQ0sxQixTLEVBV0ZzQyxzRDs7O0tBWkhaLFMiLCJmaWxlIjoiLi9pbXBvcnRzL3VwcGVyLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYSwgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcblxuY29uc3Qgc2NhbGUgPSAobikgPT4gYHNjYWxlWSgke259KWA7XG5jb25zdCB0cmFucyA9IChuKSA9PiBgdHJhbnNsYXRlM2QoMCwgMCwgLSR7bn1yZW0pYDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBjdWJlWm9uZToge1xuICAgIHdpZHRoOiAnMTUwJScsXG4gICAgaGVpZ2h0OiAnNXJlbScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLCBsZWZ0OiAnLTI1JScsXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBwZXJzcGVjdGl2ZTogMzAwLFxuICAgIHRyYW5zZm9ybVN0eWxlOiAncHJlc2VydmUtM2QnLFxuICB9LFxuICByb290OiB7XG4gICAgcGFkZGluZzogJzFyZW0gMCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMzAnLCAvL2Rhcmtlbihjb3JlVGhlbWU/LnBhbGV0dGU/LmJhY2tncm91bmQ/LmRlZmF1bHQsIDAuMyksXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCAjZmZmZmZmNDAnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCwgbGVmdDogMCxcbiAgICB3aWR0aDogJzE1MCUnLFxuICAgIHpJbmRleDogMSxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogJzUwJSA1MCUnLFxuICB9LFxuICBib3hDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAgJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gMTM2ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LCAxMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IG4gfSA9IHVzZVNwcmluZyh7IG46IHNjcm9sbGVkID09PSB0cnVlID8gMSA6IDAgfSk7XG4gIC8vIHVzZVNjcm9sbCgoeyB4eTogWywgeV0gfSkgPT4gYXBpLnN0YXJ0KHsgd2lkdGg6ICh5IC8gaGVpZ2h0KSAqIDEwMCArICclJyB9KSwgeyB0YXJnZXQ6IHdpbmRvdyB9KVxuXG4gIHJldHVybiAoPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1YmVab25lfT5cbiAgICAgICAgPGEuZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbi50byh7IHJhbmdlOiBbMCwgMC4zNSwgMC41MCwgMC42NSwgMV0sIG91dHB1dDogWydyZ2JhKDAsIDAsIDAsIDAuMTkpJywgJ3JnYmEoMCwgMCwgMCwgMC4zNyknLCAncmdiYSgwLCAwLCAwLCAwLjU4KScsICdyZ2JhKDAsIDAsIDAsIDAuNzkpJywgJ3JnYmEoMCwgMCwgMCwgMSknXSB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbi50byh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMSwgMC42NSwgMC41LCAwLjM1LCAwXSwgLy9bMSwgMC45NywgMC45NSwgMC45MywgMC45MCwgMC44NywgMC44NSwgMC44NywgMC45MF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzEsIDAuNjUsIDAuNSwgMC4zNSwgMF0gLy9bMSwgMC45NywgMC45NSwgMC45MywgMC45MCwgMC44NywgMC44NSwgMC44NywgMC45MF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG8odHJhbnMpICAvL2BzY2FsZVkoJHtufSkgdHJhbnNsYXRlWSgwKWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnRvKHRyYW5zKSxcbiAgICAgICAgICAgIFxuICAgICAgICAgIH19IFxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgY29tcG9uZW50PXthLmRpdn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBuLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzAsIDAuMzUsIDAuNSwgMC42NSwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMzIsIDI4LCAyNCwgMjAsIDE2XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfX0+RGVlcC5Gb3VuZGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5Eb2NzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPlRhbGsgdG8gdXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17J2EnfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RlZXBjYXNlL2RlZXBjYXNlXCI+PEdpdEh1YiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvYS5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})