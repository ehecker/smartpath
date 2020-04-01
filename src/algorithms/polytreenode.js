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
    }

    flipTile() {
        this.grid[tilePos[0]][tilePos[1]].node.classList.add("visited");
    }

    animateBFS() {
        // debugger
        // const flipTile = tilePos => {
        //     this.grid[tilePos[0]][tilePos[1]].tile.classList.add("visited")
        // }

        // for (let i = 0; i < this.visitedTiles.length - 1; i++) {
        //     setTimeout(flipTile(this.visitedTiles[i]), 1000)
        // }

        this.visitedTiles.forEach(tile => {
            setTimeout(this.flipTile(tile), 1000)
        })

        // if (this.visitedTiles.length > 0) {
        //     let currentTile = this.visitedTiles.shift();

        //     setTimeout(currentTile.flipTile, 100);
            
        //     if (this.visitedTiles.length > 0) {
        //         this.animateBFS()
        //     }
        // }

    }

    // bfs(target) {
    //     let queue = [this];

    //     while (queue.length > 0) {

    //         let currentNode = queue.shift();

    //         if (currentNode.value !== "root" && currentNode.value !== "target") {
    //             this.visitedTiles.push(currentNode.position)
    //         }

    //         if (currentNode.value === target) {
    //             this.visitedTiles.push(currentNode.position)
    //             currentNode.tileObj.classList.add("target-found");
    //             console.log("BFS Completed")
    //             this.animateBFS();
    //             return currentNode;
    //         }
            
    //         queue.push(...currentNode.children);
    //     }
        
    // }

    bfs(target) {
        let queue = [this];

        while (queue.length > 0) {
            // debugger
            let currentNode = queue.shift();

            if (currentNode.value !== "root" && currentNode.value !== "target") {
                currentNode.tileObj.classList.add("visited");
            }

            if (currentNode.value === target) {
                // debugger
                currentNode.tileObj.classList.add("target-found");
                console.log(currentNode);
                return currentNode;
            }
            
            queue.push(...currentNode.children);
        }
        
        // Logic for handling unsolvable grid goes here
    }

    // bfs(target) {
    //     let queue = [this];

    //     while (queue.length > 0) {
    //         let startTime = Date.now();

    //         const wait = () => {
    //             debugger
    //             if (Date.now() > startTime + 100) {
    //                 let currentNode = queue.shift();

    //                 if (currentNode.value !== "root" && currentNode.value !== "target") {
    //                     currentNode.tileObj.classList.add("visited");
    //                 }
        
    //                 if (currentNode.value === target) {
    //                     currentNode.tileObj.classList.add("target-found");
    //                     console.log(currentNode);
    //                     return currentNode;
    //                 }
                    
    //                 queue.push(...currentNode.children);
    //             } else {
    //                 setTimeout(wait, 50)
    //             }
    //         }

    //         wait();    
    //     }
        
    // }

        

    // dfs(target) {

    //     if (this.value === target) {
    //         this.tileObj.classList.add("target-found");
    //         console.log(this);
    //         return this.value;
    //     }

    //     if (this.value !== "root" && this.value !== "target") {
    //         this.tileObj.classList.add("visited");
    //         // debugger
    //     }

    //     for (let i = 0; i < this.children.length; i++) {
    //         let childDfs = this.children[i].dfs(target)
    //         if (childDfs === target) {
    //             return childDfs;
    //         }
    //     }

    // }

    dfs(target) {
        let stack = [this];

        while (stack.length > 0) {
            for (let i = 0; i < stack.length; i++) {

                let currentNode = stack.shift();

                if (currentNode.value === target) {
                    currentNode.tileObj.classList.add("target-found");
                    console.log(currentNode);
                    return currentNode;
                } else if (currentNode.value !== "root") {
                    // debugger
                    currentNode.tileObj.classList.add("visited");
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

            // [0, 1]
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




// let cb = () => {console.log('yey!')};
// let cbArr = [cb, cb, cb, cb];

// const timedExecution = () => {
//   setTimeout(() => {
//     if (cbArr.length > 0) {
//       let func = cbArr.pop();
//       func();
//       timedExecution();
//     }
//   }, 1000)
// };







    