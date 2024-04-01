/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/common.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/common.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./arrow-up.png */ \"./templates/arrow-up.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./search_button.png */ \"./templates/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./exit_button.png */ \"./templates/exit_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n@media screen and (max-width: 1279px) {\\n  .item-view {\\n    width: fit-content;\\n  }\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 160px;\\n  grid-row-gap: 48px;\\n}\\n\\n@media screen and (min-width: 834px) and (max-width: 1279px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 180px);\\n    grid-column-gap: 120px;\\n  }\\n}\\n\\n@media screen and (max-width: 833px) {\\n  .item-list {\\n    grid-template-columns: repeat(2, 140px);\\n    grid-column-gap: 80px;\\n  }\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n\\n  transform: scale(1);\\n  transition: transform 0.5s;\\n}\\n.item-thumbnail:hover {\\n  transform: scale(1.1);\\n  transition: transform 0.5s;\\n}\\n\\n@media screen and (max-width: 833px) {\\n  .item-thumbnail {\\n    width: 140px;\\n    height: 220px;\\n  }\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  display: flex;\\n  gap: 0.3rem;\\n  align-items: flex-end;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.movie-item {\\n  cursor: pointer;\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\nbutton.disabled {\\n  background: #aaa;\\n  cursor: default;\\n}\\n\\ndiv.scroll-top {\\n  position: fixed;\\n  bottom: 12px;\\n  right: 24px;\\n  background-color: #f33f3f;\\n\\n  padding: 6px;\\n  border-radius: 100%;\\n}\\n\\nbutton.scroll-top {\\n  width: 18px;\\n\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat;\\n  background-size: contain;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n.skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  width: 100%;\\n  /* min-width: 1200px; */\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .short-search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n  display: none;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n  width: 275px;\\n}\\n\\nheader .short-search-box > .short-search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n@media screen and (max-width: 833px) {\\n  header > .search-box {\\n    display: none;\\n  }\\n  header > .short-search-box {\\n    display: block;\\n  }\\n}\\n\\nheader .search-box > .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.text-invalid-result {\\n  color: #aaa;\\n  font-size: 1.5rem;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  text-align: center;\\n  margin-top: 2rem;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n@media screen and (min-width: 834px) {\\n  .hidden {\\n    display: block;\\n  }\\n}\\n\\nheader .exit {\\n  background: #222;\\n}\\n\\nheader .exit > .short-search-button {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\nheader .show {\\n  display: block;\\n}\\n\\n/* 모달 *****************************************/\\n.modal {\\n  display: none;\\n}\\n\\n.window-fixed {\\n  overflow: hidden;\\n}\\n\\n.modal--open {\\n  display: block;\\n}\\n\\n.modal-backdrop {\\n  z-index: 5;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  background: rgba(0, 0, 0, 0.7);\\n}\\n\\n.modal-container {\\n  z-index: 5;\\n  position: fixed;\\n\\n  padding: 16px 24px;\\n\\n  background: #222222;\\n}\\n\\n@media screen and (min-width: 834px) {\\n  .modal-container {\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n\\n    max-width: 820px;\\n    width: 85%;\\n    min-height: 420px;\\n\\n    border-radius: 8px;\\n  }\\n}\\n\\n@media screen and (max-width: 833px) {\\n  .modal-container {\\n    bottom: 0;\\n\\n    width: 100%;\\n    height: 75%;\\n\\n    border-radius: 8px 8px 0px 0px;\\n  }\\n}\\n\\n.modal-close-button-box {\\n  display: flex;\\n  background-color: #383839;\\n  border-radius: 100%;\\n\\n  width: fit-content;\\n  height: fit-content;\\n  padding: 3px 6px;\\n  cursor: pointer;\\n}\\n\\n.modal-close-button {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") transparent no-repeat 0 3px;\\n  text-indent: -1000rem;\\n  background-size: contain;\\n  border: none;\\n  width: 12px;\\n}\\n\\n.modal-detail-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 4px;\\n\\n  margin: 0 -24px;\\n  padding: 0px 24px 8px;\\n  border-bottom: solid 1px #383839;\\n\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n}\\n\\n.modal-detail-header .empty {\\n  width: 24px;\\n}\\n\\n.modal-detail-body {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  margin-top: 32px;\\n  gap: 24px;\\n\\n  height: 270px;\\n}\\n\\n.modal-detail-body > .item-thumbnail {\\n  transform: none;\\n  min-width: 180px;\\n}\\n\\n@media screen and (max-width: 833px) {\\n  .modal-detail-body > .item-thumbnail {\\n    display: none;\\n  }\\n}\\n\\n.modal-detail-info-with-rating {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.modal-detail-info {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n}\\n\\n.modal-title.skeleton {\\n  min-width: 96px;\\n  min-height: 16px;\\n}\\n\\n.genre.skeleton {\\n  min-width: 96px;\\n  min-height: 16px;\\n}\\n\\n.vote-value.skeleton {\\n  min-width: 48px;\\n  min-height: 16px;\\n}\\n\\n.movie-description {\\n  min-height: 32px;\\n  max-height: 150px;\\n  overflow: scroll;\\n}\\n\\n.modal-detail-genre-with-vote {\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n}\\n\\n.vote {\\n  display: flex;\\n  align-items: center;\\n  gap: 4px;\\n}\\n\\n.vote > img {\\n  width: 20px;\\n  margin-top: -4px;\\n}\\n\\n/* 별점 *****************************************/\\n\\n.star {\\n  position: relative;\\n  width: fit-content;\\n}\\n\\n.star.star-range-input {\\n  left: 0;\\n  cursor: pointer;\\n  margin-left: -11px;\\n  opacity: 0;\\n}\\n\\n.star.filled-star {\\n  position: absolute;\\n  width: 0;\\n  left: 0;\\n  overflow: hidden;\\n  pointer-events: none;\\n  display: flex;\\n  gap: 1px;\\n}\\n\\n.star.empty-star {\\n  position: absolute;\\n  width: 0;\\n  left: 0;\\n  pointer-events: none;\\n  display: flex;\\n}\\n\\n.star {\\n  padding-bottom: 4px;\\n}\\n\\n.movie-rating {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n\\n  background-color: #383839;\\n  padding: 16px;\\n  border-radius: 16px;\\n}\\n\\n.rating-result {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n}\\n\\n@media screen and (max-width: 833px) {\\n  .movie-rating {\\n    justify-content: center;\\n  }\\n  .rating-result-text {\\n    display: none;\\n  }\\n}\\n\\n.text-body {\\n  font-size: 16px;\\n  line-height: 24px;\\n  font-weight: 400;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./templates/common.css":
/*!******************************!*\
  !*** ./templates/common.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?");

/***/ }),

