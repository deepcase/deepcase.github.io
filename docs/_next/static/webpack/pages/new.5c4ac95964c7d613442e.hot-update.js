webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      if (window.scrollY == 140) !scrolled;\n    }, 500);\n    return function () {\n      return clearInterval(id);\n    };\n  }, [scrolled]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    color: \"default\",\n    position: !scrolled ? 'absolute' : 'fixed',\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"R0E9lgoqAJ1uC62a74Jq9/zS5JY=\", false, function () {\n  return [useStyles];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJveENvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b25zIiwibWFyZ2luUmlnaHQiLCJVcHBlck1lbnUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNjcm9sbGVkIiwic2V0U2Nyb2xsIiwidXNlRWZmZWN0IiwiaWQiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGVhckludGVydmFsIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsZ0JBQVksRUFBRTtBQUNaQyxhQUFPLEVBQUcsTUFERTtBQUVaQyxtQkFBYSxFQUFFLEtBRkg7QUFHWkMsb0JBQWMsRUFBRTtBQUhKLEtBRHVCO0FBTXJDQyxXQUFPLEVBQUU7QUFDUCw4QkFBd0I7QUFDdEJDLG1CQUFXLEVBQUU7QUFEUztBQURqQjtBQU40QixHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQWFPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNsQyxNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7O0FBRGtDLGtCQUdKWSxzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BRzNCQyxRQUgyQjtBQUFBLE1BR2pCQyxTQUhpQjs7QUFLbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEVBQUUsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDM0IsVUFBSUMsTUFBTSxDQUFDQyxPQUFQLElBQWtCLEdBQXRCLEVBQTJCLENBQUNOLFFBQUQ7QUFDNUIsS0FGcUIsRUFFbkIsR0FGbUIsQ0FBdEI7QUFHQSxXQUFPO0FBQUEsYUFBTU8sYUFBYSxDQUFDSixFQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBTFEsRUFLTixDQUFDSCxRQUFELENBTE0sQ0FBVDtBQU9BLHNCQUFRLHFFQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsWUFBUSxFQUFFLENBQUNBLFFBQUQsR0FBWSxVQUFaLEdBQXlCLE9BQTNEO0FBQUEsMkJBQ0oscUVBQUMsc0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsZUFBUyxFQUFDLEtBQTFCO0FBQWdDLGFBQU8sRUFBQyxRQUF4QztBQUFpRCxnQkFBVSxFQUFDLFFBQTVEO0FBQXFFLFVBQUksTUFBekU7QUFBMEUsUUFBRSxFQUFFLEVBQTlFO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBMEIsVUFBRSxFQUFFLENBQTlCO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBSyxtQkFBUyxFQUFFRixPQUFPLENBQUNSLFlBQXhCO0FBQUEsa0NBQ0UscUVBQUMsNERBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFUSxPQUFPLENBQUNKLE9BQXhCO0FBQUEsb0NBQ0UscUVBQUMsd0RBQUQ7QUFBUSxxQkFBTyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxxQkFBTyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UscUVBQUMsNERBQUQ7QUFBWSx1QkFBUyxFQUFFLEdBQXZCO0FBQTRCLGtCQUFJLEVBQUMsc0NBQWpDO0FBQUEscUNBQXdFLHFFQUFDLGdFQUFEO0FBQVEscUJBQUssRUFBRTtBQUFDYyx1QkFBSyxFQUFFO0FBQVI7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBZUQsQ0EzQk07O0dBQU1aLFM7VUFDS1QsUzs7O0tBRExTLFMiLCJmaWxlIjoiLi9pbXBvcnRzL3VwcGVyLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQmFyLCBCb3gsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBHaXRIdWIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYm94Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgJyYgPiA6bnRoLWNoaWxkKC1uKzIpJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcxLjVyZW0nLFxuICAgIH1cbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgVXBwZXJNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA9PSAxNDApICFzY3JvbGxlZFxuICAgIH0sIDUwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gIH0sIFtzY3JvbGxlZF0pXG5cbiAgcmV0dXJuICg8QXBwQmFyIGNvbG9yPSdkZWZhdWx0JyBwb3NpdGlvbj17IXNjcm9sbGVkID8gJ2Fic29sdXRlJyA6ICdmaXhlZCd9PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9IHhsPXs2fT5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hDb250YWluZXJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+RGVlcC5Gb3VuZGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+RG9jczwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPlRhbGsgdG8gdXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29tcG9uZW50PXsnYSd9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGVlcGNhc2UvZGVlcGNhc2VcIj48R2l0SHViIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319Lz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQXBwQmFyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})