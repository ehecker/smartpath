export default class PolyTreeNode {

    constructor(value, position, grid) {
        this.value = value;
        this.position = position;
        this.grid = grid;

        this.tileObj = document.getElementById(`${position[0]}-${position[1]}`);

        this.parent = null;
        this.children = [];

        this.visitedTiles = [];

        this.visited = new Set();
        this.visited.add(this.position.join("-"));

        this.visualize = this.visualize.bind(this);
    }

    visualize(visitedTiles, grid) {
        let viz = this.visualize; // Save function to a variable so that it can be accessed within setTimeout's callback

        if (visitedTiles.length > 1) {
            setTimeout(function() {
                let currentPos = visitedTiles.shift()
                grid[currentPos[0]][currentPos[1]].tile.classList.add("visited");

                viz(visitedTiles, grid); // Calls itself recursively to ensure other code has finished running
            }, 5)

        } else if (visitedTiles.length === 1) {
            let targetPos = visitedTiles[0];
            grid[targetPos[0]][targetPos[1]].tile.classList.add("target-found")
        }
    }

    bfs(target) {
        let queue = [this];

        while (queue.length > 0) {

            let currentNode = queue.shift();

            if (currentNode.value !== "root" && currentNode.value !== "target") {
                this.visitedTiles.push(currentNode.position)
            }

            if (currentNode.value === target) {
                this.visitedTiles.push(currentNode.position)
                // currentNode.tileObj.classList.add("target-found");
                this.visualize(this.visitedTiles, this.grid);
                return currentNode;
            }
            
            queue.push(...currentNode.children);
        }

        // Logic for handling unsolvable grid goes here
    }

    dfs(target) {
        let stack = [this];

        while (stack.length > 0) {
            for (let i = 0; i < stack.length; i++) {
                let currentNode = stack.shift();

                if (currentNode.value === target) {
                    this.visitedTiles.push(currentNode.position)
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
            
            increments.forEach(inc => {
                let newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]];
                

                // If the position is valid:
                if (newPos[0] >= 0 && newPos[0] < 25 && newPos[1] >= 0 && newPos[1] < 48) {

                    if (this.visited.has(newPos.join("-"))) {
                        return
                    }
    
                    this.visited.add(newPos.join("-"));

                    // console.log(newPos.join("-"))

                    let neighborTile = this.grid[newPos[0]][newPos[1]];
                    neighbors.push(neighborTile.node);
                    neighborTile.node.addParent(currentNode);

                    // If the neighbor exists, has no parent, and is not already a child of the current node:
                    // if (neighborTile.node.parent === null && !currentNode.children.includes(neighborTile.node)) {
                    //     neighbors.push(neighborTile.node);
                    //     neighborTile.node.addParent(currentNode);
                    // }
                }
            })

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

    // addChild(childNode) {
    //     childNode.addParent(this);
    // }

    // removeChild(childNode) {
    //     let index = this.children.indexOf(childNode);
    //     this.children.splice(index, 1);
    //     childNode.parent = null;
    // }

}