/***/ "./templates/reset.css":
/*!*****************************!*\
  !*** ./templates/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_movieListBoxTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/movieListBoxTitle */ \"./src/constants/movieListBoxTitle.ts\");\n/* harmony import */ var _MovieHeader_MovieHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieHeader/MovieHeader */ \"./src/components/MovieHeader/MovieHeader.ts\");\n/* harmony import */ var _MovieMain_MovieMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieMain/MovieMain */ \"./src/components/MovieMain/MovieMain.ts\");\n/* harmony import */ var _common_generateScrollTopButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/generateScrollTopButton */ \"./src/components/common/generateScrollTopButton.ts\");\n/* harmony import */ var _domain_getMovieListByQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/getMovieListByQuery */ \"./src/domain/getMovieListByQuery.ts\");\n/* harmony import */ var _domain_getPopularMovieList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/getPopularMovieList */ \"./src/domain/getPopularMovieList.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nclass App {\n    constructor($root) {\n        this.FIRST_PAGE = 1;\n        this.currentPage = this.FIRST_PAGE;\n        this.query = \"\";\n        this.movieMain = new _MovieMain_MovieMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            title: _constants_movieListBoxTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popular,\n            getMoreMovies: this.renderNextPage.bind(this),\n        });\n        $root.append(new _MovieHeader_MovieHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            logoClickHandler: this.logoClickHandler.bind(this),\n            searchBoxSubmitHandler: this.searchBoxSubmitHandler.bind(this),\n        }).$element, this.movieMain.$element, (0,_common_generateScrollTopButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n        this.renderPopularMovieList();\n    }\n    logoClickHandler() {\n        this.query = \"\";\n        this.currentPage = this.FIRST_PAGE;\n        this.movieMain.changeMovieListBox({\n            title: _constants_movieListBoxTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popular,\n            getMoreMovies: this.renderNextPage.bind(this),\n        });\n        this.renderPopularMovieList();\n    }\n    searchBoxSubmitHandler(query) {\n        this.currentPage = this.FIRST_PAGE;\n        this.query = query;\n        this.movieMain.changeMovieListBox({\n            title: _constants_movieListBoxTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search(query),\n            getMoreMovies: this.renderSearchNextPage.bind(this),\n        });\n        this.searchMovies(query);\n    }\n    renderNextPage() {\n        this.currentPage += 1;\n        this.renderPopularMovieList();\n    }\n    renderSearchNextPage() {\n        this.currentPage += 1;\n        this.searchMovies(this.query);\n    }\n    renderPopularMovieList() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const { movieList, totalPage } = yield (0,_domain_getPopularMovieList__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n                    page: this.currentPage,\n                });\n                if (this.currentPage === totalPage) {\n                    this.movieMain.removeMovieMoreObserver();\n                }\n                this.movieMain.reRender(movieList);\n            }\n            catch (error) {\n                if (error instanceof Error) {\n                    this.currentPage -= 1;\n                    this.movieMain.renderMessage(error.message);\n                    this.movieMain.reRender([]);\n                }\n            }\n        });\n    }\n    searchMovies(query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const { movieList, totalPage } = yield (0,_domain_getMovieListByQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                    page: this.currentPage,\n                    query,\n                });\n                if (!movieList.length) {\n                    this.renderNoResult(\"검색 결과가 없습니다.\");\n                }\n                if (this.currentPage === totalPage) {\n                    this.movieMain.removeMovieMoreObserver();\n                }\n                this.movieMain.reRender(movieList);\n            }\n            catch (error) {\n                if (error instanceof Error) {\n                    this.currentPage -= 1;\n                    this.renderNoResult(error.message);\n                    this.movieMain.reRender([]);\n                }\n            }\n        });\n    }\n    renderNoResult(message) {\n        this.movieMain.removeMovieMoreObserver();\n        this.movieMain.renderMessage(message);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App.ts?");

/***/ }),

/***/ "./src/components/MovieHeader/MovieHeader.ts":
/*!***************************************************!*\
  !*** ./src/components/MovieHeader/MovieHeader.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MovieSearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieSearchBox */ \"./src/components/MovieHeader/MovieSearchBox.ts\");\n/* harmony import */ var _templates_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../templates/logo.png */ \"./templates/logo.png\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n/* harmony import */ var _common_generateHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/generateHeader */ \"./src/components/common/generateHeader.ts\");\n\n\n\n\nclass MovieHeader {\n    constructor(props) {\n        this.generateShortSearchBox = () => {\n            const $shortSearchButton = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                tagName: \"button\",\n                attribute: { class: \"short-search-button\" },\n                children: [\"검색\"],\n            });\n            const $shortSearchBox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                tagName: \"div\",\n                attribute: { class: \"short-search-box\" },\n                children: [$shortSearchButton],\n                eventListener: {\n                    click: this.switchShortSearchBox.bind(this),\n                },\n            });\n            return $shortSearchBox;\n        };\n        this.$element = this.generateMovieHeader(props);\n    }\n    generateMovieHeader({ logoClickHandler, searchBoxSubmitHandler, }) {\n        const $logoImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            tagName: \"img\",\n            attribute: { src: _templates_logo_png__WEBPACK_IMPORTED_MODULE_1__, alt: \"MovieList 로고\" },\n        });\n        const $logo = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            tagName: \"h1\",\n            children: [$logoImg],\n            eventListener: {\n                click: () => {\n                    searchBox.clear();\n                    logoClickHandler();\n                },\n            },\n        });\n        const $shortSearchBox = this.generateShortSearchBox();\n        const searchBox = new _MovieSearchBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            searchBoxSubmitHandler,\n        });\n        return (0,_common_generateHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            children: [$logo, searchBox.$element, $shortSearchBox],\n        });\n    }\n    switchShortSearchBox(e) {\n        var _a, _b;\n        if (!(e.currentTarget instanceof HTMLElement)) {\n            return;\n        }\n        e.currentTarget.classList.toggle(\"exit\");\n        const $logo = (_a = this.$element.firstChild) === null || _a === void 0 ? void 0 : _a.firstChild;\n        const $searchBox = (_b = this.$element.firstChild) === null || _b === void 0 ? void 0 : _b.nextSibling;\n        $logo.classList.toggle(\"hidden\");\n        $searchBox.classList.toggle(\"show\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieHeader);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieHeader/MovieHeader.ts?");

/***/ }),

