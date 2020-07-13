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
    this.tileEl = document.getElementById("".concat(position[0], "-").concat(position[1]));
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
    // this.tileEl.addEventListener("mouseenter", this.showChildren)
    // this.tileEl.addEventListener("mouseleave", this.hideChildren)
  }

  _createClass(PolyTreeNode, [{
    key: "visualize",
    value: function visualize(visitedTiles, grid, speed) {
      // Save function to a variable so that it can be accessed within setTimeout's callback
      var visStep = this.visualize;

      if (visitedTiles.length > 0) {
        setTimeout(function () {
          var currentPos = visitedTiles.shift();
          var currentTile = grid[currentPos[0]][currentPos[1]].tile;
          currentTile.classList.add("visited"); // Recursive call within setTimeout ensures currentTile receives "visited" class before next step begins

          visStep(visitedTiles, grid, speed);
        }, speed);
      } else if (visitedTiles.length === 0) {
        if (this.board.algorithmIsRunning === false) return;
        this.board.targetNode.tileEl.classList.add("target-found");
        this.visualizeShortestPath(this.shortestPath, this.grid);
      }
    }
  }, {
    key: "visualizeShortestPath",
    value: function visualizeShortestPath(pathPositions, grid) {
      var visStep = this.visualizeShortestPath;

      if (pathPositions.length >= 1) {
        setTimeout(function () {
          var currentPos = pathPositions.shift();
          var currentTile = grid[currentPos[0]][currentPos[1]].tile;
          currentTile.classList.remove("visited");
          currentTile.classList.add("shortest-path-node");
          visStep(pathPositions, grid);
        }, 25);
      } else if (pathPositions.length === 0) {
        this.board.algorithmIsRunning = false;
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
          this.findShortestPath();
          this.visualize(this.visitedTiles, this.grid, this.board.animationSpeed);
          return currentNode;
        }

        queue.push.apply(queue, _toConsumableArray(currentNode.children));
      }

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
            this.findShortestPath();
            this.visualize(this.visitedTiles, this.grid, this.board.animationSpeed);
            return currentNode;
          } else if (currentNode.value !== "root") {
            this.visitedTiles.push(currentNode.position);
          }

          stack.unshift.apply(stack, _toConsumableArray(currentNode.children));
        }
      }

      this.board.algorithmIsRunning = false;
      alert("Ha! Nice try. This maze is unsolvable. Please remove some walls to set your algorithms free.");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var increments = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // buildTree function will use the node on which it is called as the root node of the tree

      var neighbors = [this]; // This is a queue

      while (neighbors.length > 0) {
        var currentNode = neighbors.shift();

        for (var i = 0; i < increments.length; i++) {
          var inc = increments[i];
          var newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];

          if (currentNode.board.validPos(newPos) && this.grid[newPos[0]][newPos[1]].node.value !== "wall") {
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
    } // Dev-support functions

  }, {
    key: "showChildren",
    value: function showChildren() {
      this.tileEl.classList.add("parent");
      this.children.forEach(function (child) {
        child.tileEl.classList.add("child");
      });
    }
  }, {
    key: "hideChildren",
    value: function hideChildren() {
      this.tileEl.classList.remove("parent");
      this.children.forEach(function (child) {
        child.tileEl.classList.remove("child");
      });
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
    this.animationSpeed = 15;
    this.algorithmIsRunning = false;
    this.validPos = this.validPos.bind(this);
    this.setRoot = this.setRoot.bind(this);
    this.setTarget = this.setTarget.bind(this);
    this.generateScatterMaze = this.generateScatterMaze.bind(this);
    this.clearPath = this.clearPath.bind(this);
    this.clearWalls = this.clearWalls.bind(this);
    this.reset = this.reset.bind(this);
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
            var arrowIcon = document.createElement("IMG");
            arrowIcon.setAttribute("src", "./assets/images/arrow.png");
            arrowIcon.classList.add("arrow-icon");
            rootNode.tile.appendChild(arrowIcon);
            this.rootNode = rootNode.node;
            row.push(rootNode);
          } else if (i === 12 && j === 38) {
            var targetNode = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]("target", [i, j], this, true);
            targetNode.tile.classList.add("target-node");
            targetNode.tile.setAttribute("draggable", "true");
            var targetIcon = document.createElement("IMG");
            targetIcon.setAttribute("src", "./assets/images/target.png");
            targetIcon.classList.add("target-icon");
            targetNode.tile.appendChild(targetIcon);
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
      if (this.algorithmIsRunning === true) return;
      var oldX = this.rootNode.position[0];
      var oldY = this.rootNode.position[1];
      var x = pos[0];
      var y = pos[1];
      var newNullTile = this.grid[oldX][oldY];
      var newRootTile = this.grid[x][y];

      if (pos[0] === this.targetNode.position[0] && pos[1] === this.targetNode.position[1]) {
        newNullTile.tile.classList.remove("hidden");
        return;
      }

      newNullTile.node.value = null;
      newRootTile.node.value = "root";
      newNullTile.tile.innerHTML = "";
      var arrowIcon = document.createElement("IMG");
      arrowIcon.setAttribute("src", "./assets/images/arrow.png");
      arrowIcon.classList.add("arrow-icon");
      newRootTile.tile.appendChild(arrowIcon);
      newNullTile.tile.classList.remove("root-node");
      newNullTile.tile.classList.remove("hidden");
      newRootTile.tile.classList.remove("wall");
      newRootTile.tile.classList.remove("visited");
      newRootTile.tile.classList.remove("shortest-path-node");
      newRootTile.tile.classList.add("root-node");
      newRootTile.tile.setAttribute("draggable", "true");
      newNullTile.setDraggingFunctions();
      newRootTile.setDraggingFunctions();
      this.rootNode = newRootTile.node;
    }
  }, {
    key: "setTarget",
    value: function setTarget(pos) {
      if (this.algorithmIsRunning === true) return;
      var oldX = this.targetNode.position[0];
      var oldY = this.targetNode.position[1];
      var x = pos[0];
      var y = pos[1];
      var newNullTile = this.grid[oldX][oldY];
      var newTargetTile = this.grid[x][y];

      if (pos[0] === this.rootNode.position[0] && pos[1] === this.rootNode.position[1]) {
        newNullTile.tile.classList.remove("hidden");
        return;
      }

      newNullTile.node.value = null;
      newTargetTile.node.value = "target";
      newNullTile.tile.innerHTML = "";
      var targetIcon = document.createElement("IMG");
      targetIcon.setAttribute("src", "./assets/images/target.png");
      targetIcon.classList.add("target-icon");
      newTargetTile.tile.appendChild(targetIcon);
      newNullTile.tile.classList.remove("target-node");
      newNullTile.tile.classList.remove("target-found");
      newNullTile.tile.classList.remove("hidden");
      newTargetTile.tile.classList.remove("wall");
      newTargetTile.tile.classList.remove("visited");
      newTargetTile.tile.classList.remove("shortest-path-node");
      newTargetTile.tile.classList.add("target-node");
      newTargetTile.tile.setAttribute("draggable", "true");
      newTargetTile.setDraggingFunctions();
      newNullTile.setDraggingFunctions();
      this.targetNode = newTargetTile.node;
    }
  }, {
    key: "generateScatterMaze",
    value: function generateScatterMaze() {
      if (this.algorithmIsRunning === true) return;
      this.clearWalls();
      this.clearPath();
      var wallCount = 0;

      while (wallCount < 350) {
        var x = Math.floor(Math.random() * 25);
        var y = Math.floor(Math.random() * 48);
        var currentNode = this.grid[x][y].node;

        if (currentNode.value === null) {
          currentNode.value = "wall";
          currentNode.tileEl.classList.add("wall");
          wallCount++;
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.algorithmIsRunning === true) return;
      var grid = document.getElementById("grid");
      grid.innerHTML = "";
      this.algorithmIsRunning = false;
      this.grid = [];
      this.fillGrid();
    }
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
    key: "clearPath",
    value: function clearPath() {
      if (this.algorithmIsRunning === true) return;
      var visitedTiles = Array.from(document.getElementsByClassName("visited"));
      var shortestPathTiles = Array.from(document.getElementsByClassName("shortest-path-node"));

      for (var _i = 0, _visitedTiles = visitedTiles; _i < _visitedTiles.length; _i++) {
        var tile = _visitedTiles[_i];
        tile.classList.remove("visited");
      }

      for (var _i2 = 0, _shortestPathTiles = shortestPathTiles; _i2 < _shortestPathTiles.length; _i2++) {
        var shortTile = _shortestPathTiles[_i2];
        shortTile.classList.remove("shortest-path-node");
      }

      var targetTile = document.getElementsByClassName("target-node");
      targetTile[0].classList.remove("target-found");
    }
  }, {
    key: "clearWalls",
    value: function clearWalls() {
      if (this.algorithmIsRunning === true) return;
      var wallTiles = Array.from(document.getElementsByClassName("wall"));

      for (var _i3 = 0, _wallTiles = wallTiles; _i3 < _wallTiles.length; _i3++) {
        var wallEl = _wallTiles[_i3];
        var wallPos = wallEl.id.split("-");
        var wallTile = this.grid[+wallPos[0]][+wallPos[1]];
        wallTile.node.value = null;
        wallEl.classList.remove("wall");
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

document.addEventListener("DOMContentLoaded", function () {
  // Create and fill board
  var board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
  board.fillGrid(); // Add Modal navigation

  var modal = document.getElementsByClassName("modal")[0];
  var modalPageCounter = document.getElementsByClassName("modal-counter")[0];
  var modalTitle = document.getElementsByClassName("modal-title")[0];
  var modalCloseButton = document.getElementsByClassName("modal-close-btn")[0];
  var modalBackButton = document.getElementsByClassName("back-button")[0];
  var modalNextButton = document.getElementsByClassName("next-button")[0];
  var modalPage1 = document.getElementById("modal-p1");
  var modalPage2 = document.getElementById("modal-p2");
  var modalPage3 = document.getElementById("modal-p3");
  var modalPage4 = document.getElementById("modal-p4");
  var modalPage5 = document.getElementById("modal-p5");
  var modalPages = {
    1: modalPage1,
    2: modalPage2,
    3: modalPage3,
    4: modalPage4,
    5: modalPage5
  };
  var modalPageNum = 1;
  var lastPage;

  function updateModal(event) {
    lastPage = modalPages[modalPageNum];

    if (event.target.innerHTML === "Next" || event.target.innerHTML === "Get Started") {
      modalPageNum++;
    } else if (event.target.innerHTML === "Back") {
      modalPageNum--;
    }

    if (modalPageNum === 1) {
      modalPageCounter.innerHTML = "1/5";
      modalTitle.innerHTML = "Welcome to Smartpath!";
      modalPage1.classList.remove("hide-modal");
      lastPage.classList.add("hide-modal");
      modalTitle.classList.add("modal-title");
      modalTitle.classList.remove("modal-title-p2");
      modalBackButton.style.visibility = "hidden";
    } else if (modalPageNum === 2) {
      modalPageCounter.innerHTML = "2/5";
      modalTitle.innerHTML = "Smartpath 101";
      modalTitle.classList.add("modal-title-p2");
      modalTitle.classList.remove("modal-title");
      modalPage2.classList.remove("hide-modal");
      lastPage.classList.add("hide-modal");
      modalBackButton.style.visibility = "visible";
    } else if (modalPageNum === 3) {
      modalPageCounter.innerHTML = "3/5";
      modalPage3.classList.remove("hide-modal");
      lastPage.classList.add("hide-modal");
    } else if (modalPageNum === 4) {
      modalPageCounter.innerHTML = "4/5";
      modalPage4.classList.remove("hide-modal");
      lastPage.classList.add("hide-modal");
      modalNextButton.innerHTML = "Next";
    } else if (modalPageNum === 5) {
      modalPageCounter.innerHTML = "5/5";
      modalPage5.classList.remove("hide-modal");
      lastPage.classList.add("hide-modal");
      modalNextButton.innerHTML = "Get Started";
    } else if (modalPageNum === 6) {
      closeModal();
    }
  }

  modalNextButton.addEventListener("click", updateModal);
  modalBackButton.addEventListener("click", updateModal);

  function closeModal() {
    modal.style.display = "none";
  }

  modalCloseButton.addEventListener("click", closeModal); // Add functionality to radio buttons

  var bfsText = "Breadth-First Search (BFS) is a search algorithm in which nodes prioritize exploration of their immediate neighbors before moving on to nodes at the next level of depth. BFS guarantees discovery of the shortest path.";
  var dfsText = "Depth-First Search (DFS) is a search algorithm in which nodes prioritize exploration of nodes located deeper in the graph structure before backtracing to immediate neighbors. Although it is certain to find the target node, it does not guarantee discovery of the shortest path.";
  var dijkstrasText = "Dijkstra's algorithm is a search algorithm which applies a breadth-first strategy while also accounting for varying levels of difficulty in passing through certain nodes. Considered the most efficient pathfinding algorithm, it has widespread application in many fields including navigational systems and artificial intelligence.";
  var dfsNote = " Note: The shortest path animation is included in this application only for illustrative purposes.";
  var infoTitleEl = document.getElementById("algo-title");
  var infoTextEl = document.getElementById("algo-info");
  var dfsNoteEl = document.getElementById("dfs-note");

  function setAlgo(event) {
    var oldActive = document.getElementById(algorithm);
    oldActive.classList.remove("active");
    visButton.classList.remove("vis-disabled");
    algorithm = event.target.id;
    var newActive = document.getElementById(algorithm);
    newActive.classList.add("active");

    if (algorithm === "bfs-btn") {
      infoTitleEl.innerHTML = "Breadth-First Search";
      infoTextEl.innerHTML = bfsText;
      dfsNoteEl.innerHTML = "";
    } else if (algorithm === "dfs-btn") {
      infoTitleEl.innerHTML = "Depth-First Search";
      infoTextEl.innerHTML = dfsText;
      dfsNoteEl.innerHTML = dfsNote;
    } else if (algorithm === "dijkstras-btn") {
      visButton.classList.add("vis-disabled");
      infoTitleEl.innerHTML = "Dijkstra's Algorithm - Coming Soon";
      infoTextEl.innerHTML = dijkstrasText;
      dfsNoteEl.innerHTML = "";
    }
  } // Set defaults


  infoTitleEl.innerHTML = "Breadth-First Search"; // Set default title

  infoTextEl.innerHTML = bfsText; // Set default text

  var algorithm = "bfs-btn"; // Set default algorithm

  var dijkstrasButton = document.getElementById("dijkstras-btn");
  var bfsButton = document.getElementById("bfs-btn");
  var dfsButton = document.getElementById("dfs-btn");
  dijkstrasButton.addEventListener("click", setAlgo);
  bfsButton.addEventListener("click", setAlgo);
  dfsButton.addEventListener("click", setAlgo); // Add functionality to Visualize button

  var visButton = document.getElementById("vis-button");
  visButton.addEventListener("click", runAlgorithm);

  function runAlgorithm() {
    if (board.algorithmIsRunning === true) return;
    var rootNode = board.rootNode;
    board.clearPath();

    switch (algorithm) {
      case "bfs-btn":
        board.algorithmIsRunning = true;
        board.resetTree();
        rootNode.visitedTiles = [];
        rootNode.visited = new Set();
        rootNode.visited.add(rootNode.position.join("-"));
        rootNode.buildTree();
        rootNode.bfs("target");
        break;

      case "dfs-btn":
        board.algorithmIsRunning = true;
        board.resetTree();
        rootNode.visitedTiles = [];
        rootNode.visited = new Set();
        rootNode.visited.add(rootNode.position.join("-"));
        rootNode.buildTree();
        rootNode.dfs("target");
        break;

      default:
        break;
    }
  } // Add functionality to Reset button


  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", board.reset); // Add functionality to Animation Speed dropdown

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
        newSpeed = 40;
        break;

      case "slowmotion":
        newSpeed = 150;
        break;

      default:
        break;
    }

    board.animationSpeed = newSpeed;
  }

  var selectButton = document.getElementById("anim-speed");
  selectButton.addEventListener("change", setAnimationSpeed);
  var clearPathButton = document.getElementById("clear-path");
  clearPathButton.addEventListener("click", board.clearPath); // Add functionality to Generate Maze button

  var genMazeButton = document.getElementById("gen-maze-button");
  genMazeButton.addEventListener("click", board.generateScatterMaze);
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
        board.clearPath();
        var tileId = event.target.id.split("-");
        var dragStartPos = [+tileId[0], +tileId[1]];
        board.lastNodeType = board.grid[dragStartPos[0]][dragStartPos[1]].node.value;

        if (board.lastNodeType === null || board.lastNodeType === "wall") {
          // Hides ghost image from displaying on drag
          var img = new Image();
          img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
          event.dataTransfer.setDragImage(img, 0, 0);
        }
      };

      var handleDragEnter = function handleDragEnter(event) {
        event.preventDefault();
        var tileId = event.target.id.split("-");
        var currentTile = board.grid[+tileId[0]][+tileId[1]];

        if (board.lastNodeType === "root") {
          board.rootNode.tileEl.classList.add("hidden");
        } else if (board.lastNodeType === "target") {
          board.targetNode.tileEl.classList.add("hidden");
        }

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
        event.preventDefault();
      };

      var handleDrop = function handleDrop(event) {
        event.preventDefault();
        var tileId = event.target.id.split("-");
        var dragEndPos = [+tileId[0], +tileId[1]];

        if (board.lastNodeType === "root") {
          board.setRoot(dragEndPos);
        } else if (board.lastNodeType === "target") {
          board.setTarget(dragEndPos);
        }
      };

      var handleDragEnd = function handleDragEnd(event) {
        event.preventDefault();

        if (board.lastNodeType === "root") {
          board.rootNode.tileEl.classList.remove("hidden");
        } else if (board.lastNodeType === "target") {
          board.targetNode.tileEl.classList.remove("hidden");
        }
      };

      var handleClick = function handleClick(event) {
        event.preventDefault();
        var tileId = event.target.id.split("-");
        var currentTile = board.grid[+tileId[0]][+tileId[1]];

        if (currentTile.node.value === "wall") {
          currentTile.removeWall();
        } else if (currentTile.node.value === null) {
          currentTile.placeWall();
        }
      }; // All tiles listen for dragstart and dragend


      this.tile.addEventListener("dragstart", handleDragStart);
      this.tile.addEventListener("dragend", handleDragEnd); // Only walls and nulls receive other listeners

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
      if (this.board.algorithmIsRunning === true) return;
      this.board.clearPath();
      this.node.value = "wall";
      this.tile.classList.add("wall");
    }
  }, {
    key: "removeWall",
    value: function removeWall() {
      if (this.board.algorithmIsRunning === true) return;
      this.board.clearPath();
      this.node.value = null;
      this.tile.classList.remove("wall");
    }
  }]);

  return Tile;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map