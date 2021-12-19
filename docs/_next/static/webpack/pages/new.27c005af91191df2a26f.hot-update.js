webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150%',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: '-25%',\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      // backgroundColor: '#00000030', //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: 'auto',\n      zIndex: 1,\n      transform: 'translate3d(0, 0, 0px)'\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.cubeZone,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n        className: classes.root,\n        style: {\n          transformOrigin: 'top',\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 1)']\n          }),\n          transform: n.to({\n            range: [1, 0.65, 0.5, 0.35, 0],\n            //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n            output: [1, 0.65, 0.5, 0.35, 0] //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n\n          }).to(trans)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n                variant: \"h1\",\n                component: react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div,\n                style: {\n                  fontSize: n.to({\n                    range: [0, 0.35, 0.5, 0.65, 1],\n                    output: [32, 28, 24, 20, 16]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"rlToER9aSqQFF11PrP3wGvP107w=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwid2lkdGgiLCJwb3NpdGlvbiIsInpJbmRleCIsImN1YmVab25lIiwiaGVpZ2h0IiwiYm9yZGVyIiwidG9wIiwibGVmdCIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInBlcnNwZWN0aXZlIiwidHJhbnNmb3JtU3R5bGUiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJ0cmFuc2Zvcm0iLCJib3hDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9ucyIsIm1hcmdpblJpZ2h0IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJiYWNrZ3JvdW5kIiwidG8iLCJyYW5nZSIsIm91dHB1dCIsImEiLCJkaXYiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQ7QUFBQSwwQkFBaUJBLENBQWpCO0FBQUEsQ0FBZDs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRCxDQUFEO0FBQUEsc0NBQTZCQSxDQUE3QjtBQUFBLENBQWQ7O0FBRUEsSUFBTUUsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxhQUFTLEVB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QSx3Q0FDRSxxRUFBQyx3REFBRDtBQUFRLHlCQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSxxRUFBQyx3REFBRDtBQUFRLHlCQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRSxxRUFBQyw0REFBRDtBQUFZLDJCQUFTLEVBQUUsR0FBdkI7QUFBNEIsc0JBQUksRUFBQyxzQ0FBakM7QUFBQSx5Q0FBd0UscUVBQUMsZ0VBQUQ7QUFBUSx5QkFBSyxFQUFFO0FBQUNOLDJCQUFLLEVBQUU7QUFBUjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQWtDRCxDQWhETTs7R0FBTVEsUztVQUNLMUIsUyxFQVdGc0Msc0Q7OztLQVpIWixTIiwiZmlsZSI6Ii4vaW1wb3J0cy91cHBlci1tZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEdpdEh1YiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGEsIHVzZVNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmNvbnN0IHNjYWxlID0gKG4pID0+IGBzY2FsZVkoJHtufSlgO1xuY29uc3QgdHJhbnMgPSAobikgPT4gYHRyYW5zbGF0ZTNkKDAsIDAsIC0ke259cmVtKWA7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDIsXG4gIH0sXG4gIGN1YmVab25lOiB7XG4gICAgd2lkdGg6ICcxNTAlJyxcbiAgICBoZWlnaHQ6ICc1cmVtJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6ICctMjUlJyxcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHBlcnNwZWN0aXZlOiAwLFxuICAgIHRyYW5zZm9ybVN0eWxlOiAnZmxhdCcsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46ICd0b3AgY2VudGVyJyxcbiAgfSxcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDMwJywgLy9kYXJrZW4oY29yZVRoZW1lPy5wYWxldHRlPy5iYWNrZ3JvdW5kPy5kZWZhdWx0LCAwLjMpLFxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjQwJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMHB4KScsXG4gIH0sXG4gIGJveENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgICcmID4gOm50aC1jaGlsZCgtbisyKSc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnMS41cmVtJyxcbiAgICB9XG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFVwcGVyTWVudSA9ICh7c2Nyb2xsQ29udGFpbmVyfTp7c2Nyb2xsQ29udGFpbmVyOiBhbnl9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRTY3JvbGwoc2Nyb2xsQ29udGFpbmVyPy5jdXJyZW50Py5zY3JvbGxUb3AgPiAxMzYgPyB0cnVlIDogZmFsc2UpO1xuICAgIH0sIDEwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgbiB9ID0gdXNlU3ByaW5nKHsgbjogc2Nyb2xsZWQgPT09IHRydWUgPyAxIDogMCB9KTtcblxuICByZXR1cm4gKDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdWJlWm9uZX0+XG4gICAgICAgIDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG4udG8oeyByYW5nZTogWzAsIDAuMzUsIDAuNTAsIDAuNjUsIDFdLCBvdXRwdXQ6IFsncmdiYSgwLCAwLCAwLCAwLjE5KScsICdyZ2JhKDAsIDAsIDAsIDAuMzcpJywgJ3JnYmEoMCwgMCwgMCwgMC41OCknLCAncmdiYSgwLCAwLCAwLCAwLjc5KScsICdyZ2JhKDAsIDAsIDAsIDEpJ10gfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG4udG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzEsIDAuNjUsIDAuNSwgMC4zNSwgMF0sIC8vWzEsIDAuOTcsIDAuOTUsIDAuOTMsIDAuOTAsIDAuODcsIDAuODUsIDAuODcsIDAuOTBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IFsxLCAwLjY1LCAwLjUsIDAuMzUsIDBdIC8vWzEsIDAuOTcsIDAuOTUsIDAuOTMsIDAuOTAsIDAuODcsIDAuODUsIDAuODcsIDAuOTBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHRyYW5zKVxuICAgICAgICAgIH19IFxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgY29tcG9uZW50PXthLmRpdn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBuLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzAsIDAuMzUsIDAuNSwgMC42NSwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMzIsIDI4LCAyNCwgMjAsIDE2XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfX0+RGVlcC5Gb3VuZGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5Eb2NzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPlRhbGsgdG8gdXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17J2EnfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RlZXBjYXNlL2RlZXBjYXNlXCI+PEdpdEh1YiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvYS5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})