/***/ "./src/components/MovieHeader/MovieSearchBox.ts":
/*!******************************************************!*\
  !*** ./src/components/MovieHeader/MovieSearchBox.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_generateSearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/generateSearchBox */ \"./src/components/common/generateSearchBox.ts\");\n\nclass MovieSearchBox {\n    constructor(props) {\n        this.props = props;\n        this.$element = (0,_common_generateSearchBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            placeholder: MovieSearchBox.PLACEHOLDER,\n            buttonText: MovieSearchBox.PLACEHOLDER,\n            onSubmitHandler: this.searchByQuery.bind(this),\n        });\n    }\n    clear() {\n        if (this.$element instanceof HTMLFormElement) {\n            this.$element.reset();\n        }\n    }\n    searchByQuery(e) {\n        e.preventDefault();\n        if (!(e.target instanceof HTMLFormElement)) {\n            return;\n        }\n        try {\n            const query = e.target[\"query\"].value;\n            this.validateQuery(query);\n            this.props.searchBoxSubmitHandler(query);\n        }\n        catch (error) {\n            if (error instanceof Error)\n                alert(error.message);\n        }\n    }\n    validateQuery(query) {\n        if (query.trim().length === 0) {\n            throw new Error(\"검색어를 입력해주세요.\");\n        }\n        if (query.length > 500) {\n            throw new Error(\"검색어는 500자 미만으로 입력해주세요.\");\n        }\n    }\n}\nMovieSearchBox.PLACEHOLDER = \"검색\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieSearchBox);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieHeader/MovieSearchBox.ts?");

/***/ }),

/***/ "./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieDetailModal.ts":
/*!************************************************************************************!*\
  !*** ./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieDetailModal.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domain_handleUserRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../domain/handleUserRating */ \"./src/domain/handleUserRating.ts\");\n/* harmony import */ var _utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/querySelectors */ \"./src/components/utils/querySelectors.ts\");\n/* harmony import */ var _utils_CommonHtmlElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/CommonHtmlElement */ \"./src/components/utils/CommonHtmlElement.ts\");\n/* harmony import */ var _MovieRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieRating */ \"./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieRating.ts\");\n/* harmony import */ var _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../templates/star_filled.png */ \"./templates/star_filled.png\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/createElement */ \"./src/components/utils/createElement.ts\");\n/* harmony import */ var _common_generateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/generateModal */ \"./src/components/common/generateModal.ts\");\n/* harmony import */ var _domain_getMovieDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../domain/getMovieDetails */ \"./src/domain/getMovieDetails.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\nclass MovieDetailModal {\n    constructor(movieId) {\n        this.movieId = movieId;\n        const children = this.generateDetailModalTemplate();\n        this.$element = (0,_common_generateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            children: [...children],\n            closeModal: this.toggle.bind(this),\n        });\n        this.movieDetails();\n    }\n    toggle() {\n        var _a;\n        this.$element.classList.toggle(\"modal--open\");\n        (_a = (0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\"body\")) === null || _a === void 0 ? void 0 : _a.classList.toggle(\"window-fixed\");\n    }\n    reRender({ id, korTitle, genres, voteAverage, descriptions, posterPath, }) {\n        const title = new _utils_CommonHtmlElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\".modal-detail-header>.modal-title\"));\n        const genre = new _utils_CommonHtmlElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\"span.genre\"));\n        const vote = new _utils_CommonHtmlElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\"span.vote-value\"));\n        const description = new _utils_CommonHtmlElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\".movie-description\"));\n        const poster = new _utils_CommonHtmlElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\".modal-detail-body>img.item-thumbnail\"));\n        const rating = (0,_domain_handleUserRating__WEBPACK_IMPORTED_MODULE_0__.getUserRating)(id);\n        this.renderUserRating(rating);\n        title.injectTextContent(korTitle);\n        title.removeSkeleton();\n        genre.injectTextContent(genres.join(\", \"));\n        genre.removeSkeleton();\n        vote.injectTextContent(String(voteAverage));\n        vote.removeSkeleton();\n        description.injectTextContent(descriptions);\n        description.removeSkeleton();\n        poster.setAttribute(\"src\", posterPath);\n        poster.removeSkeleton();\n    }\n    movieDetails() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const res = yield (0,_domain_getMovieDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this.movieId);\n            this.reRender(res);\n        });\n    }\n    renderUserRating(rating = 0) {\n        var _a;\n        const $rating = new _MovieRating__WEBPACK_IMPORTED_MODULE_3__[\"default\"](rating, this.saveUserRating.bind(this))\n            .$element;\n        (_a = (0,_utils_querySelectors__WEBPACK_IMPORTED_MODULE_1__.$)(\".movie-rating\")) === null || _a === void 0 ? void 0 : _a.replaceWith($rating);\n    }\n    saveUserRating(rating) {\n        (0,_domain_handleUserRating__WEBPACK_IMPORTED_MODULE_0__.setUserRating)({ id: this.movieId, userRating: rating });\n    }\n    generateDetailModalTemplate() {\n        const $detailHeader = this.generateDetailHeader();\n        const $detailBody = this.generateDetailBody();\n        return [$detailHeader, $detailBody];\n    }\n    generateDetailHeader() {\n        const $empty = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            attribute: { class: \"empty\" },\n        });\n        const $title = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"h2\",\n            attribute: { class: \"modal-title skeleton\" },\n        });\n        const $exitButton = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"button\",\n            attribute: { class: \"modal-close-button\" },\n            children: [\"닫기\"],\n        });\n        const $buttonDiv = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            attribute: { class: \"modal-close-button-box\" },\n            children: [$exitButton],\n            eventListener: { click: this.toggle.bind(this) },\n        });\n        const $detailHeader = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            children: [$empty, $title, $buttonDiv],\n            attribute: { class: \"modal-detail-header\" },\n        });\n        return $detailHeader;\n    }\n    generateDetailBody() {\n        const $poster = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"img\",\n            attribute: {\n                class: \"item-thumbnail skeleton\",\n            },\n        });\n        const $detailInfoWithRating = this.generateDetailInfoWithRating();\n        const $detailBody = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            children: [$poster, $detailInfoWithRating],\n            attribute: { class: \"modal-detail-body\" },\n        });\n        return $detailBody;\n    }\n    generateDetailInfoWithRating() {\n        const $genreWithVote = this.generateGenreWithVote();\n        const $description = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            attribute: { class: \"movie-description text-body skeleton\" },\n        });\n        const $detailInfo = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            children: [$genreWithVote, $description],\n            attribute: { class: \"modal-detail-info\" },\n        });\n        const $rating = new _MovieRating__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().$element;\n        const $detailInfoWithRating = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            children: [$detailInfo, $rating],\n            attribute: { class: \"modal-detail-info-with-rating\" },\n        });\n        return $detailInfoWithRating;\n    }\n    generateGenreWithVote() {\n        const $genre = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"span\",\n            attribute: { class: \"genre skeleton\" },\n        });\n        const $starImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"img\",\n            attribute: {\n                src: _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_4__,\n                alt: \"별점\",\n            },\n        });\n        const $voteValue = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"span\",\n            attribute: { class: \"vote-value skeleton\" },\n        });\n        const $vote = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"span\",\n            children: [$starImg, $voteValue],\n            attribute: { class: \"vote\" },\n        });\n        const $genreWithVote = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            tagName: \"div\",\n            children: [$genre, $vote],\n            attribute: { class: \"modal-detail-genre-with-vote text-body\" },\n        });\n        return $genreWithVote;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieDetailModal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieDetailModal.ts?");

