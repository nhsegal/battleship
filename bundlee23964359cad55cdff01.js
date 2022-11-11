/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  box-sizing: border-box;\n}\n\n:root {\n  --cell-size: 30px;\n  --mark-size: calc(var(--cell-size)*.4);\n}\n\nbody{\n  margin: 0;\n}\n\nh1{\n  margin: 1rem;\n}\n\n.border{\n width: 100vw;\n height: 100vh;\n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);;\n  border: 1px solid black; \n}\n\n\n#top{\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n#middle{\n  display: flex;\n  justify-items: center;\n  gap: 2rem;\n  justify-content: center;\n  align-content: center;\n}\n\n#player-board-title, #cpu-board-title{\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#center{\n  text-align: center;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 2rem;\n}\n\n#hit-or-miss{\n  font-size: 2rem;\n}\n\n#announcements{\n  font-size: 2rem;\n}\n\n.cell{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color:  rgb(106, 199, 242);\n  font-size: 15px;\n  padding: 0;\n  font-family: Courier, monospace;\n  text-align: center;\n  color: white;\n  border: .5px solid rgb(100,100,100);\n  position: relative;\n  cursor: pointer;\n}\n\n.cell.hit, .cell.miss, #playerGB>.cell {\n  cursor: not-allowed;\n}\n\n.cell.hit::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.hit::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: red;\n  border-radius: 50%;\n}\n\n.cell.miss::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.miss::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: white;\n  border-radius: 50%;\n}\n\n.cell.hasShip{\n background-color: rgb(150, 150, 150);\n}\n\n.end-game-message {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.8);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 5rem;\n  gap: 1rem;\n}\n\n.end-game-message.show {\n  display: flex;\n}\n\n#restart-button {\n  font-size: 2rem;\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 0.8rem;\n  padding: 10px 20px;\n}\n\n#fleet {\n  padding-top: 3rem;\n  padding-left: 6rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  width: 40vw;\n}\n\n#fleet>div {\n  padding-bottom: 1rem;\n}\n\n.ship {\n  display: flex;\n}\n.ship>div {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: rgb(150, 150, 150);\n  border: .5px solid rgb(100,100,100);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,uBAAuB;AACzB;;;AAGA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;EACxB,qCAAqC;EACrC,eAAe;EACf,UAAU;EACV,+BAA+B;EAC/B,kBAAkB;EAClB,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;EACf,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,uCAAuC;EACvC,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,mCAAmC;AACrC","sourcesContent":["*, *::after, *::before {\n  box-sizing: border-box;\n}\n\n:root {\n  --cell-size: 30px;\n  --mark-size: calc(var(--cell-size)*.4);\n}\n\nbody{\n  margin: 0;\n}\n\nh1{\n  margin: 1rem;\n}\n\n.border{\n width: 100vw;\n height: 100vh;\n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);;\n  border: 1px solid black; \n}\n\n\n#top{\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n#middle{\n  display: flex;\n  justify-items: center;\n  gap: 2rem;\n  justify-content: center;\n  align-content: center;\n}\n\n#player-board-title, #cpu-board-title{\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#center{\n  text-align: center;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 2rem;\n}\n\n#hit-or-miss{\n  font-size: 2rem;\n}\n\n#announcements{\n  font-size: 2rem;\n}\n\n.cell{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color:  rgb(106, 199, 242);\n  font-size: 15px;\n  padding: 0;\n  font-family: Courier, monospace;\n  text-align: center;\n  color: white;\n  border: .5px solid rgb(100,100,100);\n  position: relative;\n  cursor: pointer;\n}\n\n.cell.hit, .cell.miss, #playerGB>.cell {\n  cursor: not-allowed;\n}\n\n.cell.hit::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.hit::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: red;\n  border-radius: 50%;\n}\n\n.cell.miss::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.miss::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: white;\n  border-radius: 50%;\n}\n\n.cell.hasShip{\n background-color: rgb(150, 150, 150);\n}\n\n.end-game-message {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.8);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 5rem;\n  gap: 1rem;\n}\n\n.end-game-message.show {\n  display: flex;\n}\n\n#restart-button {\n  font-size: 2rem;\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 0.8rem;\n  padding: 10px 20px;\n}\n\n#fleet {\n  padding-top: 3rem;\n  padding-left: 6rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  width: 40vw;\n}\n\n#fleet>div {\n  padding-bottom: 1rem;\n}\n\n.ship {\n  display: flex;\n}\n.ship>div {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: rgb(150, 150, 150);\n  border: .5px solid rgb(100,100,100);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClickCallbackToGameboard": () => (/* binding */ addClickCallbackToGameboard),
/* harmony export */   "announcements": () => (/* binding */ announcements),
/* harmony export */   "cpuGB": () => (/* binding */ cpuGB),
/* harmony export */   "cpuGBcontainer": () => (/* binding */ cpuGBcontainer),
/* harmony export */   "displayAttack": () => (/* binding */ displayAttack),
/* harmony export */   "endGameMsg": () => (/* binding */ endGameMsg),
/* harmony export */   "endGameScreen": () => (/* binding */ endGameScreen),
/* harmony export */   "hitOrMiss": () => (/* binding */ hitOrMiss),
/* harmony export */   "makeFleet": () => (/* binding */ makeFleet),
/* harmony export */   "makeGameboard": () => (/* binding */ makeGameboard),
/* harmony export */   "playerGB": () => (/* binding */ playerGB),
/* harmony export */   "preGameFleet": () => (/* binding */ preGameFleet)
/* harmony export */ });
/* harmony import */ var _gamePieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePieces */ "./src/gamePieces.js");


