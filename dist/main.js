/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithms/polytreenode.js":
/*!****************************************!*\
  !*** ./src/algorithms/polytreenode.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolyTreeNode; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board */ "./src/board.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PolyTreeNode = /*#__PURE__*/function () {
  function PolyTreeNode(value, position) {
    _classCallCheck(this, PolyTreeNode);

    this.tileObj = document.getElementById("".concat(position[0], "-").concat(position[1]));
    this.value = value;
    this.position = position;
    this.parent = null;
    this.children = [];
    this.grid = _board__WEBPACK_IMPORTED_MODULE_0__["default"].grid; //Is this the right way to do this??
  }

  _createClass(PolyTreeNode, [{
    key: "bfs",
    value: function bfs(target) {
      var queue = [this];

      while (queue.length > 0) {
        var currentNode = queue.shift();
        currentNode.tileObj.visit();
        if (currentNode.value === target) return currentNode;
        queue.push.apply(queue, _toConsumableArray(currentNode.children));
      }
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var _this = this;

      var increments = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // buildTree function will use the node it is called on as the root node of the tree.

      var neighbors = [this];

      var _loop = function _loop() {
        var currentNode = neighbors.shift();
        increments.forEach(function (inc) {
          var newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];
          var neighbor = _this.grid[newPos[0]][newPos[1]]; // If the neighbor exists and is not the parent or child of the current node:

          if (neighbor.node && neighbor.node !== currentNode.parent && !currentNode.children.includes(neighbor.node)) {
            neighbors.push(neighbor.node);
            currentNode.addChild(neighbor.node);
          }
        });
      };

      while (neighbors.length > 0) {
        _loop();
      }
    }
  }, {
    key: "addParent",
    value: function addParent(parentNode) {
      debugger;

      if (this.parent !== null) {
        // Check to see if current node already has a parent
        var index = this.parent.children.indexOf(this);
        this.parent.children.splice(index, 1); // Remove itself from old parent's children
      }

      this.parent = parentNode;

      if (this.parent) {
        // Check in case node passed in is null
        this.parent.children.push(this);
      }
    }
  }, {
    key: "addChild",
    value: function addChild(childNode) {
      childNode.addParent(this);
      this.children.push(childNode);
    }
  }, {
    key: "removeChild",
    value: function removeChild(childNode) {
      var index = this.children.indexOf(childNode);
      this.children.splice(index, 1);
      childNode.parent = null;
    }
  }]);

  return PolyTreeNode;
}();



/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/tile.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);

    this.grid = [];
    console.log("Board created");
  }

  _createClass(Board, [{
    key: "fillGrid",
    value: function fillGrid() {
      // Board is 24 x 48, 1152 total tiles
      for (var i = 0; i < 24; i++) {
        var row = [];

        for (var j = 0; j < 48; j++) {
          var newTile = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]([i, j]);
          row.push(newTile);
        }

        this.grid.push(row);
      }
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/polytreenode */ "./src/algorithms/polytreenode.js");


document.addEventListener("DOMContentLoaded", function () {
  var board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
  board.fillGrid();
  console.log("Board initialized and populated");
  var n1 = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_1__["default"]("node 1", [4, 9]);
  var n2 = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_1__["default"]("node 2", [6, 17]);
  var n3 = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_1__["default"]("node 3", [12, 4]);
  console.log("Nodes loaded");
  n1.addParent(n2);
  console.log(n1);
  console.log(n2);
  console.log("Added Parent");
  n1.addParent(n3); // n2.removeChild(n1);
  // console.log(n1);
  // console.log(n2);
  // console.log("Removed Parent")
});

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/polytreenode */ "./src/algorithms/polytreenode.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Tile = /*#__PURE__*/function () {
  function Tile(position) {
    _classCallCheck(this, Tile);

    this.position = position; // i.e [4, 12];

    this.tile = document.createElement("div");
    this.tile.classList.add("tile");
    this.tile.id = "".concat(position[0], "-").concat(position[1]);
    this.node = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_0__["default"](null, position);
    var grid = document.getElementById("grid");
    grid.appendChild(this.tile);
  }

  _createClass(Tile, [{
    key: "visit",
    value: function visit() {
      this.tile.classList.add("visited");
    }
  }]);

  return Tile;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map