/***/ }),

/***/ "./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieRating.ts":
/*!*******************************************************************************!*\
  !*** ./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieRating.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/rating */ \"./src/constants/rating.ts\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createElement */ \"./src/components/utils/createElement.ts\");\n/* harmony import */ var _common_generateStarRangeInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/generateStarRangeInput */ \"./src/components/common/generateStarRangeInput.ts\");\n\n\n\nclass MovieRating {\n    constructor(rating = 0, saveRating = () => { }) {\n        this.rating = rating;\n        this.saveRating = saveRating;\n        this.$element = this.generateMovieRating();\n    }\n    rateMovie(e) {\n        if (!(e.target instanceof HTMLInputElement)) {\n            return;\n        }\n        this.rating = Number(e.target.value);\n        this.reRender();\n        this.saveRating(this.rating);\n    }\n    reRender() {\n        var _a;\n        const $rangeInput = document.querySelector(\"input.star-rating-input\");\n        if ($rangeInput instanceof HTMLInputElement) {\n            $rangeInput.value = String(this.rating);\n        }\n        (_a = document\n            .querySelector(\".rating-result\")) === null || _a === void 0 ? void 0 : _a.replaceWith(this.generateRatingResult());\n    }\n    generateMovieRating() {\n        const $title = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"span\",\n            children: [\"내 별점\"],\n        });\n        const $starRangeInput = (0,_common_generateStarRangeInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.rateMovie.bind(this), this.rating);\n        const $ratingResult = this.generateRatingResult();\n        const movieRating = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"div\",\n            children: [$title, $starRangeInput, $ratingResult],\n            attribute: { class: \"movie-rating\" },\n        });\n        return movieRating;\n    }\n    generateRatingResult() {\n        const $ratingNumber = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"span\",\n            children: [this.ratingNumber(this.rating)],\n        });\n        const $ratingText = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"span\",\n            children: [this.ratingText(this.rating)],\n            attribute: { class: \"rating-result-text\" },\n        });\n        const $ratingResult = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"div\",\n            children: [$ratingNumber, $ratingText],\n            attribute: { class: \"rating-result\" },\n        });\n        return $ratingResult;\n    }\n    ratingNumber(rating) {\n        return String((0,_constants_rating__WEBPACK_IMPORTED_MODULE_0__.getRatingNumber)(rating));\n    }\n    ratingText(rating) {\n        return (0,_constants_rating__WEBPACK_IMPORTED_MODULE_0__.getRatingText)(rating);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieRating);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieRating.ts?");

/***/ }),

/***/ "./src/components/MovieMain/MovieListBox/MovieList/MovieItem.ts":
/*!**********************************************************************!*\
  !*** ./src/components/MovieMain/MovieListBox/MovieList/MovieItem.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/api */ \"./src/constants/api.ts\");\n/* harmony import */ var _templates_image_Placeholder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../templates/image-Placeholder.png */ \"./templates/image-Placeholder.png\");\n/* harmony import */ var _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../templates/star_filled.png */ \"./templates/star_filled.png\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\n\n\n\nconst SKELETON = { id: 0, korTitle: \"\", posterPath: \"\", voteAverage: 0 };\nclass MovieItem {\n    constructor({ id, korTitle, posterPath, voteAverage } = SKELETON) {\n        this.$element = this.generateMovieItem({\n            id,\n            korTitle,\n            posterPath,\n            voteAverage,\n        });\n    }\n    generateMovieItem(movie) {\n        const $div = this.generateItemCard(movie);\n        const $a = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"div\",\n            children: [$div],\n        });\n        const $li = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"li\",\n            attribute: { id: String(movie.id), class: \"movie-item\" },\n            children: [$a],\n        });\n        return $li;\n    }\n    generateItemCard(movie) {\n        const $img = this.generatePoster(movie.id, movie.posterPath);\n        const $title = this.generateTitle(movie.korTitle);\n        const $voteAverage = this.generateVoteAverage(movie.voteAverage);\n        const $div = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"div\",\n            attribute: {\n                class: \"item-card\",\n            },\n            children: [$img, $title, $voteAverage],\n        });\n        return $div;\n    }\n    generatePoster(id, posterPath) {\n        const $poster = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"img\",\n            attribute: {\n                class: `item-thumbnail ${id ? \"\" : \"skeleton\"}`,\n                loading: \"lazy\",\n                alt: \"\",\n            },\n        });\n        if (id) {\n            $poster.setAttribute(\"src\", posterPath ? `${_constants_api__WEBPACK_IMPORTED_MODULE_0__.IMAGE_BASE_URL}${posterPath}` : _templates_image_Placeholder_png__WEBPACK_IMPORTED_MODULE_1__);\n        }\n        return $poster;\n    }\n    generateTitle(title) {\n        return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"p\",\n            children: [title],\n            attribute: {\n                class: `item-title ${title ? \"\" : \"skeleton\"}`,\n            },\n        });\n    }\n    generateVoteAverage(voteAverage) {\n        const $star = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"img\",\n            attribute: {\n                src: _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_2__,\n                alt: \"별점\",\n            },\n        });\n        const $voteValue = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"span\",\n            children: [String(voteAverage)],\n        });\n        const $vote = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"p\",\n            children: voteAverage ? [$star, $voteValue] : [],\n            attribute: {\n                class: `item-score ${voteAverage ? \"\" : \"skeleton\"}`,\n            },\n        });\n        return $vote;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieItem);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieMain/MovieListBox/MovieList/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieMain/MovieListBox/MovieList/MovieList.ts":