const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");
const cpuGBcontainer = document.getElementById("cpuGBcontainer");
const hitOrMiss = document.getElementById("hit-or-miss");
const announcements = document.getElementById("announcements");
const endGameMsg = document.querySelector('[data-end-game-message]');
const endGameScreen = document.getElementById("end-game-message");
const preGameFleet = document.getElementById("fleet");


const makeGameboard = (someDiv, callback = null) => {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.at
    let idNum = i;
    if (i < 10) {
      idNum = "0" + String(idNum);
    }
    cell.classList.add("cell");
    cell.setAttribute("data-cell", ""); 
    cell.id = someDiv.id + idNum;
    if (callback){
      cell.addEventListener("click", 
      callback
      );
    }
    someDiv.append(cell);
  }
}

const addClickCallbackToGameboard = (gameBoardDiv, func) =>{
  const cells = [...gameBoardDiv.querySelectorAll(gameBoardDiv.id > ".cell")];
  cells.forEach( cell => {
    cell.addEventListener('click', func)})
}

const makeFleet = (someDiv, callback = null) => {
  let fleetToPlace = (0,_gamePieces__WEBPACK_IMPORTED_MODULE_0__.Fleet)();
  fleetToPlace.forEach(ship => {
    const shipNameDiv = document.createElement('div');
    shipNameDiv.textContent = ship.name;
    shipNameDiv.setAttribute("data-name", `${ship.name}`);
    const shipBodyDiv = document.createElement('div');
    shipBodyDiv.draggable = true;
    shipBodyDiv.classList.add('ship')
    for (let i =0; i< ship.length; i++){
      shipBodyDiv.append(document.createElement('div')) 
    } 
    someDiv.append(shipNameDiv, shipBodyDiv)
  });
}

const displayAttack = (player, x, y, success) => {
  let loc = null;
  if (player === 'computer') {
   loc = `playerGB` + x + y;
  }
  if (player === 'human') {
    loc = `cpuGB` + x + y;
  }
  let element = document.getElementById(`${loc}`);
  if (success) {
    element.classList.add("hit");
  }
  else {
    element.classList.add("miss");
  }
}



/***/ }),

