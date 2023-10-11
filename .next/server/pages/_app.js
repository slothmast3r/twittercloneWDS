/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/SideNav.tsx":
/*!************************************!*\
  !*** ./src/components/SideNav.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SideNav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SideNav() {\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const user = session.data?.user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"sticky top-0 self-start px-2 py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \" flex flex-col items-start gap-2 whitespace-nowrap\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this),\n                user != null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: `/profiles/${user.id}`,\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 35\n                }, this),\n                user == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>void (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                        children: \"Log-in\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>void (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                        children: \"Log-out\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 27\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/components/SideNav.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUMrQjtBQUU3QyxTQUFTSTtJQUNwQixNQUFNQyxVQUFVRiwyREFBVUE7SUFDMUIsTUFBTUcsT0FBT0QsUUFBUUUsSUFBSSxFQUFFRDtJQUMzQixxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7WUFBR0QsV0FBVTs7OEJBQ1YsOERBQUNFOzhCQUNHLDRFQUFDWCxrREFBSUE7d0JBQUNZLE1BQUs7a0NBQUk7Ozs7Ozs7Ozs7O2dCQUVsQk4sUUFBUSxzQkFBUyw4REFBQ0s7OEJBQ2YsNEVBQUNYLGtEQUFJQTt3QkFBQ1ksTUFBTSxDQUFDLFVBQVUsRUFBRU4sS0FBS08sRUFBRSxDQUFDLENBQUM7a0NBQUU7Ozs7Ozs7Ozs7O2dCQUV2Q1AsUUFBUSxxQkFBUSw4REFBQ0s7OEJBQ2QsNEVBQUNHO3dCQUFPQyxTQUFTLElBQU0sS0FBS2QsdURBQU1BO2tDQUFJOzs7Ozs7Ozs7O3lDQUNoQyw4REFBQ1U7OEJBQ1AsNEVBQUNHO3dCQUFPQyxTQUFTLElBQU0sS0FBS2Isd0RBQU9BO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV0JTVHdpdHRlckNsb25lLy4vc3JjL2NvbXBvbmVudHMvU2lkZU5hdi50c3g/ZTdiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge3NpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgICBjb25zdCB1c2VyID0gc2Vzc2lvbi5kYXRhPy51c2VyXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgc2VsZi1zdGFydCBweC0yIHB5LTRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAge3VzZXIgIT0gbnVsbCAmJiAoPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGVzLyR7dXNlci5pZH1gfT5Qcm9maWxlPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+KX1cbiAgICAgICAgICAgICAgICB7dXNlciA9PSBudWxsID8gKDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2b2lkIHNpZ25JbigpfT5Mb2ctaW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPikgOiAoPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZvaWQgc2lnbk91dCgpfT5Mb2ctb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIlNpZGVOYXYiLCJzZXNzaW9uIiwidXNlciIsImRhdGEiLCJuYXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiaHJlZiIsImlkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SideNav.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/SideNav */ \"./src/components/SideNav.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_2__]);\n_utils_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst MyApp = ({ Component, pageProps: { session, ...pageProps } })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Twitter Clone\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"this tiwtter xd\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex items-start sm:pr-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-h-screen flex-grow border-x\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oskar/Documents/Programming/WBSTwitterClone/src/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBR2hCO0FBRUY7QUFDRDtBQUNjO0FBRTNDLE1BQU1JLFFBQThDLENBQUMsRUFDSUMsU0FBUyxFQUNUQyxXQUFXLEVBQUNDLE9BQU8sRUFBRSxHQUFHRCxXQUFVLEVBQ3JDO0lBQ2xELHFCQUNJLDhEQUFDTiw0REFBZUE7UUFBQ08sU0FBU0E7OzBCQUN0Qiw4REFBQ0wsa0RBQUlBOztrQ0FDRCw4REFBQ007a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQU07Ozs7OztrQ0FDWiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1osMkRBQU9BOzs7OztrQ0FDUiw4REFBQ1c7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNWOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0FBRUEsaUVBQWVMLDJDQUFHQSxDQUFDZSxRQUFRLENBQUNaLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQlNUd2l0dGVyQ2xvbmUvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3R5cGUgU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHtTZXNzaW9uUHJvdmlkZXJ9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7dHlwZSBBcHBUeXBlfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IHthcGl9IGZyb20gXCJ+L3V0aWxzL2FwaVwiO1xuXG5pbXBvcnQgXCJ+L3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIn4vY29tcG9uZW50cy9TaWRlTmF2XCI7XG5cbmNvbnN0IE15QXBwOiBBcHBUeXBlPHsgc2Vzc2lvbjogU2Vzc2lvbiB8IG51bGwgfT4gPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVByb3BzOiB7c2Vzc2lvbiwgLi4ucGFnZVByb3BzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+IFR3aXR0ZXIgQ2xvbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9e1widGhpcyB0aXd0dGVyIHhkXCJ9Lz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBpdGVtcy1zdGFydCBzbTpwci00IFwiPlxuICAgICAgICAgICAgICAgIDxTaWRlTmF2Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4LWdyb3cgYm9yZGVyLXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGkud2l0aFRSUEMoTXlBcHApO1xuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsImFwaSIsIkhlYWQiLCJTaWRlTmF2IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwid2l0aFRSUEMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\n * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which\n * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.\n *\n * We also create a few inference helpers for input and output types.\n */ \n\n\nconst getBaseUrl = ()=>{\n    if (false) {} // browser should use relative url\n    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url\n    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost\n};\n/** A set of type-safe react-query hooks for your tRPC API. */ const api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            /**\n       * Transformer used for data de-serialization from the server.\n       *\n       * @see https://trpc.io/docs/data-transformers\n       */ transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),\n            /**\n       * Links used to determine request flow from client to server.\n       *\n       * @see https://trpc.io/docs/links\n       */ links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({\n                    enabled: (opts)=> true || 0\n                }),\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: `${getBaseUrl()}/api/trpc`\n                })\n            ]\n        };\n    },\n    /**\n   * Whether tRPC should await queries when server rendering pages.\n   *\n   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false\n   */ ssr: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FDd0Q7QUFDYjtBQUVWO0FBSWxDLE1BQU1JLGFBQWE7SUFDakIsSUFBSSxLQUE2QixFQUFFLEVBQVUsQ0FBQyxrQ0FBa0M7SUFDaEYsSUFBSUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDRCQUE0QjtJQUNwRyxPQUFPLENBQUMsaUJBQWlCLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLCtCQUErQjtBQUN4RjtBQUVBLDREQUE0RCxHQUNyRCxNQUFNQyxNQUFNUCwwREFBY0EsQ0FBWTtJQUMzQ1E7UUFDRSxPQUFPO1lBQ0w7Ozs7T0FJQyxHQUNEQyxhQUFhUixrREFBU0E7WUFFdEI7Ozs7T0FJQyxHQUNEUyxPQUFPO2dCQUNMWCx3REFBVUEsQ0FBQztvQkFDVFksU0FBUyxDQUFDQyxPQUNSVCxLQUFzQyxJQUNyQ1MsQ0FBeURHO2dCQUM5RDtnQkFDQWpCLDJEQUFhQSxDQUFDO29CQUNaa0IsS0FBSyxDQUFDLEVBQUVkLGFBQWEsU0FBUyxDQUFDO2dCQUNqQzthQUNEO1FBQ0g7SUFDRjtJQUNBOzs7O0dBSUMsR0FDRGUsS0FBSztBQUNQLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQlNUd2l0dGVyQ2xvbmUvLi9zcmMvdXRpbHMvYXBpLnRzP2I5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIHRoZSBjbGllbnQtc2lkZSBlbnRyeXBvaW50IGZvciB5b3VyIHRSUEMgQVBJLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYGFwaWAgb2JqZWN0IHdoaWNoXG4gKiBjb250YWlucyB0aGUgTmV4dC5qcyBBcHAtd3JhcHBlciwgYXMgd2VsbCBhcyB5b3VyIHR5cGUtc2FmZSBSZWFjdCBRdWVyeSBob29rcy5cbiAqXG4gKiBXZSBhbHNvIGNyZWF0ZSBhIGZldyBpbmZlcmVuY2UgaGVscGVycyBmb3IgaW5wdXQgYW5kIG91dHB1dCB0eXBlcy5cbiAqL1xuaW1wb3J0IHsgaHR0cEJhdGNoTGluaywgbG9nZ2VyTGluayB9IGZyb20gXCJAdHJwYy9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZVRSUENOZXh0IH0gZnJvbSBcIkB0cnBjL25leHRcIjtcbmltcG9ydCB7IHR5cGUgaW5mZXJSb3V0ZXJJbnB1dHMsIHR5cGUgaW5mZXJSb3V0ZXJPdXRwdXRzIH0gZnJvbSBcIkB0cnBjL3NlcnZlclwiO1xuaW1wb3J0IHN1cGVyanNvbiBmcm9tIFwic3VwZXJqc29uXCI7XG5cbmltcG9ydCB7IHR5cGUgQXBwUm91dGVyIH0gZnJvbSBcIn4vc2VydmVyL2FwaS9yb290XCI7XG5cbmNvbnN0IGdldEJhc2VVcmwgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gXCJcIjsgLy8gYnJvd3NlciBzaG91bGQgdXNlIHJlbGF0aXZlIHVybFxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkgcmV0dXJuIGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gOyAvLyBTU1Igc2hvdWxkIHVzZSB2ZXJjZWwgdXJsXG4gIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlQgPz8gMzAwMH1gOyAvLyBkZXYgU1NSIHNob3VsZCB1c2UgbG9jYWxob3N0XG59O1xuXG4vKiogQSBzZXQgb2YgdHlwZS1zYWZlIHJlYWN0LXF1ZXJ5IGhvb2tzIGZvciB5b3VyIHRSUEMgQVBJLiAqL1xuZXhwb3J0IGNvbnN0IGFwaSA9IGNyZWF0ZVRSUENOZXh0PEFwcFJvdXRlcj4oe1xuICBjb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtZXIgdXNlZCBmb3IgZGF0YSBkZS1zZXJpYWxpemF0aW9uIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAqXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL2RhdGEtdHJhbnNmb3JtZXJzXG4gICAgICAgKi9cbiAgICAgIHRyYW5zZm9ybWVyOiBzdXBlcmpzb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlua3MgdXNlZCB0byBkZXRlcm1pbmUgcmVxdWVzdCBmbG93IGZyb20gY2xpZW50IHRvIHNlcnZlci5cbiAgICAgICAqXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL2xpbmtzXG4gICAgICAgKi9cbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIGxvZ2dlckxpbmsoe1xuICAgICAgICAgIGVuYWJsZWQ6IChvcHRzKSA9PlxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fFxuICAgICAgICAgICAgKG9wdHMuZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiBvcHRzLnJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSxcbiAgICAgICAgfSksXG4gICAgICAgIGh0dHBCYXRjaExpbmsoe1xuICAgICAgICAgIHVybDogYCR7Z2V0QmFzZVVybCgpfS9hcGkvdHJwY2AsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogV2hldGhlciB0UlBDIHNob3VsZCBhd2FpdCBxdWVyaWVzIHdoZW4gc2VydmVyIHJlbmRlcmluZyBwYWdlcy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3RycGMuaW8vZG9jcy9uZXh0anMjc3NyLWJvb2xlYW4tZGVmYXVsdC1mYWxzZVxuICAgKi9cbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG4vKipcbiAqIEluZmVyZW5jZSBoZWxwZXIgZm9yIGlucHV0cy5cbiAqXG4gKiBAZXhhbXBsZSB0eXBlIEhlbGxvSW5wdXQgPSBSb3V0ZXJJbnB1dHNbJ2V4YW1wbGUnXVsnaGVsbG8nXVxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJJbnB1dHMgPSBpbmZlclJvdXRlcklucHV0czxBcHBSb3V0ZXI+O1xuXG4vKipcbiAqIEluZmVyZW5jZSBoZWxwZXIgZm9yIG91dHB1dHMuXG4gKlxuICogQGV4YW1wbGUgdHlwZSBIZWxsb091dHB1dCA9IFJvdXRlck91dHB1dHNbJ2V4YW1wbGUnXVsnaGVsbG8nXVxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJPdXRwdXRzID0gaW5mZXJSb3V0ZXJPdXRwdXRzPEFwcFJvdXRlcj47XG4iXSwibmFtZXMiOlsiaHR0cEJhdGNoTGluayIsImxvZ2dlckxpbmsiLCJjcmVhdGVUUlBDTmV4dCIsInN1cGVyanNvbiIsImdldEJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsIlBPUlQiLCJhcGkiLCJjb25maWciLCJ0cmFuc2Zvcm1lciIsImxpbmtzIiwiZW5hYmxlZCIsIm9wdHMiLCJkaXJlY3Rpb24iLCJyZXN1bHQiLCJFcnJvciIsInVybCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("superjson");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();