/*!**********************************************************************!*\
  !*** ./src/components/MovieMain/MovieListBox/MovieList/MovieList.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MovieItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieItem */ \"./src/components/MovieMain/MovieListBox/MovieList/MovieItem.ts\");\n/* harmony import */ var _MovieDetailModal_MovieDetailModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MovieDetailModal/MovieDetailModal */ \"./src/components/MovieMain/MovieListBox/MovieDetailModal/MovieDetailModal.ts\");\n/* harmony import */ var _utils_ObserveIntersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ObserveIntersection */ \"./src/components/utils/ObserveIntersection.ts\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\n\n\n\nclass MovieList {\n    constructor(getMoreMovies) {\n        this.STUB_ITEM_LENGTH = 20;\n        this.isLoading = true;\n        this.touchBottom = false;\n        this.getMoreMovies = getMoreMovies;\n        this.movieList = Array.from({ length: this.STUB_ITEM_LENGTH }).map(() => new _MovieItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n        this.$element = this.generateMovieList();\n        this.setScrollObserver(getMoreMovies);\n        this.domObserver = new MutationObserver(() => {\n            this.setScrollObserver(getMoreMovies);\n        });\n        const config = { attributes: true, childList: true, subtree: false };\n        this.domObserver.observe(this.$element, config);\n    }\n    reRender(movies) {\n        const movieList = movies.map((movie) => new _MovieItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](movie).$element);\n        this.removeAllSkeleton();\n        this.$element.append(...movieList);\n        this.isLoading = false;\n        if (this.touchBottom) {\n            this.setScrollObserver(this.getMoreMovies);\n        }\n    }\n    appendSkeleton() {\n        this.movieList = Array.from({ length: this.STUB_ITEM_LENGTH }).map(() => new _MovieItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n        this.$element.append(...this.movieList.map((item) => item.$element));\n        this.isLoading = true;\n        this.touchBottom = false;\n    }\n    removeAllSkeleton() {\n        this.movieList.forEach((movieItem) => {\n            movieItem.$element.remove();\n        });\n    }\n    renderMessage(message) {\n        this.removeAllSkeleton();\n        const textInvalidResult = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"div\",\n            attribute: {\n                class: \"text-invalid-result\",\n            },\n            children: [message],\n        });\n        this.$element.append(textInvalidResult);\n    }\n    removeMessage() {\n        const $lastChild = this.$element.lastChild;\n        if (!($lastChild instanceof HTMLElement)) {\n            return;\n        }\n        if ($lastChild.classList.contains(\"text-invalid-result\")) {\n            $lastChild.remove();\n        }\n    }\n    clearDomObserver() {\n        var _a;\n        (_a = this.domObserver) === null || _a === void 0 ? void 0 : _a.disconnect();\n    }\n    setScrollObserver(getMoreMovies) {\n        if (!(this.$element.lastChild instanceof HTMLElement)) {\n            return;\n        }\n        const observer = new _utils_ObserveIntersection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            target: this.$element.lastChild,\n            callback: () => {\n                this.touchBottom = true;\n                if (this.isLoading) {\n                    return;\n                }\n                observer.clearObserveIntersection();\n                getMoreMovies();\n            },\n            options: {\n                threshold: 0.5,\n            },\n        });\n    }\n    showDetailModal(e) {\n        if (!(e.target instanceof HTMLElement)) {\n            return;\n        }\n        const movieItem = e.target.closest(\"li\");\n        if (!movieItem) {\n            return;\n        }\n        const movieId = Number(movieItem.getAttribute(\"id\"));\n        const detailModal = new _MovieDetailModal_MovieDetailModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"](movieId);\n        const $modalSection = document.querySelector(\".modal-section\");\n        $modalSection === null || $modalSection === void 0 ? void 0 : $modalSection.replaceChildren(detailModal.$element);\n        detailModal.toggle();\n    }\n    generateMovieList() {\n        return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            tagName: \"ul\",\n            attribute: { class: \"item-list\" },\n            children: this.movieList.map((item) => item.$element),\n            eventListener: { click: this.showDetailModal.bind(this) },\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieMain/MovieListBox/MovieList/MovieList.ts?");

/***/ }),

/***/ "./src/components/MovieMain/MovieListBox/MovieListBox.ts":
/*!***************************************************************!*\
  !*** ./src/components/MovieMain/MovieListBox/MovieListBox.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MovieList_MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieList/MovieList */ \"./src/components/MovieMain/MovieListBox/MovieList/MovieList.ts\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\n\nclass MovieListBox {\n    constructor({ title, getMoreMovies, }) {\n        const $h2 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"h2\",\n            children: [title],\n        });\n        this.movieList = new _MovieList_MovieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](() => {\n            this.movieList.removeMessage();\n            this.showMoreMovies();\n            getMoreMovies();\n        });\n        this.$element = this.generateMovieListBox({\n            children: [$h2, this.movieList.$element],\n        });\n    }\n    reRender(movieList) {\n        this.movieList.reRender(movieList);\n    }\n    renderMessage(message) {\n        this.movieList.renderMessage(message);\n    }\n    showMoreMovies() {\n        this.movieList.appendSkeleton();\n    }\n    removeMovieMoreButton() {\n        this.movieList.clearDomObserver();\n    }\n    generateMovieListBox({ children }) {\n        const $section = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"section\",\n            attribute: { class: \"item-view\" },\n            children,\n        });\n        return $section;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListBox);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieMain/MovieListBox/MovieListBox.ts?");

/***/ }),

/***/ "./src/components/MovieMain/MovieMain.ts":
/*!***********************************************!*\
  !*** ./src/components/MovieMain/MovieMain.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MovieListBox_MovieListBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieListBox/MovieListBox */ \"./src/components/MovieMain/MovieListBox/MovieListBox.ts\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n/* harmony import */ var _common_generateMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/generateMain */ \"./src/components/common/generateMain.ts\");\n\n\n\nclass MovieMain {\n    constructor({ title, getMoreMovies }) {\n        this.movieListBox = new _MovieListBox_MovieListBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            title,\n            getMoreMovies,\n        });\n        const $modalSection = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"section\",\n            attribute: { class: \"modal-section\" },\n        });\n        this.$element = (0,_common_generateMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            children: [this.movieListBox.$element, $modalSection],\n        });\n    }\n    changeMovieListBox({ title, getMoreMovies }) {\n        this.movieListBox = new _MovieListBox_MovieListBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            title,\n            getMoreMovies,\n        });\n        this.replace(this.movieListBox.$element);\n    }\n    reRender(movieList) {\n        this.movieListBox.reRender(movieList);\n    }\n    removeMovieMoreObserver() {\n        this.movieListBox.removeMovieMoreButton();\n    }\n    renderMessage(message) {\n        this.movieListBox.renderMessage(message);\n    }\n    replace(movieListBoxElement) {\n        const $modalSection = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            tagName: \"section\",\n            attribute: { class: \"modal-section\" },\n        });\n        this.$element.replaceChildren(movieListBoxElement, $modalSection);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieMain);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieMain/MovieMain.ts?");