/***/ "./src/gamePieces.js":
/*!***************************!*\
  !*** ./src/gamePieces.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fleet": () => (/* binding */ Fleet),
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "human": () => (/* binding */ human)
/* harmony export */ });
const Ship = (len, name = null, xi = null, yi = null, _axis = null) => {
  let _hitNumber = 0;
  const x = xi;
  const y = yi;
  const axis = _axis;
  let length = len;
  const hit = () => {
    _hitNumber = _hitNumber + 1;
    return _hitNumber;
  };
  const isSunk = () => {
    if (_hitNumber >= length) {
      return true;
    }
    return false;
  };
  return {
    length,
    name,
    x,
    y,
    axis,
    get hitNumber() {
      return _hitNumber;
    },
    hit,
    isSunk,
  };
};

const Fleet = () => {
  return [
    Ship(5, "Carrier"),
    Ship(4, "Battleship"),
    Ship(3, "Cruiser"),
    Ship(3, "Submarine"),
    Ship(2, "Destroyer"),
  ];
};

const Gameboard = () => {
  const boardLength = 10;
  const fleet = Fleet();
  const occupiedSquares = [];
  const placeShip = (name, xi, yi, axis) => {
    let ship = fleet.filter((item) => item.name === name)[0];
    if (xi < 0 || xi > boardLength - 1 || yi < 0 || yi > boardLength - 1) {
      throw new Error("Location out of bounds");
    }
    if (
      (axis === "x" && xi > boardLength - 1 - ship.length) ||
      (axis === "y" && yi > boardLength - 1 - ship.length)
    ) {
      throw new Error("Ship partially out of bounds");
    }

    if (axis === "x") {
      for (let i = 0; i < ship.length; i++) {
        if (
          occupiedSquares.filter(
            (entry) => entry.x === xi + i && entry.y === yi
          ).length > 0
        ) {
          throw new Error("Another ship is in the way");
        }
      }
    }
    if (axis === "y") {
      for (let i = 0; i < ship.length; i++) {
        if (
          occupiedSquares.filter(
            (entry) => entry.x === xi && entry.y === yi + i
          ).length > 0
        ) {
          throw new Error("Another ship is in the way");
        }
      }
    }

    ship.x = xi;
    ship.y = yi;
    ship.axis = axis;
    for (let i = 0; i < ship.length; i++) {
      if (axis === "x") {
        occupiedSquares.push({ x: ship.x + i, y: ship.y });
      } else {
        occupiedSquares.push({ x: ship.x, y: ship.y + i });
      }
    }
    return ship;
  };
  const shotRecord = [];
  const receiveAttack = (x, y) => {
    shotRecord.push({ x, y });
    let success = false;
    fleet.forEach((ship) => {
      if (ship.axis === "x") {
        if (x >= ship.x && x < ship.x + ship.length && y === ship.y) {
          ship.hit();
          success = true;
          return success;
        }
      } else if (ship.axis === "y") {
        if (x === ship.x && y >= ship.y && y < ship.y + ship.length) {
          ship.hit();
          success = true;
          return success;
        }
      }
    });
    return success;
  };
  const allSunk = () => {
    return fleet.every((ship) => ship.isSunk());
  };

  return {
    boardLength,
    fleet,
    occupiedSquares,
    placeShip,
    shotRecord,
    receiveAttack,
    allSunk,
  };
};

const Player = (_name = null) => {
  const name = _name;
  const gameboard = Gameboard();
  const attack = (opponent, x, y) => {
    if (
      x < 0 ||
      x >= opponent.gameboard.boardLength ||
      y < 0 ||
      y >= opponent.gameboard.boardLength
    ) {
      throw new Error("Attack out of bounds");
    }
    if (
      opponent.gameboard.shotRecord.filter((e) => e.x === x && e.y === y)
        .length != 0
    ) {
      throw new Error("Attack redundant");
    }
    return { success: opponent.gameboard.receiveAttack(x, y), x, y };
  };

  const randomlyPlaceShips = () => {
    gameboard.fleet.forEach((ship, index, arr) => {
      let orientation = Math.random();
      let xpos = null;
      let ypos = null;
      let axis = null;
      // Randomally pick an axis location that fits the ship
      if (orientation > 0.5) {
        axis = "x";
        xpos = Math.floor(
          Math.random() * (gameboard.boardLength - ship.length)
        );
        ypos = Math.floor(Math.random() * gameboard.boardLength);
      } else {
        axis = "y";
        xpos = Math.floor(Math.random() * gameboard.boardLength);
        ypos = Math.floor(
          Math.random() * (gameboard.boardLength - ship.length)
        );
      }

      // If it clashes with a placed ship repick by recursion
      while (isBlocked(ship, axis, xpos, ypos, gameboard.occupiedSquares)) {
        orientation = Math.random();
        if (orientation > 0.5) {
          axis = "x";
          xpos = Math.floor(
            Math.random() * (gameboard.boardLength - ship.length)
          );
          ypos = Math.floor(Math.random() * gameboard.boardLength);
        } else {
          axis = "y";
          xpos = Math.floor(Math.random() * gameboard.boardLength);
          ypos = Math.floor(
            Math.random() * (gameboard.boardLength - ship.length)
          );
        }
      }
      gameboard.placeShip(ship.name, xpos, ypos, axis);
    });
  };

  return {
    name,
    gameboard,
    attack,
    randomlyPlaceShips,
  };
};

