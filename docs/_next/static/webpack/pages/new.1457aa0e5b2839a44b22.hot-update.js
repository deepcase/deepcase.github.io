webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '100%',\n      zIndex: 1\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])(function () {\n    return {\n      height: 'auto',\n      bg: '#00000030',\n      scale: 1\n    };\n  }),\n      _useSpring2 = Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSpring, 2),\n      _useSpring2$ = _useSpring2[0],\n      height = _useSpring2$.height,\n      bg = _useSpring2$.bg,\n      scale = _useSpring2$.scale,\n      api = _useSpring2[1];\n\n  console.log({\n    'scrollContainer': scrollContainer\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  if ((scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.pageYOffset) == 140) setScroll(!scrolled); // useEffect(() => {\n  //   const id = setInterval((scrollContainer) => {\n  //   }, 500)\n  //   return () => clearInterval(id);\n  // }, [scrolled])\n\n  console.log({\n    'window': window\n  });\n  console.log({\n    'pageYOffset': window.pageYOffset\n  });\n  api.start({\n    height: !scrolled ? '0px' : '100%',\n    scale: !scrolled ? 0.9 : 1,\n    bg: !scrolled ? '#000000' : '#00000030'\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n    className: classes.root,\n    style: {\n      height: height,\n      background: bg,\n      scale: scale\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"Xu3j7PN7eUXyero2x7vgbuXuds8=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInpJbmRleCIsImJveENvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b25zIiwibWFyZ2luUmlnaHQiLCJVcHBlck1lbnUiLCJzY3JvbGxDb250YWluZXIiLCJjbGFzc2VzIiwidXNlU3ByaW5nIiwiaGVpZ2h0IiwiYmciLCJzY2FsZSIsImFwaSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNjcm9sbGVkIiwic2V0U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJ3aW5kb3ciLCJzdGFydCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLFFBREw7QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSkMscUJBQWUsRUFBRSxXQUhiO0FBRzBCO0FBQzlCQyxZQUFNLEVBQUUsc0JBSko7QUFLSkMsY0FBUSxFQUFFLE9BTE47QUFNSkMsU0FBRyxFQUFFLENBTkQ7QUFNSUMsVUFBSSxFQUFFLENBTlY7QUFPSkMsV0FBSyxFQUFFLE1BUEg7QUFRSkMsWUFBTSxFQUFFO0FBUkosS0FEK0I7QUFXckNDLGdCQUFZLEVBQUU7QUFDWkMsYUFBTyxFQUFHLE1BREU7QUFFWkMsbUJBQWEsRUFBRSxLQUZIO0FBR1pDLG9CQUFjLEVBQUU7QUFISixLQVh1QjtBQWdCckNDLFdBQU8sRUFBRTtBQUNQ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cUVBQUMsZ0VBQUQ7QUFBUSxxQkFBSyxFQUFFO0FBQUNaLHVCQUFLLEVBQUU7QUFBUjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFlRCxDQXhDTTs7R0FBTWMsUztVQUNLbkIsUyxFQUNtQnNCLHNEOzs7S0FGeEJILFMiLCJmaWxlIjoiLi9pbXBvcnRzL3VwcGVyLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQmFyLCBCb3gsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBHaXRIdWIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhLCB1c2VTcHJpbmcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMXJlbSAwJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAzMCcsIC8vZGFya2VuKGNvcmVUaGVtZT8ucGFsZXR0ZT8uYmFja2dyb3VuZD8uZGVmYXVsdCwgMC4zKSxcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkICNmZmZmZmY0MCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLCBsZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgekluZGV4OiAxLFxuICB9LFxuICBib3hDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAgJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt7aGVpZ2h0LCBiZywgc2NhbGV9LCBhcGldID0gdXNlU3ByaW5nKCgpID0+ICh7XG4gICAgaGVpZ2h0OiAnYXV0bycsIFxuICAgIGJnOiAnIzAwMDAwMDMwJywgXG4gICAgc2NhbGU6IDEsXG4gIH0pKVxuICBcbiAgY29uc29sZS5sb2coeydzY3JvbGxDb250YWluZXInOiBzY3JvbGxDb250YWluZXJ9KTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGlmIChzY3JvbGxDb250YWluZXI/LnBhZ2VZT2Zmc2V0ID09IDE0MCkgc2V0U2Nyb2xsKCFzY3JvbGxlZCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoc2Nyb2xsQ29udGFpbmVyKSA9PiB7XG4gIC8vICAgfSwgNTAwKVxuICAvLyAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgLy8gfSwgW3Njcm9sbGVkXSlcbmNvbnNvbGUubG9nKHsnd2luZG93Jzogd2luZG93fSk7XG5jb25zb2xlLmxvZyh7J3BhZ2VZT2Zmc2V0Jzogd2luZG93LnBhZ2VZT2Zmc2V0fSk7XG4gIGFwaS5zdGFydCh7XG4gICAgaGVpZ2h0OiAhc2Nyb2xsZWQgPyAnMHB4JyA6ICcxMDAlJyxcbiAgICBzY2FsZTogIXNjcm9sbGVkID8gMC45IDogMSxcbiAgICBiZzogIXNjcm9sbGVkID8gJyMwMDAwMDAnIDogJyMwMDAwMDAzMCcsXG4gIH0pXG5cbiAgcmV0dXJuICg8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHN0eWxlPXt7aGVpZ2h0LCBiYWNrZ3JvdW5kOiBiZywgc2NhbGV9fT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J3JvdycganVzdGlmeT0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkRlZXAuRm91bmRhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPkRvY3M8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5UYWxrIHRvIHVzPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17J2EnfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RlZXBjYXNlL2RlZXBjYXNlXCI+PEdpdEh1YiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2EuZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})