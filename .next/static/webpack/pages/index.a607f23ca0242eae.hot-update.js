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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InfiniteTweetList: function() { return /* binding */ InfiniteTweetList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileImage */ \"./src/components/ProfileImage.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_VscHeart_VscHeartFilled_react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=VscHeart,VscHeartFilled!=!react-icons/vsc */ \"__barrel_optimize__?names=VscHeart,VscHeartFilled!=!./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _IconHoverEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconHoverEffect */ \"./src/components/IconHoverEffect.tsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utils/api */ \"./src/utils/api.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction InfiniteTweetList(param) {\n    let { tweets, isError, isLoading, fetchNewTweets, hasMore } = param;\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Error\"\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 37,\n        columnNumber: 23\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 38,\n        columnNumber: 25\n    }, this);\n    if (tweets.length === 0 || tweets == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-2x1 my-4 text-center text-gray-500\",\n        children: \"No tweets\"\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            dataLength: tweets.length,\n            next: fetchNewTweets,\n            hasMore: hasMore,\n            loader: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, void 0, void 0),\n            children: [\n                tweets.map((tweet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TweetCard, {\n                        ...tweet\n                    }, tweet.id, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = InfiniteTweetList;\nconst dateTimeFormatter = new Intl.DateTimeFormat(undefined, {\n    dateStyle: \"short\"\n});\nfunction TweetCard(param) {\n    let { id, user, content, createdAt, likeCount, likedByMe } = param;\n    _s();\n    const trpcUtils = _utils_api__WEBPACK_IMPORTED_MODULE_6__.api.useContext();\n    const toggleLike = _utils_api__WEBPACK_IMPORTED_MODULE_6__.api.tweet.toggleLike.useMutation({\n        onSuccess: (param)=>{\n            let { addedLike } = param;\n            const updateData = (oldData)=>{\n                if (oldData == null) return;\n                const countModifier = addedLike ? 1 : -1;\n                return {\n                    ...oldData,\n                    pages: oldData.pages.map((page)=>{\n                        return {\n                            ...page,\n                            tweets: page.tweets.map((tweet)=>{\n                                if (tweet.id === id) return {\n                                    ...tweet,\n                                    likeCount: tweet.likeCount + countModifier,\n                                    likedByMe: addedLike\n                                };\n                                return tweet;\n                            })\n                        };\n                    })\n                };\n            };\n            trpcUtils.tweet.infiniteFeed.setInfiniteData({}, updateData);\n        }\n    });\n    function handleToggleLike() {\n        toggleLike.mutate({\n            id\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"flex gap-4 border-b px-4 py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"profiles/\".concat(user.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__.ProfileImage, {\n                    src: user.image\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-grow flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"profiles/\".concat(user.id),\n                                className: \"font-bold outline-none hover:underline focus-visible:underline\",\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500\",\n                                children: dateTimeFormatter.format(createdAt)\n                            }, void 0, false, {\n                                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"whitespace-pre-wrap\",\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeartButton, {\n                        onClick: handleToggleLike,\n                        isLoading: toggleLike.isLoading,\n                        likedByMe: likedByMe,\n                        likeCount: likeCount\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n_s(TweetCard, \"NEmXcUpANWJDK67HZZkrhbVNJrw=\");\n_c1 = TweetCard;\nfunction HeartButton(param) {\n    let { isLoading, onClick, likedByMe, likeCount } = param;\n    _s1();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const HeartIcon = likedByMe ? _barrel_optimize_names_VscHeart_VscHeartFilled_react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscHeartFilled : _barrel_optimize_names_VscHeart_VscHeartFilled_react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscHeart;\n    if (session.status !== \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-1 mt-1 flex items-center gap-3 self-start text-gray-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeartIcon, {}, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \" \",\n                        likeCount\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n            lineNumber: 142,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: isLoading,\n        onClick: onClick,\n        className: \"dutarion-200 group flex items-center gap-1 self-start transition-colors \".concat(likedByMe ? \"text-red-500\" : \"text-gray-500 hover:text-red-500 focus-visible:text-red-500\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IconHoverEffect__WEBPACK_IMPORTED_MODULE_5__.IconHoverEffect, {\n                red: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeartIcon, {\n                    className: \"transition-colors duration-200 \".concat(likedByMe ? \"fill-red-500\" : \"fill-gray-500 group-hover:fill-red-500 group-focus-visible:fill-red-500\")\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" \",\n                    likeCount\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/InfiniteTweetList.tsx\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this);\n}\n_s1(HeartButton, \"TLdHK4K4L7Pm+aVG7dSGM4qSxic=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c2 = HeartButton;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"InfiniteTweetList\");\n$RefreshReg$(_c1, \"TweetCard\");\n$RefreshReg$(_c2, \"HeartButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiUyxrQkFBa0JnQyxNQUFNLENBQUN6Qjs7Ozs7Ozs7Ozs7O2tDQUc5Qiw4REFBQ25CO3dCQUFFRyxXQUFVO2tDQUF1QmU7Ozs7OztrQ0FDcEMsOERBQUMyQjt3QkFBWUMsU0FBU1g7d0JBQWtCdEMsV0FBVzJCLFdBQVczQixTQUFTO3dCQUFDd0IsV0FBV0E7d0JBQVdELFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakg7R0EvRFNWO01BQUFBO0FBd0VULFNBQVNtQyxZQUFZLEtBQThEO1FBQTlELEVBQUVoRCxTQUFTLEVBQUVpRCxPQUFPLEVBQUV6QixTQUFTLEVBQUVELFNBQVMsRUFBb0IsR0FBOUQ7O0lBQ25CLE1BQU0yQixVQUFVMUQsMkRBQVVBO0lBQzFCLE1BQU0yRCxZQUFZM0IsWUFBWTlCLDBHQUFjQSxHQUFHRCxvR0FBUUE7SUFFdkQsSUFBSXlELFFBQVFFLE1BQU0sS0FBSyxpQkFBaUI7UUFDdEMscUJBQ0UsOERBQUNSO1lBQUl0QyxXQUFVOzs4QkFDYiw4REFBQzZDOzs7Ozs4QkFDRCw4REFBQ0w7O3dCQUFLO3dCQUFFdkI7Ozs7Ozs7Ozs7Ozs7SUFHZDtJQUNBLHFCQUNFLDhEQUFDOEI7UUFDREMsVUFBVXREO1FBQ1ZpRCxTQUFTQTtRQUNQM0MsV0FBVywyRUFJVixPQUhDa0IsWUFDSSxpQkFDQTs7MEJBR04sOERBQUM3Qiw2REFBZUE7Z0JBQUM0RCxHQUFHOzBCQUNsQiw0RUFBQ0o7b0JBQ0M3QyxXQUFXLGtDQUlWLE9BSENrQixZQUNJLGlCQUNBOzs7Ozs7Ozs7OzswQkFJViw4REFBQ3NCOztvQkFBSztvQkFBRXZCOzs7Ozs7Ozs7Ozs7O0FBR2Q7SUFsQ1N5Qjs7UUFDU3hELHVEQUFVQTs7O01BRG5Cd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5maW5pdGVUd2VldExpc3QudHN4PzUwMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlSW1hZ2UgfSBmcm9tIFwiLi9Qcm9maWxlSW1hZ2VcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBWc2NIZWFydCwgVnNjSGVhcnRGaWxsZWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvdnNjXCI7XG5pbXBvcnQgeyBJY29uSG92ZXJFZmZlY3QgfSBmcm9tIFwiLi9JY29uSG92ZXJFZmZlY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJ+L3V0aWxzL2FwaVwiO1xuXG50eXBlIFR3ZWV0ID0ge1xuICBpZDogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICBsaWtlQ291bnQ6IG51bWJlcjtcbiAgbGlrZWRCeU1lOiBib29sZWFuO1xuICB1c2VyOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgIGltYWdlOiBzdHJpbmcgfCBudWxsO1xuICB9O1xufTtcblxudHlwZSBJbmZpbml0ZVR3ZWV0TGlzdFByb3BzID0ge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGlzRXJyb3I6IGJvb2xlYW47XG4gIGhhc01vcmU6IGJvb2xlYW47XG4gIGZldGNoTmV4dFBhZ2U6ICgpID0+IFByb21pc2U8dW5rbm93bj47XG4gIHR3ZWV0czogVHdlZXRbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmZpbml0ZVR3ZWV0TGlzdCh7XG4gIHR3ZWV0cyxcbiAgaXNFcnJvcixcbiAgaXNMb2FkaW5nLFxuICBmZXRjaE5ld1R3ZWV0cyxcbiAgaGFzTW9yZSxcbn06IEluZmluaXRlVHdlZXRMaXN0UHJvcHMpIHtcbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8cD5FcnJvcjwvcD47XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKHR3ZWV0cy5sZW5ndGggPT09IDAgfHwgdHdlZXRzID09IG51bGwpXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4MSBteS00IHRleHQtY2VudGVyIHRleHQtZ3JheS01MDBcIj5ObyB0d2VldHM8L2gyPlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgZGF0YUxlbmd0aD17dHdlZXRzLmxlbmd0aH1cbiAgICAgICAgbmV4dD17ZmV0Y2hOZXdUd2VldHN9XG4gICAgICAgIGhhc01vcmU9e2hhc01vcmV9XG4gICAgICAgIGxvYWRlcj17PHA+TG9hZGluZy4uLjwvcD59XG4gICAgICA+XG4gICAgICAgIHt0d2VldHMubWFwKCh0d2VldCkgPT4gKFxuICAgICAgICAgIDxUd2VldENhcmQga2V5PXt0d2VldC5pZH0gey4uLnR3ZWV0fT48L1R3ZWV0Q2FyZD5cbiAgICAgICAgKSl9e1wiIFwifVxuICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICA8L3VsPlxuICApO1xufVxuXG5jb25zdCBkYXRlVGltZUZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHVuZGVmaW5lZCwge1xuICBkYXRlU3R5bGU6IFwic2hvcnRcIixcbn0pO1xuXG5mdW5jdGlvbiBUd2VldENhcmQoe1xuICBpZCxcbiAgdXNlcixcbiAgY29udGVudCxcbiAgY3JlYXRlZEF0LFxuICBsaWtlQ291bnQsXG4gIGxpa2VkQnlNZSxcbn06IFR3ZWV0KSB7XG5jb25zdCB0cnBjVXRpbHMgPSBhcGkudXNlQ29udGV4dCgpXG5cbiAgICBjb25zdCB0b2dnbGVMaWtlID0gYXBpLnR3ZWV0LnRvZ2dsZUxpa2UudXNlTXV0YXRpb24oe1xuICAgICAgICBvblN1Y2Nlc3M6ICh7YWRkZWRMaWtlfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlRGF0YTogUGFyYW1ldGVyczx0eXBlb2YgdHJwY1V0aWxzLnR3ZWV0LmluZmluaXRlRmVlZC5zZXRJbmZpbml0ZURhdGE+WzFdID0gKG9sZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZihvbGREYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudE1vZGlmaWVyID0gYWRkZWRMaWtlID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2xkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IG9sZERhdGEucGFnZXMubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZXRzOiBwYWdlLnR3ZWV0cy5tYXAoKHR3ZWV0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR3ZWV0LmlkID09PSBpZClyZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udHdlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IHR3ZWV0Lmxpa2VDb3VudCArIGNvdW50TW9kaWZpZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlZEJ5TWU6IGFkZGVkTGlrZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHdlZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnBjVXRpbHMudHdlZXQuaW5maW5pdGVGZWVkLnNldEluZmluaXRlRGF0YSh7fSx1cGRhdGVEYXRhKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUxpa2UoKXtcbiAgICAgICAgdG9nZ2xlTGlrZS5tdXRhdGUoe2lkfSlcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgYm9yZGVyLWIgcHgtNCBweS00XCI+XG4gICAgICA8TGluayBocmVmPXtgcHJvZmlsZXMvJHt1c2VyLmlkfWB9PlxuICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17dXNlci5pbWFnZX0+PC9Qcm9maWxlSW1hZ2U+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cgZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2Bwcm9maWxlcy8ke3VzZXIuaWR9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBvdXRsaW5lLW5vbmUgaG92ZXI6dW5kZXJsaW5lIGZvY3VzLXZpc2libGU6dW5kZXJsaW5lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+LTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICB7ZGF0ZVRpbWVGb3JtYXR0ZXIuZm9ybWF0KGNyZWF0ZWRBdCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1wcmUtd3JhcFwiPntjb250ZW50fTwvcD5cbiAgICAgICAgPEhlYXJ0QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUxpa2V9IGlzTG9hZGluZz17dG9nZ2xlTGlrZS5pc0xvYWRpbmd9bGlrZWRCeU1lPXtsaWtlZEJ5TWV9IGxpa2VDb3VudD17bGlrZUNvdW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn1cblxudHlwZSBIZWFydEJ1dHRvblByb3BzID0ge1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIGxpa2VkQnlNZTogYm9vbGVhbjtcbiAgbGlrZUNvdW50OiBudW1iZXI7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIEhlYXJ0QnV0dG9uKHsgaXNMb2FkaW5nLCBvbkNsaWNrLCBsaWtlZEJ5TWUsIGxpa2VDb3VudCB9OiBIZWFydEJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IEhlYXJ0SWNvbiA9IGxpa2VkQnlNZSA/IFZzY0hlYXJ0RmlsbGVkIDogVnNjSGVhcnQ7XG5cbiAgaWYgKHNlc3Npb24uc3RhdHVzICE9PSBcImF1dGhlbnRpY2F0ZWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEgbXQtMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBzZWxmLXN0YXJ0IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgPEhlYXJ0SWNvbiAvPlxuICAgICAgICA8c3Bhbj4ge2xpa2VDb3VudH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNsYXNzTmFtZT17YGR1dGFyaW9uLTIwMCBncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBzZWxmLXN0YXJ0IHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgIGxpa2VkQnlNZVxuICAgICAgICAgID8gXCJ0ZXh0LXJlZC01MDBcIlxuICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcmVkLTUwMCBmb2N1cy12aXNpYmxlOnRleHQtcmVkLTUwMFwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8SWNvbkhvdmVyRWZmZWN0IHJlZD5cbiAgICAgICAgPEhlYXJ0SWNvblxuICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCAke1xuICAgICAgICAgICAgbGlrZWRCeU1lXG4gICAgICAgICAgICAgID8gXCJmaWxsLXJlZC01MDBcIlxuICAgICAgICAgICAgICA6IFwiZmlsbC1ncmF5LTUwMCBncm91cC1ob3ZlcjpmaWxsLXJlZC01MDAgZ3JvdXAtZm9jdXMtdmlzaWJsZTpmaWxsLXJlZC01MDBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAvPlxuICAgICAgPC9JY29uSG92ZXJFZmZlY3Q+XG4gICAgICA8c3Bhbj4ge2xpa2VDb3VudH08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkluZmluaXRlU2Nyb2xsIiwiUHJvZmlsZUltYWdlIiwidXNlU2Vzc2lvbiIsIlZzY0hlYXJ0IiwiVnNjSGVhcnRGaWxsZWQiLCJJY29uSG92ZXJFZmZlY3QiLCJhcGkiLCJJbmZpbml0ZVR3ZWV0TGlzdCIsInR3ZWV0cyIsImlzRXJyb3IiLCJpc0xvYWRpbmciLCJmZXRjaE5ld1R3ZWV0cyIsImhhc01vcmUiLCJwIiwibGVuZ3RoIiwiaDIiLCJjbGFzc05hbWUiLCJ1bCIsImRhdGFMZW5ndGgiLCJuZXh0IiwibG9hZGVyIiwibWFwIiwidHdlZXQiLCJUd2VldENhcmQiLCJpZCIsImRhdGVUaW1lRm9ybWF0dGVyIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwidW5kZWZpbmVkIiwiZGF0ZVN0eWxlIiwidXNlciIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJsaWtlQ291bnQiLCJsaWtlZEJ5TWUiLCJ0cnBjVXRpbHMiLCJ1c2VDb250ZXh0IiwidG9nZ2xlTGlrZSIsInVzZU11dGF0aW9uIiwib25TdWNjZXNzIiwiYWRkZWRMaWtlIiwidXBkYXRlRGF0YSIsIm9sZERhdGEiLCJjb3VudE1vZGlmaWVyIiwicGFnZXMiLCJwYWdlIiwiaW5maW5pdGVGZWVkIiwic2V0SW5maW5pdGVEYXRhIiwiaGFuZGxlVG9nZ2xlTGlrZSIsIm11dGF0ZSIsImxpIiwiaHJlZiIsInNyYyIsImltYWdlIiwiZGl2IiwibmFtZSIsInNwYW4iLCJmb3JtYXQiLCJIZWFydEJ1dHRvbiIsIm9uQ2xpY2siLCJzZXNzaW9uIiwiSGVhcnRJY29uIiwic3RhdHVzIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/InfiniteTweetList.tsx\n"));

/***/ })

});