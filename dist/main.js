/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Indie+Flower&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color pallete */\n  --first-color: #000000;\n  --second-color: #282A3A;\n  --third-color: #735F32;\n  --forth-color: #C69749;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n/* header / footer */\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n  width: 100%;\n  padding-top: 2em;\n  color: var(--forth-color);\n  background-color: var(--first-color);\n  font-family: 'Dancing Script', cursive;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nheader nav {\n  display: flex;\n  gap: 5%;\n  width: 80%;\n  justify-content: center;\n}\n\nheader nav button {\n  width: 8em;\n  min-width: 4em;\n  font-size: 1.4rem;\n  font-family: 'Dancing Script', cursive;\n  color:  var(--forth-color);\n  background-color: var(--first-color);\n  border: solid 2px var(--second-color);\n  position: relative;\n  top: 2px;\n}\n\nheader nav button:focus {\n  background-color: var(--second-color);\n  border: solid 2px var(--second-color);\n}\n\nheader nav button:hover {\n  color: white;\n}\n\nfooter {\n  text-align: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--third-color);\n  font-family: 'Courier New', Courier, monospace;\n}\n\n\n/* main */\n\nmain {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--second-color);\n}\n\n/* main - home */\n\n.home-div {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 1em;\n  align-items: center;\n  width: min(65%, calc(70% + 100px));\n  height: 100%;\n}\n\n.mainParas {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  color: var(--first-color);\n}\n\n.mainParas p:nth-child(2),\n.mainParas p:nth-child(3),\n.mainParas p:nth-child(5) {\n  color: var(--forth-color);\n  font-family: 'Dancing Script', cursive;\n}\n\n.mainImgs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.5em;\n}\n\nimg {\n  width: min(20em, calc(70% + 100px));\n  height: auto;\n  border: solid 2px var(--third-color);\n  border-radius: 20px;\n  opacity: 0.65;\n  transition: transform .5s ease;\n}\n\nimg:hover {\n  transform: scale(1.12);\n}\n\n.mainQuote {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  width: 70%;\n  color: var(--third-color);\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.mainQuote:last-child {\n  align-items: flex-end;\n}\n\n/* main - menu */\n\n.menu-div {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  gap: 1em;\n  width: min(65%, calc(80% + 100px));\n  height: 100%;\n}\n\n.food {\n  display: grid;\n  grid-template: repeat(6, 1fr) / 1fr 0.1fr;\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.food>h2 {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.food>p {\n  font-size: 1.3rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.sides {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  grid-area: 3/1/4/3;\n  grid-template: 2.4em repeat(2, 1fr) / repeat(5, 1fr 0.4fr);\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.sides>h2 {\n  grid-area: 1/1/2/11;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.sides>p {\n  font-size: 1.2rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,WAAW;EACX,gBAAgB;EAChB,yBAAyB;EACzB,oCAAoC;EACpC,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,sCAAsC;EACtC,0BAA0B;EAC1B,oCAAoC;EACpC,qCAAqC;EACrC,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,qCAAqC;EACrC,qCAAqC;AACvC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,8CAA8C;AAChD;;;AAGA,SAAS;;AAET;EACE,aAAa;EACb,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,qCAAqC;AACvC;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,6BAA6B;EAC7B,QAAQ;EACR,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;;;EAGE,yBAAyB;EACzB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,yBAAyB;EACzB,qGAAqG;AACvG;;AAEA;EACE,qBAAqB;AACvB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,8CAA8C;EAC9C,QAAQ;EACR,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,UAAU;EACV,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,qGAAqG;AACvG;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,0DAA0D;EAC1D,UAAU;EACV,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,qGAAqG;AACvG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Indie+Flower&display=swap');\n\n:root {\n  /* color pallete */\n  --first-color: #000000;\n  --second-color: #282A3A;\n  --third-color: #735F32;\n  --forth-color: #C69749;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n/* header / footer */\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n  width: 100%;\n  padding-top: 2em;\n  color: var(--forth-color);\n  background-color: var(--first-color);\n  font-family: 'Dancing Script', cursive;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nheader nav {\n  display: flex;\n  gap: 5%;\n  width: 80%;\n  justify-content: center;\n}\n\nheader nav button {\n  width: 8em;\n  min-width: 4em;\n  font-size: 1.4rem;\n  font-family: 'Dancing Script', cursive;\n  color:  var(--forth-color);\n  background-color: var(--first-color);\n  border: solid 2px var(--second-color);\n  position: relative;\n  top: 2px;\n}\n\nheader nav button:focus {\n  background-color: var(--second-color);\n  border: solid 2px var(--second-color);\n}\n\nheader nav button:hover {\n  color: white;\n}\n\nfooter {\n  text-align: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--third-color);\n  font-family: 'Courier New', Courier, monospace;\n}\n\n\n/* main */\n\nmain {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--second-color);\n}\n\n/* main - home */\n\n.home-div {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 1em;\n  align-items: center;\n  width: min(65%, calc(70% + 100px));\n  height: 100%;\n}\n\n.mainParas {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  color: var(--first-color);\n}\n\n.mainParas p:nth-child(2),\n.mainParas p:nth-child(3),\n.mainParas p:nth-child(5) {\n  color: var(--forth-color);\n  font-family: 'Dancing Script', cursive;\n}\n\n.mainImgs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.5em;\n}\n\nimg {\n  width: min(20em, calc(70% + 100px));\n  height: auto;\n  border: solid 2px var(--third-color);\n  border-radius: 20px;\n  opacity: 0.65;\n  transition: transform .5s ease;\n}\n\nimg:hover {\n  transform: scale(1.12);\n}\n\n.mainQuote {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  width: 70%;\n  color: var(--third-color);\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.mainQuote:last-child {\n  align-items: flex-end;\n}\n\n/* main - menu */\n\n.menu-div {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  gap: 1em;\n  width: min(65%, calc(80% + 100px));\n  height: 100%;\n}\n\n.food {\n  display: grid;\n  grid-template: repeat(6, 1fr) / 1fr 0.1fr;\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.food>h2 {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.food>p {\n  font-size: 1.3rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.sides {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  grid-area: 3/1/4/3;\n  grid-template: 2.4em repeat(2, 1fr) / repeat(5, 1fr 0.4fr);\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.sides>h2 {\n  grid-area: 1/1/2/11;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.sides>p {\n  font-size: 1.2rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPageLoad)
/* harmony export */ });
function contactPageLoad() {
  const main = document.querySelector('main');
  main.textContent = '';
  const newPara = () => document.createElement('p');
  const newImg = () => document.createElement('img');
  
  
};

