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
  function PolyTreeNode(value, position, grid) {
    _classCallCheck(this, PolyTreeNode);

    this.value = value;
    this.position = position;
    this.grid = grid;
    this.tileObj = document.getElementById("".concat(position[0], "-").concat(position[1]));
    this.parent = null;
    this.children = [];
    this.visitedTiles = [];
    this.visited = new Set();
    this.visited.add(this.position.join("-"));
    this.visualize = this.visualize.bind(this);
  }

  _createClass(PolyTreeNode, [{
    key: "visualize",
    value: function visualize(visitedTiles, grid) {
      var viz = this.visualize; // Save function to a variable so that it can be accessed within setTimeout's callback

      if (visitedTiles.length > 1) {
        setTimeout(function () {
          var currentPos = visitedTiles.shift();
          grid[currentPos[0]][currentPos[1]].tile.classList.add("visited");
          viz(visitedTiles, grid); // Calls itself recursively to ensure other code has finished running
        }, 5);
      } else if (visitedTiles.length === 1) {
        var targetPos = visitedTiles[0];
        grid[targetPos[0]][targetPos[1]].tile.classList.add("target-found");
      }
    }
  }, {
    key: "bfs",
    value: function bfs(target) {
      var queue = [this];

      while (queue.length > 0) {
        var currentNode = queue.shift();

        if (currentNode.value !== "root" && currentNode.value !== "target") {
          this.visitedTiles.push(currentNode.position);
        }

        if (currentNode.value === target) {
          this.visitedTiles.push(currentNode.position); // currentNode.tileObj.classList.add("target-found");

          this.visualize(this.visitedTiles, this.grid);
          return currentNode;
        }

        queue.push.apply(queue, _toConsumableArray(currentNode.children));
      } // Logic for handling unsolvable grid goes here

    }
  }, {
    key: "dfs",
    value: function dfs(target) {
      var stack = [this];

      while (stack.length > 0) {
        for (var i = 0; i < stack.length; i++) {
          var currentNode = stack.shift();

          if (currentNode.value === target) {
            this.visitedTiles.push(currentNode.position);
            this.visualize(this.visitedTiles, this.grid);
            return currentNode;
          } else if (currentNode.value !== "root") {
            this.visitedTiles.push(currentNode.position);
          }

          stack.unshift.apply(stack, _toConsumableArray(currentNode.children));
        }
      }
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var _this = this;

      var increments = [[-1, 0], // Up
      [0, 1], // Right
      [1, 0], // Down
      [0, -1] // Left
      // [1, 0], // Down
      // [0, -1], // Left
      // [-1, 0], // Up
      // [0, 1] // Right
      // [0, 1] // Why does this one break everything?
      // [1, 0],
      // [-1, 0],
      // [0, -1]
      ]; // buildTree function will use the node on which it is called as the root node of the tree

      var neighbors = [this]; // This is a queue

      var _loop = function _loop() {
        var currentNode = neighbors.shift();
        increments.forEach(function (inc) {
          var newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]]; // If the position is valid:

          if (newPos[0] >= 0 && newPos[0] < 25 && newPos[1] >= 0 && newPos[1] < 48) {
            if (_this.visited.has(newPos.join("-"))) {
              return;
            }

            _this.visited.add(newPos.join("-")); // console.log(newPos.join("-"))


            var neighborTile = _this.grid[newPos[0]][newPos[1]];
            neighbors.push(neighborTile.node);
            neighborTile.node.addParent(currentNode); // If the neighbor exists, has no parent, and is not already a child of the current node:
            // if (neighborTile.node.parent === null && !currentNode.children.includes(neighborTile.node)) {
            //     neighbors.push(neighborTile.node);
            //     neighborTile.node.addParent(currentNode);
            // }
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
      if (this.parent !== null) {
        // Check to see if current node already has a parent
        this.parent.removeChild(this); // Remove itself from old parent's children
      }

      if (parentNode !== null) {
        this.parent = parentNode;
        parentNode.children.push(this);
      }
    } // addChild(childNode) {
    //     childNode.addParent(this);
    // }
    // removeChild(childNode) {
    //     let index = this.children.indexOf(childNode);
    //     this.children.splice(index, 1);
    //     childNode.parent = null;
    // }

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
  }

  _createClass(Board, [{
    key: "fillGrid",
    value: function fillGrid() {
      for (var i = 0; i < 25; i++) {
        // Board is 25 x 48, 1200 total tiles
        var row = [];

        for (var j = 0; j < 48; j++) {
          var newTile = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]([i, j], this);
          row.push(newTile);
        }

        this.grid.push(row);
      }
    }
  }, {
    key: "validPos",
    value: function validPos(pos) {}
  }, {
    key: "setRoot",
    value: function setRoot(pos) {}
  }, {
    key: "setTarget",
    value: function setTarget(pos) {}
  }, {
    key: "reset",
    value: function reset() {}
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
  // Create and fill board
  var board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
  board.fillGrid();
  console.log("Board initialized and populated"); // Set root node

  board.grid[12][9].node = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_1__["default"]("root", [12, 9], board.grid);
  var rootNode = board.grid[12][9];
  rootNode.tile.classList.add("root-node");
  console.log("Root node set"); // Set target node

  board.grid[12][40].node = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_1__["default"]("target", [12, 40], board.grid);
  var targetNode = board.grid[12][40];
  targetNode.tile.classList.add("target-node");
  console.log("Target node set"); // Add functionality to radio buttons

  function setAlgo(event) {
    algorithm = event.target.id;
  }

  var algorithm = "bfs-btn"; // Default algorithm

  var dijkstrasButton = document.getElementById("dijkstras-btn");
  var astarButton = document.getElementById("astar-btn");
  var bfsButton = document.getElementById("bfs-btn");
  var dfsButton = document.getElementById("dfs-btn");
  dijkstrasButton.addEventListener("click", setAlgo);
  astarButton.addEventListener("click", setAlgo);
  bfsButton.addEventListener("click", setAlgo);
  dfsButton.addEventListener("click", setAlgo); // Add functionality to Visualize button

  function runAlgorithm() {
    switch (algorithm) {
      case "bfs-btn":
        rootNode.node.buildTree();
        console.log("Node tree built");
        rootNode.node.bfs("target");
        console.log("BFS executed");
        break;

      case "dfs-btn":
        rootNode.node.buildTree();
        console.log("Node tree built");
        rootNode.node.dfs("target");
        console.log("DFS executed");

      default:
        break;
    }
  }

  var visButton = document.getElementById("vis-button");
  visButton.addEventListener("click", runAlgorithm);
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
  function Tile(position, board) {
    _classCallCheck(this, Tile);

    this.position = position; // this.board = board;

    this.tile = document.createElement("div");
    this.tile.classList.add("tile");
    this.tile.id = "".concat(position[0], "-").concat(position[1]);
    var grid = document.getElementById("grid");
    grid.appendChild(this.tile);
    this.node = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_0__["default"](null, position, board.grid);
  }

  _createClass(Tile, [{
    key: "visit",
    value: function visit() {
      this.tile.classList.add("visited");
    }
  }, {
    key: "markFound",
    value: function markFound() {
      this.tile.classList.add("target-found");
    }
  }]);

  return Tile;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map