/***/ }),

/***/ "./src/components/common/generateHeader.ts":
/*!*************************************************!*\
  !*** ./src/components/common/generateHeader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\nconst generateHeader = ({ children }) => {\n    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"header\",\n        children,\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHeader);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/generateHeader.ts?");

/***/ }),

/***/ "./src/components/common/generateMain.ts":
/*!***********************************************!*\
  !*** ./src/components/common/generateMain.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\nconst generateMain = ({ children }) => {\n    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"main\",\n        children,\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMain);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/generateMain.ts?");

/***/ }),

/***/ "./src/components/common/generateModal.ts":
/*!************************************************!*\
  !*** ./src/components/common/generateModal.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\nconst generateModal = ({ children, closeModal, }) => {\n    const backDrop = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"div\",\n        attribute: { class: \"modal-backdrop\" },\n    });\n    const container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"div\",\n        attribute: { class: \"modal-container\" },\n        children: [...children],\n    });\n    const modalDiv = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"div\",\n        attribute: { class: \"modal\" },\n        children: [backDrop, container],\n    });\n    backDrop.addEventListener(\"click\", () => {\n        closeModal();\n    });\n    const handleEscKey = (e) => {\n        if (e.key === \"Escape\") {\n            closeModal();\n        }\n        document.removeEventListener(\"keydown\", handleEscKey);\n    };\n    document.addEventListener(\"keydown\", handleEscKey);\n    return modalDiv;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateModal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/generateModal.ts?");

/***/ }),

/***/ "./src/components/common/generateScrollTopButton.ts":
/*!**********************************************************!*\
  !*** ./src/components/common/generateScrollTopButton.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\nconst generateScrollTopButton = () => {\n    const $button = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"button\",\n        children: [\"맨 위로\"],\n        attribute: { class: \"scroll-top\" },\n    });\n    const $buttonDiv = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"div\",\n        children: [$button],\n        attribute: { class: \"scroll-top\" },\n        eventListener: { click: scrollTop },\n    });\n    return $buttonDiv;\n};\nconst scrollTop = () => {\n    window.scrollTo({\n        top: 0,\n        left: 0,\n        behavior: \"smooth\",\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateScrollTopButton);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/generateScrollTopButton.ts?");

/***/ }),

/***/ "./src/components/common/generateSearchBox.ts":
/*!****************************************************!*\
  !*** ./src/components/common/generateSearchBox.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\nconst generateSearchBox = ({ placeholder = \"\", buttonText = \"\", onSubmitHandler, }) => {\n    const $input = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"input\",\n        attribute: { placeholder, type: \"text\", name: \"query\" },\n    });\n    const $button = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"button\",\n        attribute: { class: \"search-button\" },\n        children: [buttonText],\n    });\n    const $form = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: \"form\",\n        attribute: { class: \"search-box\" },\n        eventListener: {\n            submit: onSubmitHandler,\n        },\n        children: [$input, $button],\n    });\n    return $form;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateSearchBox);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/generateSearchBox.ts?");

/***/ }),

/***/ "./src/components/common/generateStarRangeInput.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/generateStarRangeInput.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_star_empty_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../templates/star_empty.png */ \"./templates/star_empty.png\");\n/* harmony import */ var _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../templates/star_filled.png */ \"./templates/star_filled.png\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElement */ \"./src/components/utils/createElement.ts\");\n\n\n\nconst generateStarRangeInput = (onChangeHandler, value = 0) => {\n    const rangeInput = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        tagName: \"input\",\n        attribute: {\n            type: \"range\",\n            value: String(value),\n            min: \"0\",\n            max: \"5\",\n            class: \"star star-range-input\",\n        },\n        eventListener: {\n            change: onChangeHandler,\n        },\n    });\n    const emptyStars = Array.from({ length: 5 }).map((_) => {\n        return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            tagName: \"img\",\n            attribute: { src: _templates_star_empty_png__WEBPACK_IMPORTED_MODULE_0__, alt: \"비어있는 별\" },\n        });\n    });\n    const filledStars = Array.from({ length: 5 }).map((_) => {\n        return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            tagName: \"img\",\n            attribute: { src: _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_1__, alt: \"채워진 별\" },\n        });\n    });\n    const emptyStarBox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        tagName: \"span\",\n        attribute: { class: \"star empty-star\" },\n        children: [...emptyStars],\n    });\n    const filledStarBox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        tagName: \"span\",\n        attribute: { class: \"star filled-star\" },\n        children: [...filledStars],\n    });\n    const inputBox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        tagName: \"div\",\n        attribute: { class: \"star\" },\n        children: [emptyStarBox, filledStarBox, rangeInput],\n        eventListener: {\n            input: (e) => {\n                drawStar(e.target, filledStarBox);\n            },\n        },\n    });\n    drawStar(rangeInput, filledStarBox);\n    return inputBox;\n};\nconst drawStar = (input, filledStarBox) => {\n    const value = Number(input.value);\n    filledStarBox.style.width = `${value * 25}px`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateStarRangeInput);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/generateStarRangeInput.ts?");

/***/ }),

/***/ "./src/components/utils/CommonHtmlElement.ts":
/*!***************************************************!*\
  !*** ./src/components/utils/CommonHtmlElement.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/components/utils/createElement.ts\");\n\nclass CommonHtmlElement {\n    constructor(element = null) {\n        this.$element = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            tagName: \"div\",\n        });\n        if (!(element instanceof HTMLElement)) {\n            throw new Error(\"[ERROR] CommonHtmlElement에 HTMLElement이 아닌 인자가 들어왔습니다.\");\n        }\n        this.$element = element;\n    }\n    injectTextContent(textContent) {\n        this.$element.textContent = textContent;\n    }\n    removeSkeleton() {\n        this.$element.classList.remove(\"skeleton\");\n    }\n    setValue(value) {\n        if (this.$element instanceof HTMLInputElement) {\n            this.$element.value = value;\n            return;\n        }\n        this.$element.setAttribute(\"value\", value);\n    }\n    setAttribute(qualifiedName, value) {\n        this.$element.setAttribute(qualifiedName, value);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonHtmlElement);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/utils/CommonHtmlElement.ts?");

/***/ }),

