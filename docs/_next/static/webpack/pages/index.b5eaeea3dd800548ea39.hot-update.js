webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/special-cards-text.tsx":
/*!****************************************!*\
  !*** ./imports/special-cards-text.tsx ***!
  \****************************************/
/*! exports provided: SpecialCardsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialCardsText\", function() { return SpecialCardsText; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n/* harmony import */ var _special_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special-card */ \"./imports/special-card.tsx\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/special-cards-text.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar GridCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = function _c(_ref) {\n  var children = _ref.children,\n      _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? '1fr max-content' : _ref$columns,\n      _ref$direction = _ref.direction,\n      direction = _ref$direction === void 0 ? 'column-reverse' : _ref$direction,\n      _ref$alignItem = _ref.alignItem,\n      alignItem = _ref$alignItem === void 0 ? 'baseline' : _ref$alignItem;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: {\n      position: 'relative',\n      height: '100%',\n      width: '100%',\n      display: 'grid',\n      gridTemplateColumns: columns,\n      columnGap: '2rem',\n      alignItems: alignItem,\n      '@media(max-width: 1420px)': {\n        alignItems: 'center'\n      },\n      '@media(max-width: 850px)': {\n        alignItems: 'center',\n        display: 'flex',\n        width: '100%',\n        flexDirection: direction\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 11\n  }, _this);\n});\n_c2 = GridCard;\nvar SpecialCardsText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c3 = _s(function () {\n  _s();\n\n  var divider = Object(_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoint\"])();\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n    spacing: {\n      sm: '7rem',\n      lg: '5rem'\n    },\n    divider: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"StackDivider\"], {\n      borderColor: {\n        sm: 'light',\n        md: 'transparent'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 65\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      columns: \"max-content 1fr\",\n      direction: \"column\",\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: {\n          sm: '20rem',\n          '2xl': '23rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/1.svg\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            sx: {\n              transform: 'translate(-50%, 2.5rem)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/1_2.svg\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--operational-environment'),\n          description: t('flag-description--operational-environment')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        as: \"div\",\n        width: \"100%\",\n        children: t('flag-article--operational-environment')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        children: t('flag-article--new-programming-paradigm')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: \"20rem\",\n        maxW: \"23rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/3.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            htmlWidth: \"100%\",\n            htmlHeight: \"100%\",\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/3_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--new-programming-paradigm'),\n          description: t('flag-description--new-programming-paradigm')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      columns: \"max-content 1fr\",\n      direction: \"column\",\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: \"20rem\",\n        maxW: \"23rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/2.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/2_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--all-languages'),\n          description: t('flag-description--all-languages')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        children: t('flag-article--all-languages')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      alignItem: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          fontSize: \"sm\",\n          align: {\n            sm: 'center',\n            lg: 'justify'\n          },\n          children: t('flag-article--semantic-system')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n          py: \"2rem\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Code\"], {\n              variant: \"solid\",\n              colorScheme: \"transparentDark\",\n              size: \"full\",\n              sx: {\n                borderRadius: '0.175rem',\n                padding: '1rem',\n                fontSize: '1rem'\n              },\n              children: \"{\\n  can(where: {\\n    object_id: { _eq: 5 },\\n    subject_id: { _eq: 165 },\\n    action_id: { _eq: 28 },\\n  }) {\\n    rule_id\\n  }\\n}\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        w: \"20rem\",\n        maxW: \"23rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/4.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/4_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--semantic-system'),\n          description: t('flag-description--semantic-system')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 11\n  }, _this);\n}, \"BN5xPH3HQ7J0Q7fwTN7dQ5ukdoI=\", false, function () {\n  return [_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoint\"], react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c4 = SpecialCardsText;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"GridCard$React.memo\");\n$RefreshReg$(_c2, \"GridCard\");\n$RefreshReg$(_c3, \"SpecialCardsText$React.memo\");\n$RefreshReg$(_c4, \"SpecialCardsText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9zcGVjaWFsLWNhcmRzLXRleHQudHN4PzY0ZGMiXSwibmFtZXMiOlsiR3JpZENhcmQiLCJSZWFjdCIsIm1lbW8iLCJjaGlsZHJlbiIsImNvbHVtbnMiLCJkaXJlY3Rpb24iLCJhbGlnbkl0ZW0iLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2x1bW5HYXAiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIlNwZWNpYWxDYXJkc1RleHQiLCJkaXZpZGVyIiwidXNlQnJlYWtwb2ludCIsInVzZVRyYW5zbGF0aW9uIiwidCIsInNtIiwibGciLCJtZCIsInRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxRQUFRLGdCQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLE1BQVcsa0JBVXRCO0FBQUEsTUFUSkMsUUFTSSxRQVRKQSxRQVNJO0FBQUEsMEJBUkpDLE9BUUk7QUFBQSxNQVJKQSxPQVFJLDZCQVJNLGlCQVFOO0FBQUEsNEJBUEpDLFNBT0k7QUFBQSxNQVBKQSxTQU9JLCtCQVBRLGdCQU9SO0FBQUEsNEJBTkpDLFNBTUk7QUFBQSxNQU5KQSxTQU1JLCtCQU5RLFVBTVI7QUFDSixzQkFBUSxxRUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRTtBQUNmQyxjQUFRLEVBQUUsVUFESztBQUVmQyxZQUFNLEVBQUUsTUFGTztBQUdmQyxXQUFLLEVBQUUsTUFIUTtBQUlmQyxhQUFPLEVBQUUsTUFKTTtBQUtmQyx5QkFBbUIsRUFBRVAsT0FMTjtBQU1mUSxlQUFTLEVBQUUsTUFOSTtBQU9mQyxnQkFBVSxFQUFFUCxTQVBHO0FBUWYsbUNBQTZCO0FBQzNCTyxrQkFBVSxFQUFFO0FBRGUsT0FSZDtBQVdmLGtDQUE0QjtBQUMxQkEs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QTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXFCRSxxRUFBQyw4Q0FBRDtBQUFLLFNBQUMsRUFBQyxPQUFQO0FBQWUsWUFBSSxFQUFDLE9BQXBCO0FBQUEsK0JBQ0UscUVBQUMseURBQUQ7QUFDRSxlQUFLLGVBQUUscUVBQUMsOENBQUQ7QUFBSyxlQUFHLEVBQUMsY0FBVDtBQUF3QixjQUFFLEVBQUU7QUFBQ0gsdUJBQVMsRUFBRTtBQUFaLGFBQTVCO0FBQWtFLGVBQUcsRUFBQyxNQUF0RTtBQUE2RSxzQkFBVSxFQUFDLE1BQXhGO0FBQStGLHFCQUFTLEVBQUM7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVDtBQUVFLGVBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFLLGVBQUcsRUFBQyxnQkFBVDtBQUEwQixjQUFFLEVBQUU7QUFBQ0EsdUJBQVMsRUFBRTtBQUFaLGFBQTlCO0FBQStELHNCQUFVLEVBQUMsTUFBMUU7QUFBaUYscUJBQVMsRUFBQyxNQUEzRjtBQUFrRyxlQUFHLEVBQUM7QUFBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGVDtBQUdFLGVBQUssRUFBRUosQ0FBQyxDQUFDLDZCQUFELENBSFY7QUFJRSxxQkFBVyxFQUFFQSxDQUFDLENBQUMsbUNBQUQ7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBNkVELENBakYrQjtBQUFBLFVBQ2RGLHdEQURjLEVBRWhCQyw0REFGZ0I7QUFBQSxHQUF6QjtNQUFNSCxnQiIsImZpbGUiOiIuL2ltcG9ydHMvc3BlY2lhbC1jYXJkcy10ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBCb3gsIENlbnRlciwgQ29kZSwgRGl2aWRlciwgVGV4dCwgdXNlTWVkaWFRdWVyeSwgVlN0YWNrLCBJbWcsIHVzZUJyZWFrcG9pbnQsIHVzZUJyZWFrcG9pbnRWYWx1ZSwgU3RhY2tEaXZpZGVyIH0gZnJvbSAnLi9mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU3BlY2lhbENhcmQgfSBmcm9tIFwiLi9zcGVjaWFsLWNhcmRcIjtcblxuXG5jb25zdCBHcmlkQ2FyZCA9IFJlYWN0Lm1lbW8oKHtcbiAgY2hpbGRyZW4sIFxuICBjb2x1bW5zID0gJzFmciBtYXgtY29udGVudCcsIFxuICBkaXJlY3Rpb24gPSAnY29sdW1uLXJldmVyc2UnLFxuICBhbGlnbkl0ZW0gPSAnYmFzZWxpbmUnLFxufTp7XG4gIGNoaWxkcmVuOiBhbnk7IFxuICBjb2x1bW5zPzogYW55O1xuICBkaXJlY3Rpb24/OiBhbnk7XG4gIGFsaWduSXRlbT86IGFueTtcbn0pID0+IHtcbiAgcmV0dXJuICg8Qm94IHN4PXt7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogY29sdW1ucyxcbiAgICBjb2x1bW5HYXA6ICcycmVtJyxcbiAgICBhbGlnbkl0ZW1zOiBhbGlnbkl0ZW0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDE0MjBweCknOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA4NTBweCknOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgfVxuICB9fT57Y2hpbGRyZW59PC9Cb3g+KVxufSk7XG5cbmV4cG9ydCBjb25zdCBTcGVjaWFsQ2FyZHNUZXh0ID0gUmVhY3QubWVtbygoKSA9PiB7XG4gIGNvbnN0IGRpdmlkZXIgPSB1c2VCcmVha3BvaW50KCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKDxWU3RhY2sgc3BhY2luZz17eyBzbTogJzdyZW0nLCBsZzogJzVyZW0nIH19IGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgYm9yZGVyQ29sb3I9e3tzbTogJ2xpZ2h0JywgbWQ6ICd0cmFuc3BhcmVudCd9fSAvPn0+XG4gICAgICA8R3JpZENhcmQgY29sdW1ucz0nbWF4LWNvbnRlbnQgMWZyJyBkaXJlY3Rpb249J2NvbHVtbicgYWxpZ25JdGVtPSdmbGV4LXN0YXJ0Jz5cbiAgICAgICAgPEJveCB3PXt7c206ICcyMHJlbScsICcyeGwnOiAnMjNyZW0nfX0+XG4gICAgICAgICAgPFNwZWNpYWxDYXJkXG4gICAgICAgICAgICBpY29uMT17PEltZyBzcmM9Jy9mbGFncy8xLnN2ZycgaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAyLjVyZW0pJ319IGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICBpY29uMj17PEltZyBzcmM9Jy9mbGFncy8xXzIuc3ZnJyBodG1sSGVpZ2h0PScxMDAlJyBodG1sV2lkdGg9JzEwMCUnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSd9fSBhbHQ9J2ljb24nIC8+fVxuICAgICAgICAgICAgdGl0bGU9e3QoJ2ZsYWctdGl0bGUtLW9wZXJhdGlvbmFsLWVudmlyb25tZW50Jyl9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZmxhZy1kZXNjcmlwdGlvbi0tb3BlcmF0aW9uYWwtZW52aXJvbm1lbnQnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBhbGlnbj17e3NtOiAnY2VudGVyJywgbGc6ICdqdXN0aWZ5J319IGFzPSdkaXYnIHdpZHRoPScxMDAlJz5cbiAgICAgICAgICB7dCgnZmxhZy1hcnRpY2xlLS1vcGVyYXRpb25hbC1lbnZpcm9ubWVudCcpfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0dyaWRDYXJkPlxuXG4gICAgICA8R3JpZENhcmQgYWxpZ25JdGVtPSdmbGV4LXN0YXJ0Jz5cbiAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBhbGlnbj17e3NtOiAnY2VudGVyJywgbGc6ICdqdXN0aWZ5J319PlxuICAgICAgICAgIHt0KCdmbGFnLWFydGljbGUtLW5ldy1wcm9ncmFtbWluZy1wYXJhZGlnbScpfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggdz0nMjByZW0nIG1heFc9JzIzcmVtJz5cbiAgICAgICAgICA8U3BlY2lhbENhcmRcbiAgICAgICAgICAgIGljb24xPXs8SW1nIHNyYz0nL2ZsYWdzLzMuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAycmVtKSd9fSBodG1sV2lkdGg9JzEwMCUnICBodG1sSGVpZ2h0PScxMDAlJyBhbHQ9J2ljb24nIC8+fVxuICAgICAgICAgICAgaWNvbjI9ezxJbWcgc3JjPScvZmxhZ3MvM18yLnN2Zycgc3g9e3t0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ319IGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICB0aXRsZT17dCgnZmxhZy10aXRsZS0tbmV3LXByb2dyYW1taW5nLXBhcmFkaWdtJyl9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZmxhZy1kZXNjcmlwdGlvbi0tbmV3LXByb2dyYW1taW5nLXBhcmFkaWdtJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0dyaWRDYXJkPlxuXG4gICAgICA8R3JpZENhcmQgY29sdW1ucz0nbWF4LWNvbnRlbnQgMWZyJyBkaXJlY3Rpb249J2NvbHVtbicgYWxpZ25JdGVtPSdmbGV4LXN0YXJ0Jz5cbiAgICAgICAgPEJveCB3PScyMHJlbScgbWF4Vz0nMjNyZW0nPlxuICAgICAgICAgIDxTcGVjaWFsQ2FyZFxuICAgICAgICAgICAgaWNvbjE9ezxJbWcgc3JjPScvZmxhZ3MvMi5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDJyZW0pJ319IGFsdD0naWNvbicgaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyAvPn1cbiAgICAgICAgICAgIGljb24yPXs8SW1nIHNyYz0nL2ZsYWdzLzJfMi5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSd9fSBhbHQ9J2ljb24nIGh0bWxIZWlnaHQ9JzEwMCUnIGh0bWxXaWR0aD0nMTAwJScgLz59XG4gICAgICAgICAgICB0aXRsZT17dCgnZmxhZy10aXRsZS0tYWxsLWxhbmd1YWdlcycpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2ZsYWctZGVzY3JpcHRpb24tLWFsbC1sYW5ndWFnZXMnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBhbGlnbj17e3NtOiAnY2VudGVyJywgbGc6ICdqdXN0aWZ5J319PlxuICAgICAgICAgIHt0KCdmbGFnLWFydGljbGUtLWFsbC1sYW5ndWFnZXMnKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9HcmlkQ2FyZD5cblxuICAgICAgPEdyaWRDYXJkIGFsaWduSXRlbT0nY2VudGVyJz5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nIGFsaWduPXt7c206ICdjZW50ZXInLCBsZzogJ2p1c3RpZnknfX0+XG4gICAgICAgICAgICB7dCgnZmxhZy1hcnRpY2xlLS1zZW1hbnRpYy1zeXN0ZW0nKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPENlbnRlciBweT0nMnJlbSc+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPENvZGUgdmFyaWFudD0nc29saWQnIGNvbG9yU2NoZW1lPSd0cmFuc3BhcmVudERhcmsnIHNpemU9J2Z1bGwnIHN4PXt7Ym9yZGVyUmFkaXVzOiAnMC4xNzVyZW0nLCBwYWRkaW5nOiAnMXJlbScsIGZvbnRTaXplOiAnMXJlbSd9fT5cbiAgICAgICAgICAgICAge2B7XG4gIGNhbih3aGVyZToge1xuICAgIG9iamVjdF9pZDogeyBfZXE6IDUgfSxcbiAgICBzdWJqZWN0X2lkOiB7IF9lcTogMTY1IH0sXG4gICAgYWN0aW9uX2lkOiB7IF9lcTogMjggfSxcbiAgfSkge1xuICAgIHJ1bGVfaWRcbiAgfVxufWB9XG4gICAgICAgICAgICA8L0NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggdz0nMjByZW0nIG1heFc9JzIzcmVtJz5cbiAgICAgICAgICA8U3BlY2lhbENhcmRcbiAgICAgICAgICAgIGljb24xPXs8SW1nIHNyYz0nL2ZsYWdzLzQuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAycmVtKSd9fSBhbHQ9J2ljb24nIGh0bWxIZWlnaHQ9JzEwMCUnIGh0bWxXaWR0aD0nMTAwJScgLz59XG4gICAgICAgICAgICBpY29uMj17PEltZyBzcmM9Jy9mbGFncy80XzIuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknfX0gaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyBhbHQ9J2ljb24nIC8+fVxuICAgICAgICAgICAgdGl0bGU9e3QoJ2ZsYWctdGl0bGUtLXNlbWFudGljLXN5c3RlbScpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2ZsYWctZGVzY3JpcHRpb24tLXNlbWFudGljLXN5c3RlbScpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICBcbiAgICAgIDwvR3JpZENhcmQ+XG4gICAgICBcbiAgICA8L1ZTdGFjaz5cbiAgKVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/special-cards-text.tsx\n");

/***/ })

})