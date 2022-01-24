webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/podcast/podcast-source.tsx":
/*!********************************************!*\
  !*** ./imports/podcast/podcast-source.tsx ***!
  \********************************************/
/*! exports provided: PodcastSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PodcastSource\", function() { return PodcastSource; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework */ \"./imports/framework.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/podcast/podcast-source.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_framework__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    containerPodcastSource: {\n      boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',\n      background: '#a8e3fd7a',\n      display: 'flex',\n      flexDirection: 'column',\n      position: 'absolute',\n      top: 0\n    },\n    sourcePodcastBlock: {\n      display: 'flex',\n      flexDirection: 'row'\n    },\n    logoSourcePodcast: {\n      display: 'block',\n      width: '100%'\n    }\n  };\n});\nvar PodcastSource = function PodcastSource(_ref) {\n  _s();\n\n  var switcher = _ref.switcher,\n      links = _ref.card.links;\n  var classes = useStyles();\n  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useTransition\"])(!switcher, {\n    initial: {\n      transform: \"translateY(0%)\"\n    },\n    enter: {\n      transform: \"translateY(0%)\"\n    },\n    leave: {\n      transform: \"translateY(-100%)\"\n    },\n    reverse: switcher,\n    trail: 2000,\n    expires: false,\n    config: {\n      mass: 1.7,\n      tension: 65,\n      friction: 25\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"a\"].div, {\n    className: classes.containerPodcastSource,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n      children: links.map(function (s) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n          className: classes.sourcePodcastBlock,\n          button: true,\n          alignItems: \"center\",\n          component: \"a\",\n          href: s.href,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"ListItemAvatar\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              style: {\n                overflow: 'hidden',\n                width: '2rem',\n                height: '2rem'\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: s.provider.icon,\n                alt: s.provider.alt,\n                className: classes.logoSourcePodcast\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"ListItemText\"], {\n            primary: s.provider.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)]\n        }, s.provider.alt, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(PodcastSource, \"8HSvRmi6gLZmdbIfrhsF3QFnIYc=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useTransition\"]];\n});\n\n_c = PodcastSource;\n\nvar _c;\n\n$RefreshReg$(_c, \"PodcastSource\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9wb2RjYXN0L3BvZGNhc3Qtc291cmNlLnRzeD84MjIxIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lclBvZGNhc3RTb3VyY2UiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwb3NpdGlvbiIsInRvcCIsInNvdXJjZVBvZGNhc3RCbG9jayIsImxvZ29Tb3VyY2VQb2RjYXN0Iiwid2lkdGgiLCJQb2RjYXN0U291cmNlIiwic3dpdGNoZXIiLCJsaW5rcyIsImNhcmQiLCJjbGFzc2VzIiwidHJhbnNpdGlvbnMiLCJ1c2VUcmFuc2l0aW9uIiwiaW5pdGlhbCIsInRyYW5zZm9ybSIsImVudGVyIiwibGVhdmUiLCJyZXZlcnNlIiwidHJhaWwiLCJleHBpcmVzIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIm1hcCIsInMiLCJocmVmIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJwcm92aWRlciIsImljb24iLCJhbHQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDZEQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLDBCQUFzQixFQUFFO0FBQ3RCQyxlQUFTLEVBQUUsK0dBRFc7QUFFdEJDLGdCQUFVLEVBQUUsV0FGVTtBQUd0QkMsYUFBTyxFQUFFLE1BSGE7QUFJdEJDLG1CQUFhLEVBQUUsUUFKTztBQUt0QkMsY0FBUSxFQUFFLFVBTFk7QUFNdEJDLFNBQUcsRUFBRTtBQU5pQixLQURhO0FBU3JDQyxzQkFBa0IsRUFBRTtBQUNsQkosYUFBTyxFQUFFLE1BRFM7QUFFbEJDLG1CQUFhLEVBQUU7QUFGRyxLQVRpQjtBQWFyQ0kscUJBQWlCLEVBQUU7QUFDakJMLGFBQU8sRUFBRSxPQURRO0FBRWpCTSxXQUFLLEVBQUU7QUFGVTtBQWJrQixHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQW1CTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BTXZCO0FBQUE7O0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSUMsS0FJSixRQUpKQyxJQUlJLENBSklELEtBSUo7QUFDSixNQUFNRSxPQUFPLEdBQUdqQixTQUFTLEVBQXpCO0FBR0EsTUFBTWtCLFdBQVcsR0FBR0Msa0VBQWEsQ0FBQyxDQUFDTCxRQUFGLEVBQVk7QUFDM0NNLFdBQU8sRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQURrQztBQUUzQ0MsU0FBSyxFQUFFO0FBQUVELGVBQVMsRUFBRTtBQUFiLEtBRm9DO0FBRzNDRSxTQUFLLEVBQUU7QUFBRUYsZUFBUyxFQUFFO0FBQWIsS0FIb0M7QUFJM0NHLFdBQU8sRUFBRVYsUUFKa0M7QUFLM0NXLFNBQUssRUFBRSxJQUxvQztBQU0zQ0MsV0FBTyxFQUFFLEtBTmtDO0FBTzNDQyxVQUFNLEVBQUU7QUFBRUMsVUFBSSxFQUFFLEdBQVI7QUFBYUMsYUFBTyxFQUFFLEVBQXRCO0FBQTBCQyxjQUFRLEVBQUU7QUFBcEM7QUFQbUMsR0FBWixDQUFqQztBQVVBLHNCQUFPLHFFQUFDLDhDQUFELENBQUcsR0FBSDtBQUFPLGFBQVMsRUFBRWIsT0FBTyxDQUFDZCxzQkFBMUI7QUFBQSwyQkFDSCxxRUFBQywrQ0FBRDtBQUFBLGdCQUNHWSxLQUFLLENBQUNnQixHQUFOLENBQVUsVUFBQUMsQ0FBQztBQUFBLDRCQUNWLHFFQUFDLG1EQUFEO0FBQStCLG1CQUFTLEVBQUVmLE9BQU8sQ0FBQ1Asa0JBQWxEO0FBQXNFLGdCQUFNLE1BQTVFO0FBQTZFLG9CQUFVLEVBQUMsUUFBeEY7QUFBaUcsbUJBQVMsRUFBQyxHQUEzRztBQUErRyxjQUFJLEVBQUVzQixDQUFDLENBQUNDLElBQXZIO0FBQUEsa0NBQ0UscUVBQUMseURBQUQ7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUU7QUFBQ0Msd0JBQVEsRUFBRSxRQUFYO0FBQXFCdEIscUJBQUssRUFBRSxNQUE1QjtBQUFvQ3VCLHNCQUFNLEVBQUU7QUFBNUMsZUFBWjtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBRUgsQ0FBQyxDQUFDSSxRQUFGLENBQVdDLElBQXJCO0FBQTJCLG1CQUFHLEVBQUVMLENBQUMsQ0FBQ0ksUUFBRixDQUFXRSxHQUEzQztBQUFnRCx5QkFBUyxFQUFFckIsT0FBTyxDQUFDTjtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSxxRUFBQyx1REFBRDtBQUFjLG1CQUFPLEVBQUVxQixDQUFDLENBQUNJLFFBQUYsQ0FBV0c7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBLFdBQWVQLENBQUMsQ0FBQ0ksUUFBRixDQUFXRSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFlRCxDQW5DTTs7R0FBTXpCLGE7VUFPS2IsUyxFQUdJbUIsMEQ7OztLQVZUTixhIiwiZmlsZSI6Ii4vaW1wb3J0cy9wb2RjYXN0L3BvZGNhc3Qtc291cmNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUF2YXRhciwgQXZhdGFyLCBMaXN0SXRlbVRleHQgfSBmcm9tICcuLi9mcmFtZXdvcmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElDYXJkIH0gZnJvbSAnLi4vLi4vcGFnZXMvbmV3JztcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24sIGEgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyUG9kY2FzdFNvdXJjZToge1xuICAgIGJveFNoYWRvdzogJzAgMCAxcHggMXB4ICMzOTNkNDAsIDAgMCAxcHggMnB4IHJnYigwIDAgMCAvIDE2JSksIDAgMCAycHggM3B4IHJnYigwIDAgMCAvIDE0JSksIDAgMCA0cHggNXB4IHJnYigwIDAgMCAvIDEyJSknLFxuICAgIGJhY2tncm91bmQ6ICcjYThlM2ZkN2EnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gIH0sXG4gIHNvdXJjZVBvZGNhc3RCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbiAgbG9nb1NvdXJjZVBvZGNhc3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBQb2RjYXN0U291cmNlID0gKHtcbiAgc3dpdGNoZXIsXG4gIGNhcmQ6IHsgbGlua3MgfSxcbn06e1xuICBzd2l0Y2hlcj86IGJvb2xlYW47XG4gIGNhcmQ6IElDYXJkO1xufSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblxuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oIXN3aXRjaGVyLCB7XG4gICAgaW5pdGlhbDogeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwJSlcIiB9LFxuICAgIGVudGVyOiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDAlKVwiIH0sXG4gICAgbGVhdmU6IHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIgfSxcbiAgICByZXZlcnNlOiBzd2l0Y2hlcixcbiAgICB0cmFpbDogMjAwMCxcbiAgICBleHBpcmVzOiBmYWxzZSxcbiAgICBjb25maWc6IHsgbWFzczogMS43LCB0ZW5zaW9uOiA2NSwgZnJpY3Rpb246IDI1IH0sXG4gIH0pXG5cbiAgcmV0dXJuKDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyUG9kY2FzdFNvdXJjZX0+XG4gICAgICA8TGlzdD5cbiAgICAgICAge2xpbmtzLm1hcChzID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtzLnByb3ZpZGVyLmFsdH0gY2xhc3NOYW1lPXtjbGFzc2VzLnNvdXJjZVBvZGNhc3RCbG9ja30gYnV0dG9uIGFsaWduSXRlbXM9J2NlbnRlcicgY29tcG9uZW50PSdhJyBocmVmPXtzLmhyZWZ9PlxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3ZlcmZsb3c6ICdoaWRkZW4nLCB3aWR0aDogJzJyZW0nLCBoZWlnaHQ6ICcycmVtJ319PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzLnByb3ZpZGVyLmljb259IGFsdD17cy5wcm92aWRlci5hbHR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvU291cmNlUG9kY2FzdH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtzLnByb3ZpZGVyLnRpdGxlfSAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgIDwvYS5kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/podcast/podcast-source.tsx\n");

/***/ })

})