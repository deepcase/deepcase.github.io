webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/talks-form.tsx":
/*!********************************!*\
  !*** ./imports/talks-form.tsx ***!
  \********************************/
/*! exports provided: TalksForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TalksForm\", function() { return TalksForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _imports_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imports/framework */ \"./imports/framework.tsx\");\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space */ \"./imports/space.tsx\");\n/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./headers */ \"./imports/headers/index.tsx\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/talks-form.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar titleModal = {\n  '&:first-letter': {\n    textTransform: 'capitalize'\n  }\n};\nvar discordButton = {\n  width: '100%',\n  background: '#7289da',\n  borderRadius: 5,\n  padding: '1rem 1.6rem'\n};\nvar hoverSocialIcon = {\n  transition: 'all 1s linear',\n  transform: 'scale(1)',\n  '&:hover': {\n    transition: 'all 1s linear',\n    transform: 'scale(1.2)'\n  }\n};\nvar TalksForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var _ref$portalOpen = _ref.portalOpen,\n      portalOpen = _ref$portalOpen === void 0 ? false : _ref$portalOpen,\n      onClosePortal = _ref.onClosePortal;\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    \"aria-modal\": true,\n    \"aria-labelledby\": t('talks-form-aria-label'),\n    \"aria-describedby\": t('talks-form-aria-label'),\n    isCentered: true,\n    size: \"xl\",\n    blockScrollOnMount: false,\n    isOpen: portalOpen,\n    onClose: onClosePortal,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"ModalOverlay\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"ModalContent\"], {\n      sx: {\n        background: 'dark'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"ModalBody\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_headers__WEBPACK_IMPORTED_MODULE_5__[\"H1\"], {\n          sx: titleModal,\n          align: \"center\",\n          children: t('talks-form-write-to-us')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_space__WEBPACK_IMPORTED_MODULE_4__[\"Space\"], {\n          unit: 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Wrap\"], {\n          spacing: \"2rem\",\n          justify: \"center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"100%\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n              as: \"a\",\n              size: \"lg\",\n              href: \"https://discord.gg/RD8wFKtujH\",\n              sx: discordButton,\n              \"aria-label\": \"discord\",\n              variant: \"unstyled\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n                  src: \"/discord.svg\",\n                  alt: \"Discord\",\n                  htmlWidth: \"50%\",\n                  htmlHeight: \"100%\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"48px\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n              isRound: true,\n              size: \"lg\",\n              as: \"a\",\n              href: \"https://www.youtube.com/channel/UCWn8rWuwZ4ISFVNTgy0GEow/featured\",\n              \"aria-label\": \"you tube\",\n              variant: \"unstyled\",\n              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n                src: \"/source/youtube.png\",\n                alt: \"YouTube\",\n                htmlWidth: \"100%\",\n                htmlHeight: \"100%\",\n                sx: hoverSocialIcon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"48px\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n              isRound: true,\n              size: \"lg\",\n              as: \"a\",\n              href: \"https://www.facebook.com/DeepFoundation-101491865581762\",\n              \"aria-label\": \"facebook\",\n              variant: \"unstyled\",\n              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n                src: \"/fb.png\",\n                alt: \"Facebook\",\n                htmlWidth: \"100%\",\n                htmlHeight: \"100%\",\n                sx: hoverSocialIcon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"48px\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n              isRound: true,\n              size: \"lg\",\n              as: \"a\",\n              href: \"https://vk.com/deep.foundation\",\n              \"aria-label\": \"vkontakte\",\n              variant: \"unstyled\",\n              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n                src: \"/vk.png\",\n                alt: \"VKontakte\",\n                htmlWidth: \"100%\",\n                htmlHeight: \"100%\",\n                sx: hoverSocialIcon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"48px\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n              isRound: true,\n              size: \"lg\",\n              as: \"a\",\n              href: \"https://github.com/deep-foundation\",\n              \"aria-label\": \"git hub\",\n              variant: \"unstyled\",\n              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n                src: \"/github.png\",\n                alt: \"GitHub\",\n                htmlWidth: \"100%\",\n                htmlHeight: \"100%\",\n                sx: hoverSocialIcon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"48px\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n              isRound: true,\n              size: \"lg\",\n              as: \"a\",\n              href: \"https://www.patreon.com/deepfoundation?fan_landing=true\",\n              \"aria-label\": \"patreon\",\n              variant: \"unstyled\",\n              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n                src: \"/pt.png\",\n                alt: \"Patreon\",\n                htmlWidth: \"100%\",\n                htmlHeight: \"100%\",\n                sx: hoverSocialIcon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 23\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"WrapItem\"], {\n            w: \"100%\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_imports_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n              fontSize: \"sm\",\n              align: \"center\",\n              dangerouslySetInnerHTML: {\n                __html: t('talks-form-how-to-get-on-our-podcast')\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 11\n  }, _this);\n}, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c2 = TalksForm;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TalksForm$React.memo\");\n$RefreshReg$(_c2, \"TalksForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy90YWxrcy1mb3JtLnRzeD81ZDNlIl0sIm5hbWVzIjpbInRpdGxlTW9kYWwiLCJ0ZXh0VHJhbnNmb3JtIiwiZGlzY29yZEJ1dHRvbiIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJob3ZlclNvY2lhbEljb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiVGFsa3NGb3JtIiwiUmVhY3QiLCJtZW1vIiwicG9ydGFsT3BlbiIsIm9uQ2xvc2VQb3J0YWwiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCLG9CQUFrQjtBQUNoQkMsaUJBQWEsRUFBRTtBQURDO0FBREQsQ0FBbkI7QUFLQSxJQUFNQyxhQUFhLEdBQUk7QUFDckJDLE9BQUssRUFBRSxNQURjO0FBRXJCQyxZQUFVLEVBQUUsU0FGUztBQUdyQkMsY0FBWSxFQUFFLENBSE87QUFJckJDLFNBQU8sRUFBRTtBQUpZLENBQXZCO0FBTUEsSUFBTUMsZUFBZSxHQUFFO0FBQ3JCQyxZQUFVLEVBQUUsZUFEUztBQUVyQkMsV0FBUyxFQUFFLFVBRlU7QUFHckIsYUFBVztBQUNURCxjQUFVLEVBQUUsZUFESDtBQUVUQyxhQUFTLEVBQUU7QUFGRjtBQUhVLENBQXZCO0FBU08sSUFBTUMsU0FBUyxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixTQUFXLGdCQU05QjtBQUFBOztBQUFBLDZCQUxKQyxVQUtJO0FBQUEsTUFMSkEsVUFLSSxnQ0FMUyxLQUtUO0FBQUEsTUFKSkMsYUFJSSxRQUpKQSxhQUlJOztBQUFBLHdCQUNVQyxvRUFBYyxFQUR4QjtBQUFBLE1BQ0lDLENBREosbUJBQ0lBLENBREo7O0FBR0osc0JBQVEscUVBQUMsd0RBQUQ7QUFDSixrQkFBWSxJQURSO0FBRUosdUJBQWlC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QkFBVyxTQUxiO0FBTUUscUJBQU8sRUFBQyxVQU5WO0FBT0Usa0JBQUksZUFBRSxxRUFBQyxzREFBRDtBQUFLLG1CQUFHLEVBQUMsU0FBVDtBQUFtQixtQkFBRyxFQUFDLFNBQXZCO0FBQWlDLHlCQUFTLEVBQUMsTUFBM0M7QUFBa0QsMEJBQVUsRUFBQyxNQUE3RDtBQUFvRSxrQkFBRSxFQUFFQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkRGLGVBaUVFLHFFQUFDLDJEQUFEO0FBQVUsYUFBQyxFQUFDLE1BQVo7QUFBQSxtQ0FDRSxxRUFBQyx1REFBRDtBQUFNLHNCQUFRLEVBQUMsSUFBZjtBQUFvQixtQkFBSyxFQUFDLFFBQTFCO0FBQW1DLHFDQUF1QixFQUFFO0FBQUVVLHNCQUFNLEVBQUVELENBQUMsQ0FBQyxzQ0FBRDtBQUFYO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBd0ZELENBakd3QjtBQUFBLFVBT1RELDREQVBTO0FBQUEsR0FBbEI7TUFBTUwsUyIsImZpbGUiOiIuL2ltcG9ydHMvdGFsa3MtZm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBIU3RhY2ssIEljb25CdXR0b24sIEltZywgTW9kYWwsIFRleHQsIE1vZGFsT3ZlcmxheSwgTW9kYWxDb250ZW50LCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBDZW50ZXIsIFdyYXAsIFdyYXBJdGVtLCBJbWFnZSB9IGZyb20gJy4uL2ltcG9ydHMvZnJhbWV3b3JrJztcbmltcG9ydCB7IFNwYWNlIH0gZnJvbSAnLi9zcGFjZSc7XG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vaGVhZGVycyc7XG5cblxuY29uc3QgdGl0bGVNb2RhbCA9IHtcbiAgJyY6Zmlyc3QtbGV0dGVyJzoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgfSxcbn07XG5jb25zdCBkaXNjb3JkQnV0dG9uID0gIHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgYmFja2dyb3VuZDogJyM3Mjg5ZGEnLFxuICBib3JkZXJSYWRpdXM6IDUsXG4gIHBhZGRpbmc6ICcxcmVtIDEuNnJlbScsXG59O1xuY29uc3QgaG92ZXJTb2NpYWxJY29uID17XG4gIHRyYW5zaXRpb246ICdhbGwgMXMgbGluZWFyJyxcbiAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAnJjpob3Zlcic6IHtcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDFzIGxpbmVhcicsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVGFsa3NGb3JtID0gUmVhY3QubWVtbygoe1xuICBwb3J0YWxPcGVuID0gZmFsc2UsIFxuICBvbkNsb3NlUG9ydGFsXG59OntcbiAgcG9ydGFsT3Blbj86IGJvb2xlYW47IFxuICBvbkNsb3NlUG9ydGFsOiAoKSA9PiBhbnk7XG59KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKDxNb2RhbFxuICAgICAgYXJpYS1tb2RhbD17dHJ1ZX1cbiAgICAgIGFyaWEtbGFiZWxsZWRieT17dCgndGFsa3MtZm9ybS1hcmlhLWxhYmVsJyl9XG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PXt0KCd0YWxrcy1mb3JtLWFyaWEtbGFiZWwnKX1cbiAgICAgIGlzQ2VudGVyZWRcbiAgICAgIHNpemU9J3hsJ1xuICAgICAgYmxvY2tTY3JvbGxPbk1vdW50PXtmYWxzZX0gXG4gICAgICBpc09wZW49e3BvcnRhbE9wZW59XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlUG9ydGFsfVxuICAgID5cbiAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgIDxNb2RhbENvbnRlbnQgc3g9e3tiYWNrZ3JvdW5kOiAnZGFyayd9fT5cbiAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICA8SDEgc3g9e3RpdGxlTW9kYWx9IGFsaWduPSdjZW50ZXInPnt0KCd0YWxrcy1mb3JtLXdyaXRlLXRvLXVzJyl9PC9IMT5cbiAgICAgICAgICA8U3BhY2UgdW5pdD17MX0gLz5cbiAgICAgICAgICA8V3JhcCBzcGFjaW5nPScycmVtJyBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgPFdyYXBJdGVtIHc9JzEwMCUnPlxuICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIGFzPSdhJyBcbiAgICAgICAgICAgICAgICBzaXplPSdsZycgXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9kaXNjb3JkLmdnL1JEOHdGS3R1akgnIFxuICAgICAgICAgICAgICAgIHN4PXtkaXNjb3JkQnV0dG9ufSBcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdkaXNjb3JkJ1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3Vuc3R5bGVkJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPScvZGlzY29yZC5zdmcnIGFsdD0nRGlzY29yZCcgaHRtbFdpZHRoPSc1MCUnIGh0bWxIZWlnaHQ9JzEwMCUnIC8+XG4gICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICAgICAgIDxXcmFwSXRlbSB3PSc0OHB4Jz5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBpc1JvdW5kXG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnIFxuICAgICAgICAgICAgICAgIGFzPSdhJyBcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDV244cld1d1o0SVNGVk5UZ3kwR0Vvdy9mZWF0dXJlZCcgXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0neW91IHR1YmUnIFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3Vuc3R5bGVkJ1xuICAgICAgICAgICAgICAgIGljb249ezxJbWcgc3JjPScvc291cmNlL3lvdXR1YmUucG5nJyBhbHQ9J1lvdVR1YmUnIGh0bWxXaWR0aD0nMTAwJScgaHRtbEhlaWdodD0nMTAwJScgc3g9e2hvdmVyU29jaWFsSWNvbn0gLz59IC8+XG4gICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgPFdyYXBJdGVtIHc9JzQ4cHgnPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGlzUm91bmRcbiAgICAgICAgICAgICAgICBzaXplPSdsZycgXG4gICAgICAgICAgICAgICAgYXM9J2EnIFxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9EZWVwRm91bmRhdGlvbi0xMDE0OTE4NjU1ODE3NjInIFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2ZhY2Vib29rJyBcbiAgICAgICAgICAgICAgICB2YXJpYW50PSd1bnN0eWxlZCdcbiAgICAgICAgICAgICAgICBpY29uPXs8SW1nIHNyYz0nL2ZiLnBuZycgYWx0PSdGYWNlYm9vaycgaHRtbFdpZHRoPScxMDAlJyBodG1sSGVpZ2h0PScxMDAlJyBzeD17aG92ZXJTb2NpYWxJY29ufSAvPiB9IC8+XG4gICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgPFdyYXBJdGVtIHc9JzQ4cHgnPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGlzUm91bmRcbiAgICAgICAgICAgICAgICBzaXplPSdsZycgXG4gICAgICAgICAgICAgICAgYXM9J2EnIFxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdmsuY29tL2RlZXAuZm91bmRhdGlvbicgXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ndmtvbnRha3RlJyBcbiAgICAgICAgICAgICAgICB2YXJpYW50PSd1bnN0eWxlZCdcbiAgICAgICAgICAgICAgICBpY29uPXs8SW1nIHNyYz0nL3ZrLnBuZycgYWx0PSdWS29udGFrdGUnIGh0bWxXaWR0aD0nMTAwJScgaHRtbEhlaWdodD0nMTAwJScgc3g9e2hvdmVyU29jaWFsSWNvbn0gLz59IC8+XG4gICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgPFdyYXBJdGVtIHc9JzQ4cHgnPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGlzUm91bmRcbiAgICAgICAgICAgICAgICBzaXplPSdsZycgXG4gICAgICAgICAgICAgICAgYXM9J2EnIFxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9kZWVwLWZvdW5kYXRpb24nIFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2dpdCBodWInXG4gICAgICAgICAgICAgICAgdmFyaWFudD0ndW5zdHlsZWQnXG4gICAgICAgICAgICAgICAgaWNvbj17PEltZyBzcmM9Jy9naXRodWIucG5nJyBhbHQ9J0dpdEh1YicgaHRtbFdpZHRoPScxMDAlJyBodG1sSGVpZ2h0PScxMDAlJyBzeD17aG92ZXJTb2NpYWxJY29ufSAvPn0gLz5cbiAgICAgICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICAgICAgICA8V3JhcEl0ZW0gdz0nNDhweCc+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgaXNSb3VuZFxuICAgICAgICAgICAgICAgIHNpemU9J2xnJyBcbiAgICAgICAgICAgICAgICBhcz0nYScgXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGF0cmVvbi5jb20vZGVlcGZvdW5kYXRpb24/ZmFuX2xhbmRpbmc9dHJ1ZScgXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ncGF0cmVvbicgXG4gICAgICAgICAgICAgICAgdmFyaWFudD0ndW5zdHlsZWQnXG4gICAgICAgICAgICAgICAgaWNvbj17PEltZyBzcmM9Jy9wdC5wbmcnIGFsdD0nUGF0cmVvbicgaHRtbFdpZHRoPScxMDAlJyBodG1sSGVpZ2h0PScxMDAlJyBzeD17aG92ZXJTb2NpYWxJY29ufSAvPn0gLz5cbiAgICAgICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICAgICAgICA8V3JhcEl0ZW0gdz0nMTAwJSc+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSdzbScgYWxpZ249J2NlbnRlcicgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0KCd0YWxrcy1mb3JtLWhvdy10by1nZXQtb24tb3VyLXBvZGNhc3QnKSB9fSAvPlxuICAgICAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICAgICA8L1dyYXA+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/talks-form.tsx\n");

/***/ })

})