let human = Player("You");
let computer = Player("Computer");

// Give computer an attack strategy
computer.randomAttack = function (enemy) {
  let x = Math.floor(Math.random() * enemy.gameboard.boardLength);
  let y = Math.floor(Math.random() * enemy.gameboard.boardLength);
  while (
    enemy.gameboard.shotRecord.filter((e) => e.x === x && e.y === y).length != 0
  ) {
    x = Math.floor(Math.random() * enemy.gameboard.boardLength);
    y = Math.floor(Math.random() * enemy.gameboard.boardLength);
  }
  //  Returns true if success
  return computer.attack(enemy, x, y)
  
};

// isBlocked() helps computer place its ships
function isBlocked(ship, axis, xpos, ypos, occSqArr) {
  let coOrdinatesToTest = [];
  if (axis === "x") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({ x: xpos + i, y: ypos });
    }
  } else if (axis === "y") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({ x: xpos, y: ypos + i });
    }
  }
  for (let i = 0; i < coOrdinatesToTest.length; i++) {
    if (
      occSqArr.filter(
        (e) => e.x === coOrdinatesToTest[i].x && e.y === coOrdinatesToTest[i].y
      ).length > 0
    ) {
      return true;
    }
  }
  return false;
}

computer.randomlyPlaceShips();
//human.randomlyPlaceShips();




/***/ }),

/***/ "./src/gamePlay.js":
/*!*************************!*\
  !*** ./src/gamePlay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePieces.js */ "./src/gamePieces.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _humanPlaceShips_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humanPlaceShips.js */ "./src/humanPlaceShips.js");





const revealPlayerShips = () => {
  for (const ship of _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human.gameboard.fleet) {
    let loc = null;
    for (let i = 0; i < ship.length; i++) {
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === "x") {
        x = x + i;
      } else {
        y = y + i;
      }
      loc = `playerGB` + x + y;
      let element = document.getElementById(`${loc}`);
      element.classList.add("hasShip");
    }
  }
};

