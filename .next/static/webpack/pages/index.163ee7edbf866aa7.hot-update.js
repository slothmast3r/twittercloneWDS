"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_InfiniteTweetList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/InfiniteTweetList */ \"./src/components/InfiniteTweetList.tsx\");\n/* harmony import */ var _components_NewTweetForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/NewTweetForm */ \"./src/components/NewTweetForm.tsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/api */ \"./src/utils/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"sticky top-0 z-10 border-b bg-white pt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font bold mb-2 px-4 text-lg\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewTweetForm__WEBPACK_IMPORTED_MODULE_2__.NewTweetForm, {}, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RecentTweets, {}, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nfunction RecentTweets() {\n    var _tweets_data;\n    _s();\n    const tweets = _utils_api__WEBPACK_IMPORTED_MODULE_3__.api.tweet.infiniteFeed.useInfiniteQuery({}, {\n        getNextPageParam: (lastPage)=>lastPage.nextCursor\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfiniteTweetList__WEBPACK_IMPORTED_MODULE_1__.InfiniteTweetList, {\n        tweets: (_tweets_data = tweets.data) === null || _tweets_data === void 0 ? void 0 : _tweets_data.pages.flatMap((page)=>page.tweets),\n        isError: tweets.isError,\n        isLoading: tweets.isLoading,\n        hasMore: tweets.hasNextPage,\n        fetchNewTweets: tweets.fetchNextPage\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(RecentTweets, \"ik4PKeCs1m74mxP1sFb0aF1fmzo=\");\n_c1 = RecentTweets;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"RecentTweets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1FO0FBQ1Y7QUFDdkI7QUFFbkIsU0FBU0c7SUFDdEIscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBT0MsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qjs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDSixrRUFBWUE7Ozs7OzBCQUNiLDhEQUFDTTs7Ozs7OztBQUdQO0tBVndCSjtBQVl4QixTQUFTSTtRQVNLQzs7SUFSWixNQUFNQSxTQUFTTiwyQ0FBR0EsQ0FBQ08sS0FBSyxDQUFDQyxZQUFZLENBQUNDLGdCQUFnQixDQUNwRCxDQUFDLEdBQ0Q7UUFDRUMsa0JBQWtCLENBQUNDLFdBQWFBLFNBQVNDLFVBQVU7SUFDckQ7SUFFRixxQkFDRSw4REFBQ2QsNEVBQWlCQTtRQUNoQlEsTUFBTSxHQUFFQSxlQUFBQSxPQUFPTyxJQUFJLGNBQVhQLG1DQUFBQSxhQUFhUSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLVixNQUFNO1FBQ3hEVyxTQUFTWCxPQUFPVyxPQUFPO1FBQ3ZCQyxXQUFXWixPQUFPWSxTQUFTO1FBQzNCQyxTQUFTYixPQUFPYyxXQUFXO1FBQzNCQyxnQkFBZ0JmLE9BQU9nQixhQUFhOzs7Ozs7QUFHMUM7R0FoQlNqQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5maW5pdGVUd2VldExpc3QgfSBmcm9tIFwifi9jb21wb25lbnRzL0luZmluaXRlVHdlZXRMaXN0XCI7XG5pbXBvcnQgeyBOZXdUd2VldEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL05ld1R3ZWV0Rm9ybVwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIn4vdXRpbHMvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotMTAgYm9yZGVyLWIgYmctd2hpdGUgcHQtMlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udCBib2xkIG1iLTIgcHgtNCB0ZXh0LWxnXCI+SG9tZTwvaDE+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxOZXdUd2VldEZvcm0gLz5cbiAgICAgIDxSZWNlbnRUd2VldHMgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmVjZW50VHdlZXRzKCkge1xuICBjb25zdCB0d2VldHMgPSBhcGkudHdlZXQuaW5maW5pdGVGZWVkLnVzZUluZmluaXRlUXVlcnkoXG4gICAge30sXG4gICAge1xuICAgICAgZ2V0TmV4dFBhZ2VQYXJhbTogKGxhc3RQYWdlKSA9PiBsYXN0UGFnZS5uZXh0Q3Vyc29yLFxuICAgIH0sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPEluZmluaXRlVHdlZXRMaXN0XG4gICAgICB0d2VldHM9e3R3ZWV0cy5kYXRhPy5wYWdlcy5mbGF0TWFwKChwYWdlKSA9PiBwYWdlLnR3ZWV0cyl9XG4gICAgICBpc0Vycm9yPXt0d2VldHMuaXNFcnJvcn1cbiAgICAgIGlzTG9hZGluZz17dHdlZXRzLmlzTG9hZGluZ31cbiAgICAgIGhhc01vcmU9e3R3ZWV0cy5oYXNOZXh0UGFnZX1cbiAgICAgIGZldGNoTmV3VHdlZXRzPXt0d2VldHMuZmV0Y2hOZXh0UGFnZX1cbiAgICAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkluZmluaXRlVHdlZXRMaXN0IiwiTmV3VHdlZXRGb3JtIiwiYXBpIiwiSG9tZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImgxIiwiUmVjZW50VHdlZXRzIiwidHdlZXRzIiwidHdlZXQiLCJpbmZpbml0ZUZlZWQiLCJ1c2VJbmZpbml0ZVF1ZXJ5IiwiZ2V0TmV4dFBhZ2VQYXJhbSIsImxhc3RQYWdlIiwibmV4dEN1cnNvciIsImRhdGEiLCJwYWdlcyIsImZsYXRNYXAiLCJwYWdlIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImhhc01vcmUiLCJoYXNOZXh0UGFnZSIsImZldGNoTmV3VHdlZXRzIiwiZmV0Y2hOZXh0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});