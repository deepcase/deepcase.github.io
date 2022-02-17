webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/theme/build.tsx":
/*!*********************************!*\
  !*** ./imports/theme/build.tsx ***!
  \*********************************/
/*! exports provided: coreTheme, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coreTheme\", function() { return coreTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar temp = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({});\nvar coreTheme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({\n  config: {\n    cssVarPrefix: 'deep'\n  },\n  colors: {\n    dark: '#19202B',\n    light: '#EAEAEA',\n    second: {\n      100: '#c0e8f9',\n      500: '#00a9f3',\n      600: '#008fcc'\n    },\n    menuItem: {\n      100: '#19202b85',\n      200: '#19202bad'\n    }\n  },\n  fonts: {\n    body: \"'Inconsolata', monospace\",\n    heading: \"'Inconsolata', monospace\",\n    // body: \"Comfortaa, sans-serif\",\n    // heading: \"Comfortaa, sans-serif\",\n    mono: \"Menlo, monospace\"\n  },\n  fontSizes: {\n    xs: \"calc(0.75rem + 0.5vmax)\",\n    sm: 'calc(14px + 0.5vmax)',\n    //\"0.875rem\",\n    md: \"calc(1rem + 0.5vmax)\",\n    lg: \"calc(1.125rem + 0.5vmax)\",\n    xl: \"calc(1.25rem + 0.5vmax)\",\n    \"2xl\": \"1.5rem\",\n    \"3xl\": \"1.875rem\",\n    \"4xl\": \"2.25rem\",\n    \"5xl\": \"3rem\",\n    \"6xl\": \"3.75rem\",\n    \"7xl\": \"4.5rem\",\n    \"8xl\": \"6rem\",\n    \"9xl\": \"8rem\"\n  },\n  styles: {\n    global: {\n      html: {\n        height: '100%'\n      },\n      body: {\n        minHeight: '100%',\n        bg: '#19202B',\n        color: '#dfdfdf',\n        position: 'absolute',\n        top: 0,\n        bottom: 0,\n        right: 0,\n        left: 0\n      }\n    }\n  },\n  textStyles: {\n    h1: {\n      fontSize: 'calc(18px + 0.5vmax)',\n      fontWeight: 'semibold'\n    },\n    h2: {\n      fontSize: 'calc(16px + 0.5vmax)',\n      fontWeight: 'medium'\n    },\n    h5: {\n      fontSize: 'calc(18px + 0.5vmax)',\n      fontWeight: 'medium'\n    }\n  },\n  shadows: {\n    lg: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)'\n  },\n  radii: {\n    md: '0.175rem'\n  },\n  components: {\n    Button: {\n      baseStyle: {\n        lineHeight: 'base'\n      },\n      variants: {\n        outline: {\n          borderRadius: {\n            radii: {\n              md: '0.175rem'\n            }\n          }\n        },\n        ghost: {\n          color: '#EAEAEA',\n          _active: {\n            bg: 'none'\n          },\n          _hover: {\n            bg: 'initial'\n          }\n        },\n        solid: {\n          _focus: {\n            boxShadow: 'none'\n          }\n        },\n        unstyled: {\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          padding: '1rem 0'\n        }\n      },\n      colorScheme: {\n        second: '#00a9f3'\n      }\n    },\n    Link: {\n      baseStyle: {\n        fontWeight: 'semibold'\n      },\n      sizes: {\n        sm: {\n          h: '2rem',\n          fontSize: 'sm',\n          px: '0.75rem'\n        },\n        md: {\n          h: '2.5rem',\n          fontSize: 'md',\n          px: '1rem'\n        }\n      }\n    },\n    Modal: {\n      baseStyle: {\n        dialog: {\n          bg: Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__[\"mode\"])('#000', \"#000\"),\n          alignItems: 'center',\n          padding: '1rem 0.5rem',\n          marginLeft: '1rem',\n          marginRight: '1rem'\n        },\n        body: {\n          alignItems: 'center'\n        }\n      }\n    }\n  } // typography: {\n  //   fontFamily: ['Comfortaa', 'sans-serif'].join(','),\n  //   h1: {\n  //     fontSize: 'calc(32px + 0.5vmax)',\n  //     fontWeight: 700,\n  //   },\n  //   h2: {\n  //     fontSize: 'calc(26px + 0.5vmax)',\n  //     fontWeight: 700,\n  //     color: '#fff',\n  //   },\n  //   h3: {\n  //     fontSize: 'calc(24px + 0.5vmax)',\n  //     fontWeight: 600,\n  //   },\n  //   h4: {\n  //     fontSize: 'calc(22px + 0.5vmax)',\n  //     fontWeight: 500,\n  //   },\n  //   h5: {\n  //     fontSize: 'calc(18px + 0.5vmax)',\n  //     fontWeight: 500,\n  //   },\n  //   body1: {\n  //     fontSize: 'calc(16px + 0.5vmax)',\n  //     fontWeight: 300,\n  //     lineHeight: 'calc(1.1em + 0.5vmax)',\n  //   },\n  //   body2: {\n  //     fontSize: 'calc(14px + 0.5vmax)',\n  //     fontWeight: 300,\n  //     color: '#fff',\n  //     // lineHeight: 'calc(0.975em + 0.5vmax)',\n  //   },\n  //   caption:{\n  //     fontSize: 'calc(12px + 0.3vmax)',\n  //     lineHeight: 'calc(0.45em + 0.5vmax)',\n  //     textTransform: 'none',\n  //     color: '#fff',\n  //   },\n  //   overline: {\n  //     fontSize: 'calc(12px + 0.5vmax)',\n  //     lineHeight: 'calc(0.45em + 0.5vmax)',\n  //   }\n  // },\n  // palette: {\n  //   mode: 'dark',\n  //   background: {\n  //     default: '#19202B',\n  //     paper: '#00000030',\n  //     // @ts-ignore\n  //     dark: '#111720',\n  //   },\n  //   primary: temp.color.lightBlue,\n  //   secondary: temp.color.lightGreen,\n  //   text: {\n  //     primary: '#fff',\n  //   }\n  // },\n  // shape: {\n  //   borderRadius: 0,\n  // },\n\n});\nvar theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])(_objectSpread({}, coreTheme));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy90aGVtZS9idWlsZC50c3g/MGI3YyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZXh0ZW5kVGhlbWUiLCJjb3JlVGhlbWUiLCJjb25maWciLCJjc3NWYXJQcmVmaXgiLCJjb2xvcnMiLCJkYXJrIiwibGlnaHQiLCJzZWNvbmQiLCJtZW51SXRlbSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vIiwiZm9udFNpemVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInN0eWxlcyIsImdsb2JhbCIsImh0bWwiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJiZyIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJ0ZXh0U3R5bGVzIiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiIsImg1Iiwic2hhZG93cyIsInJhZGlpIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImxpbmVIZWlnaHQiLCJ2YXJpYW50cyIsIm91dGxpbmUiLCJib3JkZXJSYWRpdXMiLCJnaG9zdCIsIl9hY3RpdmUiLCJfaG92ZXIiLCJzb2xpZCIsIl9mb2N1cyIsImJveFNoYWRvdyIsInVuc3R5bGVkIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJjb2xvclNjaGVtZSIsIkxpbmsiLCJzaXplcyIsImgiLCJweCIsIk1vZGFsIiwiZGlhbG9nIiwibW9kZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUEsSUFBTUEsSUFBSSxHQUFHQyxvRUFBVyxDQUFDLEVBQUQsQ0FBeEI7QUFFTyxJQUFNQyxTQUFTLEdBQUdELG9FQUFXLENBQUM7QUFDbkNFLFFBQU0sRUFBRTtBQUNOQyxnQkFBWSxFQUFFO0FBRFIsR0FEMkI7QUFJbkNDLFFBQU0sRUFBRTtBQUNOQyxR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SUFGUjtBQUdGNEIsWUFBRSxFQUFFO0FBSEYsU0FEQztBQU1MN0MsVUFBRSxFQUFFO0FBQ0Y0QyxXQUFDLEVBQUUsUUFERDtBQUVGM0Isa0JBQVEsRUFBRSxJQUZSO0FBR0Y0QixZQUFFLEVBQUU7QUFIRjtBQU5DO0FBSkgsS0F0Q0k7QUF3RFZDLFNBQUssRUFBRTtBQUNMckIsZUFBUyxFQUFFO0FBRVRzQixjQUFNLEVBQUU7QUFDTnZDLFlBQUUsRUFBRXdDLG1FQUFJLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FERjtBQUVOVixvQkFBVSxFQUFFLFFBRk47QUFHTkUsaUJBQU8sRUFBRSxhQUhIO0FBSU5TLG9CQUFVLEVBQUUsTUFKTjtBQUtOQyxxQkFBVyxFQUFFO0FBTFAsU0FGQztBQVNUeEQsWUFBSSxFQUFFO0FBQ0o0QyxvQkFBVSxFQUFFO0FBRFI7QUFURztBQUROO0FBeERHLEdBOUV1QixDQXNKbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuTm1DLENBQUQsQ0FBN0I7QUFxTkEsSUFBTWEsS0FBSyxHQUFHbkUsb0VBQVcsbUJBQzNCQyxTQUQyQixFQUF6QiIsImZpbGUiOiIuL2ltcG9ydHMvdGhlbWUvYnVpbGQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IG1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiO1xuXG5cblxuY29uc3QgdGVtcCA9IGV4dGVuZFRoZW1lKHt9KTtcblxuZXhwb3J0IGNvbnN0IGNvcmVUaGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29uZmlnOiB7XG4gICAgY3NzVmFyUHJlZml4OiAnZGVlcCcsXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIGRhcms6ICcjMTkyMDJCJyxcbiAgICBsaWdodDogJyNFQUVBRUEnLFxuICAgIHNlY29uZDoge1xuICAgICAgMTAwOiAnI2MwZThmOScsXG4gICAgICA1MDA6ICcjMDBhOWYzJyxcbiAgICAgIDYwMDogJyMwMDhmY2MnLFxuICAgIH0sIFxuICAgIG1lbnVJdGVtOiB7XG4gICAgICAxMDA6ICcjMTkyMDJiODUnLFxuICAgICAgMjAwOiAnIzE5MjAyYmFkJyxcbiAgICB9XG5cbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBcIidJbmNvbnNvbGF0YScsIG1vbm9zcGFjZVwiLFxuICAgIGhlYWRpbmc6IFwiJ0luY29uc29sYXRhJywgbW9ub3NwYWNlXCIsXG4gICAgLy8gYm9keTogXCJDb21mb3J0YWEsIHNhbnMtc2VyaWZcIixcbiAgICAvLyBoZWFkaW5nOiBcIkNvbWZvcnRhYSwgc2Fucy1zZXJpZlwiLFxuICAgIG1vbm86IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxuICB9LFxuICBmb250U2l6ZXM6IHtcbiAgICB4czogXCJjYWxjKDAuNzVyZW0gKyAwLjV2bWF4KVwiLFxuICAgIHNtOiAnY2FsYygxNHB4ICsgMC41dm1heCknLCAvL1wiMC44NzVyZW1cIixcbiAgICBtZDogXCJjYWxjKDFyZW0gKyAwLjV2bWF4KVwiLFxuICAgIGxnOiBcImNhbGMoMS4xMjVyZW0gKyAwLjV2bWF4KVwiLFxuICAgIHhsOiBcImNhbGMoMS4yNXJlbSArIDAuNXZtYXgpXCIsXG4gICAgXCIyeGxcIjogXCIxLjVyZW1cIixcbiAgICBcIjN4bFwiOiBcIjEuODc1cmVtXCIsXG4gICAgXCI0eGxcIjogXCIyLjI1cmVtXCIsXG4gICAgXCI1eGxcIjogXCIzcmVtXCIsXG4gICAgXCI2eGxcIjogXCIzLjc1cmVtXCIsXG4gICAgXCI3eGxcIjogXCI0LjVyZW1cIixcbiAgICBcIjh4bFwiOiBcIjZyZW1cIixcbiAgICBcIjl4bFwiOiBcIjhyZW1cIixcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBodG1sOiB7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJnOiAnIzE5MjAyQicsXG4gICAgICAgIGNvbG9yOiAnI2RmZGZkZicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBcbiAgICAgICAgdG9wOiAwLCBcbiAgICAgICAgYm90dG9tOiAwLCBcbiAgICAgICAgcmlnaHQ6IDAsIFxuICAgICAgICBsZWZ0OiAwLFxuXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0ZXh0U3R5bGVzOiB7XG4gICAgaDE6IHtcbiAgICAgIGZvbnRTaXplOiAnY2FsYygxOHB4ICsgMC41dm1heCknLFxuICAgICAgZm9udFdlaWdodDogJ3NlbWlib2xkJyxcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogJ2NhbGMoMTZweCArIDAuNXZtYXgpJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdtZWRpdW0nLFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRTaXplOiAnY2FsYygxOHB4ICsgMC41dm1heCknLFxuICAgICAgZm9udFdlaWdodDogJ21lZGl1bScsXG4gICAgfSxcbiAgfSxcbiAgc2hhZG93czoge1xuICAgIGxnOiAnMHB4IDBweCAycHggNHB4IHJnYmEoMTQzLDE0MywxNDMsMC4xMyksIDBweCAwcHggNHB4IDZweCByZ2JhKDE0MywxNDMsMTQzLDAuMjApJyxcbiAgfSxcbiAgcmFkaWk6IHtcbiAgICBtZDogJzAuMTc1cmVtJyxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEJ1dHRvbjoge1xuICAgICAgYmFzZVN0eWxlOiB7XG4gICAgICAgIGxpbmVIZWlnaHQ6ICdiYXNlJyxcbiAgICAgIH0sXG4gICAgICB2YXJpYW50czoge1xuICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgICAgICByYWRpaToge21kOiAnMC4xNzVyZW0nfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBnaG9zdDoge1xuICAgICAgICAgIGNvbG9yOiAnI0VBRUFFQScsXG4gICAgICAgICAgX2FjdGl2ZToge1xuICAgICAgICAgICAgYmc6ICdub25lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9ob3Zlcjoge1xuICAgICAgICAgICAgYmc6ICdpbml0aWFsJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzb2xpZDoge1xuICAgICAgICAgIF9mb2N1czoge1xuICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1bnN0eWxlZDoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgcGFkZGluZzogJzFyZW0gMCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29sb3JTY2hlbWU6IHtcbiAgICAgICAgc2Vjb25kOiAnIzAwYTlmMycsXG4gICAgICB9LFxuICAgICAgXG4gICAgfSxcblxuICAgIExpbms6IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLFxuICAgICAgfSxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIHNtOiB7XG4gICAgICAgICAgaDogJzJyZW0nLFxuICAgICAgICAgIGZvbnRTaXplOiAnc20nLFxuICAgICAgICAgIHB4OiAnMC43NXJlbScsXG4gICAgICAgIH0sXG4gICAgICAgIG1kOiB7XG4gICAgICAgICAgaDogJzIuNXJlbScsXG4gICAgICAgICAgZm9udFNpemU6ICdtZCcsXG4gICAgICAgICAgcHg6ICcxcmVtJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIE1vZGFsOiB7XG4gICAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgXG4gICAgICAgIGRpYWxvZzoge1xuICAgICAgICAgIGJnOiBtb2RlKCcjMDAwJywgXCIjMDAwXCIpLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIHBhZGRpbmc6ICcxcmVtIDAuNXJlbScsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzFyZW0nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMXJlbScsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9XG4gIC8vIHR5cG9ncmFwaHk6IHtcbiAgLy8gICBmb250RmFtaWx5OiBbJ0NvbWZvcnRhYScsICdzYW5zLXNlcmlmJ10uam9pbignLCcpLFxuICAvLyAgIGgxOiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMzJweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgLy8gICB9LFxuICAvLyAgIGgyOiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMjZweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgLy8gICAgIGNvbG9yOiAnI2ZmZicsXG4gIC8vICAgfSxcbiAgLy8gICBoMzoge1xuICAvLyAgICAgZm9udFNpemU6ICdjYWxjKDI0cHggKyAwLjV2bWF4KScsXG4gIC8vICAgICBmb250V2VpZ2h0OiA2MDAsXG4gIC8vICAgfSxcbiAgLy8gICBoNDoge1xuICAvLyAgICAgZm9udFNpemU6ICdjYWxjKDIycHggKyAwLjV2bWF4KScsXG4gIC8vICAgICBmb250V2VpZ2h0OiA1MDAsXG4gIC8vICAgfSxcbiAgLy8gICBoNToge1xuICAvLyAgICAgZm9udFNpemU6ICdjYWxjKDE4cHggKyAwLjV2bWF4KScsXG4gIC8vICAgICBmb250V2VpZ2h0OiA1MDAsXG4gIC8vICAgfSxcbiAgLy8gICBib2R5MToge1xuICAvLyAgICAgZm9udFNpemU6ICdjYWxjKDE2cHggKyAwLjV2bWF4KScsXG4gIC8vICAgICBmb250V2VpZ2h0OiAzMDAsXG4gIC8vICAgICBsaW5lSGVpZ2h0OiAnY2FsYygxLjFlbSArIDAuNXZtYXgpJyxcbiAgLy8gICB9LFxuICAvLyAgIGJvZHkyOiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMTRweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgLy8gICAgIGNvbG9yOiAnI2ZmZicsXG4gIC8vICAgICAvLyBsaW5lSGVpZ2h0OiAnY2FsYygwLjk3NWVtICsgMC41dm1heCknLFxuICAvLyAgIH0sXG4gIC8vICAgY2FwdGlvbjp7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMTJweCArIDAuM3ZtYXgpJyxcbiAgLy8gICAgIGxpbmVIZWlnaHQ6ICdjYWxjKDAuNDVlbSArIDAuNXZtYXgpJyxcbiAgLy8gICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgLy8gICAgIGNvbG9yOiAnI2ZmZicsXG4gIC8vICAgfSxcbiAgLy8gICBvdmVybGluZToge1xuICAvLyAgICAgZm9udFNpemU6ICdjYWxjKDEycHggKyAwLjV2bWF4KScsXG4gIC8vICAgICBsaW5lSGVpZ2h0OiAnY2FsYygwLjQ1ZW0gKyAwLjV2bWF4KScsXG4gIC8vICAgfVxuICAvLyB9LFxuICAvLyBwYWxldHRlOiB7XG4gIC8vICAgbW9kZTogJ2RhcmsnLFxuICAvLyAgIGJhY2tncm91bmQ6IHtcbiAgLy8gICAgIGRlZmF1bHQ6ICcjMTkyMDJCJyxcbiAgLy8gICAgIHBhcGVyOiAnIzAwMDAwMDMwJyxcbiAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgLy8gICAgIGRhcms6ICcjMTExNzIwJyxcbiAgLy8gICB9LFxuICAvLyAgIHByaW1hcnk6IHRlbXAuY29sb3IubGlnaHRCbHVlLFxuICAvLyAgIHNlY29uZGFyeTogdGVtcC5jb2xvci5saWdodEdyZWVuLFxuICAvLyAgIHRleHQ6IHtcbiAgLy8gICAgIHByaW1hcnk6ICcjZmZmJyxcbiAgLy8gICB9XG4gIC8vIH0sXG4gIC8vIHNoYXBlOiB7XG4gIC8vICAgYm9yZGVyUmFkaXVzOiAwLFxuICAvLyB9LFxufSk7XG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIC4uLmNvcmVUaGVtZSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imports/theme/build.tsx\n");

/***/ })

})