/***/ "./src/components/utils/ObserveIntersection.ts":
/*!*****************************************************!*\
  !*** ./src/components/utils/ObserveIntersection.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ObserveIntersection {\n    constructor({ target, callback, options }) {\n        this.observer = this.registeredObserver({ target, callback, options });\n    }\n    registeredObserver({ target, callback, options }) {\n        const observer = new IntersectionObserver((entries) => {\n            entries.forEach((entry) => {\n                if (entry.isIntersecting) {\n                    callback();\n                }\n            });\n        }, options);\n        observer.observe(target);\n        return observer;\n    }\n    clearObserveIntersection() {\n        this.observer.disconnect();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObserveIntersection);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/utils/ObserveIntersection.ts?");

/***/ }),

/***/ "./src/components/utils/createElement.ts":
/*!***********************************************!*\
  !*** ./src/components/utils/createElement.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = ({ tagName, attribute = {}, eventListener: eventListener = {}, children = [], }) => {\n    const $element = document.createElement(tagName);\n    Object.entries(attribute).forEach(([key, value]) => {\n        $element.setAttribute(key, value);\n    });\n    Object.entries(eventListener).forEach(([eventType, listener]) => {\n        $element.addEventListener(eventType, listener);\n    });\n    $element.append(...children);\n    return $element;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/utils/createElement.ts?");

/***/ }),

/***/ "./src/components/utils/querySelectors.ts":
/*!************************************************!*\
  !*** ./src/components/utils/querySelectors.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (query) => {\n    return document.querySelector(query);\n};\nconst $$ = (query) => {\n    return document.querySelectorAll(query);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/utils/querySelectors.ts?");

/***/ }),

/***/ "./src/constants/api.ts":
/*!******************************!*\
  !*** ./src/constants/api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"DETAIL_MOVIE_URL_WITHOUT_ID\": () => (/* binding */ DETAIL_MOVIE_URL_WITHOUT_ID),\n/* harmony export */   \"IMAGE_BASE_URL\": () => (/* binding */ IMAGE_BASE_URL),\n/* harmony export */   \"POPULAR_MOVIES_URL\": () => (/* binding */ POPULAR_MOVIES_URL),\n/* harmony export */   \"SEARCH_MOVIES_URL\": () => (/* binding */ SEARCH_MOVIES_URL)\n/* harmony export */ });\nconst API_KEY = \"c01bb4737cff3edd837f4e16d7bce5c3\";\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nconst IMAGE_BASE_URL = \"https://image.tmdb.org/t/p/w500\";\nconst POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular`;\nconst SEARCH_MOVIES_URL = `${BASE_URL}/search/movie`;\nconst DETAIL_MOVIE_URL_WITHOUT_ID = `${BASE_URL}/movie`;\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/api.ts?");

/***/ }),

/***/ "./src/constants/movieListBoxTitle.ts":
/*!********************************************!*\
  !*** ./src/constants/movieListBoxTitle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MOVIE_LIST_BOX_TITLE = {\n    popular: \"지금 인기있는 영화\",\n    search: (query) => `\"${query}\" 검색 결과`,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MOVIE_LIST_BOX_TITLE);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/movieListBoxTitle.ts?");

/***/ }),

/***/ "./src/constants/rating.ts":
/*!*********************************!*\
  !*** ./src/constants/rating.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_RATING\": () => (/* binding */ DEFAULT_RATING),\n/* harmony export */   \"MAX_RATING\": () => (/* binding */ MAX_RATING),\n/* harmony export */   \"getRatingNumber\": () => (/* binding */ getRatingNumber),\n/* harmony export */   \"getRatingText\": () => (/* binding */ getRatingText)\n/* harmony export */ });\nconst DEFAULT_RATING = 0;\nconst MAX_RATING = 5;\nconst getRatingNumber = (rating) => {\n    return rating * 2;\n};\nconst getRatingText = (rating) => {\n    switch (rating) {\n        case 1:\n            return \"최악이예요\";\n        case 2:\n            return \"별로예요\";\n        case 3:\n            return \"보통이에요\";\n        case 4:\n            return \"재미있어요\";\n        case 5:\n            return \"명작이에요\";\n        default:\n            return \"별점을 매겨보세요\";\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/rating.ts?");

/***/ }),

/***/ "./src/domain/getMovieDetails.ts":
/*!***************************************!*\
  !*** ./src/domain/getMovieDetails.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/api */ \"./src/constants/api.ts\");\n/* harmony import */ var _templates_image_Placeholder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/image-Placeholder.png */ \"./templates/image-Placeholder.png\");\n/* harmony import */ var _validateResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateResponse */ \"./src/domain/validateResponse.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst getMovieDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const url = _constants_api__WEBPACK_IMPORTED_MODULE_0__.DETAIL_MOVIE_URL_WITHOUT_ID;\n    const queryParams = `language=ko-KR&api_key=${_constants_api__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`;\n    const detailMovieUrl = `${url}/${id}?${queryParams}`;\n    const res = yield fetch(detailMovieUrl);\n    (0,_validateResponse__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res.status);\n    const movieDetails = yield res.json();\n    return extractMovieDetails(movieDetails);\n});\nconst extractMovieDetails = (res) => {\n    return {\n        id: res.id,\n        korTitle: res.title,\n        genres: res.genres.map((el) => el.name),\n        voteAverage: res.vote_average,\n        descriptions: res.overview ? res.overview : \"이 영화의 설명이 없습니다.\",\n        posterPath: res.poster_path\n            ? _constants_api__WEBPACK_IMPORTED_MODULE_0__.IMAGE_BASE_URL + res.poster_path\n            : _templates_image_Placeholder_png__WEBPACK_IMPORTED_MODULE_1__,\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieDetails);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/getMovieDetails.ts?");

/***/ }),

/***/ "./src/domain/getMovieListByQuery.ts":
/*!*******************************************!*\
  !*** ./src/domain/getMovieListByQuery.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/api */ \"./src/constants/api.ts\");\n/* harmony import */ var _validateResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateResponse */ \"./src/domain/validateResponse.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst getMovieListByQuery = ({ page, query, }) => __awaiter(void 0, void 0, void 0, function* () {\n    const url = _constants_api__WEBPACK_IMPORTED_MODULE_0__.SEARCH_MOVIES_URL;\n    const queryParams = `language=ko-KR&page=${page}&query=${query}&api_key=${_constants_api__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`;\n    const moviesUrl = `${url}?${queryParams}`;\n    const res = yield fetch(moviesUrl);\n    (0,_validateResponse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res.status);\n    const movieList = yield res.json();\n    return {\n        movieList: extractMovies(movieList.results),\n        totalPage: movieList.total_pages,\n    };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieListByQuery);\nconst extractMovies = (movies) => {\n    return movies.map((movie) => ({\n        id: movie.id,\n        korTitle: movie.title,\n        posterPath: movie.poster_path,\n        voteAverage: movie.vote_average,\n    }));\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/getMovieListByQuery.ts?");

