webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/special-cards-text.tsx":
/*!****************************************!*\
  !*** ./imports/special-cards-text.tsx ***!
  \****************************************/
/*! exports provided: SpecialCardsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialCardsText\", function() { return SpecialCardsText; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n/* harmony import */ var _special_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special-card */ \"./imports/special-card.tsx\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/special-cards-text.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar GridCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = function _c(_ref) {\n  var children = _ref.children,\n      _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? '1fr 25rem' : _ref$columns,\n      _ref$direction = _ref.direction,\n      direction = _ref$direction === void 0 ? 'column-reverse' : _ref$direction,\n      _ref$alignItem = _ref.alignItem,\n      alignItem = _ref$alignItem === void 0 ? 'baseline' : _ref$alignItem;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: {\n      position: 'relative',\n      height: '100%',\n      width: '100%',\n      display: 'grid',\n      gridTemplateColumns: columns,\n      columnGap: '4rem',\n      alignItems: alignItem,\n      '@media(max-width: 1420px)': {\n        alignItems: 'center'\n      },\n      '@media(max-width: 850px)': {\n        alignItems: 'center',\n        display: 'flex',\n        width: '100%',\n        flexDirection: direction\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 11\n  }, _this);\n});\n_c2 = GridCard;\nvar SpecialCardsText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c3 = _s(function () {\n  _s();\n\n  var divider = Object(_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoint\"])();\n  var spacing = Object(_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"])({\n    sm: '7rem',\n    lg: '5rem'\n  });\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n    spacing: spacing,\n    divider: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"StackDivider\"], {\n      borderColor: divider === 'xs' ? 'grey.200' : 'dark'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 46\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      columns: \"25rem 1fr\",\n      direction: \"column\",\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/1.svg\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            sx: {\n              transform: 'translate(-50%, 2.5rem)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/1_2.svg\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--operational-environment'),\n          description: t('flag-description--operational-environment')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        as: \"div\",\n        width: \"100%\",\n        children: t('flag-article--operational-environment')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        children: t('flag-article--new-programming-paradigm')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/2.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            htmlWidth: \"100%\",\n            htmlHeight: \"100%\",\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/2_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--new-programming-paradigm'),\n          description: t('flag-description--new-programming-paradigm')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      columns: \"23rem 1fr\",\n      direction: \"column\",\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/3.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/3_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--all-languages'),\n          description: t('flag-description--all-languages')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        children: t('flag-article--all-languages')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      alignItem: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          fontSize: \"sm\",\n          align: {\n            sm: 'center',\n            lg: 'justify'\n          },\n          children: t('flag-article--semantic-system')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n          py: \"2rem\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Code\"], {\n              variant: \"solid\",\n              colorScheme: \"transparentDark\",\n              size: \"full\",\n              sx: {\n                borderRadius: '0.175rem',\n                padding: '1rem',\n                fontSize: '1rem'\n              },\n              children: \"{\\n  can(where: {\\n    object_id: { _eq: 5 },\\n    subject_id: { _eq: 165 },\\n    action_id: { _eq: 28 },\\n  }) {\\n    rule_id\\n  }\\n}\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/4.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/4_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--semantic-system'),\n          description: t('flag-description--semantic-system')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 11\n  }, _this);\n}, \"qnhvbRqMic5aOD0I3RTMsUJahP0=\", false, function () {\n  return [_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoint\"], _framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpointValue\"], react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c4 = SpecialCardsText;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"GridCard$React.memo\");\n$RefreshReg$(_c2, \"GridCard\");\n$RefreshReg$(_c3, \"SpecialCardsText$React.memo\");\n$RefreshReg$(_c4, \"SpecialCardsText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9zcGVjaWFsLWNhcmRzLXRleHQudHN4PzY0ZGMiXSwibmFtZXMiOlsiR3JpZENhcmQiLCJSZWFjdCIsIm1lbW8iLCJjaGlsZHJlbiIsImNvbHVtbnMiLCJkaXJlY3Rpb24iLCJhbGlnbkl0ZW0iLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2x1bW5HYXAiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIlNwZWNpYWxDYXJkc1RleHQiLCJkaXZpZGVyIiwidXNlQnJlYWtwb2ludCIsInNwYWNpbmciLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJzbSIsImxnIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFFBQVEsZ0JBQUdDLDRDQUFLLENBQUNDLElBQU4sTUFBVyxrQkFVdEI7QUFBQSxNQVRKQyxRQVNJLFFBVEpBLFFBU0k7QUFBQSwwQkFSSkMsT0FRSTtBQUFBLE1BUkpBLE9BUUksNkJBUk0sV0FRTjtBQUFBLDRCQVBKQyxTQU9JO0FBQUEsTUFQSkEsU0FPSSwrQkFQUSxnQkFPUjtBQUFBLDRCQU5KQyxTQU1JO0FBQUEsTUFOSkEsU0FNSSwrQkFOUSxVQU1SO0FBQ0osc0JBQVEscUVBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUU7QUFDZkMsY0FBUSxFQUFFLFVBREs7QUFFZkMsWUFBTSxFQUFFLE1BRk87QUFHZkMsV0FBSyxFQUFFLE1BSFE7QUFJZkMsYUFBTyxFQUFFLE1BSk07QUFLZkMseUJBQW1CLEVBQUVQLE9BTE47QUFNZlEsZUFBUyxFQUFFLE1BTkk7QUFPZkMsZ0JBQVUsRUFBRVAsU0FQRztBQVFmLG1DQUE2QjtBQUMzQk8sa0JBQVUsRUFBRTtBQURlLE9BUmQ7QUFXZixrQ0FBNEI7QUFDMUJBLGtCQUFVLEVBQUUsUUFEYztBQUUxQkgsZUFBTyxFQUFFLE1BRmlCO0FBRzFCRCxhQUFLLEVBQUUsTUFIbUI7QUFJMUJLLHFCQUFhLEVBQUVUO0FBSlc7QUFYYixLQUFUO0FBQUEsY0FpQkpGO0FBakJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQWtCRCxDQTdCZ0IsQ0FBakI7TUFBTUgsUTtBQStCQyxJQUFNZSxnQkFBZ0IsZ0JBQUdkLDRDQUFLLENBQUNDLElBQU4sVUFBVyxZQUFNO0FBQUE7O0FBQy9DLE1BQU1jLE9BQU8sR0FBR0MsZ0VBQWEsRUFBN0I7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHFFQUFrQixDQUFDO0FBQUVDLE1BQUUsRUFBRSxNQUFOO0FBQWNDLE1BQUUsRUFBRTtBQUFsQixHQUFELENBQWxDOztBQUYrQyx3QkFHakNDLG9FQUFjLEVBSG1CO0FBQUEsTUFHdkNDLENBSHVDLG1CQUd2Q0EsQ0FIdUM7O0FBSy9DLHNCQUFRLHFFQUFDLGlEQUFEO0FBQVEsV0FBTyxFQUFFTCxPQUFqQjtBQUEwQixXQUFPLGVBQUUscUVBQUMsdURBQUQ7QUFBYyxpQkFBVyxFQUFFRixPQUFPLEtBQUssSUFBWixHQUFtQixVQUFuQixHQUFnQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5DO0FBQUEsNEJBQ0oscUVBQUMsUUFBRDtBQUFVLGFBQU8sRUFBQyxXQUFsQjtBQUE4QixlQUFTLEVBQUMsUUFBeEM7QUFBaUQsZUFBUyxFQUFDLFlBQTNEO0FBQUEsOEJBQ0UscUVBQUMsOENBQUQ7QUFBSyxZQUFJLEVBQUMsT0FBVjtBQUFrQixZQUFJLEVBQUMsT0FBdkI7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUNFLGVBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLHNCQUFVLEVBQUMsTUFBbkM7QUFBMEMscUJBQVMsRUFBQyxNQUFwRDtBQUEyRCxjQUFFLEVBQUU7QUFBQ1EsdUJBQVMsRUFBRTtBQUFaLGFBQS9EO0FBQXVHLGVBQUcsRUFBQztBQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURUO0FBRUUsZUFBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLHNCQUFVLEVBQUMsTUFBckM7QUFBNEMscUJBQVMsRUFBQyxNQUF0RDtBQUE2RCxjQUFFLEVBQUU7QUFBQ0EsdUJBQVMsRUFBRTtBQUFaLGFBQWpFO0FBQWtHLGVBQUcsRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZUO0FBR0UsZUFBSyxFQUFFRCxDQUFDLENBQUMscUNBQUQsQ0FIVjtBQUlFLHFCQUFXLEVBQUVBLENBQUMsQ0FBQywyQ0FBRDtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0UscUVBQUMsK0NBQUQ7QUFBTSxnQkFBUSxFQUFDLElBQWY7QUFBb0IsYUFBSyxFQUFFO0FBQUNILFlBQUUsRUFBRSxRQUFMO0FBQWVDLFlBQUUsRUFBRTtBQUFuQixTQUEzQjtBQUEwRCxVQUFFLEVBQUMsS0FBN0Q7QUFBbUUsYUFBSyxFQUFDLE1BQXpFO0FBQUEsa0JBQ0dFLENBQUMsQ0FBQyx1Q0FBRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESSxlQWdCSixxRUFBQyxRQUFEO0FBQVUsZUFBUyxFQUFDLFlBQXBCO0FBQUEsOEJBQ0UscUVBQUMsK0NBQUQ7QUFBTSxnQkFBUSxFQUFDLElBQWY7QUFBb0IsYUFBSyxFQUFFO0FBQUNILFlBQUUsRUFBRSxRQUFMO0FBQWVDLFlBQUUsRUFBRTtBQUFuQixTQUEzQjtBQUFBLGtCQUNHRSxDQUFDLENBQUMsd0NBQUQ7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyw4Q0FBRDtBQUFLLFlBQUksRUFBQyxPQUFWO0FBQWtCLFlBQUksRUFBQyxPQUF2QjtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsZUFBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUssZUFBRyxFQUFDLGNBQVQ7QUFBd0IsY0FBRSxFQUFFO0FBQUNDLHVCQUFTLEVBQUU7QUFBWixhQUE1QjtBQUFrRSxxQkFBUyxFQUFDLE1BQTVFO0FBQW9GLHNCQUFVLEVBQUMsTUFBL0Y7QUFBc0csZUFBRyxFQUFDO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFQ7QUFFRSxlQUFLLGVBQUUscUVBQUMsOENBQUQ7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsY0FBRSxFQUFFO0FBQUNBLHVCQUFTLEVBQUU7QUFBWixhQUE5QjtBQUErRCxlQUFHLEVBQUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGVDtBQUdFLGVBQUssRUFBRUQsQ0FBQyxDQUFDLHNDQUFELENBSFY7QUFJRSxxQkFBVyxFQUFFQSxDQUFDLENBQUMsNENBQUQ7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkksZUErQkoscUVBQUMsUUFBRDtBQUFVLGFBQU8sRUFBQyxXQUFsQjtBQUE4QixlQUFTLEVBQUMsUUFBeEM7QUFBaUQsZUFBUyxFQUFDLFlBQTNEO0FBQUEsOEJBQ0UscUVBQUMsOENBQUQ7QUFBSyxZQUFJLEVBQUMsT0FBVjtBQUFrQixZQUFJLEVBQUMsT0FBdkI7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUNFLGVBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLGNBQUUsRUFBRTtBQUFDQyx1QkFBUyxFQUFFO0FBQVosYUFBNUI7QUFBa0UsZUFBRyxFQUFDLE1BQXRFO0FBQTZFLHNCQUFVLEVBQUMsTUFBeEY7QUFBK0YscUJBQVMsRUFBQztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURUO0FBRUUsZUFBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGNBQUUsRUFBRTtBQUFDQSx1QkFBUyxFQUFFO0FBQVosYUFBOUI7QUFBK0QsZUFBRyxFQUFDLE1BQW5FO0FBQTBFLHNCQUFVLEVBQUMsTUFBckY7QUFBNEYscUJBQVMsRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZUO0FBR0UsZUFBSyxFQUFFRCxDQUFDLENBQUMsMkJBQUQsQ0FIVjtBQUlFLHFCQUFXLEVBQUVBLENBQUMsQ0FBQyxpQ0FBRDtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0UscUVBQUMsK0NBQUQ7QUFBTSxnQkFBUSxFQUFDLElBQWY7QUFBb0IsYUFBSyxFQUFFO0FBQUNILFlBQUUsRUFBRSxRQUFMO0FBQWVDLFlBQUUsRUFBRTtBQUFuQixTQUEzQjtBQUFBLGtCQUNHRSxDQUFDLENBQUMsNkJBQUQ7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JJLGVBOENKLHFFQUFDLFFBQUQ7QUFBVSxlQUFTLEVBQUMsUUFBcEI7QUFBQSw4QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLGdDQUNFLHFFQUFDLCtDQUFEO0FBQU0sa0JBQVEsRUFBQyxJQUFmO0FBQW9CLGVBQUssRUFBRTtBQUFDSCxjQUFFLEVBQUUsUUFBTDtBQUFlQyxjQUFFLEVBQUU7QUFBbkIsV0FBM0I7QUFBQSxvQkFDR0UsQ0FBQyxDQUFDLCtCQUFEO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLGlEQUFEO0FBQVEsWUFBRSxFQUFDLE1BQVg7QUFBQSxpQ0FDRTtBQUFBLG1DQUNBLHFFQUFDLCtDQUFEO0FBQU0scUJBQU8sRUFBQyxPQUFkO0FBQXNCLHlCQUFXLEVBQUMsaUJBQWxDO0FBQW9ELGtCQUFJLEVBQUMsTUFBekQ7QUFBZ0UsZ0JBQUUsRUFBRTtBQUFDRSw0QkFBWSxFQUFFLFVBQWY7QUFBMkJDLHVCQUFPLEVBQUUsTUFBcEM7QUFBNENDLHdCQUFRLEVBQUU7QUFBdEQsZUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXFCRSxxRUFBQyw4Q0FBRDtBQUFLLFlBQUksRUFBQyxPQUFWO0FBQWtCLFlBQUksRUFBQyxPQUF2QjtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsZUFBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUssZUFBRyxFQUFDLGNBQVQ7QUFBd0IsY0FBRSxFQUFFO0FBQUNILHVCQUFTLEVBQUU7QUFBWixhQUE1QjtBQUFrRSxlQUFHLEVBQUMsTUFBdEU7QUFBNkUsc0JBQVUsRUFBQyxNQUF4RjtBQUErRixxQkFBUyxFQUFDO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFQ7QUFFRSxlQUFLLGVBQUUscUVBQUMsOENBQUQ7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsY0FBRSxFQUFFO0FBQUNBLHVCQUFTLEVBQUU7QUFBWixhQUE5QjtBQUErRCxzQkFBVSxFQUFDLE1BQTFFO0FBQWlGLHFCQUFTLEVBQUMsTUFBM0Y7QUFBa0csZUFBRyxFQUFDO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlQ7QUFHRSxlQUFLLEVBQUVELENBQUMsQ0FBQyw2QkFBRCxDQUhWO0FBSUUscUJBQVcsRUFBRUEsQ0FBQyxDQUFDLG1DQUFEO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQWdGRCxDQXJGK0I7QUFBQSxVQUNkTix3REFEYyxFQUVkRSw2REFGYyxFQUdoQkcsNERBSGdCO0FBQUEsR0FBekI7TUFBTVAsZ0IiLCJmaWxlIjoiLi9pbXBvcnRzL3NwZWNpYWwtY2FyZHMtdGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQm94LCBDZW50ZXIsIENvZGUsIERpdmlkZXIsIFRleHQsIHVzZU1lZGlhUXVlcnksIFZTdGFjaywgSW1nLCB1c2VCcmVha3BvaW50LCB1c2VCcmVha3BvaW50VmFsdWUsIFN0YWNrRGl2aWRlciB9IGZyb20gJy4vZnJhbWV3b3JrJztcbmltcG9ydCB7IFNwZWNpYWxDYXJkIH0gZnJvbSBcIi4vc3BlY2lhbC1jYXJkXCI7XG5cblxuY29uc3QgR3JpZENhcmQgPSBSZWFjdC5tZW1vKCh7XG4gIGNoaWxkcmVuLCBcbiAgY29sdW1ucyA9ICcxZnIgMjVyZW0nLCBcbiAgZGlyZWN0aW9uID0gJ2NvbHVtbi1yZXZlcnNlJyxcbiAgYWxpZ25JdGVtID0gJ2Jhc2VsaW5lJyxcbn06e1xuICBjaGlsZHJlbjogYW55OyBcbiAgY29sdW1ucz86IGFueTtcbiAgZGlyZWN0aW9uPzogYW55O1xuICBhbGlnbkl0ZW0/OiBhbnk7XG59KSA9PiB7XG4gIHJldHVybiAoPEJveCBzeD17e1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGNvbHVtbnMsXG4gICAgY29sdW1uR2FwOiAnNHJlbScsXG4gICAgYWxpZ25JdGVtczogYWxpZ25JdGVtLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxNDIwcHgpJzoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogODUwcHgpJzoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIH1cbiAgfX0+e2NoaWxkcmVufTwvQm94Pilcbn0pO1xuXG5leHBvcnQgY29uc3QgU3BlY2lhbENhcmRzVGV4dCA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xuICBjb25zdCBkaXZpZGVyID0gdXNlQnJlYWtwb2ludCgpO1xuICBjb25zdCBzcGFjaW5nID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgc206ICc3cmVtJywgbGc6ICc1cmVtJyB9KTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoPFZTdGFjayBzcGFjaW5nPXtzcGFjaW5nfSBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIGJvcmRlckNvbG9yPXtkaXZpZGVyID09PSAneHMnID8gJ2dyZXkuMjAwJyA6ICdkYXJrJ30gLz59PlxuICAgICAgPEdyaWRDYXJkIGNvbHVtbnM9JzI1cmVtIDFmcicgZGlyZWN0aW9uPSdjb2x1bW4nIGFsaWduSXRlbT0nZmxleC1zdGFydCc+XG4gICAgICAgIDxCb3ggbWF4Vz0nMjVyZW0nIG1pblc9JzIwcmVtJz5cbiAgICAgICAgICA8U3BlY2lhbENhcmRcbiAgICAgICAgICAgIGljb24xPXs8SW1nIHNyYz0nL2ZsYWdzLzEuc3ZnJyBodG1sSGVpZ2h0PScxMDAlJyBodG1sV2lkdGg9JzEwMCUnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDIuNXJlbSknfX0gYWx0PSdpY29uJyAvPn1cbiAgICAgICAgICAgIGljb24yPXs8SW1nIHNyYz0nL2ZsYWdzLzFfMi5zdmcnIGh0bWxIZWlnaHQ9JzEwMCUnIGh0bWxXaWR0aD0nMTAwJScgc3g9e3t0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ319IGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICB0aXRsZT17dCgnZmxhZy10aXRsZS0tb3BlcmF0aW9uYWwtZW52aXJvbm1lbnQnKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdmbGFnLWRlc2NyaXB0aW9uLS1vcGVyYXRpb25hbC1lbnZpcm9ubWVudCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nIGFsaWduPXt7c206ICdjZW50ZXInLCBsZzogJ2p1c3RpZnknfX0gYXM9J2Rpdicgd2lkdGg9JzEwMCUnPlxuICAgICAgICAgIHt0KCdmbGFnLWFydGljbGUtLW9wZXJhdGlvbmFsLWVudmlyb25tZW50Jyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvR3JpZENhcmQ+XG4gICAgICB7Lyoge21heDg1MCAmJiA8RGl2aWRlciAvPn0gKi99XG5cbiAgICAgIDxHcmlkQ2FyZCBhbGlnbkl0ZW09J2ZsZXgtc3RhcnQnPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nIGFsaWduPXt7c206ICdjZW50ZXInLCBsZzogJ2p1c3RpZnknfX0+XG4gICAgICAgICAge3QoJ2ZsYWctYXJ0aWNsZS0tbmV3LXByb2dyYW1taW5nLXBhcmFkaWdtJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEJveCBtYXhXPScyNXJlbScgbWluVz0nMjByZW0nPlxuICAgICAgICAgIDxTcGVjaWFsQ2FyZFxuICAgICAgICAgICAgaWNvbjE9ezxJbWcgc3JjPScvZmxhZ3MvMi5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDJyZW0pJ319IGh0bWxXaWR0aD0nMTAwJScgIGh0bWxIZWlnaHQ9JzEwMCUnIGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICBpY29uMj17PEltZyBzcmM9Jy9mbGFncy8yXzIuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknfX0gYWx0PSdpY29uJyAvPn1cbiAgICAgICAgICAgIHRpdGxlPXt0KCdmbGFnLXRpdGxlLS1uZXctcHJvZ3JhbW1pbmctcGFyYWRpZ20nKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdmbGFnLWRlc2NyaXB0aW9uLS1uZXctcHJvZ3JhbW1pbmctcGFyYWRpZ20nKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvR3JpZENhcmQ+XG4gICAgICB7Lyoge21heDg1MCAmJiA8RGl2aWRlciAvPn0gKi99XG5cbiAgICAgIDxHcmlkQ2FyZCBjb2x1bW5zPScyM3JlbSAxZnInIGRpcmVjdGlvbj0nY29sdW1uJyBhbGlnbkl0ZW09J2ZsZXgtc3RhcnQnPlxuICAgICAgICA8Qm94IG1heFc9JzI1cmVtJyBtaW5XPScyMHJlbSc+XG4gICAgICAgICAgPFNwZWNpYWxDYXJkXG4gICAgICAgICAgICBpY29uMT17PEltZyBzcmM9Jy9mbGFncy8zLnN2Zycgc3g9e3t0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMnJlbSknfX0gYWx0PSdpY29uJyBodG1sSGVpZ2h0PScxMDAlJyBodG1sV2lkdGg9JzEwMCUnIC8+fVxuICAgICAgICAgICAgaWNvbjI9ezxJbWcgc3JjPScvZmxhZ3MvM18yLnN2Zycgc3g9e3t0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ319IGFsdD0naWNvbicgaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyAvPn1cbiAgICAgICAgICAgIHRpdGxlPXt0KCdmbGFnLXRpdGxlLS1hbGwtbGFuZ3VhZ2VzJyl9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZmxhZy1kZXNjcmlwdGlvbi0tYWxsLWxhbmd1YWdlcycpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nIGFsaWduPXt7c206ICdjZW50ZXInLCBsZzogJ2p1c3RpZnknfX0+XG4gICAgICAgICAge3QoJ2ZsYWctYXJ0aWNsZS0tYWxsLWxhbmd1YWdlcycpfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0dyaWRDYXJkPlxuICAgICAgey8qIHttYXg4NTAgJiYgPERpdmlkZXIgLz59ICovfVxuXG4gICAgICA8R3JpZENhcmQgYWxpZ25JdGVtPSdjZW50ZXInPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSdzbScgYWxpZ249e3tzbTogJ2NlbnRlcicsIGxnOiAnanVzdGlmeSd9fT5cbiAgICAgICAgICAgIHt0KCdmbGFnLWFydGljbGUtLXNlbWFudGljLXN5c3RlbScpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8Q2VudGVyIHB5PScycmVtJz5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICA8Q29kZSB2YXJpYW50PSdzb2xpZCcgY29sb3JTY2hlbWU9J3RyYW5zcGFyZW50RGFyaycgc2l6ZT0nZnVsbCcgc3g9e3tib3JkZXJSYWRpdXM6ICcwLjE3NXJlbScsIHBhZGRpbmc6ICcxcmVtJywgZm9udFNpemU6ICcxcmVtJ319PlxuICAgICAgICAgICAgICB7YHtcbiAgY2FuKHdoZXJlOiB7XG4gICAgb2JqZWN0X2lkOiB7IF9lcTogNSB9LFxuICAgIHN1YmplY3RfaWQ6IHsgX2VxOiAxNjUgfSxcbiAgICBhY3Rpb25faWQ6IHsgX2VxOiAyOCB9LFxuICB9KSB7XG4gICAgcnVsZV9pZFxuICB9XG59YH1cbiAgICAgICAgICAgIDwvQ29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYXhXPScyNXJlbScgbWluVz0nMjByZW0nPlxuICAgICAgICAgIDxTcGVjaWFsQ2FyZFxuICAgICAgICAgICAgaWNvbjE9ezxJbWcgc3JjPScvZmxhZ3MvNC5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDJyZW0pJ319IGFsdD0naWNvbicgaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyAvPn1cbiAgICAgICAgICAgIGljb24yPXs8SW1nIHNyYz0nL2ZsYWdzLzRfMi5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSd9fSBodG1sSGVpZ2h0PScxMDAlJyBodG1sV2lkdGg9JzEwMCUnIGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICB0aXRsZT17dCgnZmxhZy10aXRsZS0tc2VtYW50aWMtc3lzdGVtJyl9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZmxhZy1kZXNjcmlwdGlvbi0tc2VtYW50aWMtc3lzdGVtJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIFxuICAgICAgPC9HcmlkQ2FyZD5cbiAgICAgIFxuICAgIDwvVlN0YWNrPlxuICApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/special-cards-text.tsx\n");

/***/ })

})