/***/ }),

/***/ "./src/footer-load.js":
/*!****************************!*\
  !*** ./src/footer-load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerLoad)
/* harmony export */ });
function footerLoad() {
  const footer = document.querySelector('footer');
  const newPara = () => document.createElement('p');

  footer.appendChild(newPara());
  footer.firstElementChild.textContent = 'Copyright © 2023 DragicevicS';
};

/***/ }),

/***/ "./src/header-load.js":
/*!****************************!*\
  !*** ./src/header-load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerLoad)
/* harmony export */ });
function headerLoad() {
  const header = document.querySelector('header');
  const newBtn = () => document.createElement('button');
  const h1 = document.createElement('h1');
  h1.textContent = 'Restaurant™';
  const headerNav = document.createElement('nav');

  header.appendChild(h1);
  header.appendChild(headerNav);
  headerNav.appendChild(newBtn());
  headerNav.firstElementChild.textContent = 'Home';
  headerNav.firstElementChild.classList.add('home');
  headerNav.appendChild(newBtn());
  headerNav.children[1].textContent = 'Menu';
  headerNav.children[1].classList.add('menu');
  headerNav.appendChild(newBtn());
  headerNav.lastElementChild.textContent = 'Contact';
  headerNav.lastElementChild.classList.add('contact');
};

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageLoad)
/* harmony export */ });
/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ "./src/images/restaurant.jpg");
/* harmony import */ var _images_kitchen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/kitchen.jpg */ "./src/images/kitchen.jpg");
/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food.jpg */ "./src/images/food.jpg");




function homePageLoad() {
  const main = document.querySelector('main');
  main.textContent = '';
  const newPara = () => document.createElement('p');
  const newImg = () => document.createElement('img');
  const newDiv = () => document.createElement('div');

  const homeDiv = newDiv();
  homeDiv.classList.add('home-div');
  const mainParas = newDiv();
  mainParas.classList.add('mainParas')
  const mainImgs = newDiv();
  mainImgs.classList.add('mainImgs');
  const mainQuote = newDiv();
  mainQuote.classList.add('mainQuote');

  main.appendChild(homeDiv);
  homeDiv.appendChild(mainParas);
  mainParas.appendChild(newPara());
  mainParas.firstChild.textContent = "- Business hours -"
  mainParas.appendChild(newPara());
  mainParas.children[1].textContent = "Monday - Saturday";
  mainParas.appendChild(newPara());
  mainParas.children[2].textContent = "08:30am - 01:00am";
  mainParas.appendChild(newPara());
  mainParas.children[3].textContent = "- Happy hour -";
  mainParas.appendChild(newPara());
  mainParas.lastElementChild.textContent = "14:30pm - 16:00pm";

  homeDiv.appendChild(mainImgs);
  mainImgs.appendChild(newImg());
  mainImgs.firstElementChild.setAttribute('src', _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__);
  mainImgs.firstElementChild.setAttribute('alt', "Image of restaurant's interior");
  mainImgs.appendChild(newImg());
  mainImgs.children[1].setAttribute('src', _images_food_jpg__WEBPACK_IMPORTED_MODULE_2__);
  mainImgs.children[1].setAttribute('alt', "Image of restaurant's food");
  mainImgs.appendChild(newImg());
  mainImgs.lastElementChild.setAttribute('src', _images_kitchen_jpg__WEBPACK_IMPORTED_MODULE_1__);
  mainImgs.lastElementChild.setAttribute('alt', "Image of restaurant's kitchen");

  homeDiv.appendChild(mainQuote);
  mainQuote.appendChild(newPara());
  mainQuote.firstElementChild.textContent = '“So long as you have food in your mouth you have solved all questions for the time being.”';
  mainQuote.appendChild(newPara());
  mainQuote.lastElementChild.textContent = '- Franz Kafka';
};


