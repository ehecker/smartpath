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
  function PolyTreeNode(value, position, board) {
    _classCallCheck(this, PolyTreeNode);

    this.value = value;
    this.position = position;
    this.board = board;
    this.grid = board.grid;
    this.tileObj = document.getElementById("".concat(position[0], "-").concat(position[1]));
    this.parent = null;
    this.children = [];
    this.visitedTiles = []; // Used for computing and animating algorithms

    this.shortestPath = [];
    this.visited = new Set(); // Used for building node tree

    this.visited.add(this.position.join("-"));
    this.visualize = this.visualize.bind(this);
    this.visualizeShortestPath = this.visualizeShortestPath.bind(this); // Comment these in to toggle showing children on hover.
    // this.showChildren = this.showChildren.bind(this);
    // this.hideChildren = this.hideChildren.bind(this);
    // this.tileObj.addEventListener("mouseenter", this.showChildren)
    // this.tileObj.addEventListener("mouseleave", this.hideChildren)
  }

  _createClass(PolyTreeNode, [{
    key: "showChildren",
    value: function showChildren() {
      this.tileObj.classList.add("parent");
      this.children.forEach(function (child) {
        child.tileObj.classList.add("child");
      });
    }
  }, {
    key: "hideChildren",
    value: function hideChildren() {
      this.tileObj.classList.remove("parent");
      this.children.forEach(function (child) {
        child.tileObj.classList.remove("child");
      });
    }
  }, {
    key: "visualize",
    value: function visualize(visitedTiles, grid, speed) {
      var viz = this.visualize; // Saves function to a variable so that it can be accessed within setTimeout's callback

      if (visitedTiles.length >= 1) {
        setTimeout(function () {
          var currentPos = visitedTiles.shift();
          grid[currentPos[0]][currentPos[1]].tile.classList.add("visited");
          viz(visitedTiles, grid, speed); // Calls itself recursively to ensure other code has finished before starting next step
        }, speed);
      } else if (visitedTiles.length === 0) {
        if (this.board.algorithmIsRunning === false) return;
        this.board.targetNode.tileObj.classList.add("target-found");
        this.visualizeShortestPath(this.shortestPath, this.grid);
      }
    }
  }, {
    key: "visualizeShortestPath",
    value: function visualizeShortestPath(pathPositions, grid) {
      var viz = this.visualizeShortestPath;

      if (pathPositions.length >= 1) {
        setTimeout(function () {
          var currentPos = pathPositions.shift();
          grid[currentPos[0]][currentPos[1]].tile.classList.add("shortest-path-node");
          viz(pathPositions, grid);
        }, 25);
      } else if (pathPositions.length === 0) {
        this.board.algorithmIsRunning = false;
      } // Can I put an else if here to change board's currently running status? Else if .length === 0


      console.log("Shortest path animated");
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
          // this.visitedTiles.push(currentNode.position)
          this.findShortestPath();
          this.visualize(this.visitedTiles, this.grid, this.board.animationSpeed);
          return currentNode;
        }

        queue.push.apply(queue, _toConsumableArray(currentNode.children));
      }

      console.log("Unsolvable grid detected"); // Logic for handling unsolvable grid goes here

      this.board.algorithmIsRunning = false;
      alert("Ha! Nice try. This maze is unsolvable. Please remove some walls to set your algorithms free.");
    }
  }, {
    key: "dfs",
    value: function dfs(target) {
      var stack = [this];

      while (stack.length > 0) {
        for (var i = 0; i < stack.length; i++) {
          var currentNode = stack.shift();

          if (currentNode.value === target) {
            // this.visitedTiles.push(currentNode.position)
            this.findShortestPath();
            this.visualize(this.visitedTiles, this.grid, this.board.animationSpeed);
            return currentNode;
          } else if (currentNode.value !== "root") {
            this.visitedTiles.push(currentNode.position);
          }

          stack.unshift.apply(stack, _toConsumableArray(currentNode.children));
        }
      }

      console.log("Unsolvable grid detected");
      this.board.algorithmIsRunning = false;
      alert("Ha! Nice try. This maze is unsolvable. Please remove some walls to set your algorithms free.");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var increments = [[0, 1], [1, 0], [-1, 0], [0, -1] // Original, up-first tree build
      // [-1, 0], // Up
      // [0, 1], // Right
      // [1, 0], // Down
      // [0, -1] // Left
      ]; // buildTree function will use the node on which it is called as the root node of the tree

      var neighbors = [this]; // This is a queue

      while (neighbors.length > 0) {
        var currentNode = neighbors.shift();

        for (var i = 0; i < increments.length; i++) {
          var inc = increments[i];
          var newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];

          if (currentNode.board.validPos(newPos) && this.grid[newPos[0]][newPos[1]].node.value !== "wall") {
            // debugger
            if (this.visited.has(newPos.join("-"))) {
              // Call join on newPos to convert it to a valid keyname
              continue;
            }

            this.visited.add(newPos.join("-"));
            var neighborNode = this.grid[newPos[0]][newPos[1]].node;
            neighborNode.addParent(currentNode);
            neighbors.push(neighborNode);
          }
        }
      }
    }
  }, {
    key: "findShortestPath",
    value: function findShortestPath() {
      var currentNode = this.board.targetNode;

      while (currentNode.value !== "root" && currentNode.parent.value !== "root") {
        this.shortestPath.unshift(currentNode.parent.position);
        currentNode = currentNode.parent;
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
    }
  }, {
    key: "removeChild",
    value: function removeChild(childNode) {
      var i = this.children.indexOf(childNode);
      this.children.splice(i, 1);
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);

    this.grid = [];
    this.rootNode;
    this.targetNode;
    this.lastNodeType;
    this.animationSpeed = 5;
    this.algorithmIsRunning = false;
    this.validPos = this.validPos.bind(this);
    this.setRoot = this.setRoot.bind(this);
    this.setTarget = this.setTarget.bind(this);
  }

  _createClass(Board, [{
    key: "fillGrid",
    value: function fillGrid() {
      // Create tile objects, populate this.grid
      for (var i = 0; i < 25; i++) {
        // Board is 25 x 48, 1200 total tiles
        var row = [];

        for (var j = 0; j < 48; j++) {
          if (i === 12 && j === 9) {
            var rootNode = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]("root", [i, j], this, true);
            rootNode.tile.classList.add("root-node");
            rootNode.tile.setAttribute("draggable", "true");
            this.rootNode = rootNode.node;
            row.push(rootNode);
          } else if (i === 12 && j === 38) {
            var targetNode = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]("target", [i, j], this, true);
            targetNode.tile.classList.add("target-node");
            targetNode.tile.setAttribute("draggable", "true");
            this.targetNode = targetNode.node;
            row.push(targetNode);
          } else {
            var newTile = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"](null, [i, j], this, true);
            newTile.tile.setAttribute("draggable", "true");
            row.push(newTile);
          }
        }

        this.grid.push(row);
      }
    }
  }, {
    key: "setRoot",
    value: function setRoot(pos) {
      // Change variables in this & setTarget to newRootTile/newNullTile
      var oldX = this.rootNode.position[0];
      var oldY = this.rootNode.position[1];
      var x = pos[0];
      var y = pos[1];
      var oldRootTile = this.grid[oldX][oldY];
      var oldNullTile = this.grid[x][y];
      oldRootTile.node.value = null;
      oldNullTile.node.value = "root";
      oldRootTile.tile.classList.remove("root-node");
      oldNullTile.tile.classList.add("root-node");
      oldNullTile.tile.setAttribute("draggable", "true");
      oldRootTile.setDraggingFunctions();
      oldNullTile.setDraggingFunctions();
      this.rootNode = oldNullTile.node;
    }
  }, {
    key: "setTarget",
    value: function setTarget(pos) {
      var oldX = this.targetNode.position[0];
      var oldY = this.targetNode.position[1];
      var x = pos[0];
      var y = pos[1];
      var oldTargetTile = this.grid[oldX][oldY];
      var oldNullTile = this.grid[x][y];
      oldTargetTile.node.value = null;
      oldNullTile.node.value = "target";
      oldTargetTile.tile.classList.remove("target-node");
      oldNullTile.tile.classList.add("target-node");
      oldNullTile.tile.setAttribute("draggable", "true");
      oldTargetTile.setDraggingFunctions();
      oldNullTile.setDraggingFunctions();
      this.targetNode = oldNullTile.node;
    }
  }, {
    key: "generateScatterMaze",
    value: function generateScatterMaze() {}
  }, {
    key: "resetTree",
    value: function resetTree() {
      var _iterator = _createForOfIteratorHelper(this.grid),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;

          var _iterator2 = _createForOfIteratorHelper(row),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var tile = _step2.value;
              tile.node.parent = null;
              tile.node.children = [];
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "validPos",
    value: function validPos(pos) {
      return pos[0] >= 0 && pos[0] < 25 && pos[1] >= 0 && pos[1] < 48;
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
 // Smartpath Entry File:

document.addEventListener("DOMContentLoaded", function () {
  // Create and fill board
  var board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
  board.fillGrid();
  console.log("Board initialized and populated");
  var bfsText = "Breadth First Search (BFS) is a search algorithm used for navigating graph data structures. It utilizes a 'breadth-first' strategy, meaning that each node explores each of its neighbor nodes before moving onto the nodes at the next level of depth. It was invented in 1945 by Konrad Zuse.";
  var dfsText = "Depth First Search (DFS) is a search algorithm which prioritizes exploration of nodes located 'deeper' in a graph structure. It was originally invented by French mathematician Charles Pierre Tremaux in the 19th century.";
  var dijkstrasText = "Dijkstra's algorithm is a search algorithm which guarantees discovery of the shortest path between nodes. It is considered the most efficient search algorithm in existence. It was invented by Edsger W. Dijkstra in 1956.";
  var infoTitleEl = document.getElementById("algo-title");
  var infoTextEl = document.getElementById("algo-info"); // Add functionality to radio buttons

  function setAlgo(event) {
    var oldActive = document.getElementById(algorithm);
    oldActive.classList.remove("active");
    algorithm = event.target.id;
    var newActive = document.getElementById(algorithm);
    newActive.classList.add("active");

    if (algorithm === "bfs-btn") {
      infoTitleEl.innerHTML = "Breadth First Search";
      infoTextEl.innerHTML = bfsText;
    } else if (algorithm === "dfs-btn") {
      infoTitleEl.innerHTML = "Depth First Search";
      infoTextEl.innerHTML = dfsText;
    } else if (algorithm === "dijkstras-btn") {
      infoTitleEl.innerHTML = "Dijkstra's Algorithm";
      infoTextEl.innerHTML = dijkstrasText;
    }
  } // Set defaults


  infoTitleEl.innerHTML = "Breadth First Search"; // Set default title

  infoTextEl.innerHTML = bfsText; // Set default text

  var algorithm = "bfs-btn"; // Set default algorithm

  var dijkstrasButton = document.getElementById("dijkstras-btn");
  var bfsButton = document.getElementById("bfs-btn");
  var dfsButton = document.getElementById("dfs-btn");
  dijkstrasButton.addEventListener("click", setAlgo);
  bfsButton.addEventListener("click", setAlgo);
  dfsButton.addEventListener("click", setAlgo); // Add functionality to Visualize button

  function runAlgorithm() {
    if (board.algorithmIsRunning === true) return;
    var rootNode = board.rootNode;
    clearPath();

    switch (algorithm) {
      case "bfs-btn":
        board.algorithmIsRunning = true;
        board.resetTree();
        rootNode.visited = new Set();
        rootNode.visited.add(rootNode.position.join("-"));
        rootNode.buildTree();
        console.log("Node tree built");
        rootNode.bfs("target");
        console.log("BFS executed");
        break;

      case "dfs-btn":
        board.algorithmIsRunning = true;
        board.resetTree();
        rootNode.visited = new Set();
        rootNode.visited.add(rootNode.position.join("-"));
        rootNode.buildTree();
        console.log("Node tree built");
        rootNode.dfs("target");
        console.log("DFS executed");
        break;

      default:
        break;
    }
  }

  var visButton = document.getElementById("vis-button");
  visButton.addEventListener("click", runAlgorithm); // Add functionality to Reset button

  function reset() {
    if (board.algorithmIsRunning === true) return;
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    board.algorithmIsRunning = false;
    board.grid = [];
    board.fillGrid();
  }

  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", reset); // Add functionality to Animation Speed dropdown

  function setAnimationSpeed(event) {
    var newSpeed;

    switch (event.target.value) {
      case "lightning":
        newSpeed = 5;
        break;

      case "fast":
        newSpeed = 15;
        break;

      case "medium":
        newSpeed = 30;
        break;

      case "slowmotion":
        newSpeed = 100;
        break;

      default:
        break;
    }

    board.animationSpeed = newSpeed;
  }

  var selectButton = document.getElementById("anim-speed");
  selectButton.addEventListener("change", setAnimationSpeed); // Add functionality to Clear Walls and Clear Path buttons

  function clearWalls() {
    if (board.algorithmIsRunning === true) return;
    var wallTiles = Array.from(document.getElementsByClassName("wall"));

    for (var _i = 0, _wallTiles = wallTiles; _i < _wallTiles.length; _i++) {
      var wallEl = _wallTiles[_i];
      var wallPos = wallEl.id.split("-");
      var wallTile = board.grid[+wallPos[0]][+wallPos[1]];
      wallTile.node.value = null;
      wallEl.classList.remove("wall");
    }
  }

  function clearPath() {
    if (board.algorithmIsRunning === true) return;
    var visitedTiles = Array.from(document.getElementsByClassName("visited"));
    var shortestPathTiles = Array.from(document.getElementsByClassName("shortest-path-node"));

    for (var _i2 = 0, _visitedTiles = visitedTiles; _i2 < _visitedTiles.length; _i2++) {
      var tile = _visitedTiles[_i2];
      tile.classList.remove("visited");
    }

    for (var _i3 = 0, _shortestPathTiles = shortestPathTiles; _i3 < _shortestPathTiles.length; _i3++) {
      var shortTile = _shortestPathTiles[_i3];
      shortTile.classList.remove("shortest-path-node");
    }

    var targetTile = document.getElementsByClassName("target-node");
    targetTile[0].classList.remove("target-found");
  }

  var clearWallsButton = document.getElementById("clear-walls");
  clearWallsButton.addEventListener("click", clearWalls);
  var clearPathButton = document.getElementById("clear-path");
  clearPathButton.addEventListener("click", clearPath);
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
  function Tile(nodeValue, position, board) {
    _classCallCheck(this, Tile);

    this.position = position;
    this.board = board;
    this.tile = document.createElement("div");
    this.tile.classList.add("tile");
    this.tile.id = "".concat(position[0], "-").concat(position[1]);
    var grid = document.getElementById("grid");
    grid.appendChild(this.tile);
    this.node = new _algorithms_polytreenode__WEBPACK_IMPORTED_MODULE_0__["default"](nodeValue, position, board); // This MUST come after this.tile's id is set

    this.setDraggingFunctions();
  }

  _createClass(Tile, [{
    key: "setDraggingFunctions",
    value: function setDraggingFunctions() {
      var board = this.board;

      var handleDragStart = function handleDragStart(event) {
        console.log("Drag start fired");
        var tileId = event.target.id.split("-");
        var dragStartPos = [+tileId[0], +tileId[1]];
        board.lastNodeType = board.grid[dragStartPos[0]][dragStartPos[1]].node.value;
      };

      var handleDragEnter = function handleDragEnter(event) {
        console.log("Drag enter fired");
        event.preventDefault();
        var tileId = event.target.id.split("-");
        var currentTile = board.grid[+tileId[0]][+tileId[1]];

        if (board.lastNodeType === "wall" || board.lastNodeType === null) {
          if (currentTile.node.value === "wall") {
            currentTile.removeWall();
          } else if (currentTile.node.value === null) {
            currentTile.placeWall();
          }
        }
      };

      var handleDragOver = function handleDragOver(event) {
        // DO NOT REMOVE. Root/target node repositioning does not work without this.
        console.log("Drag over fired");
        event.preventDefault();
      };

      var handleDrop = function handleDrop(event) {
        console.log("Drop fired");
        event.preventDefault();
        var tileId = event.target.id.split("-");
        var dragEndPos = [+tileId[0], +tileId[1]];

        if (board.lastNodeType === "root") {
          board.setRoot(dragEndPos);
        } else if (board.lastNodeType === "target") {
          board.setTarget(dragEndPos);
        }
      };

      var handleClick = function handleClick(event) {
        console.log("Click fired");
        event.preventDefault();
        var tileId = event.target.id.split("-");
        var currentTile = board.grid[+tileId[0]][+tileId[1]];

        if (currentTile.node.value === "wall") {
          currentTile.removeWall();
        } else if (currentTile.node.value === null) {
          currentTile.placeWall();
        }
      }; // All tiles listen for dragstart


      this.tile.addEventListener("dragstart", handleDragStart); // Only walls and nulls receive other listeners

      if (this.node.value === "wall" || this.node.value === null) {
        this.tile.addEventListener("dragenter", handleDragEnter);
        this.tile.addEventListener("dragover", handleDragOver);
        this.tile.addEventListener("drop", handleDrop);
        this.tile.addEventListener("click", handleClick);
      }
    }
  }, {
    key: "placeWall",
    value: function placeWall() {
      this.node.value = "wall";
      this.tile.classList.add("wall");
      console.log("Wall placed");
    }
  }, {
    key: "removeWall",
    value: function removeWall() {
      this.node.value = null;
      this.tile.classList.remove("wall");
      console.log("Wall removed");
    }
  }]);

  return Tile;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map