const game = () => {
  let gameOver = false;
  let boardLocked = false;

  const playerTurn = function (e) {
    if (gameOver) return;
    if (e.target.matches(".hit") || e.target.matches(".miss")) {
      return;
    }
    if (boardLocked) {
      return;
    }
    boardLocked = true;
    _dom__WEBPACK_IMPORTED_MODULE_1__.announcements.textContent = "";
    let y = parseInt(e.target.id.slice(-2)) % 10;
    let x = Math.floor(parseInt(e.target.id.slice(-2)) / 10);
    let before = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer);
    let attack = _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human.attack(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer, x, y);
    if (attack.success) {
      _dom__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "You hit the enemy!";
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("human", attack.x, attack.y, true);
      let after = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer);
      if (after.count > before.count) {
        let newlySunk = after.list
          .filter((name) => !before.list.includes(name))[0]
          .toLowerCase();
        _dom__WEBPACK_IMPORTED_MODULE_1__.announcements.textContent = `You sunk a ${newlySunk}!`;
      }
      if (_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer.gameboard.allSunk()) {
        _dom__WEBPACK_IMPORTED_MODULE_1__.endGameMsg.textContent = "You won!";
        _dom__WEBPACK_IMPORTED_MODULE_1__.endGameScreen.classList.add("show");
        gameOver = true;
        return;
      }
    } else {
      _dom__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "You missed!";
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("human", attack.x, attack.y, false);
    }
    setTimeout(computerTurn, 1000);
  };

  const computerTurn = function () {
    let before = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human);
    let attack = _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer.randomAttack(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human);
    if (attack.success) {
      _dom__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "You've been hit!";
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("computer", attack.x, attack.y, true);
      let after = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human);
      if (after.count > before.count) {
        let newlySunk = after.list
          .filter((name) => !before.list.includes(name))[0]
          .toLowerCase();
        _dom__WEBPACK_IMPORTED_MODULE_1__.announcements.textContent = `They sunk your ${newlySunk}!`;
      }
      if (_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human.gameboard.allSunk()) {
        _dom__WEBPACK_IMPORTED_MODULE_1__.endGameMsg.textContent = "You lost!";
        _dom__WEBPACK_IMPORTED_MODULE_1__.endGameScreen.classList.add("show");
        gameOver = true;
        return;
      }
    } else {
      _dom__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "They missed!";
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("computer", attack.x, attack.y, false);
    }
    boardLocked = false;
  };

  const countSunkShips = function (player) {
    let count = 0;
    let list = [];
    player.gameboard.fleet.forEach((ship) => {
      if (ship.isSunk()) {
        list.push(ship.name);
        count++;
      }
    });
    return { count, list };
  };

  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.makeGameboard)(_dom__WEBPACK_IMPORTED_MODULE_1__.playerGB);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.makeGameboard)(_dom__WEBPACK_IMPORTED_MODULE_1__.cpuGB, playerTurn);

};



/***/ }),

/***/ "./src/humanPlaceShips.js":
/*!********************************!*\
  !*** ./src/humanPlaceShips.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "humanPlaceShips": () => (/* binding */ humanPlaceShips)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gamePieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePieces */ "./src/gamePieces.js");



// MakeGameboard adds an event click listener 
// but I need a mouseover listener as well

/*
const showShipToPlace = (ship) => {
  announcements.textContent = `Place your ${ship.name.toLowercase()}.`;
  if (ship.axis === 'x') {

  }
}
*/

const setGridPosition = (e, ship) => {
  ship.x= e.target.id.slice(-1);
  ship.y= e.target.id.slice(-2,-1);
}

const test = () => console.log('hello')

const humanPlaceShips = () => {
  // Hide enemy board
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.cpuGBcontainer.style.display = "none";

  // Make the human gameboard once
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.makeGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addClickCallbackToGameboard)(document.getElementById("playerGB"), test)
    
   // playerGB, test);
  //human.gameboard.fleet[0].x = null;
  //human.gameboard.fleet[0].y = null;
  
  let i = 0; 
  //while (i< human.gameboard.fleet.length){
 
   
    if (_gamePieces__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet[i].x !== null && _gamePieces__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet[i].y !== null) {
      i++;
    }
  //}
  
  console.log(_gamePieces__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet)


  
};




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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _humanPlaceShips_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./humanPlaceShips.js */ "./src/humanPlaceShips.js");
/* harmony import */ var _gamePlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePlay.js */ "./src/gamePlay.js");




(0,_humanPlaceShips_js__WEBPACK_IMPORTED_MODULE_1__.humanPlaceShips)()

//game()




/*
const revealPlayerShips = () => {
  for (const ship of human.gameboard.fleet) {
    let loc = null;
    for (let i = 0; i < ship.length; i++) {
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === "x") {
        x = x + i;
      } else {
        y = y + i;
      }
      loc = `playerGB` + x + y;
      let element = document.getElementById(`${loc}`);
      element.classList.add("hasShip");
     
    }
  }
};
*/
//revealPlayerShips();
//makeFleet(preGameFleet)


})();

/******/ })()
;
//# sourceMappingURL=bundlee23964359cad55cdff01.js.map