/***/ }),

/***/ "./src/domain/getPopularMovieList.ts":
/*!*******************************************!*\
  !*** ./src/domain/getPopularMovieList.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/api */ \"./src/constants/api.ts\");\n/* harmony import */ var _validateResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateResponse */ \"./src/domain/validateResponse.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst getPopularMovieList = ({ page }) => __awaiter(void 0, void 0, void 0, function* () {\n    const url = _constants_api__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIES_URL;\n    const queryParams = `language=ko-KR&page=${page}&api_key=${_constants_api__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`;\n    const popularMoviesUrl = `${url}?${queryParams}`;\n    const res = yield fetch(popularMoviesUrl);\n    (0,_validateResponse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res.status);\n    const popularMovieList = yield res.json();\n    return {\n        movieList: extractMovies(popularMovieList.results),\n        totalPage: popularMovieList.total_pages,\n    };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPopularMovieList);\nconst extractMovies = (movies) => {\n    return movies.map((movie) => ({\n        id: movie.id,\n        korTitle: movie.title,\n        posterPath: movie.poster_path,\n        voteAverage: movie.vote_average,\n    }));\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/getPopularMovieList.ts?");

/***/ }),

/***/ "./src/domain/handleUserRating.ts":
/*!****************************************!*\
  !*** ./src/domain/handleUserRating.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserRating\": () => (/* binding */ getUserRating),\n/* harmony export */   \"setUserRating\": () => (/* binding */ setUserRating)\n/* harmony export */ });\n/* harmony import */ var _constants_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/rating */ \"./src/constants/rating.ts\");\n/* harmony import */ var _utils_getLocalStorageItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getLocalStorageItem */ \"./src/domain/utils/getLocalStorageItem.ts\");\n/* harmony import */ var _utils_setLocalStorageItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/setLocalStorageItem */ \"./src/domain/utils/setLocalStorageItem.ts\");\n\n\n\nconst LOCAL_STORAGE_KEY = \"userMovieList\";\nlet userMovieList = new Map();\nconst savedList = (0,_utils_getLocalStorageItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LOCAL_STORAGE_KEY, []);\nsavedList.forEach(({ id, userRating }) => {\n    if (userRating < _constants_rating__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RATING)\n        userRating = _constants_rating__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RATING;\n    if (userRating > _constants_rating__WEBPACK_IMPORTED_MODULE_0__.MAX_RATING)\n        userRating = _constants_rating__WEBPACK_IMPORTED_MODULE_0__.MAX_RATING;\n    userMovieList.set(id, { id, userRating });\n});\nconst addRating = ({ id, userRating }) => {\n    const newMovieList = new Map(userMovieList);\n    newMovieList.set(id, { id, userRating });\n    return newMovieList;\n};\nconst getUserRating = (id) => {\n    const movie = userMovieList.get(id);\n    if (!movie) {\n        return _constants_rating__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RATING;\n    }\n    return movie.userRating;\n};\nconst setUserRating = ({ id, userRating }) => {\n    userMovieList = addRating({ id, userRating });\n    (0,_utils_setLocalStorageItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(LOCAL_STORAGE_KEY, Array.from(userMovieList.values()));\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/handleUserRating.ts?");

/***/ }),

/***/ "./src/domain/utils/getLocalStorageItem.ts":
/*!*************************************************!*\
  !*** ./src/domain/utils/getLocalStorageItem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setLocalStorageItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocalStorageItem */ \"./src/domain/utils/setLocalStorageItem.ts\");\n\nconst getLocalStorageItem = (key, defaultValue) => {\n    const localStorage = window.localStorage;\n    if (localStorage.getItem(key) === null) {\n        (0,_setLocalStorageItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key, defaultValue);\n    }\n    return JSON.parse(localStorage.getItem(key));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocalStorageItem);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/utils/getLocalStorageItem.ts?");

/***/ }),

/***/ "./src/domain/utils/setLocalStorageItem.ts":
/*!*************************************************!*\
  !*** ./src/domain/utils/setLocalStorageItem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setLocalStorageItem = (key, value) => {\n    const localStorage = window.localStorage;\n    const stringified = JSON.stringify(value);\n    localStorage.setItem(key, stringified);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocalStorageItem);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/utils/setLocalStorageItem.ts?");

/***/ }),

/***/ "./src/domain/validateResponse.ts":
/*!****************************************!*\
  !*** ./src/domain/validateResponse.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateResponse = (status) => {\n    if (status === 401) {\n        throw new Error(\"인증 정보가 올바르지 않습니다. API KEY를 확인해주세요.\");\n    }\n    if (status === 503) {\n        throw new Error(\"죄송합니다. 현재 서버가 일시적으로 오프라인 상태입니다. 나중에 다시 시도해주세요.\");\n    }\n    if (500 <= status) {\n        throw new Error(\"죄송합니다. 서버가 점검중입니다. 다음에 다시 시도해주세요.\");\n    }\n    if (400 <= status) {\n        throw new Error(\"알 수 없는 오류가 발생했습니다. 다시 시도해주세요.\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateResponse);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/validateResponse.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/reset.css */ \"./templates/reset.css\");\n/* harmony import */ var _templates_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/common.css */ \"./templates/common.css\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.ts\");\n\n\n\nconst $app = document.querySelector(\"#app\");\nnew _components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"]($app);\nwindow.onbeforeunload = function () {\n    window.scrollTo(0, 0);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./templates/arrow-up.png":
/*!********************************!*\
  !*** ./templates/arrow-up.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff7b3976afc7b3064f57.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/arrow-up.png?");

/***/ }),

/***/ "./templates/exit_button.png":
/*!***********************************!*\
  !*** ./templates/exit_button.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57d2f14d4a97692bdac0.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/exit_button.png?");

/***/ }),

/***/ "./templates/image-Placeholder.png":
/*!*****************************************!*\
  !*** ./templates/image-Placeholder.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68494f220dee19e03df4.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/image-Placeholder.png?");

/***/ }),

/***/ "./templates/logo.png":
/*!****************************!*\
  !*** ./templates/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/logo.png?");

/***/ }),

/***/ "./templates/search_button.png":
/*!*************************************!*\
  !*** ./templates/search_button.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/search_button.png?");

/***/ }),

/***/ "./templates/star_empty.png":
/*!**********************************!*\
  !*** ./templates/star_empty.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_empty.png?");

/***/ }),

/***/ "./templates/star_filled.png":
/*!***********************************!*\
  !*** ./templates/star_filled.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_filled.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/javascript-movie-review/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;