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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color pallete */\n  --first-color: #000000;\n  --second-color: #282A3A;\n  --third-color: #735F32;\n  --forth-color: #C69749;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n/* header / footer */\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n  width: 100%;\n  padding-top: 2em;\n  color: var(--forth-color);\n  background-color: var(--first-color);\n  font-family: 'Dancing Script', cursive;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nheader nav {\n  display: flex;\n  gap: 5%;\n  width: 80%;\n  justify-content: center;\n}\n\nheader nav button {\n  width: 8em;\n  min-width: 4em;\n  font-size: 1.4rem;\n  font-family: 'Dancing Script', cursive;\n  color:  var(--forth-color);\n  background-color: var(--first-color);\n  border: solid 2px var(--second-color);\n  position: relative;\n  top: 2px;\n}\n\nheader nav button:focus {\n  background-color: var(--second-color);\n  border: solid 2px var(--second-color);\n}\n\nheader nav button:hover {\n  color: white;\n}\n\nfooter {\n  text-align: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--third-color);\n  font-family: 'Courier New', Courier, monospace;\n}\n\n\n/* main */\n\nmain {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--second-color);\n}\n\n/* main - home */\n\n.home-div {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 1em;\n  align-items: center;\n  width: min(65%, calc(70% + 100px));\n  height: 100%;\n}\n\n.mainParas {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  color: var(--forth-color);\n}\n\n.mainParas p:nth-child(1),\n.mainParas p:nth-child(4) {\n  font-family: 'Dancing Script', cursive;\n  color: white;\n}\n\n.mainImgs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.5em;\n}\n\nimg {\n  width: min(20em, calc(70% + 100px));\n  height: auto;\n  border: solid 2px var(--third-color);\n  border-radius: 20px;\n  opacity: 0.65;\n  transition: transform .5s ease;\n}\n\nimg:hover {\n  transform: scale(1.12);\n}\n\n.mainQuote {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  width: 70%;\n  color: var(--third-color);\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.mainQuote:last-child {\n  align-items: flex-end;\n}\n\n/* main - menu */\n\n.menu-div {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  gap: 1em;\n  width: min(65%, calc(80% + 100px));\n  height: 100%;\n}\n\n.food {\n  display: grid;\n  grid-template: repeat(6, 1fr) / 1fr 0.1fr;\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.food>h2 {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.food>p {\n  font-size: 1.3rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.sides {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  grid-area: 3/1/4/3;\n  grid-template: 2.4em repeat(2, 1fr) / repeat(5, 1fr 0.4fr);\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.sides>h2 {\n  grid-area: 1/1/2/11;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.sides>p {\n  font-size: 1.2rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n/* main - contact */\n\n.contact-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3em;\n  width: min(50%, calc(80% + 100px));\n  height: 100%;\n}\n\n.info-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.info-div h2 {\n  font-size: 1.8rem;\n  color: white;\n  font-family: 'Dancing Script', cursive;\n}\n\n.info-div p {\n  font-size: 1.8rem;\n  color: var(--forth-color);\n}\n\n#map {\n  width: 100%;\n  height: 20em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Indie+Flower&display=swap');\n\n:root {\n  /* color pallete */\n  --first-color: #000000;\n  --second-color: #282A3A;\n  --third-color: #735F32;\n  --forth-color: #C69749;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n/* header / footer */\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n  width: 100%;\n  padding-top: 2em;\n  color: var(--forth-color);\n  background-color: var(--first-color);\n  font-family: 'Dancing Script', cursive;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nheader nav {\n  display: flex;\n  gap: 5%;\n  width: 80%;\n  justify-content: center;\n}\n\nheader nav button {\n  width: 8em;\n  min-width: 4em;\n  font-size: 1.4rem;\n  font-family: 'Dancing Script', cursive;\n  color:  var(--forth-color);\n  background-color: var(--first-color);\n  border: solid 2px var(--second-color);\n  position: relative;\n  top: 2px;\n}\n\nheader nav button:focus {\n  background-color: var(--second-color);\n  border: solid 2px var(--second-color);\n}\n\nheader nav button:hover {\n  color: white;\n}\n\nfooter {\n  text-align: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--third-color);\n  font-family: 'Courier New', Courier, monospace;\n}\n\n\n/* main */\n\nmain {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1em;\n  background-color: var(--second-color);\n}\n\n/* main - home */\n\n.home-div {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 1em;\n  align-items: center;\n  width: min(65%, calc(70% + 100px));\n  height: 100%;\n}\n\n.mainParas {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  color: var(--forth-color);\n}\n\n.mainParas p:nth-child(1),\n.mainParas p:nth-child(4) {\n  font-family: 'Dancing Script', cursive;\n  color: white;\n}\n\n.mainImgs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.5em;\n}\n\nimg {\n  width: min(20em, calc(70% + 100px));\n  height: auto;\n  border: solid 2px var(--third-color);\n  border-radius: 20px;\n  opacity: 0.65;\n  transition: transform .5s ease;\n}\n\nimg:hover {\n  transform: scale(1.12);\n}\n\n.mainQuote {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.8rem;\n  width: 70%;\n  color: var(--third-color);\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.mainQuote:last-child {\n  align-items: flex-end;\n}\n\n/* main - menu */\n\n.menu-div {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  gap: 1em;\n  width: min(65%, calc(80% + 100px));\n  height: 100%;\n}\n\n.food {\n  display: grid;\n  grid-template: repeat(6, 1fr) / 1fr 0.1fr;\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.food>h2 {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.food>p {\n  font-size: 1.3rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.sides {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  grid-area: 3/1/4/3;\n  grid-template: 2.4em repeat(2, 1fr) / repeat(5, 1fr 0.4fr);\n  gap: 0.5em;\n  padding: 1em;\n  background-color: var(--first-color);\n  color: var(--forth-color);\n  border: solid 2px var(--forth-color);\n}\n\n.sides>h2 {\n  grid-area: 1/1/2/11;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  font-size: 2rem;\n  color: white;\n}\n\n.sides>p {\n  font-size: 1.2rem;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n/* main - contact */\n\n.contact-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3em;\n  width: min(50%, calc(80% + 100px));\n  height: 100%;\n}\n\n.info-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.info-div h2 {\n  font-size: 1.8rem;\n  color: white;\n  font-family: 'Dancing Script', cursive;\n}\n\n.info-div p {\n  font-size: 1.8rem;\n  color: var(--forth-color);\n}\n\n#map {\n  width: 100%;\n  height: 20em;\n}"],"sourceRoot":""}]);
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
  const newH2 = () => document.createElement('h2');
  const newDiv = () => document.createElement('div');
  
  const contactDiv = newDiv();
  contactDiv.classList.add('contact-div');
  main.appendChild(contactDiv);

  const infoDiv = newDiv();
  infoDiv.classList.add('info-div');
  contactDiv.appendChild(infoDiv);

  infoDiv.appendChild(newH2());
  infoDiv.firstElementChild.textContent = '~ Adress ~';
  infoDiv.appendChild(newPara());
  infoDiv.children[1].textContent = 'Onouea Villages';
  infoDiv.appendChild(newPara());
  infoDiv.children[2].textContent = 'Kiribati';
  infoDiv.appendChild(newH2());
  infoDiv.children[3].textContent = '~ Phone number ~';
  infoDiv.appendChild(newPara());
  infoDiv.children[4].textContent = '+686 11 48 68 488';
  infoDiv.appendChild(newH2());
  infoDiv.children[5].textContent = '~ Email ~'
  infoDiv.appendChild(newPara());
  infoDiv.children[6].textContent = 'kiribatirestaurant@yahoo.ki';
  infoDiv.appendChild(newH2());
  infoDiv.children[7].textContent = '~ Location ~'

  const mapDiv = newDiv();
  mapDiv.setAttribute('id', 'map');
  contactDiv.appendChild(mapDiv);
  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13382.775436118909!2d-160.38624616532815!3d4.673020309382576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1803ca4efae371%3A0x77e6f3e3a8ef5d45!2sOnouea%20Villages!5e0!3m2!1ssr!2srs!4v1682417391981!5m2!1ssr!2srs" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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
  mainParas.firstChild.textContent = "~ Business hours ~"
  mainParas.appendChild(newPara());
  mainParas.children[1].textContent = "Monday - Saturday";
  mainParas.appendChild(newPara());
  mainParas.children[2].textContent = "08:30am - 01:00am";
  mainParas.appendChild(newPara());
  mainParas.children[3].textContent = "~ Happy hour ~";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXItbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDYwMCZmYW1pbHk9SW5kaWUrRmxvd2VyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIGNvbG9yIHBhbGxldGUgKi9cXG4gIC0tZmlyc3QtY29sb3I6ICMwMDAwMDA7XFxuICAtLXNlY29uZC1jb2xvcjogIzI4MkEzQTtcXG4gIC0tdGhpcmQtY29sb3I6ICM3MzVGMzI7XFxuICAtLWZvcnRoLWNvbG9yOiAjQzY5NzQ5O1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogaGVhZGVyIC8gZm9vdGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmhlYWRlciBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNSU7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uIHtcXG4gIHdpZHRoOiA4ZW07XFxuICBtaW4td2lkdGg6IDRlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBjb2xvcjogIHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuaGVhZGVyIG5hdiBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLyogbWFpbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcblxcbi8qIG1haW4gLSBob21lICovXFxuXFxuLmhvbWUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4oNjUlLCBjYWxjKDcwJSArIDEwMHB4KSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluUGFyYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogdmFyKC0tZm9ydGgtY29sb3IpO1xcbn1cXG5cXG4ubWFpblBhcmFzIHA6bnRoLWNoaWxkKDEpLFxcbi5tYWluUGFyYXMgcDpudGgtY2hpbGQoNCkge1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluSW1ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuNWVtO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IG1pbigyMGVtLCBjYWxjKDcwJSArIDEwMHB4KSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS10aGlyZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMik7XFxufVxcblxcbi5tYWluUXVvdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICB3aWR0aDogNzAlO1xcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWFpblF1b3RlOmxhc3QtY2hpbGQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBtYWluIC0gbWVudSAqL1xcblxcbi5tZW51LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMWVtO1xcbiAgd2lkdGg6IG1pbig2NSUsIGNhbGMoODAlICsgMTAwcHgpKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZvb2Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg2LCAxZnIpIC8gMWZyIDAuMWZyO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1mb3J0aC1jb2xvcik7XFxufVxcblxcbi5mb29kPmgyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9vZD5wIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaWRlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMi40ZW0gcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoNSwgMWZyIDAuNGZyKTtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9ydGgtY29sb3IpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9ydGgtY29sb3IpO1xcbn1cXG5cXG4uc2lkZXM+aDIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8xMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZXM+cCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBtYWluIC0gY29udGFjdCAqL1xcblxcbi5jb250YWN0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM2VtO1xcbiAgd2lkdGg6IG1pbig1MCUsIGNhbGMoODAlICsgMTAwcHgpKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmluZm8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZm8tZGl2IGgyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5pbmZvLWRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG59XFxuXFxuI21hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsOENBQThDO0FBQ2hEOzs7QUFHQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixxR0FBcUc7QUFDdkc7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsUUFBUTtFQUNSLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFHQUFxRztBQUN2Rzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMERBQTBEO0VBQzFELFVBQVU7RUFDVixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFHQUFxRztBQUN2Rzs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA2MDAmZmFtaWx5PUluZGllK0Zsb3dlciZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAvKiBjb2xvciBwYWxsZXRlICovXFxuICAtLWZpcnN0LWNvbG9yOiAjMDAwMDAwO1xcbiAgLS1zZWNvbmQtY29sb3I6ICMyODJBM0E7XFxuICAtLXRoaXJkLWNvbG9yOiAjNzM1RjMyO1xcbiAgLS1mb3J0aC1jb2xvcjogI0M2OTc0OTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIGhlYWRlciAvIGZvb3RlciAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbiAgbWluLXdpZHRoOiA0ZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgY29sb3I6ICB2YXIoLS1mb3J0aC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcblxcbi8qIG1haW4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG4vKiBtYWluIC0gaG9tZSAqL1xcblxcbi5ob21lLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDY1JSwgY2FsYyg3MCUgKyAxMDBweCkpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpblBhcmFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG59XFxuXFxuLm1haW5QYXJhcyBwOm50aC1jaGlsZCgxKSxcXG4ubWFpblBhcmFzIHA6bnRoLWNoaWxkKDQpIHtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbkltZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiBtaW4oMjBlbSwgY2FsYyg3MCUgKyAxMDBweCkpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG9wYWNpdHk6IDAuNjU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xcbn1cXG5cXG4ubWFpblF1b3RlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW5RdW90ZTpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLyogbWFpbiAtIG1lbnUgKi9cXG5cXG4ubWVudS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDFlbTtcXG4gIHdpZHRoOiBtaW4oNjUlLCBjYWxjKDgwJSArIDEwMHB4KSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mb29kIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNiwgMWZyKSAvIDFmciAwLjFmcjtcXG4gIGdhcDogMC41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9ydGgtY29sb3IpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9ydGgtY29sb3IpO1xcbn1cXG5cXG4uZm9vZD5oMiB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb2Q+cCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2lkZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGdyaWQtdGVtcGxhdGU6IDIuNGVtIHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDUsIDFmciAwLjRmcik7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvcnRoLWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWZvcnRoLWNvbG9yKTtcXG59XFxuXFxuLnNpZGVzPmgyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMTE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGVzPnAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogbWFpbiAtIGNvbnRhY3QgKi9cXG5cXG4uY29udGFjdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNlbTtcXG4gIHdpZHRoOiBtaW4oNTAlLCBjYWxjKDgwJSArIDEwMHB4KSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbmZvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvLWRpdiBoMiB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4uaW5mby1kaXYgcCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3J0aC1jb2xvcik7XFxufVxcblxcbiNtYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZUxvYWQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgbmV3UGFyYSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmV3SDIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBuZXdEaXYoKTtcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRpdicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBuZXdEaXYoKTtcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLWRpdicpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobmV3SDIoKSk7XG4gIGluZm9EaXYuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnfiBBZHJlc3Mgfic7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgaW5mb0Rpdi5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9ICdPbm91ZWEgVmlsbGFnZXMnO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gIGluZm9EaXYuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSAnS2lyaWJhdGknO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKG5ld0gyKCkpO1xuICBpbmZvRGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gJ34gUGhvbmUgbnVtYmVyIH4nO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gIGluZm9EaXYuY2hpbGRyZW5bNF0udGV4dENvbnRlbnQgPSAnKzY4NiAxMSA0OCA2OCA0ODgnO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKG5ld0gyKCkpO1xuICBpbmZvRGl2LmNoaWxkcmVuWzVdLnRleHRDb250ZW50ID0gJ34gRW1haWwgfidcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICBpbmZvRGl2LmNoaWxkcmVuWzZdLnRleHRDb250ZW50ID0gJ2tpcmliYXRpcmVzdGF1cmFudEB5YWhvby5raSc7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobmV3SDIoKSk7XG4gIGluZm9EaXYuY2hpbGRyZW5bN10udGV4dENvbnRlbnQgPSAnfiBMb2NhdGlvbiB+J1xuXG4gIGNvbnN0IG1hcERpdiA9IG5ld0RpdigpO1xuICBtYXBEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtYXAnKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChtYXBEaXYpO1xuICBtYXBEaXYuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTMzODIuNzc1NDM2MTE4OTA5ITJkLTE2MC4zODYyNDYxNjUzMjgxNSEzZDQuNjczMDIwMzA5MzgyNTc2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg3YTE4MDNjYTRlZmFlMzcxJTNBMHg3N2U2ZjNlM2E4ZWY1ZDQ1ITJzT25vdWVhJTIwVmlsbGFnZXMhNWUwITNtMiExc3NyITJzcnMhNHYxNjgyNDE3MzkxOTgxITVtMiExc3NyITJzcnNcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJMb2FkKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgbmV3UGFyYSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgZm9vdGVyLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIERyYWdpY2V2aWNTJztcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyTG9hZCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5ld0J0biA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnTihKInO1xuICBjb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTtcbiAgaGVhZGVyTmF2LmFwcGVuZENoaWxkKG5ld0J0bigpKTtcbiAgaGVhZGVyTmF2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBoZWFkZXJOYXYuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQobmV3QnRuKCkpO1xuICBoZWFkZXJOYXYuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGhlYWRlck5hdi5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGhlYWRlck5hdi5hcHBlbmRDaGlsZChuZXdCdG4oKSk7XG4gIGhlYWRlck5hdi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBoZWFkZXJOYXYubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG59OyIsImltcG9ydCByZXN0YXVyYW50IGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQuanBnJztcbmltcG9ydCBraXRjaGVuIGZyb20gJy4vaW1hZ2VzL2tpdGNoZW4uanBnJztcbmltcG9ydCBmb29kIGZyb20gJy4vaW1hZ2VzL2Zvb2QuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IG5ld1BhcmEgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5ld0ltZyA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBuZXdEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBob21lRGl2ID0gbmV3RGl2KCk7XG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZS1kaXYnKTtcbiAgY29uc3QgbWFpblBhcmFzID0gbmV3RGl2KCk7XG4gIG1haW5QYXJhcy5jbGFzc0xpc3QuYWRkKCdtYWluUGFyYXMnKVxuICBjb25zdCBtYWluSW1ncyA9IG5ld0RpdigpO1xuICBtYWluSW1ncy5jbGFzc0xpc3QuYWRkKCdtYWluSW1ncycpO1xuICBjb25zdCBtYWluUXVvdGUgPSBuZXdEaXYoKTtcbiAgbWFpblF1b3RlLmNsYXNzTGlzdC5hZGQoJ21haW5RdW90ZScpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQobWFpblBhcmFzKTtcbiAgbWFpblBhcmFzLmFwcGVuZENoaWxkKG5ld1BhcmEoKSk7XG4gIG1haW5QYXJhcy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCJ+IEJ1c2luZXNzIGhvdXJzIH5cIlxuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBTYXR1cmRheVwiO1xuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCIwODozMGFtIC0gMDE6MDBhbVwiO1xuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gXCJ+IEhhcHB5IGhvdXIgflwiO1xuICBtYWluUGFyYXMuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgbWFpblBhcmFzLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBcIjE0OjMwcG0gLSAxNjowMHBtXCI7XG5cbiAgaG9tZURpdi5hcHBlbmRDaGlsZChtYWluSW1ncyk7XG4gIG1haW5JbWdzLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgbWFpbkltZ3MuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN0YXVyYW50KTtcbiAgbWFpbkltZ3MuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkltYWdlIG9mIHJlc3RhdXJhbnQncyBpbnRlcmlvclwiKTtcbiAgbWFpbkltZ3MuYXBwZW5kQ2hpbGQobmV3SW1nKCkpO1xuICBtYWluSW1ncy5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZvb2QpO1xuICBtYWluSW1ncy5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiSW1hZ2Ugb2YgcmVzdGF1cmFudCdzIGZvb2RcIik7XG4gIG1haW5JbWdzLmFwcGVuZENoaWxkKG5ld0ltZygpKTtcbiAgbWFpbkltZ3MubGFzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGtpdGNoZW4pO1xuICBtYWluSW1ncy5sYXN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJJbWFnZSBvZiByZXN0YXVyYW50J3Mga2l0Y2hlblwiKTtcblxuICBob21lRGl2LmFwcGVuZENoaWxkKG1haW5RdW90ZSk7XG4gIG1haW5RdW90ZS5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICBtYWluUXVvdGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAn4oCcU28gbG9uZyBhcyB5b3UgaGF2ZSBmb29kIGluIHlvdXIgbW91dGggeW91IGhhdmUgc29sdmVkIGFsbCBxdWVzdGlvbnMgZm9yIHRoZSB0aW1lIGJlaW5nLuKAnSc7XG4gIG1haW5RdW90ZS5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICBtYWluUXVvdGUubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICctIEZyYW56IEthZmthJztcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IG5ld1BhcmEgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5ld0RpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXdIMiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIFxuICBsZXQgcm93ID0gMDtcblxuICBjb25zdCBtZW51RGl2ID0gbmV3RGl2KCk7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXYnKTtcbiAgXG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIFxuICBjb25zdCBhcHBldGl6ZXJNZW51ID0gW1xuICAgIFsnfiBTaHJpbXAgUmVtb3VsYWRlIC8gU2hyaW1wIENvY2t0YWlsJywgJzE2LjAwJ10sXG4gICAgWyd+IFNwaWN5IExvYnN0ZXInLCAnMTkuMDAnXSxcbiAgICBbJ34gQmFrZWQgRXNjYXJnb3QnLCAnMTYuMDAnXSxcbiAgICBbJ34gU2VhcmVkIEFoaSBUdW5hJywgJzE3LjAwJ10sXG4gICAgWyd+IFByb3NjaXV0dG8gV3JhcHBlZCBNb3p6YXJlbGxhJywgJzE0LjAwJ11cbiAgXTtcblxuICBjb25zdCBhcHBldGl6ZXJEaXYgPSBuZXdEaXYoKTtcbiAgYXBwZXRpemVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChhcHBldGl6ZXJEaXYpO1xuICBhcHBldGl6ZXJEaXYuYXBwZW5kQ2hpbGQobmV3SDIoKSk7XG4gIGFwcGV0aXplckRpdi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICd+IEFwcGV0aXplcnMgfic7XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgYXBwZXRpemVyTWVudS5sZW5ndGggKiAyOyBpKyspIHtcbiAgICBhcHBldGl6ZXJEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgICBhcHBldGl6ZXJEaXYuY2hpbGRyZW5baSsxXS50ZXh0Q29udGVudCA9IGFwcGV0aXplck1lbnVbcm93XVswXTtcbiAgICBhcHBldGl6ZXJEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgICBhcHBldGl6ZXJEaXYuY2hpbGRyZW5baSsyXS50ZXh0Q29udGVudCA9IGFwcGV0aXplck1lbnVbcm93XVsxXTtcbiAgICBpKys7XG4gICAgcm93Kys7XG4gIH07XG5cbiAgcm93ID0gMDtcblxuICBjb25zdCBzYWxhZFNvdXBNZW51ID0gW1xuICAgIFsnfiBTcGluYWNoIFNhbGFkJywgJzEwLjAwJ10sXG4gICAgWyd+IENhcHJlc2UgU2FsYWQnLCAnNy41MCddLFxuICAgIFsnfiBGcmVuY2ggT25pb24gU291cCcsICc1LjAwJ10sXG4gICAgWyd+IExvYnN0ZXIgQmlzcXVlJywgJzguMDAnXVxuICBdO1xuICBcbiAgY29uc3Qgc2FsYWRTb3VwRGl2ID0gbmV3RGl2KCk7XG4gIHNhbGFkU291cERpdi5jbGFzc0xpc3QuYWRkKCdmb29kJylcbiAgbWVudURpdi5hcHBlbmRDaGlsZChzYWxhZFNvdXBEaXYpO1xuICBzYWxhZFNvdXBEaXYuYXBwZW5kQ2hpbGQobmV3SDIoKSk7XG4gIHNhbGFkU291cERpdi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICd+IFNhbGFkcyBhbmQgU291cHMgfic7XG4gIFxuICBmb3IgKGxldCBpPTA7IGkgPCBzYWxhZFNvdXBNZW51Lmxlbmd0aCAqIDI7IGkrKykge1xuICAgIHNhbGFkU291cERpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHNhbGFkU291cERpdi5jaGlsZHJlbltpKzFdLnRleHRDb250ZW50ID0gc2FsYWRTb3VwTWVudVtyb3ddWzBdO1xuICAgIHNhbGFkU291cERpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHNhbGFkU291cERpdi5jaGlsZHJlbltpKzJdLnRleHRDb250ZW50ID0gc2FsYWRTb3VwTWVudVtyb3ddWzFdO1xuICAgIGkrKztcbiAgICByb3crKztcbiAgfTtcblxuICByb3cgPSAwO1xuICBcbiAgY29uc3Qgc3RlYWtDdXRzTWVudSA9IFtcbiAgICBbJ34gRmlsZXQgTWlnbm9uLCA4IG91bmNlJywgJzM4LjAwJ10sXG4gICAgWyd+IEZpbGV0IE1pZ25vbiwgMTIgb3VuY2UnLCAnNDkuMDAnXSxcbiAgICBbJ34gUmliIEV5ZSBTdGVhayAxOCBvdW5jZScsICczOS4wMCddLFxuICAgIFsnfiBQb3J0ZXJob3VzZSBmb3IgVHdvJywgJzQwLjAwJ10sXG4gICAgWyd+IENsYXNzaWMgTmV3IFlvcmsgU2lybG9pbicsICczNi4wMCddXG4gIF07XG5cbiAgY29uc3Qgc3RlYWtDdXRzRGl2ID0gbmV3RGl2KCk7XG4gIHN0ZWFrQ3V0c0Rpdi5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoc3RlYWtDdXRzRGl2KTtcbiAgc3RlYWtDdXRzRGl2LmFwcGVuZENoaWxkKG5ld0gyKCkpO1xuICBzdGVha0N1dHNEaXYuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAnfiBTdGVhayBDdXRzIH4nO1xuICBcbiAgZm9yIChsZXQgaT0wOyBpIDwgc3RlYWtDdXRzTWVudS5sZW5ndGggKiAyOyBpKyspIHtcbiAgICBzdGVha0N1dHNEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgICBzdGVha0N1dHNEaXYuY2hpbGRyZW5baSsxXS50ZXh0Q29udGVudCA9IHN0ZWFrQ3V0c01lbnVbcm93XVswXTtcbiAgICBzdGVha0N1dHNEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSgpKTtcbiAgICBzdGVha0N1dHNEaXYuY2hpbGRyZW5baSsyXS50ZXh0Q29udGVudCA9IHN0ZWFrQ3V0c01lbnVbcm93XVsxXTtcbiAgICBpKys7XG4gICAgcm93Kys7XG4gIH07XG5cbiAgcm93ID0gMDtcblxuICBjb25zdCBzZWFmb29kTWVudSA9IFtcbiAgICBbJ34gU3R1ZmZlZCBMb2JzdGVyIFRhaWwnLCAnMTguMDAnXSxcbiAgICBbJ34gTWFyeWxhbmQgQ3JhYiBDYWtlIERpbm5lcicsICcxNi4wMCddLFxuICAgIFsnfiBXaG9sZSBMb2JzdGVyJywgJzIwLjAwJ10sXG4gICAgWyd+IENsYW0gWnVwcGEnLCAnMTQuNTAnXSxcbiAgICBbJ34gTWFyeWxhbmQgQ3JhYiBDYWtlcycsICcyMi4wMCddXG4gIF07XG5cbiAgY29uc3Qgc2VhZm9vZERpdiA9IG5ld0RpdigpO1xuICBzZWFmb29kRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChzZWFmb29kRGl2KTtcbiAgc2VhZm9vZERpdi5hcHBlbmRDaGlsZChuZXdIMigpKTtcbiAgc2VhZm9vZERpdi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICd+IFNlYWZvb2Qgfic7XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgc2VhZm9vZE1lbnUubGVuZ3RoICogMjsgaSsrKSB7XG4gICAgc2VhZm9vZERpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHNlYWZvb2REaXYuY2hpbGRyZW5baSsxXS50ZXh0Q29udGVudCA9IHNlYWZvb2RNZW51W3Jvd11bMF07XG4gICAgc2VhZm9vZERpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHNlYWZvb2REaXYuY2hpbGRyZW5baSsyXS50ZXh0Q29udGVudCA9IHNlYWZvb2RNZW51W3Jvd11bMV07XG4gICAgaSsrO1xuICAgIHJvdysrO1xuICB9O1xuXG4gIHJvdyA9IDA7XG5cbiAgY29uc3Qgc2lkZXNNZW51ID0gW1xuICAgIFsnU2VzYW1lIEdyZWVuIEJlYW5zJywgJzQuMDAnXSxcbiAgICBbJ0NvbGUgU2xhdycsICczLjAwJ10sXG4gICAgWydCYWJ5IEJydXNzZWxzIFNwcm91dHMnLCAnNC4wMCddLFxuICAgIFsnTWFzaGVkIFBvdGF0b2VzJywgJzQuMDAnXSxcbiAgICBbJ0hhbmQtQ3V0IEZyaWVzJywgJzMuMDAnXSxcbiAgICBbJ0NyZWFtZWQgU3BpbmFjaCcsICc2LjAwJ10sXG4gICAgWydCcm9pbGVkIFRvbWF0b2VzJywgJzUuMDAnXSxcbiAgICBbJ1N3ZWV0IFBvdGF0byBDYXNzZXJvbGUnLCAnNi4wMCddLFxuICAgIFsnQnV0dGVybWlsayBCaXNjdWl0JywgJzMuNTAnXSxcbiAgICBbJ0ZyZXNoIEFzcGFyYWd1cycsICc3LjAwJ11cbiAgXTtcblxuICBjb25zdCBzaWRlc0RpdiA9IG5ld0RpdigpO1xuICBzaWRlc0Rpdi5jbGFzc0xpc3QuYWRkKCdzaWRlcycpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKHNpZGVzRGl2KTtcbiAgc2lkZXNEaXYuYXBwZW5kQ2hpbGQobmV3SDIoKSk7XG4gIHNpZGVzRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ34gU2lkZXMgfic7XG4gIGZvciAobGV0IGk9MDsgaSA8IHNpZGVzTWVudS5sZW5ndGggKiAyOyBpKyspIHtcbiAgICBzaWRlc0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHNpZGVzRGl2LmNoaWxkcmVuW2krMV0udGV4dENvbnRlbnQgPSBzaWRlc01lbnVbcm93XVswXTtcbiAgICBzaWRlc0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKCkpO1xuICAgIHNpZGVzRGl2LmNoaWxkcmVuW2krMl0udGV4dENvbnRlbnQgPSBzaWRlc01lbnVbcm93XVsxXTtcbiAgICBpKys7XG4gICAgcm93Kys7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhlYWRlckxvYWQgZnJvbSAnLi9oZWFkZXItbG9hZC5qcyc7XG5pbXBvcnQgZm9vdGVyTG9hZCBmcm9tICcuL2Zvb3Rlci1sb2FkLmpzJztcbmltcG9ydCBob21lUGFnZUxvYWQgZnJvbSAnLi9ob21lLXBhZ2UuanMnO1xuaW1wb3J0IG1lbnVQYWdlTG9hZCBmcm9tICcuL21lbnUtcGFnZS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2VMb2FkIGZyb20gJy4vY29udGFjdC1sb2FkLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5oZWFkZXJMb2FkKCk7XG5mb290ZXJMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuY29uc3QgaG9tZUxvYWQgPSAoKSA9PiB7XG4gIGhvbWVQYWdlTG9hZCgpO1xuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgaG9tZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MkEzQSc7XG59O1xuaG9tZUxvYWQoKTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaG9tZVBhZ2VMb2FkKCk7XG4gIG1lbnVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgY29udGFjdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICBob21lQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjgyQTNBJztcbn0pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51UGFnZUxvYWQoKTtcbiAgaG9tZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICBjb250YWN0QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gIG1lbnVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyODJBM0EnO1xufSk7XG5cbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnRhY3RQYWdlTG9hZCgpO1xuICBob21lQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gIG1lbnVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgY29udGFjdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MkEzQSc7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=