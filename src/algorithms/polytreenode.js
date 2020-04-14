export default class PolyTreeNode {

    constructor(value, position, board) {
        this.value = value;
        this.position = position;
        this.board = board;
        this.grid = board.grid;

        this.tileObj = document.getElementById(`${position[0]}-${position[1]}`);

        this.parent = null;
        this.children = [];

        this.visitedTiles = []; // Used for computing and animating algorithms
        this.shortestPath = [];

        this.visited = new Set(); // Used for building node tree
        this.visited.add(this.position.join("-"));

        this.visualize = this.visualize.bind(this);
        this.visualizeShortestPath = this.visualizeShortestPath.bind(this);

        // Comment these in to toggle showing children on hover.
        // this.showChildren = this.showChildren.bind(this);
        // this.hideChildren = this.hideChildren.bind(this);
        // this.tileObj.addEventListener("mouseenter", this.showChildren)
        // this.tileObj.addEventListener("mouseleave", this.hideChildren)
    }

    showChildren() {
        this.tileObj.classList.add("parent")
        this.children.forEach(child => {
            child.tileObj.classList.add("child")
        })
    }

    hideChildren() {
        this.tileObj.classList.remove("parent")
        this.children.forEach(child => {
            child.tileObj.classList.remove("child")
        })
    }

    visualize(visitedTiles, grid, speed) {
        let viz = this.visualize; // Saves function to a variable so that it can be accessed within setTimeout's callback

        if (visitedTiles.length >= 1) {
            setTimeout(function() {
                let currentPos = visitedTiles.shift()
                grid[currentPos[0]][currentPos[1]].tile.classList.add("visited");

                viz(visitedTiles, grid, speed); // Calls itself recursively to ensure other code has finished before starting next step
            }, speed)

        } else if (visitedTiles.length === 0) {
            if (this.board.algorithmIsRunning === false) return;

            this.board.targetNode.tileObj.classList.add("target-found");
            this.visualizeShortestPath(this.shortestPath, this.grid);
        }

    }

    visualizeShortestPath(pathPositions, grid) {
        let viz = this.visualizeShortestPath;

        if (pathPositions.length >= 1) {
            setTimeout(function() {
                let currentPos = pathPositions.shift();
                grid[currentPos[0]][currentPos[1]].tile.classList.add("shortest-path-node");

                viz(pathPositions, grid)
            }, 25)
        } else if (pathPositions.length === 0) {
            this.board.algorithmIsRunning = false;
        } 
        // Can I put an else if here to change board's currently running status? Else if .length === 0
        console.log("Shortest path animated")
    }

    bfs(target) {
        let queue = [this];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            
            if (currentNode.value !== "root" && currentNode.value !== "target") {
                this.visitedTiles.push(currentNode.position)
            }

            if (currentNode.value === target) {
                // this.visitedTiles.push(currentNode.position)
                this.findShortestPath();
                this.visualize(this.visitedTiles, this.grid, this.board.animationSpeed);
                return currentNode;
            }
            
            queue.push(...currentNode.children);
        }
        console.log("Unsolvable grid detected")
        // Logic for handling unsolvable grid goes here
        this.board.algorithmIsRunning = false;
        alert("Ha! Nice try. This maze is unsolvable. Please remove some walls to set your algorithms free.")
    }

    dfs(target) {
        let stack = [this];

        while (stack.length > 0) {
            for (let i = 0; i < stack.length; i++) {
                let currentNode = stack.shift();

                if (currentNode.value === target) {
                    // this.visitedTiles.push(currentNode.position)
                    this.findShortestPath();
                    this.visualize(this.visitedTiles, this.grid, this.board.animationSpeed);
                    return currentNode;

                } else if (currentNode.value !== "root") {
                    this.visitedTiles.push(currentNode.position)
                }

                stack.unshift(...currentNode.children)
            }

        }
        console.log("Unsolvable grid detected")
        this.board.algorithmIsRunning = false;
        alert("Ha! Nice try. This maze is unsolvable. Please remove some walls to set your algorithms free.")
    }

    buildTree() {
        const increments = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]

            // Original, up-first tree build
            // [-1, 0], // Up
            // [0, 1], // Right
            // [1, 0], // Down
            // [0, -1] // Left
        ];

        // buildTree function will use the node on which it is called as the root node of the tree
        let neighbors = [this]; // This is a queue

        while (neighbors.length > 0) {
            let currentNode = neighbors.shift();

            for (let i = 0; i < increments.length; i++) {
                let inc = increments[i];
                let newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];

                if (currentNode.board.validPos(newPos) && this.grid[newPos[0]][newPos[1]].node.value !== "wall") {
                    // debugger
                    if (this.visited.has(newPos.join("-"))) { // Call join on newPos to convert it to a valid keyname
                        continue;
                    }

                    this.visited.add(newPos.join("-"));

                    let neighborNode = this.grid[newPos[0]][newPos[1]].node;
                    neighborNode.addParent(currentNode)
                    neighbors.push(neighborNode);
                }
            }
        }

    }

    findShortestPath() {
        let currentNode = this.board.targetNode;

        while (currentNode.value !== "root" && currentNode.parent.value !== "root") {
            this.shortestPath.unshift(currentNode.parent.position)
            currentNode = currentNode.parent;
        }
    }

    addParent(parentNode) {
        if (this.parent !== null) { // Check to see if current node already has a parent
            this.parent.removeChild(this) // Remove itself from old parent's children
        }

        if (parentNode !== null) {
            this.parent = parentNode;
            parentNode.children.push(this);
        }
    }

    removeChild(childNode) {
        let i = this.children.indexOf(childNode);
        this.children.splice(i, 1)
    }

}