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

/***/ "./src/components/InfiniteTweetList.tsx":
/*!**********************************************!*\
  !*** ./src/components/InfiniteTweetList.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InfiniteTweetList: function() { return /* binding */ InfiniteTweetList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileImage */ \"./src/components/ProfileImage.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_VscHeart_VscHeartFilled_react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=VscHeart,VscHeartFilled!=!react-icons/vsc */ \"__barrel_optimize__?names=VscHeart,VscHeartFilled!=!./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _IconHoverEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconHoverEffect */ \"./src/components/IconHoverEffect.tsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utils/api */ \"./src/utils/api.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction InfiniteTweetList(param) {\n    let { tweets, isError, isLoading, fetchNewTweets, hasMore } = param;\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Error\"\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 37,\n        columnNumber: 23\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 38,\n        columnNumber: 25\n    }, this);\n    if (tweets.length === 0 || tweets == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-2x1 my-4 text-center text-gray-500\",\n        children: \"No tweets\"\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            dataLength: tweets.length,\n            next: fetchNewTweets,\n            hasMore: hasMore,\n            loader: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, void 0, void 0),\n            children: [\n                tweets.map((tweet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TweetCard, {\n                        ...tweet\n                    }, tweet.id, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = InfiniteTweetList;\nconst dateTimeFormatter = new Intl.DateTimeFormat(undefined, {\n    dateStyle: \"short\"\n});\nfunction TweetCard(param) {\n    let { id, user, content, createdAt, likeCount, likedByMe } = param;\n    _s();\n    const toggleLike = _utils_api__WEBPACK_IMPORTED_MODULE_6__.api.tweet.toggleLike.useMutation();\n    function handleToggleLike() {\n        toggleLike.mutate({\n            id\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"flex gap-4 border-b px-4 py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"profiles/\".concat(user.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__.ProfileImage, {\n                    src: user.image\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-grow flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"profiles/\".concat(user.id),\n                                className: \"font-bold outline-none hover:underline focus-visible:underline\",\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500\",\n                                children: dateTimeFormatter.format(createdAt)\n                            }, void 0, false, {\n                                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"whitespace-pre-wrap\",\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeartButton, {\n                        onClick: handleToggleLike,\n                        isLoading: toggleLike.isLoading,\n                        likedByMe: likedByMe,\n                        likeCount: likeCount\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(TweetCard, \"7xPzJi0JQxxGBpKmDqc9AFAyWIc=\");\n_c1 = TweetCard;\nfunction HeartButton(param) {\n    let { isLoading, onClick, likedByMe, likeCount } = param;\n    _s1();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const HeartIcon = likedByMe ? _barrel_optimize_names_VscHeart_VscHeartFilled_react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscHeartFilled : _barrel_optimize_names_VscHeart_VscHeartFilled_react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscHeart;\n    if (session.status !== \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-1 mt-1 flex items-center gap-3 self-start text-gray-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeartIcon, {}, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \" \",\n                        likeCount\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: isLoading,\n        onClick: onClick,\n        className: \"dutarion-200 group flex items-center gap-1 self-start transition-colors \".concat(likedByMe ? \"text-red-500\" : \"text-gray-500 hover:text-red-500 focus-visible:text-red-500\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IconHoverEffect__WEBPACK_IMPORTED_MODULE_5__.IconHoverEffect, {\n                red: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeartIcon, {\n                    className: \"transition-colors duration-200 \".concat(likedByMe ? \"fill-red-500\" : \"fill-gray-500 group-hover:fill-red-500 group-focus-visible:fill-red-500\")\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" \",\n                    likeCount\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this);\n}\n_s1(HeartButton, \"TLdHK4K4L7Pm+aVG7dSGM4qSxic=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c2 = HeartButton;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"InfiniteTweetList\");\n$RefreshReg$(_c1, \"TweetCard\");\n$RefreshReg$(_c2, \"HeartButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbmZpbml0ZVR3ZWV0TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZ0M7QUFDZjtBQUNEO0FBQ2M7QUFDUDtBQUNsQjtBQXVCM0IsU0FBU1Esa0JBQWtCLEtBTVQ7UUFOUyxFQUNoQ0MsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsY0FBYyxFQUNkQyxPQUFPLEVBQ2dCLEdBTlM7SUFPaEMsSUFBSUgsU0FBUyxxQkFBTyw4REFBQ0k7a0JBQUU7Ozs7OztJQUN2QixJQUFJSCxXQUFXLHFCQUFPLDhEQUFDRztrQkFBRTs7Ozs7O0lBQ3pCLElBQUlMLE9BQU9NLE1BQU0sS0FBSyxLQUFLTixVQUFVLE1BQ25DLHFCQUNFLDhEQUFDTztRQUFHQyxXQUFVO2tCQUEwQzs7Ozs7O0lBRzVELHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ2pCLHVFQUFjQTtZQUNia0IsWUFBWVYsT0FBT00sTUFBTTtZQUN6QkssTUFBTVI7WUFDTkMsU0FBU0E7WUFDVFEsc0JBQVEsOERBQUNQOzBCQUFFOzs7Z0JBRVZMLE9BQU9hLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ0M7d0JBQTBCLEdBQUdELEtBQUs7dUJBQW5CQSxNQUFNRSxFQUFFOzs7OztnQkFDdEI7Ozs7Ozs7Ozs7OztBQUlaO0tBNUJnQmpCO0FBOEJoQixNQUFNa0Isb0JBQW9CLElBQUlDLEtBQUtDLGNBQWMsQ0FBQ0MsV0FBVztJQUMzREMsV0FBVztBQUNiO0FBRUEsU0FBU04sVUFBVSxLQU9YO1FBUFcsRUFDakJDLEVBQUUsRUFDRk0sSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxTQUFTLEVBQ0gsR0FQVzs7SUFRZixNQUFNQyxhQUFhN0IsMkNBQUdBLENBQUNnQixLQUFLLENBQUNhLFVBQVUsQ0FBQ0MsV0FBVztJQUVuRCxTQUFTQztRQUNMRixXQUFXRyxNQUFNLENBQUM7WUFBQ2Q7UUFBRTtJQUN6QjtJQUNGLHFCQUNFLDhEQUFDZTtRQUFHdkIsV0FBVTs7MEJBQ1osOERBQUNqQixrREFBSUE7Z0JBQUN5QyxNQUFNLFlBQW9CLE9BQVJWLEtBQUtOLEVBQUU7MEJBQzdCLDRFQUFDdkIsdURBQVlBO29CQUFDd0MsS0FBS1gsS0FBS1ksS0FBSzs7Ozs7Ozs7Ozs7MEJBRy9CLDhEQUFDQztnQkFBSTNCLFdBQVU7O2tDQUNiLDhEQUFDMkI7d0JBQUkzQixXQUFVOzswQ0FDYiw4REFBQ2pCLGtEQUFJQTtnQ0FDSHlDLE1BQU0sWUFBb0IsT0FBUlYsS0FBS04sRUFBRTtnQ0FDekJSLFdBQVU7MENBRVRjLEtBQUtjLElBQUk7Ozs7OzswQ0FFWiw4REFBQ0M7Z0NBQUs3QixXQUFVOzBDQUFnQjs7Ozs7OzBDQUNoQyw4REFBQzZCO2dDQUFLN0IsV0FBVTswQ0FDYlMsa0JBQWtCcUIsTUFBTSxDQUFDZDs7Ozs7Ozs7Ozs7O2tDQUc5Qiw4REFBQ25CO3dCQUFFRyxXQUFVO2tDQUF1QmU7Ozs7OztrQ0FDcEMsOERBQUNnQjt3QkFBWUMsU0FBU1g7d0JBQWtCM0IsV0FBV3lCLFdBQVd6QixTQUFTO3dCQUFDd0IsV0FBV0E7d0JBQVdELFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakg7R0FyQ1NWO01BQUFBO0FBOENULFNBQVN3QixZQUFZLEtBQThEO1FBQTlELEVBQUVyQyxTQUFTLEVBQUVzQyxPQUFPLEVBQUVkLFNBQVMsRUFBRUQsU0FBUyxFQUFvQixHQUE5RDs7SUFDbkIsTUFBTWdCLFVBQVUvQywyREFBVUE7SUFDMUIsTUFBTWdELFlBQVloQixZQUFZOUIsMEdBQWNBLEdBQUdELG9HQUFRQTtJQUV2RCxJQUFJOEMsUUFBUUUsTUFBTSxLQUFLLGlCQUFpQjtRQUN0QyxxQkFDRSw4REFBQ1I7WUFBSTNCLFdBQVU7OzhCQUNiLDhEQUFDa0M7Ozs7OzhCQUNELDhEQUFDTDs7d0JBQUs7d0JBQUVaOzs7Ozs7Ozs7Ozs7O0lBR2Q7SUFDQSxxQkFDRSw4REFBQ21CO1FBQ0RDLFVBQVUzQztRQUNWc0MsU0FBU0E7UUFDUGhDLFdBQVcsMkVBSVYsT0FIQ2tCLFlBQ0ksaUJBQ0E7OzBCQUdOLDhEQUFDN0IsNkRBQWVBO2dCQUFDaUQsR0FBRzswQkFDbEIsNEVBQUNKO29CQUNDbEMsV0FBVyxrQ0FJVixPQUhDa0IsWUFDSSxpQkFDQTs7Ozs7Ozs7Ozs7MEJBSVYsOERBQUNXOztvQkFBSztvQkFBRVo7Ozs7Ozs7Ozs7Ozs7QUFHZDtJQWxDU2M7O1FBQ1M3Qyx1REFBVUE7OztNQURuQjZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0luZmluaXRlVHdlZXRMaXN0LnRzeD81MDBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUltYWdlIH0gZnJvbSBcIi4vUHJvZmlsZUltYWdlXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgVnNjSGVhcnQsIFZzY0hlYXJ0RmlsbGVkIH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiO1xuaW1wb3J0IHsgSWNvbkhvdmVyRWZmZWN0IH0gZnJvbSBcIi4vSWNvbkhvdmVyRWZmZWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwifi91dGlscy9hcGlcIjtcblxudHlwZSBUd2VldCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgbGlrZUNvdW50OiBudW1iZXI7XG4gIGxpa2VkQnlNZTogYm9vbGVhbjtcbiAgdXNlcjoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBpbWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgfTtcbn07XG5cbnR5cGUgSW5maW5pdGVUd2VldExpc3RQcm9wcyA9IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBpc0Vycm9yOiBib29sZWFuO1xuICBoYXNNb3JlOiBib29sZWFuO1xuICBmZXRjaE5leHRQYWdlOiAoKSA9PiBQcm9taXNlPHVua25vd24+O1xuICB0d2VldHM6IFR3ZWV0W107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gSW5maW5pdGVUd2VldExpc3Qoe1xuICB0d2VldHMsXG4gIGlzRXJyb3IsXG4gIGlzTG9hZGluZyxcbiAgZmV0Y2hOZXdUd2VldHMsXG4gIGhhc01vcmUsXG59OiBJbmZpbml0ZVR3ZWV0TGlzdFByb3BzKSB7XG4gIGlmIChpc0Vycm9yKSByZXR1cm4gPHA+RXJyb3I8L3A+O1xuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmICh0d2VldHMubGVuZ3RoID09PSAwIHx8IHR3ZWV0cyA9PSBudWxsKVxuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeDEgbXktNCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+Tm8gdHdlZXRzPC9oMj5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICAgIGRhdGFMZW5ndGg9e3R3ZWV0cy5sZW5ndGh9XG4gICAgICAgIG5leHQ9e2ZldGNoTmV3VHdlZXRzfVxuICAgICAgICBoYXNNb3JlPXtoYXNNb3JlfVxuICAgICAgICBsb2FkZXI9ezxwPkxvYWRpbmcuLi48L3A+fVxuICAgICAgPlxuICAgICAgICB7dHdlZXRzLm1hcCgodHdlZXQpID0+IChcbiAgICAgICAgICA8VHdlZXRDYXJkIGtleT17dHdlZXQuaWR9IHsuLi50d2VldH0+PC9Ud2VldENhcmQ+XG4gICAgICAgICkpfXtcIiBcIn1cbiAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgPC91bD5cbiAgKTtcbn1cblxuY29uc3QgZGF0ZVRpbWVGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh1bmRlZmluZWQsIHtcbiAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXG59KTtcblxuZnVuY3Rpb24gVHdlZXRDYXJkKHtcbiAgaWQsXG4gIHVzZXIsXG4gIGNvbnRlbnQsXG4gIGNyZWF0ZWRBdCxcbiAgbGlrZUNvdW50LFxuICBsaWtlZEJ5TWUsXG59OiBUd2VldCkge1xuICAgIGNvbnN0IHRvZ2dsZUxpa2UgPSBhcGkudHdlZXQudG9nZ2xlTGlrZS51c2VNdXRhdGlvbigpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVMaWtlKCl7XG4gICAgICAgIHRvZ2dsZUxpa2UubXV0YXRlKHtpZH0pXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGJvcmRlci1iIHB4LTQgcHktNFwiPlxuICAgICAgPExpbmsgaHJlZj17YHByb2ZpbGVzLyR7dXNlci5pZH1gfT5cbiAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9e3VzZXIuaW1hZ2V9PjwvUHJvZmlsZUltYWdlPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXtgcHJvZmlsZXMvJHt1c2VyLmlkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgb3V0bGluZS1ub25lIGhvdmVyOnVuZGVybGluZSBmb2N1cy12aXNpYmxlOnVuZGVybGluZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPi08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAge2RhdGVUaW1lRm9ybWF0dGVyLmZvcm1hdChjcmVhdGVkQXQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXBcIj57Y29udGVudH08L3A+XG4gICAgICAgIDxIZWFydEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGVMaWtlfSBpc0xvYWRpbmc9e3RvZ2dsZUxpa2UuaXNMb2FkaW5nfWxpa2VkQnlNZT17bGlrZWRCeU1lfSBsaWtlQ291bnQ9e2xpa2VDb3VudH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59XG5cbnR5cGUgSGVhcnRCdXR0b25Qcm9wcyA9IHtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBsaWtlZEJ5TWU6IGJvb2xlYW47XG4gIGxpa2VDb3VudDogbnVtYmVyO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBIZWFydEJ1dHRvbih7IGlzTG9hZGluZywgb25DbGljaywgbGlrZWRCeU1lLCBsaWtlQ291bnQgfTogSGVhcnRCdXR0b25Qcm9wcykge1xuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBIZWFydEljb24gPSBsaWtlZEJ5TWUgPyBWc2NIZWFydEZpbGxlZCA6IFZzY0hlYXJ0O1xuXG4gIGlmIChzZXNzaW9uLnN0YXR1cyAhPT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xIG10LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgc2VsZi1zdGFydCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgIDxIZWFydEljb24gLz5cbiAgICAgICAgPHNwYW4+IHtsaWtlQ291bnR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBjbGFzc05hbWU9e2BkdXRhcmlvbi0yMDAgZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgc2VsZi1zdGFydCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICBsaWtlZEJ5TWVcbiAgICAgICAgICA/IFwidGV4dC1yZWQtNTAwXCJcbiAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgZm9jdXMtdmlzaWJsZTp0ZXh0LXJlZC01MDBcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPEljb25Ib3ZlckVmZmVjdCByZWQ+XG4gICAgICAgIDxIZWFydEljb25cbiAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgJHtcbiAgICAgICAgICAgIGxpa2VkQnlNZVxuICAgICAgICAgICAgICA/IFwiZmlsbC1yZWQtNTAwXCJcbiAgICAgICAgICAgICAgOiBcImZpbGwtZ3JheS01MDAgZ3JvdXAtaG92ZXI6ZmlsbC1yZWQtNTAwIGdyb3VwLWZvY3VzLXZpc2libGU6ZmlsbC1yZWQtNTAwXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvSWNvbkhvdmVyRWZmZWN0PlxuICAgICAgPHNwYW4+IHtsaWtlQ291bnR9PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbmZpbml0ZVNjcm9sbCIsIlByb2ZpbGVJbWFnZSIsInVzZVNlc3Npb24iLCJWc2NIZWFydCIsIlZzY0hlYXJ0RmlsbGVkIiwiSWNvbkhvdmVyRWZmZWN0IiwiYXBpIiwiSW5maW5pdGVUd2VldExpc3QiLCJ0d2VldHMiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiZmV0Y2hOZXdUd2VldHMiLCJoYXNNb3JlIiwicCIsImxlbmd0aCIsImgyIiwiY2xhc3NOYW1lIiwidWwiLCJkYXRhTGVuZ3RoIiwibmV4dCIsImxvYWRlciIsIm1hcCIsInR3ZWV0IiwiVHdlZXRDYXJkIiwiaWQiLCJkYXRlVGltZUZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInVuZGVmaW5lZCIsImRhdGVTdHlsZSIsInVzZXIiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwibGlrZUNvdW50IiwibGlrZWRCeU1lIiwidG9nZ2xlTGlrZSIsInVzZU11dGF0aW9uIiwiaGFuZGxlVG9nZ2xlTGlrZSIsIm11dGF0ZSIsImxpIiwiaHJlZiIsInNyYyIsImltYWdlIiwiZGl2IiwibmFtZSIsInNwYW4iLCJmb3JtYXQiLCJIZWFydEJ1dHRvbiIsIm9uQ2xpY2siLCJzZXNzaW9uIiwiSGVhcnRJY29uIiwic3RhdHVzIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/InfiniteTweetList.tsx\n"));

/***/ })

});