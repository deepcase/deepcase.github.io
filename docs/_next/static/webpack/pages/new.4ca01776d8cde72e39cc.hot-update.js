webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans(n) {\n  return \"translate3d(0, 0, -\".concat(n, \"rem)\");\n};\n\nvar transCube = function transCube(y) {\n  return \"translateY(-\".concat(y, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150vw',\n      height: '5rem',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      transformOrigin: 'top',\n      border: '1px dashed #ffffff40',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100vw',\n      height: 'auto',\n      zIndex: 1\n    },\n    flexContainer: {\n      padding: '0 2rem'\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      alignSelf: 'center',\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 100);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  var _useSpring2 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    y: scrolled === true ? -5 : 0\n  }),\n      y = _useSpring2.y;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useLayoutEffect\"])(function () {\n    var id = setInterval(function () {}, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n    className: classes.container,\n    style: {\n      transform: y.to({\n        range: [0, 1],\n        output: [0, -1]\n      }).to(transCube)\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n      className: classes.cubeZone,\n      style: {\n        background: n.to({\n          range: [0, 0.35, 0.50, 0.65, 0.85, 1],\n          output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 89)', 'rgba(0, 0, 0, 1)']\n        }),\n        transform: n.to({\n          // range: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0],\n          // output: [1, 0.95, 0.85, 0.65, 0.5, 0.35, -5]\n          range: [1, 0],\n          output: [0.01, 0]\n        }).to(trans)\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.root,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n          container: true,\n          direction: \"row\",\n          justify: \"center\",\n          alignItems: \"center\",\n          item: true,\n          xs: 12,\n          className: classes.flexContainer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            lg: 8,\n            xl: 6,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n              className: classes.boxContainer,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].h1, {\n                style: {\n                  alignSelf: 'center',\n                  fontSize: n.to({\n                    range: [0, 1],\n                    output: [32, 24]\n                  })\n                },\n                children: \"Deep.Foundation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: classes.buttons,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 108,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n                  variant: \"text\",\n                  children: \"Talk to us\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 109,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n                  component: 'a',\n                  href: \"https://github.com/deepcase/deepcase\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                    style: {\n                      color: '#fff'\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 110,\n                    columnNumber: 91\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 110,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 107,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"txPNogDKkw1gyeI2NMDzOsy6oYY=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidHJhbnNDdWJlIiwieSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdWJlWm9uZSIsImhlaWdodCIsImJvcmRlciIsInRvcCIsImxlZnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVN0eWxlIiwicGVyc3BlY3RpdmVPcmlnaW4iLCJyb290IiwicGFkZGluZyIsImNvbG9yIiwidHJhbnNmb3JtT3JpZ2luIiwiZmxleENvbnRhaW5lciIsImJveENvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b25zIiwiYWxpZ25TZWxmIiwibWFyZ2luUmlnaHQiLCJVcHBlck1lbnUiLCJzY3JvbGxDb250YWluZXIiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJzY3JvbGxlZCIsInNldFNjcm9sbCIsInVzZUVmZmVjdCIsImlkIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwiY2xlYXJJbnRlcnZhbCIsInVzZVNwcmluZyIsInVzZUxheW91dEVmZmVjdCIsInRyYW5zZm9ybSIsInRvIiwicmFuZ2UiLCJvdXRwdXQiLCJiYWNrZ3JvdW5kIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFEO0FBQUEsMEJBQWlCQSxDQUFqQjtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0QsQ0FBRDtBQUFBLHNDQUE2QkEsQ0FBN0I7QUFBQSxDQUFkOztBQUNBLElBQU1FLFNBQVMs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QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBMENELENBakVNOztHQUFNVSxTO1VBQ0s1QixTLEVBV0Z3QyxzRCxFQUVBQSxzRDs7O0tBZEhaLFMiLCJmaWxlIjoiLi9pbXBvcnRzL3VwcGVyLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhLCB1c2VTcHJpbmcsIGNvbmZpZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmNvbnN0IHNjYWxlID0gKG4pID0+IGBzY2FsZVkoJHtufSlgO1xuY29uc3QgdHJhbnMgPSAobikgPT4gYHRyYW5zbGF0ZTNkKDAsIDAsIC0ke259cmVtKWA7XG5jb25zdCB0cmFuc0N1YmUgPSAoeSkgPT4gYHRyYW5zbGF0ZVkoLSR7eX1yZW0pYDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMixcbiAgfSxcbiAgY3ViZVpvbmU6IHtcbiAgICB3aWR0aDogJzE1MHZ3JyxcbiAgICBoZWlnaHQ6ICc1cmVtJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBwZXJzcGVjdGl2ZTogMCxcbiAgICB0cmFuc2Zvcm1TdHlsZTogJ2ZsYXQnLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiAndG9wIGNlbnRlcicsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMXJlbSAwJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCAjZmZmZmZmNDAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogMCwgbGVmdDogMCxcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG4gIGZsZXhDb250YWluZXI6IHtcbiAgICBwYWRkaW5nOiAnMCAycmVtJyxcbiAgfSxcbiAgYm94Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gMTM2ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LCAxMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBuIH0gPSB1c2VTcHJpbmcoeyBuOiBzY3JvbGxlZCA9PT0gdHJ1ZSA/IDEgOiAwIH0pO1xuXG4gIGNvbnN0IHsgeSB9ID0gdXNlU3ByaW5nKHsgeTogc2Nyb2xsZWQgPT09IHRydWUgPyAtNSA6IDAgfSlcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgXG4gICAgfSwgMTApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuICg8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHkudG8oe1xuICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMCwgLTFdXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgIC50byh0cmFuc0N1YmUpfX0+XG4gICAgICA8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1YmVab25lfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IG4udG8oeyByYW5nZTogWzAsIDAuMzUsIDAuNTAsIDAuNjUsIDAuODUsIDFdLCBvdXRwdXQ6IFsncmdiYSgwLCAwLCAwLCAwLjE5KScsICdyZ2JhKDAsIDAsIDAsIDAuMzcpJywgJ3JnYmEoMCwgMCwgMCwgMC41OCknLCAncmdiYSgwLCAwLCAwLCAwLjc5KScsICdyZ2JhKDAsIDAsIDAsIDg5KScsICdyZ2JhKDAsIDAsIDAsIDEpJ10gfSksXG4gICAgICAgICAgdHJhbnNmb3JtOiBuLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJhbmdlOiBbMSwgMC45NSwgMC44NSwgMC42NSwgMC41LCAwLjM1LCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHB1dDogWzEsIDAuOTUsIDAuODUsIDAuNjUsIDAuNSwgMC4zNSwgLTVdXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzEsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMC4wMSwgMF1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC50byh0cmFucylcbiAgICAgICAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhDb250YWluZXJ9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGEuaDEgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogbi50byh7XG4gICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IFszMiwgMjRdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9fT5EZWVwLkZvdW5kYXRpb248L2EuaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPkRvY3M8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+VGFsayB0byB1czwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29tcG9uZW50PXsnYSd9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGVlcGNhc2UvZGVlcGNhc2VcIj48R2l0SHViIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319Lz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2EuZGl2PlxuICAgIDwvYS5kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})