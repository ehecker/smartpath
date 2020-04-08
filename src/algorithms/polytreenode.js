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

        this.placeWall = this.placeWall.bind(this);
        this.removeWall = this.removeWall.bind(this);

        // this.showChildren = this.showChildren.bind(this);
        // this.hideChildren = this.hideChildren.bind(this);

        // this.tileObj.addEventListener("mouseenter", this.showChildren)
        // this.tileObj.addEventListener("mouseleave", this.hideChildren)

        // if (this.value === "root") {
        //     this.buildTree();
        // }

        if (this.value !== "root" && this.value !== "target") {
            this.tileObj.addEventListener("click", this.placeWall)
        }
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

    visualize(visitedTiles, grid) {
        let viz = this.visualize; // Saves function to a variable so that it can be accessed within setTimeout's callback

        if (visitedTiles.length > 1) {
            setTimeout(function() {
                let currentPos = visitedTiles.shift()
                grid[currentPos[0]][currentPos[1]].tile.classList.add("visited");

                viz(visitedTiles, grid); // Calls itself recursively to ensure other code has finished before starting next step
            }, 5)

        } else if (visitedTiles.length === 1) {
            let targetPos = visitedTiles[0];
            grid[targetPos[0]][targetPos[1]].tile.classList.add("target-found")
            this.visualizeShortestPath(this.shortestPath, this.grid);
        }

    }

    visualizeShortestPath(pathPositions, grid) {
        let viz = this.visualizeShortestPath;

        if (pathPositions.length > 1) {
            setTimeout(function() {
                let currentPos = pathPositions.shift();
                grid[currentPos[0]][currentPos[1]].tile.classList.add("shortest-path-node");

                viz(pathPositions, grid)
            }, 25)
        }
        console.log("Shortest path animated")
    }

    bfs(target) {
        let queue = [this];

        while (queue.length > 0) {

            let currentNode = queue.shift();

            if (currentNode.value === "wall") {
                // debugger
                continue
            }

            if (currentNode.value !== "root" && currentNode.value !== "target") {
                this.visitedTiles.push(currentNode.position)
            }

            if (currentNode.value === target) {
                this.visitedTiles.push(currentNode.position)
                this.findShortestPath();
                this.visualize(this.visitedTiles, this.grid);
                return currentNode;
            }
            
            queue.push(...currentNode.children);
        }
        console.log("Unsolvable grid detected")
        // Logic for handling unsolvable grid goes here
    }

    dfs(target) { // Appears to still be broken
        let stack = [this];

        while (stack.length > 0) {
            for (let i = 0; i < stack.length; i++) {
                let currentNode = stack.shift();

                if (currentNode.value === target) {
                    this.visitedTiles.push(currentNode.position)
                    this.findShortestPath();
                    this.visualize(this.visitedTiles, this.grid);
                    return currentNode;

                } else if (currentNode.value !== "root") {
                    this.visitedTiles.push(currentNode.position)
                }

                stack.unshift(...currentNode.children)
            }

        }


    }

    buildTree() {
        const increments = [
            [-1, 0], // Up
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
        ];

        // buildTree function will use the node on which it is called as the root node of the tree
        let neighbors = [this]; // This is a queue

        while (neighbors.length > 0) {
            let currentNode = neighbors.shift();

            for (let i = 0; i < increments.length; i++) {
                let inc = increments[i];
                let newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];

                if (currentNode.board.validPos(newPos)) {

                    if (this.visited.has(newPos.join("-"))) { // Call join on newPos to convert it to a valid keyname
                        continue;
                    }

                    this.visited.add(newPos.join("-"));

                    let neighborNode = this.grid[newPos[0]][newPos[1]].node;
                    neighborNode.addParent(currentNode)
                    neighbors.push(neighborNode);
                }
            }

            // increments.forEach(inc => {
            //     let newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];

            //     // If the position is valid:
            //     if (newPos[0] >= 0 && newPos[0] < 25 && newPos[1] >= 0 && newPos[1] < 48) {
            //     // if (this.board.validPos(newPos)) { // MAKE THIS.BOARD A THING               d

            //         if (this.visited.has(newPos.join("-"))) {
            //             return
            //         }
    
            //         this.visited.add(newPos.join("-"));

            //         let neighborTile = this.grid[newPos[0]][newPos[1]];
            //         neighbors.push(neighborTile.node);
            //         neighborTile.node.addParent(currentNode);

            //         // If the neighbor exists, has no parent, and is not already a child of the current node:
            //         // if (neighborTile.node.parent === null && !currentNode.children.includes(neighborTile.node)) {
            //         //     neighbors.push(neighborTile.node);
            //         //     neighborTile.node.addParent(currentNode);
            //         // }
            //     }
            // })

        }

    }

    findShortestPath() {
        let targetNodePos = this.visitedTiles[this.visitedTiles.length - 1]; 
        let currentNode = this.grid[targetNodePos[0]][targetNodePos[1]].node; // Very ugly way to get target node

        this.shortestPath.unshift(currentNode.position);
        debugger
        while (currentNode.value !== "root" && currentNode.parent.value !== "root") {
            this.shortestPath.unshift(currentNode.parent.position)
            currentNode = currentNode.parent;
        }

    }

    addParent(parentNode) {
        if (this.parent !== null) { // Check to see if current node already has a parent
            // debugger
            this.parent.removeChild(this) // Remove itself from old parent's children
        }

        if (parentNode !== null) {
            this.parent = parentNode;
            parentNode.children.push(this);
        }
    }

    placeWall() {
        if (this.value !== "root" && this.value !== "target") {
            // debugger
            this.value = "wall";
            this.tileObj.classList.add("wall")
            this.tileObj.removeEventListener("click", this.placeWall)
            this.tileObj.addEventListener("click", this.removeWall)
            console.log("Wall placed")
        }
    }

    removeWall() {
        if (this.value === "wall") {
            this.value = null;
            this.tileObj.classList.remove("wall")
            this.tileObj.removeEventListener("click", this.removeWall)
            this.tileObj.addEventListener("click", this.placeWall);
            console.log("Wall removed")
        }
    }

}