/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageLoad)
/* harmony export */ });
function menuPageLoad() {
  const main = document.querySelector('main');
  main.textContent = '';
  const newPara = () => document.createElement('p');
  const newDiv = () => document.createElement('div');
  const newH2 = () => document.createElement('h2');
  
  let row = 0;

  const menuDiv = newDiv();
  menuDiv.classList.add('menu-div');
  
  main.appendChild(menuDiv);
  
  const appetizerMenu = [
    ['~ Shrimp Remoulade / Shrimp Cocktail', '16.00'],
    ['~ Spicy Lobster', '19.00'],
    ['~ Baked Escargot', '16.00'],
    ['~ Seared Ahi Tuna', '17.00'],
    ['~ Prosciutto Wrapped Mozzarella', '14.00']
  ];

  const appetizerDiv = newDiv();
  appetizerDiv.classList.add('food');
  menuDiv.appendChild(appetizerDiv);
  appetizerDiv.appendChild(newH2());
  appetizerDiv.firstElementChild.textContent = '~ Appetizers ~';

  for (let i=0; i < appetizerMenu.length * 2; i++) {
    appetizerDiv.appendChild(newPara());
    appetizerDiv.children[i+1].textContent = appetizerMenu[row][0];
    appetizerDiv.appendChild(newPara());
    appetizerDiv.children[i+2].textContent = appetizerMenu[row][1];
    i++;
    row++;
  };

  row = 0;

  const saladSoupMenu = [
    ['~ Spinach Salad', '10.00'],
    ['~ Caprese Salad', '7.50'],
    ['~ French Onion Soup', '5.00'],
    ['~ Lobster Bisque', '8.00']
  ];
  
  const saladSoupDiv = newDiv();
  saladSoupDiv.classList.add('food')
  menuDiv.appendChild(saladSoupDiv);
  saladSoupDiv.appendChild(newH2());
  saladSoupDiv.firstElementChild.textContent = '~ Salads and Soups ~';
  
  for (let i=0; i < saladSoupMenu.length * 2; i++) {
    saladSoupDiv.appendChild(newPara());
    saladSoupDiv.children[i+1].textContent = saladSoupMenu[row][0];
    saladSoupDiv.appendChild(newPara());
    saladSoupDiv.children[i+2].textContent = saladSoupMenu[row][1];
    i++;
    row++;
  };

  row = 0;
  
  const steakCutsMenu = [
    ['~ Filet Mignon, 8 ounce', '38.00'],
    ['~ Filet Mignon, 12 ounce', '49.00'],
    ['~ Rib Eye Steak 18 ounce', '39.00'],
    ['~ Porterhouse for Two', '40.00'],
    ['~ Classic New York Sirloin', '36.00']
  ];

  const steakCutsDiv = newDiv();
  steakCutsDiv.classList.add('food');
  menuDiv.appendChild(steakCutsDiv);
  steakCutsDiv.appendChild(newH2());
  steakCutsDiv.firstElementChild.textContent = '~ Steak Cuts ~';
  
  for (let i=0; i < steakCutsMenu.length * 2; i++) {
    steakCutsDiv.appendChild(newPara());
    steakCutsDiv.children[i+1].textContent = steakCutsMenu[row][0];
    steakCutsDiv.appendChild(newPara());
    steakCutsDiv.children[i+2].textContent = steakCutsMenu[row][1];
    i++;
    row++;
  };

  row = 0;

  const seafoodMenu = [
    ['~ Stuffed Lobster Tail', '18.00'],
    ['~ Maryland Crab Cake Dinner', '16.00'],
    ['~ Whole Lobster', '20.00'],
    ['~ Clam Zuppa', '14.50'],
    ['~ Maryland Crab Cakes', '22.00']
  ];

  const seafoodDiv = newDiv();
  seafoodDiv.classList.add('food');
  menuDiv.appendChild(seafoodDiv);
  seafoodDiv.appendChild(newH2());
  seafoodDiv.firstElementChild.textContent = '~ Seafood ~';

  for (let i=0; i < seafoodMenu.length * 2; i++) {
    seafoodDiv.appendChild(newPara());
    seafoodDiv.children[i+1].textContent = seafoodMenu[row][0];
    seafoodDiv.appendChild(newPara());
    seafoodDiv.children[i+2].textContent = seafoodMenu[row][1];
    i++;
    row++;
  };

  row = 0;

  const sidesMenu = [
    ['Sesame Green Beans', '4.00'],
    ['Cole Slaw', '3.00'],
    ['Baby Brussels Sprouts', '4.00'],
    ['Mashed Potatoes', '4.00'],
    ['Hand-Cut Fries', '3.00'],
    ['Creamed Spinach', '6.00'],
    ['Broiled Tomatoes', '5.00'],
    ['Sweet Potato Casserole', '6.00'],
    ['Buttermilk Biscuit', '3.50'],
    ['Fresh Asparagus', '7.00']
  ];

  const sidesDiv = newDiv();
  sidesDiv.classList.add('sides');
  menuDiv.appendChild(sidesDiv);
  sidesDiv.appendChild(newH2());
  sidesDiv.firstElementChild.textContent = '~ Sides ~';
  for (let i=0; i < sidesMenu.length * 2; i++) {
    sidesDiv.appendChild(newPara());
    sidesDiv.children[i+1].textContent = sidesMenu[row][0];
    sidesDiv.appendChild(newPara());
    sidesDiv.children[i+2].textContent = sidesMenu[row][1];
    i++;
    row++;
  };
};
  

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a545d4d0a80d9813949.jpg";

/***/ }),

/***/ "./src/images/kitchen.jpg":
/*!********************************!*\
  !*** ./src/images/kitchen.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3217c99d4b4399905387.jpg";

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8fc5501e9605f84bd0.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-load.js */ "./src/header-load.js");
/* harmony import */ var _footer_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-load.js */ "./src/footer-load.js");
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");
/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-page.js */ "./src/menu-page.js");
/* harmony import */ var _contact_load_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-load.js */ "./src/contact-load.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_header_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_footer_load_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

const homeLoad = () => {
  (0,_home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const homeBtn = document.querySelector('.home');
  homeBtn.style.backgroundColor = '#282A3A';
};
homeLoad();

homeBtn.addEventListener('click', () => {
  (0,_home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  menuBtn.style.backgroundColor = 'black';
  contactBtn.style.backgroundColor = 'black';
  homeBtn.style.backgroundColor = '#282A3A';
});

menuBtn.addEventListener('click', () => {
  (0,_menu_page_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  homeBtn.style.backgroundColor = 'black';
  contactBtn.style.backgroundColor = 'black';
  menuBtn.style.backgroundColor = '#282A3A';
});

contactBtn.addEventListener('click', () => {
  (0,_contact_load_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  homeBtn.style.backgroundColor = 'black';
  menuBtn.style.backgroundColor = 'black';
  contactBtn.style.backgroundColor = '#282A3A';
});







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNBO0FBQ0E7QUFDQTtBQUNNO0FBQzNCOztBQUVyQiwyREFBVTtBQUNWLDJEQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUseURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUseURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSx5REFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDREQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA2MDAmZmFtaWx5PUluZGllK0Zsb3dlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBjb2xvciBwYWxsZXRlICovXFxuICAtLWZpcnN0LWNvbG9yOiAjMDAwMDAwO1xcbiAgLS1zZWNvbmQtY29sb3I6ICMyODJBM0E7XFxuICAtLXRoaXJkLWNvbG9yOiAjNzM1RjMyO1xcbiAgLS1mb3J0aC1jb2xvcjogI0M2OTc0OTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIGhlYWRlciAvIGZvb3RlciAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbiAgbWluLXdpZHRoOiA0ZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgY29sb3I6ICB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG4vKiBtYWluIC0gaG9tZSAqL1xcblxcbi5ob21lLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDY1JSwgY2FsYyg3MCUgKyAxMDBweCkpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhcmFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG59XFxuXFxuLm1haW5QYXJhcyBwOm50aC1jaGlsZCgyKSxcXG4ubWFpblBhcmFzIHA6bnRoLWNoaWxkKDMpLFxcbi5tYWluUGFyYXMgcDpudGgtY2hpbGQoNSkge1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWFpbkltZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiBtaW4oMjBlbSwgY2FsYyg3MCUgKyAxMDBweCkpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG9wYWNpdHk6IDAuNjU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xcbn1cXG5cXG4ubWFpblF1b3RlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW5RdW90ZTpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLyogbWFpbiAtIG1lbnUgKi9cXG5cXG4ubWVudS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDFlbTtcXG4gIHdpZHRoOiBtaW4oNjUlLCBjYWxjKDgwJSArIDEwMHB4KSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mb29kIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNiwgMWZyKSAvIDFmciAwLjFmcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9ydGgtY29sb3IpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9ydGgtY29sb3IpO1xcbn1cXG5cXG4uZm9vZD5oMiB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb2Q+cCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2lkZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGdyaWQtdGVtcGxhdGU6IDIuNGVtIHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDUsIDFmciAwLjRmcik7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWZvcnRoLWNvbG9yKTtcXG59XFxuXFxuLnNpZGVzPmgyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMTE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGVzPnAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsOENBQThDO0FBQ2hEOzs7QUFHQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIscUdBQXFHO0FBQ3ZHOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLFFBQVE7RUFDUixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxR0FBcUc7QUFDdkc7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBEQUEwRDtFQUMxRCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxR0FBcUc7QUFDdkdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA2MDAmZmFtaWx5PUluZGllK0Zsb3dlciZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAvKiBjb2xvciBwYWxsZXRlICovXFxuICAtLWZpcnN0LWNvbG9yOiAjMDAwMDAwO1xcbiAgLS1zZWNvbmQtY29sb3I6ICMyODJBM0E7XFxuICAtLXRoaXJkLWNvbG9yOiAjNzM1RjMyO1xcbiAgLS1mb3J0aC1jb2xvcjogI0M2OTc0OTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIGhlYWRlciAvIGZvb3RlciAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbiAgbWluLXdpZHRoOiA0ZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgY29sb3I6ICB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG4vKiBtYWluIC0gaG9tZSAqL1xcblxcbi5ob21lLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDY1JSwgY2FsYyg3MCUgKyAxMDBweCkpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhcmFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG59XFxuXFxuLm1haW5QYXJhcyBwOm50aC1jaGlsZCgyKSxcXG4ubWFpblBhcmFzIHA6bnRoLWNoaWxkKDMpLFxcbi5tYWluUGFyYXMgcDpudGgtY2hpbGQoNSkge1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWFpbkltZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiBtaW4oMjBlbSwgY2FsYyg3MCUgKyAxMDBweCkpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG9wYWNpdHk6IDAuNjU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xcbn1cXG5cXG4ubWFpblF1b3RlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW5RdW90ZTpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLyogbWFpbiAtIG1lbnUgKi9cXG5cXG4ubWVudS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDFlbTtcXG4gIHdpZHRoOiBtaW4oNjUlLCBjYWxjKDgwJSArIDEwMHB4KSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mb29kIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNiwgMWZyKSAvIDFmciAwLjFmcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9ydGgtY29sb3IpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9ydGgtY29sb3IpO1xcbn1cXG5cXG4uZm9vZD5oMiB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb2Q+cCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2lkZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGdyaWQtdGVtcGxhdGU6IDIuNGVtIHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDUsIDFmciAwLjRmcik7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWZvcnRoLWNvbG9yKTtcXG59XFxuXFxuLnNpZGVzPmgyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMTE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGVzPnAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlTG9hZCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBuZXdQYXJhID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBuZXdJbWcgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgXG4gIFxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJMb2FkKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgbmV3UGFyYSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgZm9vdGVyLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIERyYWdpY2V2aWNTJztcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyTG9hZCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5ld0J0biA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnTihKInO1xuICBjb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTtcbiAgaGVhZGVyTmF2LmFwcGVuZENoaWxkKG5ld0J0bigpKTtcbiAgaGVhZGVyTmF2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBoZWFkZXJOYXYuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQobmV3QnRuKCkpO1xuICBoZWFkZXJOYXYuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGhlYWRlck5hdi5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGhlYWRlck5hdi5hcHBlbmRDaGlsZChuZXdCdG4oKSk7XG4gIGhlYWRlck5hdi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBoZWFkZXJOYXYubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG59OyIsImltcG9ydCByZXN0YXVyYW50IGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQuanBnJztcbmltcG9ydCBraXRjaGVuIGZyb20gJy4vaW1hZ2VzL2tpdGNoZW4uanBnJztcbmltcG9ydCBmb29kIGZyb20gJy4vaW1hZ2VzL2Zvb2QuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IG5ld1BhcmEgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBob21lRGl2ID0gbmV3RGl2KCk7XG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZS1kaXYnKTtcbiAgY29uc3QgbWFpblBhcmFzID0gbmV3RGl2KCk7XG4gIG1haW5QYXJhcy5jbGFzc0xpc3QuYWRkKCdtYWluUGFyYXMnKVxuICBjb25zdCBtYWluSW1ncyA9IG5ld0RpdigpO1xuICBtYWluSW1ncy5jbGFzc0xpc3QuYWRkKCdtYWluSW1ncycpO1xuICBjb25zdCBtYWluUXVvdGUgPSBuZXdEaXYoKTtcbiAgbWFpblF1b3RlLmNsYXNzTGlzdC5hZGQoJ21haW5RdW90ZScpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQobWFpblBhcmFzKTtcbiAgbWFpblBhcmFzLmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gIG1haW5QYXJhcy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCItIEJ1c2luZXNzIGhvdXJzIC1cIlxuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBTYXR1cmRheVwiO1xuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCIwODozMGFtIC0gMDE6MDBhbVwiO1xuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gXCItIEhhcHB5IGhvdXIgLVwiO1xuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBcIjE0OjMwcG0gLSAxNjowMHBtXCI7XG5cbiAgaG9tZURpdi5hcHBlbmRDaGlsZChtYWluSW1ncyk7XG4gIG1haW5JbWdzLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgbWFpbkltZ3MuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN0YXVyYW50KTtcbiAgbWFpbkltZ3MuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkltYWdlIG9mIHJlc3RhdXJhbnQncyBpbnRlcmlvclwiKTtcbiAgbWFpbkltZ3MuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICBtYWluSW1ncy5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZvb2QpO1xuICBtYWluSW1ncy5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiSW1hZ2Ugb2YgcmVzdGF1cmFudCdzIGZvb2RcIik7XG4gIG1haW5JbWdzLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgbWFpbkltZ3MubGFzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGtpdGNoZW4pO1xuICBtYWluSW1ncy5sYXN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJJbWFnZSBvZiByZXN0YXVyYW50J3Mga2l0Y2hlblwiKTtcblxuICBob21lRGl2LmFwcGVuZENoaWxkKG1haW5RdW90ZSk7XG4gIG1haW5RdW90ZS5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICBtYWluUXVvdGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAn4oCcU28gbG9uZyBhcyB5b3UgaGF2ZSBmb29kIGluIHlvdXIgbW91dGggeW91IGhhdmUgc29sdmVkIGFsbCBxdWVzdGlvbnMgZm9yIHRoZSB0aW1lIGJlaW5nLuKAnSc7XG4gIG1haW5RdW90ZS5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICBtYWluUXVvdGUubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICctIEZyYW56IEthZmthJztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZUxvYWQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgbmV3UGFyYSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmV3RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0gyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgXG4gIGxldCByb3cgPSAwO1xuXG4gIGNvbnN0IG1lbnVEaXYgPSBuZXdEaXYoKTtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdicpO1xuICBcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgXG4gIGNvbnN0IGFwcGV0aXplck1lbnUgPSBbXG4gICAgWyd+IFNocmltcCBSZW1vdWxhZGUgLyBTaHJpbXAgQ29ja3RhaWwnLCAnMTYuMDAnXSxcbiAgICBbJ34gU3BpY3kgTG9ic3RlcicsICcxOS4wMCddLFxuICAgIFsnfiBCYWtlZCBFc2NhcmdvdCcsICcxNi4wMCddLFxuICAgIFsnfiBTZWFyZWQgQWhpIFR1bmEnLCAnMTcuMDAnXSxcbiAgICBbJ34gUHJvc2NpdXR0byBXcmFwcGVkIE1venphcmVsbGEnLCAnMTQuMDAnXVxuICBdO1xuXG4gIGNvbnN0IGFwcGV0aXplckRpdiA9IG5ld0RpdigpO1xuICBhcHBldGl6ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGFwcGV0aXplckRpdik7XG4gIGFwcGV0aXplckRpdi5hcHBlbmRDaGlsZChuZXdIMigpKTtcbiAgYXBwZXRpemVyRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ34gQXBwZXRpemVycyB+JztcblxuICBmb3IgKGxldCBpPTA7IGkgPCBhcHBldGl6ZXJNZW51Lmxlbmd0aCAqIDI7IGkrKykge1xuICAgIGFwcGV0aXplckRpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIGFwcGV0aXplckRpdi5jaGlsZHJlbltpKzFdLnRleHRDb250ZW50ID0gYXBwZXRpemVyTWVudVtyb3ddWzBdO1xuICAgIGFwcGV0aXplckRpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIGFwcGV0aXplckRpdi5jaGlsZHJlbltpKzJdLnRleHRDb250ZW50ID0gYXBwZXRpemVyTWVudVtyb3ddWzFdO1xuICAgIGkrKztcbiAgICByb3crKztcbiAgfTtcblxuICByb3cgPSAwO1xuXG4gIGNvbnN0IHNhbGFkU291cE1lbnUgPSBbXG4gICAgWyd+IFNwaW5hY2ggU2FsYWQnLCAnMTAuMDAnXSxcbiAgICBbJ34gQ2FwcmVzZSBTYWxhZCcsICc3LjUwJ10sXG4gICAgWyd+IEZyZW5jaCBPbmlvbiBTb3VwJywgJzUuMDAnXSxcbiAgICBbJ34gTG9ic3RlciBCaXNxdWUnLCAnOC4wMCddXG4gIF07XG4gIFxuICBjb25zdCBzYWxhZFNvdXBEaXYgPSBuZXdEaXYoKTtcbiAgc2FsYWRTb3VwRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKVxuICBtZW51RGl2LmFwcGVuZENoaWxkKHNhbGFkU291cERpdik7XG4gIHNhbGFkU291cERpdi5hcHBlbmRDaGlsZChuZXdIMigpKTtcbiAgc2FsYWRTb3VwRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ34gU2FsYWRzIGFuZCBTb3VwcyB+JztcbiAgXG4gIGZvciAobGV0IGk9MDsgaSA8IHNhbGFkU291cE1lbnUubGVuZ3RoICogMjsgaSsrKSB7XG4gICAgc2FsYWRTb3VwRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gICAgc2FsYWRTb3VwRGl2LmNoaWxkcmVuW2krMV0udGV4dENvbnRlbnQgPSBzYWxhZFNvdXBNZW51W3Jvd11bMF07XG4gICAgc2FsYWRTb3VwRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gICAgc2FsYWRTb3VwRGl2LmNoaWxkcmVuW2krMl0udGV4dENvbnRlbnQgPSBzYWxhZFNvdXBNZW51W3Jvd11bMV07XG4gICAgaSsrO1xuICAgIHJvdysrO1xuICB9O1xuXG4gIHJvdyA9IDA7XG4gIFxuICBjb25zdCBzdGVha0N1dHNNZW51ID0gW1xuICAgIFsnfiBGaWxldCBNaWdub24sIDggb3VuY2UnLCAnMzguMDAnXSxcbiAgICBbJ34gRmlsZXQgTWlnbm9uLCAxMiBvdW5jZScsICc0OS4wMCddLFxuICAgIFsnfiBSaWIgRXllIFN0ZWFrIDE4IG91bmNlJywgJzM5LjAwJ10sXG4gICAgWyd+IFBvcnRlcmhvdXNlIGZvciBUd28nLCAnNDAuMDAnXSxcbiAgICBbJ34gQ2xhc3NpYyBOZXcgWW9yayBTaXJsb2luJywgJzM2LjAwJ11cbiAgXTtcblxuICBjb25zdCBzdGVha0N1dHNEaXYgPSBuZXdEaXYoKTtcbiAgc3RlYWtDdXRzRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChzdGVha0N1dHNEaXYpO1xuICBzdGVha0N1dHNEaXYuYXBwZW5kQ2hpbGQobmV3SDIoKSk7XG4gIHN0ZWFrQ3V0c0Rpdi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICd+IFN0ZWFrIEN1dHMgfic7XG4gIFxuICBmb3IgKGxldCBpPTA7IGkgPCBzdGVha0N1dHNNZW51Lmxlbmd0aCAqIDI7IGkrKykge1xuICAgIHN0ZWFrQ3V0c0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHN0ZWFrQ3V0c0Rpdi5jaGlsZHJlbltpKzFdLnRleHRDb250ZW50ID0gc3RlYWtDdXRzTWVudVtyb3ddWzBdO1xuICAgIHN0ZWFrQ3V0c0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHN0ZWFrQ3V0c0Rpdi5jaGlsZHJlbltpKzJdLnRleHRDb250ZW50ID0gc3RlYWtDdXRzTWVudVtyb3ddWzFdO1xuICAgIGkrKztcbiAgICByb3crKztcbiAgfTtcblxuICByb3cgPSAwO1xuXG4gIGNvbnN0IHNlYWZvb2RNZW51ID0gW1xuICAgIFsnfiBTdHVmZmVkIExvYnN0ZXIgVGFpbCcsICcxOC4wMCddLFxuICAgIFsnfiBNYXJ5bGFuZCBDcmFiIENha2UgRGlubmVyJywgJzE2LjAwJ10sXG4gICAgWyd+IFdob2xlIExvYnN0ZXInLCAnMjAuMDAnXSxcbiAgICBbJ34gQ2xhbSBadXBwYScsICcxNC41MCddLFxuICAgIFsnfiBNYXJ5bGFuZCBDcmFiIENha2VzJywgJzIyLjAwJ11cbiAgXTtcblxuICBjb25zdCBzZWFmb29kRGl2ID0gbmV3RGl2KCk7XG4gIHNlYWZvb2REaXYuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKHNlYWZvb2REaXYpO1xuICBzZWFmb29kRGl2LmFwcGVuZENoaWxkKG5ld0gyKCkpO1xuICBzZWFmb29kRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ34gU2VhZm9vZCB+JztcblxuICBmb3IgKGxldCBpPTA7IGkgPCBzZWFmb29kTWVudS5sZW5ndGggKiAyOyBpKyspIHtcbiAgICBzZWFmb29kRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gICAgc2VhZm9vZERpdi5jaGlsZHJlbltpKzFdLnRleHRDb250ZW50ID0gc2VhZm9vZE1lbnVbcm93XVswXTtcbiAgICBzZWFmb29kRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gICAgc2VhZm9vZERpdi5jaGlsZHJlbltpKzJdLnRleHRDb250ZW50ID0gc2VhZm9vZE1lbnVbcm93XVsxXTtcbiAgICBpKys7XG4gICAgcm93Kys7XG4gIH07XG5cbiAgcm93ID0gMDtcblxuICBjb25zdCBzaWRlc01lbnUgPSBbXG4gICAgWydTZXNhbWUgR3JlZW4gQmVhbnMnLCAnNC4wMCddLFxuICAgIFsnQ29sZSBTbGF3JywgJzMuMDAnXSxcbiAgICBbJ0JhYnkgQnJ1c3NlbHMgU3Byb3V0cycsICc0LjAwJ10sXG4gICAgWydNYXNoZWQgUG90YXRvZXMnLCAnNC4wMCddLFxuICAgIFsnSGFuZC1DdXQgRnJpZXMnLCAnMy4wMCddLFxuICAgIFsnQ3JlYW1lZCBTcGluYWNoJywgJzYuMDAnXSxcbiAgICBbJ0Jyb2lsZWQgVG9tYXRvZXMnLCAnNS4wMCddLFxuICAgIFsnU3dlZXQgUG90YXRvIENhc3Nlcm9sZScsICc2LjAwJ10sXG4gICAgWydCdXR0ZXJtaWxrIEJpc2N1aXQnLCAnMy41MCddLFxuICAgIFsnRnJlc2ggQXNwYXJhZ3VzJywgJzcuMDAnXVxuICBdO1xuXG4gIGNvbnN0IHNpZGVzRGl2ID0gbmV3RGl2KCk7XG4gIHNpZGVzRGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGVzJyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoc2lkZXNEaXYpO1xuICBzaWRlc0Rpdi5hcHBlbmRDaGlsZChuZXdIMigpKTtcbiAgc2lkZXNEaXYuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnfiBTaWRlcyB+JztcbiAgZm9yIChsZXQgaT0wOyBpIDwgc2lkZXNNZW51Lmxlbmd0aCAqIDI7IGkrKykge1xuICAgIHNpZGVzRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gICAgc2lkZXNEaXYuY2hpbGRyZW5baSsxXS50ZXh0Q29udGVudCA9IHNpZGVzTWVudVtyb3ddWzBdO1xuICAgIHNpZGVzRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gICAgc2lkZXNEaXYuY2hpbGRyZW5baSsyXS50ZXh0Q29udGVudCA9IHNpZGVzTWVudVtyb3ddWzFdO1xuICAgIGkrKztcbiAgICByb3crKztcbiAgfTtcbn07XG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhlYWRlckxvYWQgZnJvbSAnLi9oZWFkZXItbG9hZC5qcyc7XG5pbXBvcnQgZm9vdGVyTG9hZCBmcm9tICcuL2Zvb3Rlci1sb2FkLmpzJztcbmltcG9ydCBob21lUGFnZUxvYWQgZnJvbSAnLi9ob21lLXBhZ2UuanMnO1xuaW1wb3J0IG1lbnVQYWdlTG9hZCBmcm9tICcuL21lbnUtcGFnZS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2VMb2FkIGZyb20gJy4vY29udGFjdC1sb2FkLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5oZWFkZXJMb2FkKCk7XG5mb290ZXJMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuY29uc3QgaG9tZUxvYWQgPSAoKSA9PiB7XG4gIGhvbWVQYWdlTG9hZCgpO1xuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgaG9tZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MkEzQSc7XG59O1xuaG9tZUxvYWQoKTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaG9tZVBhZ2VMb2FkKCk7XG4gIG1lbnVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgY29udGFjdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICBob21lQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjgyQTNBJztcbn0pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51UGFnZUxvYWQoKTtcbiAgaG9tZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICBjb250YWN0QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gIG1lbnVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyODJBM0EnO1xufSk7XG5cbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnRhY3RQYWdlTG9hZCgpO1xuICBob21lQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gIG1lbnVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgY29udGFjdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MkEzQSc7XG59KTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==